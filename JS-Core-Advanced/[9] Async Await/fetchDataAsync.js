const URL = "https://jsonplaceholder.typicode.com/users";
async function getUsers() {
  const response = await fetch(URL);
  const users = await response.json();
  return users;
}
getUsers().then(users => {
  console.log(users);
})