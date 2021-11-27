import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Form from './Form';
import Finder from './Finder';
import Footer from './Footer';

const App = () => {

    //false: display finder, true: display form 
    const [formToggle, setFormToggle] = useState(false)

    const handleFromToggleButton = (event) => {
        if(formToggle){
            setFormToggle(false)
        } else {
            setFormToggle(true)
        }
    }


    return (
        <>
            <Header 
                formToggle={formToggle}
                handleFromToggleButton={handleFromToggleButton}
            />
            <main>
                {!formToggle ?  <Finder /> : <Form setFormToggle={setFormToggle}/>}
            </main>
            <Footer />
        </>
    )
}

export default App;