import React, { useState } from 'react';

import {Todos} from './api/todos';
import EditModal from './components/edit-modal';


function App() {

  const [todos, setTodos] = useState(Todos);
  const [editTodo, setEditTodo] = useState({id: 1, name: null}); 
  // const [person, setPerson] = React.useState(
  //   {name: 'peter', age: 24, message: 'random message'});

  const delTodo = (id) => {
    setTodos((oldTodo) => {
      const newTodo = oldTodo.filter(t => t.id !== id);
      return newTodo;
    })
  }

  const getTodoData = (id) => {
    const todo = todos.find(each => each.id === id);
    console.log(todo)
    setEditTodo(todo);
  }

  const updateTodo = (id, name) => {
    todos.map((each) => {
      if(each.id == id) {
        each = {...each, name: name}
      }
    });
    return todos;
  }

  return (
    <div className="container">

      <EditModal editTodo={editTodo} />

      <div className="row">
        <div className="col-10 mx-auto">
          <div className="card shadow-sm">
            <table className="table table-sriped table-white">
              
              <thead>
                <tr>
                  <th>ID</th>
                  <th>text</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {todos.map(each => {
                  return (
                    <tr key={each.id}>
                      <td>{each.id}</td>
                      <td>{each.name}</td>
                      <td>
                        <button 
                          className="btn btn-sm btn-info" 
                          data-toggle="modal" 
                          data-target="#editModal"
                          onClick={() => getTodoData(each.id)}
                        >edit</button>
                          
                        <button className="btn btn-sm btn-danger" onClick={() => delTodo(each.id)}>delete</button>
                      </td>
                    </tr>
                  )
                })}
                <tr>

                </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  ) 

  
}

export default App;
