const router = require('express').Router();
const { User, Order } = require('../db/models');

router
  .route('/:id')
  .get(async (req, res) => {
    try {
      const user = await User.findOne({ where: { id: req.params.id }, include: { model: Order } });
      res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
