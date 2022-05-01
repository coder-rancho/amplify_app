import { API } from 'aws-amplify';

const listTodoQuery = `
query MyQuery {
  listTodos {
    items {
      id
      name
      description
    }
  }
}
`;

function App() {

  async function fetchTodos() {

    const apiData = await API.graphql({
      query: listTodoQuery
    })

    console.log(apiData);
  }

  return (
    <div className="App">
      <h1>Hello World !!</h1>
      <p>Version 2</p>
      <button onClick={fetchTodos}>fetch data</button>
    </div>
  );
}

export default App;