/**
 * =========================================================
 * Promise in JavaScript
 * =========================================================
 *
 * 🔹 What is a Promise?
 * ---------------------------------------------------------
 * Promise JavaScript ka ek object hota hai jo represent karta hai
 * ek asynchronous operation ka result.
 *
 * Simple words mein:
 * Promise ek future value ko represent karta hai.
 *
 * Ya toh:
 * - operation successful hoga → resolved
 * - operation fail hoga → rejected
 *
 * Example:
 * Jab hum API call karte hain:
 *
 *   fetch("https://api.com/data")
 *
 * API turant data return nahi karti.
 * Thoda time lagta hai.
 *
 * Promise us future result ko handle karta hai.
 *
 * =========================================================
 * States of a Promise
 * =========================================================
 *
 * Promise ke 3 states hote hain:
 *
 * 1️⃣ Pending
 *    - Initial state
 *    - Operation abhi complete nahi hua
 *
 * 2️⃣ Fulfilled (Resolved)
 *    - Operation successfully complete ho gaya
 *    - Data mil gaya
 *
 * 3️⃣ Rejected
 *    - Operation fail ho gaya
 *    - Error aaya
 *
 * Example Flow:
 *
 * Pending
 *   ↓
 * Success → Fulfilled
 *   OR
 * Failure → Rejected
 *
 * =========================================================
 * Basic Syntax of a Promise
 * =========================================================
 *
 * const promise = new Promise((resolve, reject) => {
 *
 *   let success = true
 *
 *   if (success) {
 *     resolve("Operation Successful")
 *   } else {
 *     reject("Operation Failed")
 *   }
 *
 * })
 *
 * promise
 *   .then((result) => {
 *     console.log(result)
 *   })
 *   .catch((error) => {
 *     console.log(error)
 *   })
 *
 * 
 * 
 * mentl flow 
 * 
 * Step-by-step execution
Step 1

JS creates promise

promise.state = "pending"
Step 2

Executor function runs immediately.

(resolve, reject) => { ... }
Step 3
let success = true
Step 4

Condition check:

if (success)

Since success = true:

resolve("Operation Successful")
Step 5

Now promise becomes:

state = fulfilled
value = "Operation Successful"
5️⃣ When does .then() run?

Your code:

promise
  .then((result) => {
    console.log(result)
  })

.then() runs ONLY when the promise is resolved.

Meaning:

resolve() called
↓
promise becomes fulfilled
↓
.then() runs

So this executes:

console.log("Operation Successful")
6️⃣ When does .catch() run?

.catch() runs only if the promise is rejected.

Example:

reject("Operation Failed")

Then:

.catch((error) => {
  console.log(error)
})

runs.

Output:

Operation Failed
 * new Promise()
     │
     ▼
executor function runs
     │
     ▼
success ?
  /      \
YES      NO
 │        │
resolve   reject
 │        │
 ▼        ▼
.then()   .catch()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * =========================================================
 * ! Different Ways to Use Promises
 * =========================================================
 *
 * Promises ko multiple ways mein use kiya ja sakta hai:
 *
 * 1️⃣ Using .then()
 *    - Promise resolve hone par run hota hai
 *
 * 2️⃣ Using .catch()
 *    - Error handle karne ke liye
 *
 * 3️⃣ Using .finally()
 *    - Promise resolve ya reject hone ke baad run hota hai
 *
 * Example:
 *
 * fetch("/api/data")
 *   .then((res) => res.json())
 *   .then((data) => console.log(data))
 *   .catch((error) => console.log(error))
 *   .finally(() => console.log("Request Completed"))
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * =========================================================
 * ! Difference Between Promise and Async/Await
 * =========================================================
 *
 * Promise (.then syntax):
 *
 * fetch("/api/data")
 *   .then((res) => res.json())
 *   .then((data) => console.log(data))
 *
 * 
 * 
 * !Async/Await Syntax:
 *
 * async function getData() {
 *
 *   const response = await fetch("/api/data")
 *   const data = await response.json()
 *
 *   console.log(data)
 * }
 *
 * getData()
 *
 * ---------------------------------------------------------
 * Key Difference:
 *
 * Promise (.then):
 * - Callback based syntax
 * - Thoda nested ho sakta hai
 *
 * Async/Await:
 * - Cleaner syntax
 * - Synchronous code jaisa lagta hai
 * - Readability better hoti hai
 *
 * IMPORTANT:
 * Async/Await internally Promises hi use karta hai.
 *
 * 
 * 
 * 
 * 
 * 
 * 
 * =========================================================
 * ! Promise.all()
 * =========================================================
 *
 * Promise.all() ek method hai jo multiple promises ko
 * ek saath execute karta hai.
 *
 * Ye tab use hota hai jab:
 * - Multiple API calls ek saath karni ho
 * - Aur result tab chahiye jab sab complete ho jaye
 *
 * =========================================================
 * Why do we use Promise.all()?
 * =========================================================
 *
 * Agar hume multiple APIs call karni ho:
 *
 * Example:
 * - Country data API
 * - Border countries API
 * - Currency API
 *
 * Agar sequential call karein:
 *
 * API1 → wait
 * API2 → wait
 * API3 → wait
 *
 * Total time zyada lagega.
 *
 * Promise.all():
 *
 * API1
 * API2   → sab ek saath run hote hain
 * API3
 *
 * Faster execution.
 *
 * =========================================================
 * Syntax of Promise.all()
 * =========================================================
 *
 * Promise.all([
 *   fetch("/api/users"),
 *   fetch("/api/products"),
 *   fetch("/api/orders")
 * ])
 *
 * .then((responses) =>
 *   Promise.all(responses.map((res) => res.json()))
 * )
 *
 * .then((data) => {
 *   console.log(data)
 * })
 *
 * =========================================================
 * Important Behavior of Promise.all()
 * =========================================================
 *
 * - Sab promises parallel run hote hain
 * - Agar ek promise fail ho gaya
 *   toh Promise.all() reject ho jata hai
 *
 * Example result:
 *
 * [
 *   usersData,
 *   productsData,
 *   ordersData
 * ]
 *
 * =========================================================
 * Mental Model
 * =========================================================
 *
 * Multiple Promises start
 *        ↓
 * All run in parallel
 *        ↓
 * Wait for all to finish
 *        ↓
 * Results combined in array
 *        ↓
 * Then block executes
 *
 * =========================================================
 */