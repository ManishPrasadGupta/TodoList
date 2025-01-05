import React, { useEffect, useState } from 'react'
import EditTodo from './editTodo'

function ListTodo() {
    
    const [todos, setTodos] = useState([]);

// delete todo function
    const deleteTodo = async (id) => {
        try {
         await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE'
          });
          setTodos(todos.filter(todo => todo.todo_id !== id));

        } catch (err) {
          console.error(err.message);
        }
    }
    const getTodos = async () => {
        try {
          const response = await fetch('http://localhost:3000/todos');
          const jsonData = await response.json();
          setTodos(jsonData);
        } catch (err) {
          console.error(err.message);
    }
    }

      useEffect(() => {
        getTodos();
      }, []);


  return (
    <>
        <table className='table-auto w-full my-8'>

            <thead>
                <tr>
                    <th className='border border-gray-400 px-4 py-2'>Description</th>
                    <th className='border border-gray-400 px-4 py-2'>Edit</th>
                    <th className='border border-gray-400 px-4 py-2'>Delete</th>
                </tr>
            </thead>
     
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td className='border border-gray-400 px-4 py-2'>{todo.description}</td>
                        <td className='border border-gray-400 px-4 py-2'>
                            <EditTodo todo={todo} />
                        </td>
                        <td className='border border-gray-400 px-4 py-2'>
                            <button 
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                            onClick={() => deleteTodo(todo.todo_id)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            
            </tbody>

        </table>
    </>
  )
}

export default ListTodo;
