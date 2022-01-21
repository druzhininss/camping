const router = require('express').Router();

router
  .route('/')
  .get((req, res) => {
    req.session.destroy((error) => {
      if (error) {
        res.status(500).json({ login: false, message: 'Ошибка при удалении сессии.' });
      }
      res.clearCookie('user_sid').json({ login: false });
    });
  });

module.exports = router;
