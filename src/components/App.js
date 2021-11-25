import React from 'react';
import Header from './header';
import Form from './form';
import Finder from './finder';
import Footer from './footer';
import { useState } from 'react';

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