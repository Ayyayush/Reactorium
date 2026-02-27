const myPromise = new Promise((resolve, reject) => {  // ye executor function hai

  /**
   * JavaScript Promise constructor ko ek function dete hain
   * jise "executor function" bolte hain.
   *
   * Jab promise create hota hai, ye function turant run ho jata hai.
   *
   * JS is function ko automatically 2 functions deta hai:
   * resolve
   * reject
   *
   * In dono ka kaam promise ki state change karna hota hai.
   */

  // Promise ki default state hoti hai:
  // pending

  const success = true

  if (success) {

    /**
     * resolve() call hone par:
     *
     * Promise state:
     * pending → fulfilled
     *
     * resolve ke andar jo value dete hain
     * wo .then() ko milti hai
     */

    resolve("Data loaded successfully")

  } else {

    /**
     * reject() call hone par:
     *
     * Promise state:
     * pending → rejected
     *
     * reject ke andar jo value dete hain
     * wo .catch() ko milti hai
     */

    reject("Something went wrong")
  }

})

myPromise
  .then((result) => {

    /**
     * .then() tab run hota hai jab
     * promise resolve (fulfilled) ho jata hai
     */

    console.log("Success:", result)

  })
  .catch((error) => {

    /**
     * .catch() tab run hota hai jab
     * promise reject ho jata hai
     */

    console.log("Error:", error)
  })