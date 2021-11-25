const Cafe = require('../models/Cafe.js');

const postCafe = (req, res) => {
    // console.log(req.body)

    const {
        name,
        address,
        city,
        province,
        postalCode,
        nomadFriendly,
        outlet,
        wifi,
        noise,
        price,
        is24hs,
        open,
        close,
        holiday,
        picture,
    } = req.body

    //Create new cafe
    const newCafe = new Cafe ({

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
        holiday: holiday,
        picture: picture
    });

    //Save it
    newCafe.save()
    .then(result => {
        res.set('content-location', `/api/v1/cafes/${result._id}`);

        res.status(201).json({
            data: result,
            url: `/api/v1/cafes/${result._id}`
        })

    })
    .catch(error => {
        if(error.code && error.code == 11000) {
            res.status(409).json({
                error: 'Same cafe already exist in the list.',
                field: error.keyValue,
            })
        } else {
            res.status(500).json({
                error: error.message
            })
        }
    });
};


const getCafes = (req, res) => {

    if(req.query == 0){
        Cafe.find({}).exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json({error: error});
        });

    } else {
        let setQuery = {}

        if('search' in req.query) {
            setQuery.$text = { $search: req.query.search }
        }

        if('nomadFriendly' in req.query) {
            setQuery.nomadFriendly = { $gte: req.query.nomadFriendly }
        }

        if('outlet' in req.query) {
            setQuery.outlet = { $gte: req.query.outlet }
        }

        if('wifi' in req.query) {
            setQuery.wifi = { $gte: req.query.wifi }
        }

        if('noise' in req.query) {
            setQuery.noise = { $gte: req.query.noise }
        }

        Cafe.find(setQuery, {}).exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => {
            res.status(500).json({error: error});
            console.log(error)
        });
    }

};


const getCafe = (req, res) => {

    Cafe.findOne({'_id': req.params.cafeId}).exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({error:error})
    });

};


const modifyCafe = (req, res) => {

    const newData = ({...req.body})

    Cafe.findOneAndUpdate({ _id: req.farmId }, { $set: newData }, { new: true })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
};

//Better not to allow delete..

// const deleteCafe = (req, res) => {
//     Cafe.deleteOne({ _id: req.params.cafeId })
//         .exec()
//         .then((result) => {
//             res.json(result)
//         })
//         .catch((error) => {
//             res.status(500).json({ error: error })
//         })
// }





module.exports = {postCafe, getCafes, getCafe, modifyCafe, /*deleteCafe*/};