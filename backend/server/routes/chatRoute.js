const router = require('express').Router();
let Chat = require('../models/chat.models');

router.route('/:id').get((req,res)=> {
    Chat.findById(req.params.id)
    .then(chat=>res.json(chat))
    .catch(err=>res.status(400).json('Error' + err));
});

router.route('/add_chat').post((req, res) => {
    const chat = new Chat(req.body)
    chat.save()
    .then((result) => {
        res.json('Chat added')
    })
})

module.exports = router;