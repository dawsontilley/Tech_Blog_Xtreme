const { Post } = require('../models');

const postdata = [
  {
    title: 'Apple Products',
    post_body: 'Apple to scale back china production, seek return to US.',
    user_id: 10
  },
  {
    title: 'USB-c',
    post_body: 'EU to mandate all mobile phones work with USB-C',
    user_id: 8
  },
  {
    title: 'Chips',
    post_body: 'Supply Chain causing chip shortage.',
    user_id: 1
  },
  {
    title: 'TSMC',
    post_body: 'semi conductor giant expands operations',
    user_id: 4
  },
  {
    title: 'ML',
    post_body: 'Machine learning now more portable then ever.',
    user_id: 7
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
