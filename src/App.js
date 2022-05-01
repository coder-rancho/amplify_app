import { API } from 'aws-amplify';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations'

function App() {

  async function fetchTodos() {

    const apiData = await API.graphql({
        query: queries.listTodos
    });

    console.log(apiData);
  }

  async function createTodo() {
    const newTodo = {
      name: "Todo3",
      description: "description of todo3"
    }

    const apiData = await API.graphql({
      query: mutations.createTodo,
      variables: {
        input: newTodo
      }
    })

    console.log(apiData)
  }

  return (
    <div className="App">
      <h1>Hello World !!</h1>
      <p>Version 2</p>
      <button onClick={fetchTodos}>fetch data</button>
      <button onClick={createTodo}>Create todo</button>
    </div>
  );
}

export default App;