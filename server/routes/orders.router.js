const router = require('express').Router();
const { Product, Order } = require('../db/models');

router
  .route('/:id') // Все заказы на /products, здесь конкр юзер
  .get(async (req, res) => {
    // const {} = req.body; // Theres no body in get req
    const { id } = req.params;
    try {
      const userOrders = await Order.findAll({
        where: { user_id: id },
        include: {
          model: Product,
        },
      });

      res.status(201).json({ userOrders, message: 'Ok' });
    } catch (err) {
      res.status(500).json({ login: false, message: err.message });
    }
  });

router
  .route('/makeorder')
  .post(async (req, res) => {
    const {
      userId,
      cart,
    } = req.body;
    try {
      res.status(201).json({ message: 'Order created successfully' });
    } catch (err) {
      res.status(500).json({ login: false, message: err.message });
    }
  });

module.exports = router;
