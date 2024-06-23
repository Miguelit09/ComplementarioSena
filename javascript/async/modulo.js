export async function usuarios() {
  // Leemos un archivo json
  // let response = await fetch("datos.json") 
  // Otra promesa
  // let user = await response.json() // Permite visualizar en lenguaje humano la respuesta del fetch

  // let repos = await fetch(`https://api.github.com/users/${user.name}/`)
  // let list = await repos.json();

  let users = await fetch(`https://jsonplaceholder.typicode.com/users`)

  let list = await users.json();
  return list
}

export async function posts(id) {
  let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)

  let list = await posts.json();

  return list
}
