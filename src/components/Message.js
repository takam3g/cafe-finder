import React from 'react';

const Message = (props) => {

    //Go to Finder
    //Close Message, Switch to Finder
    const handleGoToFinderChange = (event) => {
        props.setIsSuccess(false);
        props.setFormToggle(false) 
    }

    //Add another Cafe
    //Close Message, Clear states of each field,  clear error
    const handleStayInFormChange = (event) => {
        props.setIsSuccess(false);
        props.handleClearForm();
        props.setError(null)
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