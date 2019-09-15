import React, { Component } from 'react';
import './exercise.css';
import Player from './components/player/player';
import { connect } from 'react-redux';

class Exercise extends Component<any, any> {

    render() {
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