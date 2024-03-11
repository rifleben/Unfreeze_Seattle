import React from 'react';
import classes from './NoteCard.module.css';

const NoteCard = (props) => {
    // Notecard takes in props
    // props.children is the content of the notecard
    return (
        <div className={classes.noteCard}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

export default NoteCard;
