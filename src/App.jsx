import {Translator} from "./pages/Translator.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Contact} from "./pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path:'/translator',
    element:<Translator/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App
