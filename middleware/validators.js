const validateCafe = (req, res, next) => {

    //Sanitize
    req.body.name = req.body.name.trim()
    req.body.address = req.body.address.trim()
    req.body.city = req.body.city.trim()
    req.body.province = req.body.province.trim()
    req.body.postalCode = req.body.postalCode.replace(' ', '')


    //Required field double check
    //name
    if(!req.body.name || req.body.name===''){
        res.status(500).json({
            error: "Missing Name field"
        })

    //address
    } else if(!req.body.address || req.body.address===''){
        res.status(500).json({
            error: "Missing Address field"
        })

    //city
    } else if(!req.body.city || req.body.city===''){
        res.status(500).json({
            error: "Missing City field"
        })
        
    //province
    } else if(!req.body.province || req.body.province===''){
        res.status(500).json({
            error: "Missing Province field"
        })
    
    //postalCode   
    } else if(!req.body.postalCode || req.body.postalCode===''){
        res.status(500).json({
            error: "Missing Postal Code field"
        })
    
    //nomadFriendly
    } else if(!req.body.nomadFriendly || req.body.nomadFriendly===''){
        res.status(500).json({
            error: "Missing Nomad Friendly field"
        })

    //outlet
    } else if(!req.body.outlet || req.body.outlet===''){
        res.status(500).json({
            error: "Missing Outlet field"
        })
    
    //wifi
    } else if(!req.body.wifi || req.body.wifi===''){
        res.status(500).json({
            error: "Missing Wifi field"
        })

    //noise
    } else if(!req.body.noise || req.body.noise===''){
        res.status(500).json({
            error: "Missing Noise field"
        })
    
    //price
    } else if(!req.body.price || req.body.price===''){
        res.status(500).json({
            error: "Missing Noise field"
        })

    //open & close
    } else if((req.body.is24hs===false && !req.body.open) || (req.body.is24hs===false && req.body.open==='') || (req.body.is24hs===false && !req.body.close) || (req.body.is24hs===false && req.body.close==='')){
        res.status(500).json({
            error: "Missing Open and/or Close field"
        })
    
    //go to cafeController
    } else {
        next()
    } 
}





module.exports = {validateCafe};