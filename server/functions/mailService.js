/* eslint-disable import/no-unresolved */
const nodemailer = require('nodemailer');

function sendConfirmMail(to, orderNumber) {
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
                  <h1>Ваш заказ №${orderNumber} подтверждён</h1>
                </div>
            `,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { sendConfirmMail };
