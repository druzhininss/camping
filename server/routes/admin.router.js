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
      if (existingUser && existingUser.role === 'admin') {
        const isSamePassword = await bcrypt.compare(pass, existingUser.password);

        if (isSamePassword) {
          req.session.user = {
            id: existingUser.id,
            username: existingUser.username,
            email: existingUser.email,
            isAdmin: true,
          };
          res.status(200).json({ login: true, isAdmin: true, message: 'Успешно' });
        }
      } else {
        res.status(404).json({ login: false, isAdmin: false, message: 'Такого пользователя не существует, либо данные введены не корректно.' });
      }
    } catch (err) {
      res.status(500).json({ login: false, message: err.message });
    }
  });

// router
//   .route('/edit/:id')
//   .put(async (req, res) => {
//     const {} = req.body;

//     try {} catch(err) {}
//   });
 
// router
//   .route('/delete/:id')
//   .delete(async (req, res) => {

//   });

module.exports = router;
