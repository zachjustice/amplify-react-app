/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = `subscription OnCreateTodo($owner: String!) {
  onCreateTodo(owner: $owner) {
    id
    name
    description
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onUpdateTodo = `subscription OnUpdateTodo($owner: String!) {
  onUpdateTodo(owner: $owner) {
    id
    name
    description
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onDeleteTodo = `subscription OnDeleteTodo($owner: String!) {
  onDeleteTodo(owner: $owner) {
    id
    name
    description
    comments {
      items {
        id
        content
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
    id
    content
    todo {
      id
      name
      description
      comments {
        nextToken
      }
    }
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
    id
    content
    todo {
      id
      name
      description
      comments {
        nextToken
      }
    }
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
    id
    content
    todo {
      id
      name
      description
      comments {
        nextToken
      }
    }
  }
}
`;
