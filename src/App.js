import './App.css';

import Amplify, { Analytics, API, graphqlOperation,Storage } from 'aws-amplify';
import { S3Album,withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import React, {Component} from 'react';

import awsconfig from './aws-exports';
import logo from './logo.svg';

Amplify.configure(awsconfig);
Storage.configure({ level: 'private'  });

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

const addTodo = `mutation createTodo($name:String! $description: String!) {
  createTodo(input:{
    name:$name
    description:$description
  }){
    id
    name
    description
  }
}`;

class App extends Component {
    todoMutation = async () => {
        const todoDetails = {
            name: 'Party tonight!',
            description: 'Amplify CLI rocks!'
        };

        const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
        alert(JSON.stringify(newTodo));
    };

    listQuery = async () => {
        console.log('listing todos');
        const allTodos = await API.graphql(graphqlOperation(listTodos));
        alert(JSON.stringify(allTodos));
    };

    uploadFile = (evt) => {
        const file = evt.target.files[0];
        const name = file.name;

        Storage.put(name, file).then(() => {
            this.setState({ file: name  });
        })
    }

    componentDidMount() {
        Analytics.record('Amplify_CLI');
    }

    render() {
        return (
            <div className="App">
                <p> Pick a file! </p>
                <input type="file" onChange={this.uploadFile} />
                <button onClick={this.listQuery}>GraphQL Query</button>
                <button onClick={this.todoMutation}>GraphQL Mutation</button>t
                <S3Album level="private" path='' />
            </div>
        );
    }
}

export default withAuthenticator(App, true);
