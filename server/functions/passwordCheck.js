function passChecker(req, res, next) {
  const {
    password,
    password2,
  } = req.body;

  if (password !== password2) {
    return res.json({ registration: false, message: 'Введенные пароли не совпадают' });
  }

  if (password.length < 8) {
    return res.json({ registration: false, message: 'Длинна пароля должна быть более 8 символов' });
  }
  next();
}

module.exports = passChecker;
