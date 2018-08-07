const express = require('express');
const router = express.Router();
router.get('/:name', (req, res) => {
    res.render('users', {
        name: req.params.name,
        supplies: ['map', 'broom', 'duster']
    });
});
module.exports = router;