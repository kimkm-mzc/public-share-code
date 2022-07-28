const express = require('express');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.render('main');

  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
