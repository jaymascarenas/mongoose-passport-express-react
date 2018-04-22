const router = require('express').Router();
const usersController = require('../../controllers/usersController');

router
  .route('/')
  .get(usersController.login)
  .post(usersController.signUp);

router
  .route('/login')
  .post(usersController.login);

module.exports = router;
