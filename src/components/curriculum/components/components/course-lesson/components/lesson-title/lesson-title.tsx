import React from 'react';
import './lesson-title.css'

interface LessonTitleProps {
    title: string;
}

const LessonTitle: React.FC<LessonTitleProps> = props => {
    return (
        <div className='lesson-title'>
            { props.title }
        </div>
    );
}

export default LessonTitle;