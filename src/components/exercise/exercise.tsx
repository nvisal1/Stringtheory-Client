import React, { Component } from 'react';
import './exercise.css';
import Player from './components/player/player';
import { connect } from 'react-redux';
import { Exercise as IExercise } from '../../shared/interfaces';

interface ExerciseState {
    exercise: IExercise;
    playedNote: string;
    playedNotesList: string[];
}

const socket = new WebSocket('ws://localhost:5000/play');

class Exercise extends Component<any, ExerciseState> {

    constructor(props: any) {
        super(props);
        this.state = {
            exercise: {} as IExercise,
            playedNote: '',
            playedNotesList: [],
        };
        this.handleSocket();
    }

    handleSocket() {
        socket.onmessage = (event: any) => {
            this.setState({
                ...this.state,
                playedNote: JSON.parse(event.data).Note,
            });
        }
    }

    render() {
        this.incrementNotePosition();
        return (
            <div className='exercise'>
                <div className='exercise__player-container'>
                    <Player
                        exercise={ this.props.exercise }
                        playedNote={ this.state.playedNote }
                        playedNotesList={ this.state.playedNotesList }
                    />
                </div>
            </div>
        )
    }
    
    incrementNotePosition() {
        if (this.props.exercise.Notes[this.state.playedNotesList.length] === this.state.playedNote) {
            this.state.playedNotesList.push(this.state.playedNote);
        }
    }
}

const mapStateToProps = (state: any) => {
    if (!state.courses.length) {
        const exercise = localStorage.getItem('SelectedExercise');
        if (exercise) {
            return {
                exercise: JSON.parse(exercise),
            };
        }
    }
    return {
        exercise: state.courses.selectedExercise as IExercise,
    };
}

export default connect(mapStateToProps, null)(Exercise);