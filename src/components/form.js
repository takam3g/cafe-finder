import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

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
        {day:'M', status:false}, {day:'T', status:false}, {day:'W', status:false},{day:'T', status:false}, {day:'F', status:false}, {day:'S', status:false}, {day:'S', status:false}
        ])  //true = holiday(closed)
    const [openHoursShow, setOpenHoursShow] = useState()


    //for error
    const [error, setError] = useState(null);
    console.log(error)

    //onSubmit
    const handleAddToCafeList = (event) => {
        event.preventDefault();

        const formToSubmit = {
            name: name,
            address: address,
            city: city,
            province: province,
            postalCode: postalCode,
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
            console.log(result.data)
            props.setFormToggle(false)
            
            //clear states
            // setName('')
            // setAddress('')
            // setCity('')
            // setProvince('BC')
            // setPostalCode('')
            // setPostalCode('')
            // setNomadFriendly('')
            // setOutlet('')
            // setWifi('')
            // setNoise('')
            // setPrice('')
            // setIs24hs(false)
            // setOpen('')
            // setClose('')
            // setHoliday([
            //     {day:'M', status:false}, {day:'T', status:false}, {day:'W', status:false},{day:'T', status:false}, {day:'F', status:false}, {day:'S', status:false}, {day:'S', status:false}
            //     ])
            // setOpenHoursShow('')
        })
        .catch(error => {
            setError(error.response.data)
        });
    }



    //onChanges
    const handleNameChange = (event) => {
        setName(event.target.value.trim())
    }

    const handleAddressChange = (event) => {
        setAddress(event.target.value.trim())
    }

    const handleCityChange = (event) => {
        setCity(event.target.value.trim())
    }

    const handleProvinceChange = (event) => {
        setProvince(event.target.value)
    }

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value.replace(' ', ''))
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
                    Name:
                    <input type="text" required onChange={event => handleNameChange(event)}/>
                </label>

                <label>
                    Address:
                    <input type="text" required onChange={event => handleAddressChange(event)}/>
                </label>

                <label>
                    City:
                    <input type="text" required onChange={event => handleCityChange(event)}/>
                </label>

                <label>
                    Province:
                    <select defaultValue='' required onChange={event => handleProvinceChange(event)} >
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
                    Postal Code:  <span> &#10088;e.g. V5Y2Z6&#10089;</span>
                    <input type="text" required onChange={event => handlePostalCodeChange(event)}/>
                </label>

                <label>
                    Nomad Friendly:
                    <select defaultValue='' required onChange={event => handleFriendlyChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Not for Nomad </option>
                        <option value='1'> Neutral </option>
                        <option value='2'> Nomad Friendly </option>
                    </select>
                </label>

                <label>
                    Outlet:
                    <select defaultValue='' required onChange={event => handleOutletChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Not Available </option>
                        <option value='1'> Available </option>
                        <option value='2'> Many </option>
                    </select>
                </label>

                <label>
                    Free wifi:
                    <select defaultValue='' required onChange={event => handleWifiChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Not Available </option>
                        <option value='1'> Available </option>
                        <option value='2'> Stable </option>
                    </select>
                </label>

                <label>
                    Noise:
                    <select defaultValue='' required onChange={event => handleNoiseChange(event)} >
                        <option disabled value=''> -- Please select -- </option>
                        <option value='0'> Noisy </option>
                        <option value='1'> Moderate </option>
                        <option value='2'> Quiet </option>
                    </select>
                </label>

                <label>
                    Regular Coffee Price:
                    <select defaultValue='' required onChange={event => handlePriceChange(event)} >
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
                    <input type="checkbox" name="twentyFourHours" value={is24hs} onChange={event => handle24hsChange(event)}/>
                </label>

                {openHoursShow ? 
                    <div className="openHours">
                        <label>
                            Open:
                            <input type="time" required onChange={event => handleOpenChange(event)}/>
                        </label>

                        <label>
                            Close:
                            <input type="time" required onChange={event => handleCloseChange(event)}/>
                        </label>
                    </div>
                    : null
                }
                <div className="holiday">
                    <p>Holiday:</p>
                    <label>
                        Mon
                        <input type="checkbox" id="0" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Tue
                        <input type="checkbox" id="1" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Wed
                        <input type="checkbox" id="2" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Thu
                        <input type="checkbox" id="3" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Fri
                        <input type="checkbox" id="4" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Sat
                        <input type="checkbox" id="5" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                    <label>
                        Sun
                        <input type="checkbox" id="6" name="holiday" onChange={event => handleHolidayChange(event)}/>
                    </label>
                </div>

                <button>Submit</button>
            </form>

            <div className="error">
                {error ? <p>{error.error}</p> : null}
            </div>
        </div>
    )
}

export default Form;