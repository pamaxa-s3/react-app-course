import {useRouteError} from "react-router-dom"

export const ErrorBoundary = () => {
  
  const error = useRouteError();
  
  return (
      <div>
        <p>Something went wrong!</p>
        <p>{error.statusText || error.message}</p>
      </div>
    )
}