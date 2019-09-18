import React from 'react';
import './statbox.css';
import { render } from 'react-dom';

interface StatBoxProps {
    notes: string[];
    playedNote: string;
    playedNotesList: string[];
}

const renderExpectedNotesList = (notes: string[]) => {
    const spacedNotes = notes.map(note => {
        return (
            <div className='stat-box__expected-notes__note'>
                { note }
            </div>
        );
    });
    return (
        <div className='stat-box__expected-notes'>
            { spacedNotes }
        </div>
    )
}

const renderPlayedNotesList = (playedNote: string, playedNotesList: string[]) => {
    const spacedNotes = playedNotesList.map(note => {
        return (
            <div className='stat-box__played-notes__note'>
                { note }
            </div>
        );
    });
    spacedNotes.push(
        <div className='stat-box__played-notes__note'>
            { playedNote}
        </div>
    );
    return (
        <div className='stat-box__played-notes'>
            { spacedNotes }
        </div>
    );
}

const StatBox: React.FC<StatBoxProps> = props => {
    return (
        <div className='stat-box'>
            <div>
                { renderExpectedNotesList(props.notes) }
            </div>
            <div>
                { renderPlayedNotesList(props.playedNote, props.playedNotesList) }
            </div>
        </div>
    );
}

export default StatBox;