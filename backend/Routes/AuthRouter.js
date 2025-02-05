//routing of authetication
const { signup, login } = require('../Controller/AuthControl');
const { signupValidation, loginValidation } = require('../Middlewares/Validation');

const router = require('express').Router();


router.post('/login',loginValidation,login);
router.post('/signup',signupValidation,signup);

module.exports =router;