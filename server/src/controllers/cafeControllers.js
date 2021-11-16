const Cafe = require('../models/Cafe.js');


const postCafe = (req, res) => {

    //Create new cafe
    let newCafe = new Cafe ({...req.body});

    //Save it
    newCafe.save()
    .then(result => {
        res.set('content-location', `/api/v1/cafes/${newCafe._id}`);

        res.status(201).json({
            data: newCafe,
            url: `/api/v1/cafes/${newCafe._id}`
        })
    })
    .catch(error => {
        res.status(500).json({error: error})
    });
};


const getCafes = (req, res) => {

    Cafe.find({}).exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({error: error});
    });
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