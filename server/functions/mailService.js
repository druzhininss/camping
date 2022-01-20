/* eslint-disable import/no-unresolved */
const nodemailer = require('nodemailer');

const sendConfirmMail = (to, link) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'camping.ecommerce@mail.ru',
        pass: 'ubSU8zvmLKdGjattTznk',
      },
    });

    transporter.sendMail({
      from: 'camping.ecommerce@mail.ru',
      to,
      subject: 'Письмо с подтверждением заказа от сайта http://localhost:5000',
      text: '',
      html: `
                <div>
                  <h1>Для подтверждения заказа перейдите по ссылке</h1>
                  <a href=${link}>${link}</a>
                </div>
            `,
    });

    // res.status(200).json({ message: 'success' });
  } catch (error) {
    // res.status(404).json({ error: 'Письмо не было отправлено' });
    console.log(error);
  }
};

module.exports = { sendConfirmMail };
