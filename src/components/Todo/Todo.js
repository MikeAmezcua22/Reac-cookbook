import React, { Component } from 'react';
import './Todo.css';
import List from './List'
import uuidv4 from 'uuid/v4';

class Todo extends Component {
    constructor(){
        super();

        //Initial state...
        this.state = {
            task: '',
            items: []
        };
    }
    componentWillMount(){
        //setting default tasks...
        this.setState({
            items: [
                {
                    id: uuidv4(),
                    task: 'Pay the rent',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Go to the gym',
                    completed: false
                },
                {
                    id: uuidv4(),
                    task: 'Do my homework',
                    completed: false
                }
            ]
        });
    }

    handleOnChange = e => {
        const { target: { value } } = e;
        //Updating our task state with the input value...
        this.setState({
            task:value
        });
    }

    handleOnSubmit = e => {
        //Prevent default to avoid the actual form submit...
        e.preventDefault();

        //Once submmited we reset the task value 
        //we push the new task to the items array.
        if (this.state.task.trim() !==''){
            this.setState({
                task:'',
                items: [
                    ...this.state.items,
                    {
                        id:uuidv4(),
                        task:this.state.task,
                        complete:false
                    }
                ]
            });
        }

    }

    markAsCompleted = id => {
        const [...items] = this.state.items
        const index = items.findIndex(task => task.id === id)
        const foundItem = items[index]
        items[index] = { ...foundItem, completed: !foundItem.completed }
        this.setState({items});
    }

    
    removeTask = id => {
        //Filtering the task by removing the especific task id ...
        const filteredTasks=this.state.items.filter(
            task => task.id !== id
        );

        //updating items state...
        this.setState({
            items: filteredTasks
        });
    }

    render(){
        return(
            <div className="Todo">
                <h1>New Task:</h1>

                <form onSubmit={this.handleOnSubmit}>
                    <input
                        value = {this.state.task}
                        onChange = {this.handleOnChange}
                    />
                </form>
                <List
                    items= {this.state.items}
                    markAsCompleted={this.markAsCompleted}
                    removeTask={this.removeTask}
                />
            </div>
        );
    }
}

export default Todo;

