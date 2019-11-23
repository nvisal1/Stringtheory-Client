import React, { Component } from 'react';
import './exercise.css';
import Player from './components/player/player';
import { connect } from 'react-redux';
import { Exercise as IExercise } from '../../shared/interfaces';
import posed from 'react-pose';

interface ExerciseState {
    exercise: IExercise;
    playedNote: string;
    playedNotesList: string[];
    moveWave: boolean;
    waveIsVisible: boolean;
}

const WaveAnimation = posed.div({
    enter: {
        scale: 50,
        transition: {
            ease: 'linear',
            duration: 1000,
        },
    },
    exit: {
        scale: 1,
    }
});

const socket = new WebSocket('ws://footnotewebsocketapi-env.gka3idb9wm.us-east-1.elasticbeanstalk.com/play');

class Exercise extends Component<any, ExerciseState> {

    constructor(props: any) {
        super(props);
        this.state = {
            exercise: {} as IExercise,
            playedNote: '',
            playedNotesList: [],
            moveWave: false,
            waveIsVisible: false,
        };
        this.handleSocket();
    }

    handleSocket() {
        socket.onmessage = (event: any) => {
            this.setState({
                ...this.state,
                playedNote: event.data,
                moveWave: true,

            });
            setTimeout(() => {
                this.setState({ moveWave: false });
            }, 2000);
        }
    }

    render() {
        this.incrementNotePosition();
        return (
            <div className='exercise'>
                <div className='exercise__wave-container'>
                    <WaveAnimation pose={ this.state.moveWave ? 'enter' : 'exit' }>
                        <div className={ this.state.moveWave ? 'wave-container__wave' : undefined }></div>
                    </WaveAnimation> : <span></span>
                </div>
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