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

    // try {
      const existingUser = await User.findOne({ where: { email } });
      console.log(existingUser);
      if (existingUser) {
        const isSamePassword = await bcrypt.compare(pass, existingUser.password);

        if (isSamePassword) {
          req.session.user = { username: existingUser.username, id: existingUser.id };
          res.status(200).json({ login: true, message: 'Login successful' });
        }

        res.status(404).json({ login: false, message: 'Такого пользователя не существует, либо данные введены не корректно.' });
      }
    // } catch (err) {
    //   res.status(500).json({ login: false, message: err.message });
    // }
  });

module.exports = router;
