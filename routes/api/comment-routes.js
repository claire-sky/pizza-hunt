const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// Set up POST at /api/comments/:id
router
    .route('/:pizzaId')
    .post(addComment);
    
// Set up POST and Delete at /api/comments/:pizzaId/:commentId
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

// Set up POST and Delete at /api/comments/:pizzaId/:commentId/:replyId
router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;
