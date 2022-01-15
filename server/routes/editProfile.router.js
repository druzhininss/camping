const router = require('express').Router();
const { User } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await User.findOne({ where: { id: req.session.user.id } });
    res.render('edit', { user });
  })
  .put(async (req, res) => {
    const {
      email,
      username,
    } = req.body;

    // TODO: проверка на существующий мейл или никнейм

    try {
      await User.update({ email, username }, { where: { id: req.session.user.id } });
      req.session.user.username = username;
      req.session.user.email = email;
      res.status(200).json({ redirect: `/profile/${req.session.user.id}` });
    } catch (err) {
      res.render('error', {
        message: 'Ошибка обновления данных в БД',
        error: err,
      });
    }
  });

module.exports = router;
