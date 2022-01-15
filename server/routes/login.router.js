const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
  .get((req, res) => {
    res.render('login', { user: req.session.user });
  })
  .post(async (req, res) => {
    const {
      email,
      password: pass,
    } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        const isSamePassword = await bcrypt.compare(pass, existingUser.password);

        if (isSamePassword) {
          req.session.user = { username: existingUser.username, id: existingUser.id };
          return res.redirect('/');
        }

        return res.render('login', { message: 'Такого пользователя не существует, либо данные введены не корректно.', user: req.session.user });
      }
    } catch (err) {
      res.render('error', {
        message: 'Ошибка получения данных из БД',
        error: err,
      });
    }
  });

module.exports = router;
