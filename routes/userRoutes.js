const express = require('express');
const { addElement, getUserModel, getUserModels, deleteUser, updateUser } = require('../controllers/userController');
const router = express.Router();


//get all user
router.get('/', getUserModels)


//get a single user
router.get('/:id', getUserModel)


//post a new user
router.post('/',addElement);


//delete a user
router.delete('/:id',deleteUser);


//update a user
router.patch('/:id',updateUser)


module.exports = router