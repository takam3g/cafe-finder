const User = require('../models/User.js');



const postUser = (req, res) => {

    //Create new cafe
    let newUser = new Cafe ({...req.body});

    //Save it
    newUser.save()
    .then(result => {
        res.set('content-location', `/api/v1/cafes/${newUser._id}`);

        res.status(201).json({
            data: newUser,
            url: `/api/v1/cafes/${newUser._id}`
        })
    })
    .catch(error => {
        res.status(500).send(error)
    });
};


const getUsers = (req, res) => {

    User.find({}).exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json(error);
    });
};


const getUser = (req, res) => {

    User.findOne({'_id': req.params.cafeId}).exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).send(error)
    });

};


const modifyUser = (req, res) => {

    const newData = ({...req.body})

    Cafe.findOneAndUpdate({ _id: req.userId }, { $set: newData }, { new: true })
        .then((result) => {
            res.status(201).json(result)
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
};



const deleteUser = (req, res) => {
    Cafe.deleteOne({ _id: req.params.userId })
        .exec()
        .then((result) => {
            res.json(result)
        })
        .catch((error) => {
            res.status(500).json({ error: error })
        })
}



module.exports = {postUser, getUsers, getUser, modifyUser, deleteUser};