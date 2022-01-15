const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const passChecker = require('../functions/passwordCheck');

router
  .route('/')
  .get((req, res) => {
    res.render('registration');
  })
  .post(passChecker, async (req, res) => {
    const {
      username,
      password,
      email,
    } = req.body;

    try {
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        res.status(403).json({ registration: false, message: 'Такой пользователь уже существует.' });
      } else {
        const hashedPass = await bcrypt.hash(password, 10);
        const user = await User.create({
          username,
          password: hashedPass,
          email,
        });

        req.session.user = { username: user.username, id: user.id };
        res.status(201).json({ registration: true, redirectPage: '/' });
      }
    } catch (err) {
      res.render('error', {
        message: 'Ошибка занесения или получения данных из БД',
        error: {},
      });
    }
  });

module.exports = router;
