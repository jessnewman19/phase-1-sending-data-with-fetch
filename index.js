// Add your code here


function submitData (name, email) {
  const data = { 
    name: "Steve", 
    email: "steve@steve.com"
  }
  return fetch ('http://localhost:3000/users', { 
    method: "POST", 
    headers: { 
      'Content-type': 'application/json',
      'Accept': 'application/json',
    }, 
    body: JSON.stringify(data)
  })
  .then (response => response.json())
  .then (userData => { 
    const id = document.createElement("h1")
    document.querySelector("body").appendChild(id)
    id.innerText = userData.id
  })
  .catch((error) => { 
    alert(error.message)
  })
}
  
  submitData()
