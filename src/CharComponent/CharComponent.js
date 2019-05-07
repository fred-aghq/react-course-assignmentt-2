import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return (
        <div className="charComponent" onClick={!props.click ? null : props.click}>
            <p>{props.letter}</p>
        </div>
    );
};

export default charComponent;