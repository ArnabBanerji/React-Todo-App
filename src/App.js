import React from 'react';
import logo from './logo.svg';
import ToDoComponent from "./ToDoComponent";
import './App.css';
import todoData from "./ToDoData";


function App() {
	var todoList = todoData.map((todoItem) => <ToDoComponent description={todoItem.description}/>);
	console.log(todoList);
  return (
  todoList
  );
}

export default App;
