import { useState } from 'react'

/*
 * Counter Component
 * -----------------
 * - Receives normal props (counterName)
 * - Receives special prop (children)
 * - Manages its own internal state
 */
export default function Counter({ counterName, children }) {

  // State to keep track of count
  const [count, setCount] = useState(0)

  // children ko console mein dekh rahe hain
  // Jo bhi component ke beech likha hoga, wahi yahan aayega
  console.log(children)

  return (
    <div style={{ textAlign: 'center' }}>

      {/* State value render ho rahi hai */}
      <h1>{count}</h1>

      {/* Multiple state updates using previous state */}
      <button
        onClick={() => {
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
          setCount((previousState) => previousState + 1)
        }}
      >
        Increase Count
      </button>

      {/* children yahan render ho rahe hain */}
      {children}

    </div>
  )
}
