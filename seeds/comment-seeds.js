const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Did not know this',
    user_id: 6,
    post_id: 3
  },
  {
    comment_text: 'Insightful',
    user_id: 6,
    post_id: 2
  },
  {
    comment_text: 'my fave company.',
    user_id: 3,
    post_id: 1
  },
 
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
