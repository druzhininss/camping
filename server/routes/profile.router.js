const router = require('express').Router();
const { User, Card } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await User.findOne({ where: { id: req.params.id }, include: { model: Card } });
    // console.log(user.Cards);
    res.render('profile', { user, userCards: user.Cards });
  });

module.exports = router;
