/**
 * =========================================================
 * Multiple Fetch Requests
 * =========================================================
 *
 * 🔹 What are Multiple Fetch Requests?
 * ---------------------------------------------------------
 * Jab hume ek hi component ke andar
 * multiple APIs se data fetch karna hota hai,
 * use Multiple Fetch Requests kehte hain.
 *
 * Example:
 * - API 1 → Country details
 * - API 2 → Border countries
 * - API 3 → Currency data
 *
 * Kabhi kabhi ek API se complete data nahi milta,
 * isliye multiple APIs call karni padti hain.
 *
 * =========================================================
 * Why do we need Multiple Fetch Requests?
 * =========================================================
 *
 * Multiple fetch requests ki zarurat tab padti hai jab:
 *
 * - Data different endpoints par ho
 * - Ek API ka result doosri API ke liye input ho
 * - Related information load karni ho
 *
 * Example:
 * Country API se milta hai:
 *   border countries codes
 *
 * Fir un codes se:
 *   border countries ka naam fetch karte hain.
 *
 * =========================================================
 * Ways to Handle Multiple Fetch Requests
 * =========================================================
 *
 * 1️⃣ Sequential Fetch
 *    - Ek request ke baad dusri request
 *
 * 2️⃣ Parallel Fetch
 *    - Saari requests ek saath run hoti hain
 *    - Faster hota hai
 *
 * React mein commonly use hota hai:
 *
 *   Promise.all()
 *
 * =========================================================
 * Syntax (Parallel Requests)
 * =========================================================
 *
 * Promise.all([
 *   fetch(url1),
 *   fetch(url2),
 *   fetch(url3)
 * ])
 *
 * .then((responses) => Promise.all(responses.map(r => r.json())))
 * .then((data) => {
 *   console.log(data)
 * })
 *
 * =========================================================
 * Basic Demo Code
 * =========================================================
 *
 * useEffect(() => {
 *
 *   Promise.all([
 *     fetch('/api/countries'),
 *     fetch('/api/borders')
 *   ])
 *
 *   .then((responses) =>
 *     Promise.all(responses.map(res => res.json()))
 *   )
 *
 *   .then((data) => {
 *     const countries = data[0]
 *     const borders = data[1]
 *
 *     console.log(countries)
 *     console.log(borders)
 *   })
 *
 * }, [])
 *
 * =========================================================
 * Mental Model
 * =========================================================
 *
 * Component mounts
 *        ↓
 * Multiple APIs called
 *        ↓
 * All responses received
 *        ↓
 * Data processed
 *        ↓
 * State updated
 *        ↓
 * UI re-renders
 *
 * =========================================================
 */