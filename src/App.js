import React from 'react';
import logo from './logo.svg';
import ToDoComponent from "./ToDoComponent";
import './App.css';
import todoData from "./ToDoData";
import AddComponent from "./AddComponent";



class App extends React.Component {
	constructor(){
		super();
		this.state={
			todoList : []
		}
		this.remove=this.remove.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	componentDidMount(){
		this.setState(
		{
			todoList:todoData.map((todoItem) => <ToDoComponent remove={this.remove}  key={todoItem.description} description={todoItem.description}/>)
		}
		)
	}
	
	handleClick(param){
		var temp={description:param};
		if(todoData.findIndex(obj => obj.description==temp.description)!=-1)
		{
			window.alert("Item already exists!");
		}
		else{
			todoData.push(temp);
		}
		this.setState({
			todoList:todoData.map((todoItem) => <ToDoComponent remove={this.remove}  key={todoItem.description} description={todoItem.description}/>)
		
		});
		console.log(todoData);
		document.getElementById("descTxt").value="";
		
	}
		
	remove(param){
		console.log(todoData);
		todoData.splice(todoData.findIndex( obj => obj.description==param	),1);
		
		this.setState({
				todoList:todoData.map((todoItem) => <ToDoComponent remove={this.remove}  key={todoItem.id} description={todoItem.description}/>)
		});
		console.log(todoData);
	}
  render() {
	 
		
		
	  return(<div >
	  <ul className="list-group">
	  {this.state.todoList}
	   </ul>
	  <AddComponent handleClick={this.handleClick}/>
	 
	  </div>);
  }
}

export default App;
