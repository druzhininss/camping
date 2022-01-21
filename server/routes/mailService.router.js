const router = require('express').Router();
const { Order, Product } = require('../db/models');
const { sendConfirmMail } = require('../functions/mailService');

router.get('/', async (req, res) => {
  try {
    const userOrdersRaw = await Order.findAll({
      where: { user_id: req.session.user.id },
      include: {
        model: Product,
      },
    });
    const orderNumber = userOrdersRaw[0].Products[0].OrderProduct.order_id;
    sendConfirmMail(req.session.user.email, orderNumber);
    res.status(200).json({ message: 'Письмо отправлено' });
  } catch (error) {
    res.status(404).json({ message: 'Письмо не отправлено' });
  }
});

module.exports = router;
