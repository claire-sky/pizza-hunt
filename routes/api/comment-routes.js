const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

// Set up POST and Delete at /api/pizzas/:id
router
    .route('/:pizzaId')
    .post(addComment);
    
// Set up POST and Delete at /api/pizzas/:id
router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);

module.exports = router;