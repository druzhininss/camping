const router = require('express').Router();
const { Card } = require('../db/models');

router
  .route('/:id')
  .get((req, res) => {
    res.render('create', { user: req.session.user });
  })
  .post(async (req, res) => {
    const {
      title,
      price,
    } = req.body;

    try {
      await Card.create({
        title,
        price,
        userId: req.session.user.id,
      });
    } catch (err) {
      res.render('error', {
        message: 'Ошибка занесения данных в БД',
        error: {},
      });
    }
    res.status(201).json({ create: true, redirectPage: '/' });
  });

module.exports = router;
