import React, { Component } from 'react';
import moment from 'moment';
import data from './Notes.css';

const formatTime = 'YYYY-MM-DD HH:mm:ss';

class Notes extends Component{
    constructor(){
        super();

        //we save the fisrt date when data is 
        //render at the beginning 
        this.state = {
            lastupdate: moment().format(formatTime).toString()
        }
    }

    componentWillReceiveProps(nextProps) {
        //If the prop notes has changed ...
        if (nextProps.notes !== this.props.notes) {
            this.setState({
                lastupdate: moment().format(formatTime).toString()
            });      
        }
    }
    componentWillUnmount(){
        console.log('Hasta la vista baby!');
        document.body.style = 'background: black;';
        document.getElementById('unmountMessage').style.color = 'white';
    }
    render(){
        const { notes } = this.props;

        return (
            <div className="Notes">
                <h1>Notes:</h1>

                <ul>
                    {notes.map((note, key) => (
                    <li key={key}> {note.title} - {note.content}</li>
                    ))}
                </ul>
                <p>
                    Last update: <strong>{this.state.lastupdate}</strong>
                </p>
            </div>
        );
    }
}

export default Notes;