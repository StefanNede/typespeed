const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    fs.readFile('words.txt', (err, data) => {
        if (err){
            console.log(err);
        }
        let array = data.toString().split("\n");
        res.send(array)
    })
})

module.exports = router;