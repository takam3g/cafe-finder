import React from 'react';


const Header = (props) => {

    return (
        <header>
            <h1>Cafe Finder 
                {props.formToggle ? 
                <span> - Add New Cafe - </span> 
                : null } 
            </h1>
            {!props.formToggle ? <button onClick={event => props.handleFromToggleButton(event)}>Input New Cafe</button> : <button onClick={event => props.handleFromToggleButton(event)}>Go Back to Finder</button>}
        </header>
    )
}

export default Header;