import React, { Component } from 'react';
import './exercise.css';
import Player from './components/player/player';
import { connect } from 'react-redux';

const socket = new WebSocket('ws://localhost:5000/play');

class Exercise extends Component<any, any> {

    constructor(props: any) {
        super(props);
    
        this.handleSocket();
      }

    handleSocket() {
        socket.onmessage = (event: any) => {
            this.setState({
                playedNote: JSON.parse(event.data).Note,
            });
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className='exercise'>
                <div className='exercise__player-container'>
                    <Player 
                        exercise={ this.props.exercise }
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        exercise: state.courses.selectedExercise,
    };
}

export default connect(mapStateToProps, null)(Exercise);