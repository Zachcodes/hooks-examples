import React, { useState, useEffect } from 'react';
import useAxios from './useAxios';

const TodoContainer = () => {
  //   const [todos, setTodos] = useState([]);
  const data = useAxios('https://jsonplaceholder.typicode.com/todos');
  //   useEffect(() => {
  //     axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
  //       console.log('response ', response);
  //       setTodos(response.data);
  //     });
  //   }, []);

  return (
    <div>
      {data.map(val => {
        return <h1>{val.title}</h1>;
      })}
    </div>
  );
};

export default TodoContainer;
