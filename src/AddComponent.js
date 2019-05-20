import React from "react";
import todoData from "./ToDoData"
class AddComponent extends React.Component{
	constructor(){
		super();
		
		
	}
	
	render(){
		return(<div style={{textAlign:"center"}}><input type="text" style={{cursor:"text"}}id="descTxt"/><input type="button" value="Add item" style={{cursor:"pointer"}}onClick={() => {this.props.handleClick(document.getElementById("descTxt").value)}} /></div>)
	}
}
export default AddComponent;