const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router
  .route('/')
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
          req.session.user = {
            id: existingUser.id, username: existingUser.username, email: existingUser.email,
          };
          res.status(200).json({
            login: true,
            userId: existingUser.id,
          });
        } else {
          res.status(404).json({ login: false, message: 'Такого пользователя не существует, либо данные введены не корректно.' });
        }
      } else {
        res.status(404).json({ login: false, message: 'Такого пользователя не существует, либо данные введены не корректно.' });
      }
    } catch (err) {
      res.status(500).json({ login: false, message: err.message });
    }
  });

module.exports = router;
