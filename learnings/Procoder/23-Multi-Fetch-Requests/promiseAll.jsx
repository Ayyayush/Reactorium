Promise.all([
  fetch("https://jsonplaceholder.typicode.com/users"),
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/comments")
])

.then((responses) => {

  return Promise.all(
    responses.map((res) => res.json())
  )

})

.then((data) => {

  const users = data[0]
  const posts = data[1]
  const comments = data[2]

  console.log("Users:", users.length)
  console.log("Posts:", posts.length)
  console.log("Comments:", comments.length)

})

.catch((error) => {
  console.log("Error:", error)
})

/**
 * =========================================================
 * Proper Mental Workflow
 * =========================================================
 *
 * Step 1
 * ---------------------------------------------------------
 * Promise.all() chala
 *
 * Iske andar 3 fetch requests start ho gayi:
 *
 * fetch(users API)
 * fetch(posts API)
 * fetch(comments API)
 *
 * IMPORTANT:
 * Ye saari requests PARALLEL chalti hain
 * ek saath start hoti hain
 *
 *
 * Step 2
 * ---------------------------------------------------------
 * Promise.all wait karta hai jab tak
 * saare promises resolve na ho jayein
 *
 * Matlab:
 *
 * users fetch complete
 * posts fetch complete
 * comments fetch complete
 *
 * jab teeno complete ho jaate hain
 * tab Promise.all resolve hota hai
 *
 *
 * Step 3
 * ---------------------------------------------------------
 * Ab first .then() run hota hai
 *
 * .then((responses) => { ... })
 *
 * Yahan responses ek ARRAY hai
 *
 * responses =
 * [
 *   ResponseObject1,
 *   ResponseObject2,
 *   ResponseObject3
 * ]
 *
 * IMPORTANT:
 * Ye actual data nahi hai
 * Ye sirf Response objects hain
 *
 *
 * Step 4
 * ---------------------------------------------------------
 * Ab hum map use karte hain
 *
 * responses.map((res) => res.json())
 *
 * map kya karta hai?
 *
 * responses array ke har element par
 * res.json() call karta hai
 *
 * result:
 *
 * [
 *   Promise(jsonUsers),
 *   Promise(jsonPosts),
 *   Promise(jsonComments)
 * ]
 *
 * yani ab ek aur array milti hai
 * jo promises ki array hai
 *
 *
 * Step 5
 * ---------------------------------------------------------
 * isliye hum dobara Promise.all use karte hain
 *
 * return Promise.all(...)
 *
 * taaki:
 *
 * saare json promises resolve ho jayein
 *
 *
 * Step 6
 * ---------------------------------------------------------
 * Ab second .then() run hota hai
 *
 * .then((data) => {...})
 *
 * Yahan data ek ARRAY hai
 *
 * data =
 * [
 *   usersData,
 *   postsData,
 *   commentsData
 * ]
 *
 *
 * Step 7
 * ---------------------------------------------------------
 * Ab hum array indexing use karte hain
 *
 * data[0] → users data
 * data[1] → posts data
 * data[2] → comments data
 *
 * isliye assign kiya:
 *
 * const users = data[0]
 * const posts = data[1]
 * const comments = data[2]
 *
 *
 * Step 8
 * ---------------------------------------------------------
 * Ab final output print kar diya
 *
 * console.log("Users:", users.length)
 * console.log("Posts:", posts.length)
 * console.log("Comments:", comments.length)
 *
 *
 * =========================================================
 * Important Understanding
 * =========================================================
 *
 * responses → array of Response objects
 *
 * responses.map(...) →
 * array of Promises (json conversion)
 *
 * Promise.all(...) →
 * waits for all JSON conversions
 *
 * data →
 * final array of actual data
 *
 * =========================================================
 */