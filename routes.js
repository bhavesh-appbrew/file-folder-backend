const express = require('express');
const con = require('./mySqlConnection');
const router = express.Router();

router.post('/', (req, res) => {
    // type checks
    // same name se file/folder create nhi kr skte
    // parentId exist
    // not found, conflict
    const { title, parentId, type } = req.body
    const query = `insert into file_folder (title, parentId, type) values ('${title}',${parentId},${type});`
    con.query(query, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
});

router.get('/:parentId', (req, res) => {
    //type check
    // not found
    const {parentId} = req.params
    const query = `select * from file_folder where parentId = ${parentId}`
    con.query(query, function (err, result) {
        if (err) throw err;
        res.send(result)
    });
});

module.exports = router;
