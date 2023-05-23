export async function  GET(req, res) {
const data =  fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
.then(json =>   console.log(json))
 return data
  }

export async function POST() {  
    return new Response('hello MAM')
  }
  




  