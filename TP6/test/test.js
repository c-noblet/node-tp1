const axios = require('axios');

async function main() {
  const url = 'http://localhost:8080';

  const createdUser = await axios.post(url + '/users', {
    firstname: 'alice',
    lastname: 'doe',
    email: 'alice.doe@mail.com',
    username: 'a-doe',
    github: 'https://github.com/a-doe'
  });

  const createdPost = await axios.post(url + '/posts', {
    title: 'title',
    content: 'content',
    userId: createdUser.data.id,
  });

  const createdComment = await axios.post(url + '/comments', {
    content: 'content',
    userId: createdUser.data.id,
    postId: createdPost.data.id
  });

  const getPostComments = await axios.get(url + '/posts/' + createdPost.data.id + '?comments=true');

  console.log(getPostComments.data);

  const getUserPosts = await axios.get(url + '/users/' + createdUser.data.id + '?posts=true');

  console.log(getUserPosts.data);
}

main();
