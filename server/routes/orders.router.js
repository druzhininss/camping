const router = require('express').Router();
const { Product, Order, OrderProduct } = require('../db/models');

router
  .route('/:id') // Все заказы на /products, здесь конкр customer
  .get(async (req, res) => {
    // const {} = req.body; // TODO: if it would be GET, there's no body
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
      const { id } = await Order.create({
        user_id: userId,
      });

      cart.forEach(async (item) => {
        await OrderProduct.create({
          product_id: item.id,
          order_id: id,
          quantity: item.quantity,
        });
      });

      res.status(201).json({ message: 'Order created successfully' });
    } catch (err) {
      res.status(500).json({ login: false, message: err.message });
    }
  });

module.exports = router;
