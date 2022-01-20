const router = require('express').Router();
const { Product, Order, OrderProduct } = require('../db/models');

router
  .route('/:id') // Все заказы на /products, здесь конкр customer
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      const userOrdersRaw = await Order.findAll({
        where: { user_id: id },
        include: {
          model: Product,
        },
      });

      const userOrder = userOrdersRaw.map((order) => {
        const orders = order.Products.map((product) => {
          const obj = {};

          obj.productName = product.productName;
          obj.imagePath = product.imagePath;
          obj.quantity = product.OrderProduct.quantity;
          obj.date = product.createdAt.toDateString();

          return obj;
        });
        return orders;
      });

      res.status(201).json({ userOrder, message: 'Ok' });
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
