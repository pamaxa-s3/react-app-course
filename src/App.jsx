import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import {MainLayout} from "@components/MainLayout"
import {Home} from "@page/Home"
import {About} from "@page/About"


const router = createBrowserRouter([
  {
    path: "/", element: <MainLayout />, children: [
        {index: true, element: <Home />},
        {path: 'about', element: <About />},
      ]
    }
  ])

function App() {
  return <RouterProvider router={router}  />
}

export default App
