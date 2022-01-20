const router = require('express').Router();
const uuid = require('uuid');
const { sendConfirmMail } = require('../functions/mailService');

const activationLink = uuid.v4();

router.get('/', () => sendConfirmMail('semyonsergeev30@gmail.com', activationLink));

module.exports = router;
