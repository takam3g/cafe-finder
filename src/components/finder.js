import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import defaultPicture from '../assets/default-coffee.png'

const Finder = () => {

    const [cafeList, setCafeList] = useState()

    const [friendlyFilter, setFriendlyFilter] = useState('')
    const [outletFilter, setOutletFilter] = useState('')
    const [wifiFilter, setWifiFilter] = useState('')
    const [noiseFilter, setNoiseFilter] = useState('')

    const [filter, setFilter] = useState('')

    const handleFriendlyChange = (event) => {
        event.preventDefault();
        setFriendlyFilter(event.target.value)
    }

    const handleOutletChange = (event) => {
        event.preventDefault();
        setOutletFilter(event.target.value)
    }

    const handleWifiChange = (event) => {
        event.preventDefault();
        setWifiFilter(event.target.value)
    }

    const handleNoiseChange = (event) => {
        event.preventDefault();
        setNoiseFilter(event.target.value)
    }

    useEffect(() => {

        let temp = '';

        if(friendlyFilter != ''){
            temp = temp + `nomadFriendly=${friendlyFilter}&`
        }

        if(outletFilter != ''){
            temp = temp + `outlet=${outletFilter}&`
        }

        if(wifiFilter != ''){
            temp = temp + `wifi=${wifiFilter}&`
        }

        if(noiseFilter != ''){
            temp = temp + `noise=${noiseFilter}&`
        }
        

        if(friendlyFilter == '' && outletFilter == '' && wifiFilter == '' && noiseFilter == ''){
            setFilter('');
        } else {
            setFilter(`?${temp}`);
        }

    },[friendlyFilter, outletFilter, wifiFilter, noiseFilter])



    useEffect(() => {
        
        axios.get(`/api/v1/cafes${filter}`)
        .then(result => {
            console.log(result.data)
            setCafeList(result.data)
        })
        .catch(error => console.log(error))

    },[filter])




    //nomadFriendly display convert 
    const friendlyConvert = (friendlyCode) => {
        if(friendlyCode===0){
            return 'Not for Nomad'
        } else if (friendlyCode===1){
            return 'Neutral'
        } else if (friendlyCode===2){
            return 'Nomad Friendly'
        }
    }


    //outlet display convert 
    const outletConvert = (outletCode) => {
        if(outletCode===0){
            return 'Not Available'
        } else if (outletCode===1){
            return 'Available'
        } else if (outletCode===2){
            return 'Many'
        }
    }

    //wifi display convert 
    const wifiConvert = (wifiCode) => {
        if(wifiCode===0){
            return 'Not Available'
        } else if (wifiCode===1){
            return 'Available'
        } else if (wifiCode===2){
            return 'Stable'
        }
    }

    //noise display convert 
    const noiseConvert = (noiseCode) => {
        if(noiseCode===0){
            return 'Noisy'
        } else if (noiseCode===1){
            return 'Moderate'
        } else if (noiseCode===2){
            return 'Quiet'
        }
    }


    //price display convert 
    const priceConvert = (priceCode) => {
        if(priceCode===1){
            return '- $1.99'
        } else if (priceCode===2){
            return '$2.00 - $2.99'
        } else if (priceCode===3){
            return '$3.00 - $3.99'
        } else if (priceCode===4){
            return '$4.00 - $4.99'
        } else if (priceCode===5){
            return '$5.00 -'
        }
    }


    //day display convert 
    const dayConvert = (dayCode) => {
        if(dayCode==='Mon'){
            return 'M'
        } else if (dayCode==='Tue'){
            return 'T'
        } else if (dayCode==='Wed'){
            return 'W'
        } else if (dayCode==='Thu'){
            return 'T'
        } else if (dayCode==='Fri'){
            return 'F'
        } else if (dayCode==='Sat'){
            return 'S'
        } else if (dayCode==='Sun'){
            return 'S'
        }
    }


    //open hours display convert 
    const openHoursConvert = (cafe) => {
        if(cafe.is24hs){
            return '24hs'
        } else {
            return `${cafe.open} - ${cafe.close}`
        }
    }



    return (
        <div className="finder">

            <div className="filter">
                <h2>Filter</h2>
                <form>
                    <label>
                        Nomad Friendly:
                        <select defaultValue='' onChange={event => handleFriendlyChange(event)} >
                            <option value=''> I don't mind </option>
                            <option value='1'> Neutral </option>
                            <option value='2'> Nomad Friendly </option>
                        </select>
                    </label>

                    <label>
                        Outlet:
                        <select defaultValue='' onChange={event => handleOutletChange(event)} >
                            <option value=''> I don't mind </option>
                            <option value='1'> Available </option>
                            <option value='2'> Many </option>
                        </select>
                    </label>

                    <label>
                        Free wifi:
                        <select defaultValue='' onChange={event => handleWifiChange(event)} >
                            <option value=''> I don't mind </option>
                            <option value='1'> Available </option>
                            <option value='2'> Stable </option>
                        </select>
                    </label>

                    <label>
                        Noise:
                        <select defaultValue='' onChange={event => handleNoiseChange(event)} >
                            <option value=''> I don't mind </option>
                            <option value='1'> Moderate </option>
                            <option value='2'> Quiet </option>
                        </select>
                    </label>
                </form>
            </div>

            {!cafeList ? 
                <ul>Loading..</ul>
                :
                <ul>
                    {cafeList.map(cafe => 
                    <li key={cafe._id}>
                        <h2>{cafe.name}</h2>
                        <p>{`${cafe.address}, ${cafe.city}, ${cafe.province}, ${cafe.postalCode}`}</p>
                        <div className="detailsWrapper">
                            {cafe.picture == "defaultPicture" ? <img src={defaultPicture} alt={cafe.name} /> : <img src={cafe.picture} alt={cafe.name} />}
                            <div className="details">
                                <div className={cafe.nomadFriendly==2 ? "featured" : "normal"}>
                                    <i className="far fa-handshake"></i>
                                    <p>{friendlyConvert(cafe.nomadFriendly)}</p>
                                </div>
                                <div>
                                    <i className="fas fa-plug"></i>
                                    <p>{outletConvert(cafe.outlet)}</p>
                                </div>
                                <div>
                                    <i className="fas fa-wifi"></i>
                                    <p>{wifiConvert(cafe.wifi)}</p>
                                </div>
                                <div>
                                <i className="fab fa-creative-commons-sampling"></i>
                                    <p>{noiseConvert(cafe.noise)}</p>
                                </div>
                                <div>
                                    <i className="fas fa-coffee"></i>
                                    <p>{priceConvert(cafe.price)}</p>
                                </div>
                                <div>
                                    <i className="far fa-clock"></i>
                                    <p>{openHoursConvert(cafe)}</p>
                                </div>
                                <ul className="holiday">
                                    {cafe.holiday.map(day => 
                                    <li key={day._id} className={!day.status ? "open" : "close"}>
                                    {dayConvert(day.day)}</li>)}
                                </ul>
                            </div>
                        </div>
                    </li>)}
                </ul>
            }
        </div>
    )
    
}

export default Finder;
