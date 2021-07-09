const {Router} = require('express');
const router= Router();

const {getAllUsers,getUserById,deleteUser, adduser,updateUser}= require('../controllers/index.controller');

router.get('/users',getAllUsers);
router.get('/users/:query',getUserById);
router.delete('/users/:id',deleteUser);
router.post('/user',adduser);
router.put('/users/:id',updateUser);

module.exports= router;