import React, {Component} from 'react'

class Input extends Component {
    getCreateDate=()=>{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        return date.toString();
    }

    state={
        task:"",
        deadline:"",
        isCompleted: false,
        createdDate: this.getCreateDate()
    }

    handleTaskChange=(event)=>{
        this.setState({
            task: event.target.value.toUpperCase()
        })
    }

    handleDateChange=(event)=>{
        this.setState({
            deadline: event.target.value
        })
    }

    componentDidUpdate=(prevProps)=>{
        if(prevProps.editTodo !== this.props.editTodo){
            this.setState({
                task: this.props.editTodo.task,
                deadline: this.props.editTodo.deadline
            })
        }
    }

    render(){
        return(
            <div className="input-box input-group text-center">
                <input className="input-group-text" onChange={(event)=>{this.handleTaskChange(event)}} type="text" value={this.state.task} placeholder="Enter Task"/>
                <input className="input-group-text mr-3" onChange={(event)=>{this.handleDateChange(event)}} type="date" value={this.state.deadline} placeholder="Add Todo"/>
                {!this.props.isEdit && <button className="btn btn-outline-secondary" type="submit" onClick={()=>{this.props.addTask(this.state); this.setState({task:"", deadline:""})}} >Add Todo</button>}
                {this.props.isEdit && <button className="btn btn-info" type="submit" onClick={()=>{this.props.addTask(this.state); this.setState({task:"", deadline:""})}} >Update</button>}
            </div>
        )
    }
}

export default Input