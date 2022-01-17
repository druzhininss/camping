const router = require('express').Router();
const bcrypt = require('bcrypt');
const passChecker = require('../functions/passwordCheck');
const { User } = require('../db/models');

router
  .route('/')
  .post(passChecker, async (req, res) => {
    const {
      username,
      password,
      email,
      phone,
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
          phone,
          role: 'customer',
        });

        req.session.user = { username: user.username, id: user.id };
        res.status(201).json({ registration: true });
      }
    } catch (err) {
      res.status(500).json({ err, message: 'Ошибка занесения данных' });
    }
  });

module.exports = router;
