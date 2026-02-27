fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json()
  })
  .then((data) => {

    console.log("Users Data:")
    console.log(data)

    data.forEach((user) => {
      console.log(user.name)
    })

  })
  .catch((error) => {
    console.log("Error:", error)
  })