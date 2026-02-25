import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError()

  console.log("Route Error:", error)

  return (
    <div style={{ padding: "20px" }}>
      <h1>Oops! Something went wrong.</h1>

      <p>Status: {error?.status || "Unknown Error"}</p>

      <p>
        {error?.statusText || error?.message || "Unexpected issue occurred."}
      </p>
    </div>
  )
}