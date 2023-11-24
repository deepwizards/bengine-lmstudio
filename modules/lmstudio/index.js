const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('lmstudio/views/index', {
        title: 'lmstudio'
    });
});

module.exports = router;
