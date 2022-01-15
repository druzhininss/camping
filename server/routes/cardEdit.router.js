const router = require('express').Router();
const { Card } = require('../db/models');

router
  .route('/:cardId')
  .get(async (req, res) => {
    const { cardId } = req.params;
    let card;
    try {
      card = await Card.findOne({ where: { id: cardId } });
    } catch (err) {
      res.render('error', {
        message: 'Ошибка получения данных из БД',
        error: err,
      });
    }
    res.render('cardEdit', { card });
  })
  .put(async (req, res) => {
    const { cardId } = req.params;

    const {
      title,
      price,
    } = req.body;

    try {
      await Card.update({ title, price }, { where: { id: cardId } });
    } catch (err) {
      res.render('error', {
        message: 'Ошибка изменения данных в БД',
        error: err,
      });
    }

    res.status(201).json({ message: 'card updated', redirectPage: `/profile/${req.session.user.id}` });
  });

router
  .route('/deleteCard/:cardId')
  .delete(async (req, res) => {
    try {
      await Card.destroy({ where: { id: req.params.cardId } });
    } catch (err) {
      res.render('error', {
        message: 'Ошибка удаления данных из БД',
        error: err,
      });
    }
    res.json();
  });

module.exports = router;
