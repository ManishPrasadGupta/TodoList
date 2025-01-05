import React, { useState } from 'react'

function InputTodo() {

  const [description, setDescription] = useState('');

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      console.log(response);  //This will refresh the page.

      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    < >
      <h1 className='text-center mt-5 text-4xl my-8 '>Pern Todo List</h1>
      <form onSubmit={onSubmitForm} className='flex justify-center'>
        <input 
        type="text" 
        className='w-full h-auto border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ' 
        value={description}
        onChange={e => setDescription(e.target.value)}      
        />
        <button className='bg-green-600 rounded p-3 m-3'>ADD</button>
      </form>
    </>
  )
}

export default InputTodo;
