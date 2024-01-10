import React from 'react';
import classes from './NoteCard.module.css';

const NoteCard = (props) => {
    return (
        <div className={`${classes.noteCard} ${props.className}`}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
}

export default NoteCard;
