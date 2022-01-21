const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Order, Product } = require('../db/models');

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
          res.status(200).json({ isAdmin: true, message: 'Успешно' });
        }
      } else {
        res.status(404).json({ isAdmin: false, message: 'Такого пользователя не существует, либо данные введены не корректно.' });
      }
    } catch (err) {
      res.status(500).json({ isAdmin: false, message: err.message });
    }
  });

router
  .route('/logout')
  .get((req, res) => {
    req.session.destroy((error) => {
      if (error) {
        res.status(500).json({ isAdmin: false, message: 'Ошибка при удалении сессии.' });
      }
      res.clearCookie('user_sid').json({ isAdmin: false });
    });
  });

router
  .route('/orders')
  .get(async (req, res) => {
    try {
      const ordersRaw = await Order.findAll({
        include: {
          model: Product,
        },
      });

      const userOrders = ordersRaw.map((order) => {
        const orders = order.Products.map((product) => {
          const obj = {};

          obj.id = product.OrderProduct.order_id;
          obj.productName = product.productName;
          obj.imagePath = product.imagePath;
          obj.quantity = product.OrderProduct.quantity;
          obj.date = product.createdAt.toLocaleDateString();

          return obj;
        });
        return orders;
      });

      res.status(201).json({ userOrders });
    } catch (err) {
      res.status(500).json({ isAdmin: false, message: err.message });
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
