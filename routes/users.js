const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users');

const { getAllUsers, createUser } = usersController;

router.get('/', getAllUsers);
router.post('/', createUser);

// router.get('/:id', stuffCtrl.getOneThing);
// router.put('/:id', stuffCtrl.modifyThing);
// router.delete('/:id', stuffCtrl.deleteThing);
module.exports = router;
