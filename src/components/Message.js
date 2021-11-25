import React from 'react';

const Message = (props) => {

    const handleGoToFinderChange = (event) => {
        props.setIsSuccess(false);
        props.setFormToggle(false) 
    }

    const handleStayInFormChange = (event) => {
        props.setIsSuccess(false);
        props.handleClearForm();
    }


    return (
        <div className="message">
            <p>New Cafe has been successfully added!</p>
            <button onClick={event => handleGoToFinderChange(event)}>Go to Finder</button>
            <button onClick={event => handleStayInFormChange(event)}>Add another Cafe</button>
        </div>
    )
}

export default Message;