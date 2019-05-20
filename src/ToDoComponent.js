import React from "react";
import todoData from "./ToDoData";

class ToDoComponent extends React.Component{
	
	constructor(props){
		super();
		this.state={
			checked:false,
			
		}
		this.handleChange=this.handleChange.bind(this);
	}
	
	handleChange(){
		console.log("handleChange called");
		this.setState(
		(prevState) => {
			return{
				checked: !(prevState.checked),
				
			}
		}
		
		)
	}
	
	componentDidMount(){
		this.setState(
		{
			checked:false,
		}
		)
	}
	
	render(){
		
			return(<li class="list-group-item"  >
			
					<p style={{textAlign:"center"}}><span style={ {textDecoration: this.state.checked ? 'line-through' : 'none'}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} 	/>{this.props.description}</span><span onClick={() => {this.props.remove(this.props.description)}} style={{color:"red", fontSize:"24px",cursor:"pointer"}}>&nbsp;&times;</span></p>
					
				   </li>);
	}
	
	
}

export default ToDoComponent;
