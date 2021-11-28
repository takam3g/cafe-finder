import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Message from './Message';

const Form = (props) => {

    //States
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [city, setCity] = useState()
    const [province, setProvince] = useState()
    const [postalCode, setPostalCode] = useState()
    const [nomadFriendly, setNomadFriendly] = useState()
    const [outlet, setOutlet] = useState()
    const [wifi, setWifi] = useState()
    const [noise, setNoise] = useState()
    const [price, setPrice] = useState()
    const [is24hs, setIs24hs] = useState(false)
    const [open, setOpen] = useState()
    const [close, setClose] = useState()
    const [holiday, setHoliday] = useState([
        {day:'Mon', status:false}, {day:'Tue', status:false}, {day:'Wed', status:false},{day:'Thu', status:false}, {day:'Fri', status:false}, {day:'Sat', status:false}, {day:'Sun', status:false}
        ])  //true = holiday(closed)
    const [openHoursShow, setOpenHoursShow] = useState()


    //for error message
    const [error, setError] = useState(null);

    //for success Message
    const [isSuccess, setIsSuccess] = useState(false);


    //onSubmit
    const handleAddToCafeList = (event) => {
        event.preventDefault();

        const formToSubmit = {
            name: name.trim(),
            address: address.trim(),
            city: city.trim(),
            province: province.trim(),
            postalCode: postalCode.replace(' ', ''),
            nomadFriendly: nomadFriendly,
            outlet: outlet,
            wifi: wifi,
            noise: noise,
            price: price,
            is24hs: is24hs,
            open: open,
            close: close,
            holiday: holiday
        }

        axios.post(`/api/v1/cafes`, formToSubmit)
        .then(result => {
            setIsSuccess(true);
        })
        .catch(error => {
            setError(error.response.data)
        });
    }

    const handleClearForm = (event) => { 
        //clear states
        setName('')
        setAddress('')
        setCity('')
        setProvince('')
        setPostalCode('')
        setPostalCode('')
        setNomadFriendly('')
        setOutlet('')
        setWifi('')
        setNoise('')
        setPrice('')
        setIs24hs(false)
        setOpen('')
        setClose('')
        setHoliday([
            {day:'Mon', status:false}, {day:'Tue', status:false}, {day:'Wed', status:false},{day:'Thu', status:false}, {day:'Fri', status:false}, {day:'Sat', status:false}, {day:'Sun', status:false}
            ])
        setOpenHoursShow('')
    }



    //onChanges
    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value)
    }

    const handleCityChange = (event) => {
        setCity(event.target.value)
    }

    const handleProvinceChange = (event) => {
        setProvince(event.target.value)
    }

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value)
    }

    const handleFriendlyChange = (event) => {
        setNomadFriendly(event.target.value)
    }

    const handleOutletChange = (event) => {
        setOutlet(event.target.value)
    }

    const handleWifiChange = (event) => {
        setWifi(event.target.value)
    }

    const handleNoiseChange = (event) => {
        setNoise(event.target.value)
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }

    const handle24hsChange = (event) => {
        if(is24hs){
            setIs24hs(false)
        } else {
            setIs24hs(true)
            setOpen()
            setClose()
        }
    }

    const handleOpenChange = (event) => {
        setOpen(event.target.value)
    }

    const handleCloseChange = (event) => {
        setClose(event.target.value)
    }

    const handleHolidayChange = (event) => {
        const copyHoliday = holiday.slice()
        let i = event.target.id

        if(copyHoliday[i].status === true){
            copyHoliday[i].status = false
        } else {
            copyHoliday[i].status = true
        }
        
        setHoliday(copyHoliday)
    }

    useEffect(function toggleOpenHours() {

        if(is24hs){
            setOpenHoursShow(false)
        } else {
            setOpenHoursShow(true)
        }

    }, [is24hs]);



    
    //return
    return (
        <div className="form">
            <form onSubmit={event=> handleAddToCafeList(event)}>
                <label>
                    Name<span>*</span>:
                    <input type="text" required value={name} onChange={event => handleNameChange(event)}/>
                </label>

                <label>
                    Address<span>*</span>:
                    <input type="text" required value={address} onChange={event => handleAddressChange(event)}/>
                </label>

                <label>
                    City<span>*</span>:
                    <input type="text" required value={city} onChange={event => handleCityChange(event)}/>
                </label>

                <label>
                    Province<span>*</span>:
                    <select defaultValue='' required value={province} onChange={event => handleProvinceChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='AB'> AB </option>
                        <option value='BC'> BC </option>
                        <option value='MB'> MB </option>
                        <option value='NB'> NB </option>
                        <option value='NF'> NF </option>
                        <option value='NT'> NS </option>
                        <option value='NU'> NU </option>
                        <option value='ON'> ON </option>
                        <option value='PE'> PE </option>
                        <option value='PQ'> PQ </option>
                        <option value='SK'> SK </option>
                        <option value='YT'> YT </option>
                    </select>
                </label>

                <label>
                    Postal Code<span>*</span>:  <span className="eg"> &#10088;e.g. V5Y2Z6&#10089;</span>
                    <input type="text" required value={postalCode} onChange={event => handlePostalCodeChange(event)}/>
                </label>

                <label>
                    Nomad Friendly<span>*</span>:
                    <select defaultValue='' required value={nomadFriendly} onChange={event => handleFriendlyChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Not for Nomad </option>
                        <option value='1'> Neutral </option>
                        <option value='2'> Nomad Friendly </option>
                    </select>
                </label>

                <label>
                    Outlet<span>*</span>:
                    <select defaultValue='' required value={outlet} onChange={event => handleOutletChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Not Available </option>
                        <option value='1'> Available </option>
                        <option value='2'> Many </option>
                    </select>
                </label>

                <label>
                    Free wifi<span>*</span>:
                    <select defaultValue='' required value={wifi} onChange={event => handleWifiChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Not Available </option>
                        <option value='1'> Available </option>
                        <option value='2'> Stable </option>
                    </select>
                </label>

                <label>
                    Noise<span>*</span>:
                    <select defaultValue='' required value={noise} onChange={event => handleNoiseChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Noisy </option>
                        <option value='1'> Moderate </option>
                        <option value='2'> Quiet </option>
                    </select>
                </label>

                <label>
                    Regular Coffee Price<span>*</span>:
                    <select defaultValue='' required value={price} onChange={event => handlePriceChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='1'> - $1.99 </option>
                        <option value='2'> $2.00 - $2.99 </option>
                        <option value='3'> $3.00 - $3.99 </option>
                        <option value='4'> $4.00 - $4.99 </option>
                        <option value='5'> $5.00 - </option>
                    </select>
                </label>

                <label className="twentyFourHours">
                    24hours:
                    <input type="checkbox" name="twentyFourHours" value={is24hs} checked={is24hs? true : false} onChange={event => handle24hsChange(event)}/>
                </label>

                {openHoursShow ? 
                    <div className="openHours">
                        <label>
                            Open<span>*</span>:
                            <input type="time" required value={open} onChange={event => handleOpenChange(event)}/>
                        </label>

                        <label>
                            Close<span>*</span>:
                            <input type="time" required value={close} onChange={event => handleCloseChange(event)}/>
                        </label>
                    </div>
                    : null
                }
                <div className="holiday">
                    <p>Holiday:</p>
                    <label>
                        Mon
                        <input type="checkbox" id="0" name="holiday" checked={holiday[0].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Tue
                        <input type="checkbox" id="1" name="holiday" checked={holiday[1].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Wed
                        <input type="checkbox" id="2" name="holiday" checked={holiday[2].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Thu
                        <input type="checkbox" id="3" name="holiday" checked={holiday[3].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Fri
                        <input type="checkbox" id="4" name="holiday" checked={holiday[4].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Sat
                        <input type="checkbox" id="5" name="holiday" checked={holiday[5].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Sun
                        <input type="checkbox" id="6" name="holiday" checked={holiday[6].status ? true : false}
                        onChange={event => handleHolidayChange(event)}/>
                    </label>
                </div>

                <button>Submit</button>
            </form>

            {/* Error message under submit button */}
            <div className="error">
                {error ? <p>{error.error}</p> : null}
            </div>

            {/* Success message in popup card with option of going back to finder or adding another cafe */}
            {isSuccess ? <Message setFormToggle={props.setFormToggle} setIsSuccess={setIsSuccess} setError={setError} handleClearForm={handleClearForm} message="New Cafe has been successfully added!"/> : null}

        </div>
    )
}

export default Form;