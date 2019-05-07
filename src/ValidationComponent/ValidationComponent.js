import React from 'react';

const validationComponent = (props) => {
    let validationString = props.input.length >= 5
        ? "Text long enough"
        : "Text too short";

    return (
        <div className="validationComponent">
            <p>{validationString}</p>
        </div>
    );
};

export default validationComponent;