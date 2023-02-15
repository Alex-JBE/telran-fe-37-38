// Решение 1

// const getUserById = (id) => {
//     let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
//     let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
//     fetch(urlUser)
//         .then(res => (res.status == 404) ? console.log('Такого пользователя нет') : res.json())
//         .then(data => {
//             if (data){
//                 let userPosts = {
//                     user: {name: data.name, email: data.email},
//                     posts: []
//                 }
//                 fetch(urlPost)
//                     .then(res => res.json())
//                     .then(data => {
//                        userPosts.posts = [...data]
//                        console.log(userPosts)
//                     })
//             }
//         })
// }

// Решение 2

async function getUserById(id){
     let urlUser = `https://jsonplaceholder.typicode.com/users/${id}`
     let urlPost = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
     let resUser = await fetch(urlUser)
     if (resUser.status == 404){
         console.log('Такого пользователя нет')
         return
    }
     let dataUser = await resUser.json()
     let dataPosts = await fetch(urlPost).then(res => res.json())
     let userPosts = {
         user: {name: dataUser.name, email: dataUser.email},
         posts: [...dataPosts]
     }
//     console.log(userPosts)
 }

 /* getUserById(50) */

 /* Создать функцию, которая генерирует div с данными о пользователе и всеми его постами. Возвращаемая карточка должна иметь следующую структуру. 

<div class=”user-container”>
 <div class=”user”>
  <p>Имя пользователя</p>
  <p>Почта пользователя</p>
 </div>
 <div class=”posts”>
  <div class=”item”>
   <p>Название поста</p>
   <p>Текст поста</p>
  </div>
  <div class=”item”>
   <p>Название поста</p>
   <p>Текст поста</p>
  </div>
  ….….
 </div>
</div> */

 function generateUserCard(userData) {
  const userContainer = document.createElement('div');
  userContainer.classList.add('user-container');

  const user = document.createElement('div');
  user.classList.add('user');

  const name = document.createElement('p');
  name.textContent = userData.name;

  const email = document.createElement('p');
  email.textContent = userData.email;

  user.append(name, email);
  userContainer.append(user);

  const posts = document.createElement('div');
  posts.classList.add('posts');

  userData.posts.forEach(post => {
    const item = document.createElement('div');
    item.classList.add('item');

    const title = document.createElement('p');
    title.textContent = post.title;

    const text = document.createElement('p');
    text.textContent = post.text;

    item.append(title, text);
    posts.append(item);
  });

  userContainer.append(posts);

  return userContainer;
}

const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  posts: [
    {
      title: 'Post 1',
      text: 'Lorem ipsum dolor sit amet'
    },
    {
      title: 'Post 2',
      text: 'Consectetur adipiscing elit'
    }
  ]
};

const userCard = generateUserCard(userData);
document.body.append(userCard);