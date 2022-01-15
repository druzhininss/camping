const router = require('express').Router();

router.route('/')
  .get(async (req, res) => {
    res.render('index', { user: req.session.user });
  });

module.exports = router;
