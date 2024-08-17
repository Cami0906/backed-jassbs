
const { Router } = require('express');
const { login, register, renewToken, getUserById } = require('../controllers/auth.Controller');
const { authUser } = require('./../middlewares/user-validation.minddleware');

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/renew-token', authUser, renewToken);
router.get('/user/:id', getUserById)

module.exports = router;
