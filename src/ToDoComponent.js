import React from "react";

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
		
			return(<div >
			
					<p style={ {textDecoration: this.state.checked ? 'line-through' : 'none'}}><input type="checkbox" checked={this.state.checked} onChange={this.handleChange} 	/>{this.props.description}</p>
					
				   </div>);
	}
	
	
}

export default ToDoComponent;
