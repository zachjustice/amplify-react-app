/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const commentsForTodo = `query CommentsForTodo($todoId: ID!, $limit: Int, $nextToken: String) {
  commentsForTodo(todoId: $todoId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      todo {
        id
        name
        description
      }
    }
    nextToken
  }
}
`;
export const getTodo = `query GetTodo($id: ID!) {
  getTodo(id: $id) {
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
export const listTodos = `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      comments {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
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
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      todo {
        id
        name
        description
      }
    }
    nextToken
  }
}
`;
