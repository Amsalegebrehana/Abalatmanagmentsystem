const {Router} = require('express');
const router= Router();

const {getAllUsers,getUserById,deleteUser}= require('../controllers/index.controller');

router.get('/users',getAllUsers);
router.get('/users/:id',getUserById);
router.delete('/users/:id',deleteUser);

module.exports= router;