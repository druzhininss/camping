const router = require('express').Router();
const { Product, Specification, Category } = require('../db/models');

router
  .route('/products')
  .get(async (req, res) => {
    try {
      const rawProducts = await Product.findAll({
        include: {
          model: Specification,
        },
      });

      const products = rawProducts.map((product) => {
        const obj = {
          product_id: product.id,
          product_name: product.productName,
          product_category_id: product.category_id,
          product_img_path: product.imagePath ?? null,
        };

        product.Specifications.forEach((spec) => {
          obj[spec.specName] = spec.ProductSpecification.specValue;
        });

        return obj;
      });

      res.status(201).json({ products, message: 'Ok' });
    } catch (err) {
      res.status(500).json({ err, message: 'Ошибка получения данных' });
    }
  });

router
  .route('/palatki')
  .get(async (req, res) => {
    try {
      const categories = await Category.findAll({
        where: {
          parent_id: 1,
        },
      });

      const categoryIds = categories.map((category) => category.id);

      const rawPalatki = await Product.findAll({
        where: {
          category_id: categoryIds,
        },
        include: {
          model: Specification,
        },
      });

      const palatki = rawPalatki.map((product) => {
        const obj = {
          product_id: product.id,
          product_name: product.productName,
          product_category_id: product.category_id,
          product_img_path: product.imagePath ?? null,
        };

        product.Specifications.forEach((spec) => {
          obj[spec.specName] = spec.ProductSpecification.specValue;
        });

        return obj;
      });

      res.status(201).json({ products: palatki, message: 'Ok' });
    } catch (err) {
      res.status(500).json({ err, message: 'Ошибка получения данных' });
    }
  });

router
  .route('/spalniki')
  .get(async (req, res) => {
    try {
      const categories = await Category.findAll({
        where: {
          parent_id: 2,
        },
      });

      const categoryIds = categories.map((category) => category.id);

      const rawSpalniki = await Product.findAll({
        where: {
          category_id: categoryIds,
        },
        include: {
          model: Specification,
        },
      });

      const spalniki = rawSpalniki.map((product) => {
        const obj = {
          product_id: product.id,
          product_name: product.productName,
          product_category_id: product.category_id,
          product_img_path: product.imagePath ?? null,
        };

        product.Specifications.forEach((spec) => {
          obj[spec.specName] = spec.ProductSpecification.specValue;
        });

        return obj;
      });

      res.status(201).json({ products: spalniki, message: 'Ok' });
    } catch (err) {
      res.status(500).json({ err, message: 'Ошибка получения данных' });
    }
  });

router
  .route('/kovriki')
  .get(async (req, res) => {
    try {
      const categories = await Category.findAll({
        where: {
          parent_id: 3,
        },
      });

      const categoryIds = categories.map((category) => category.id);

      const rawKovriki = await Product.findAll({
        where: {
          category_id: categoryIds,
        },
        include: {
          model: Specification,
        },
      });

      const kovriki = rawKovriki.map((product) => {
        const obj = {
          product_id: product.id,
          product_name: product.productName,
          product_category_id: product.category_id,
          product_img_path: product.imagePath ?? null,
        };

        product.Specifications.forEach((spec) => {
          obj[spec.specName] = spec.ProductSpecification.specValue;
        });

        return obj;
      });

      res.status(201).json({ products: kovriki, message: 'Ok' });
    } catch (err) {
      res.status(500).json({ err, message: 'Ошибка получения данных' });
    }
  });

module.exports = router;
