import {Translator} from "./pages/Translator.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Contact} from "./pages/Contact.jsx";
import {Todo} from "./pages/Todo.jsx";
import {PageError} from "./pages/PageError.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <PageError/>
  },
  {
    path:'/translator',
    element:<Translator/>,
    errorElement: <PageError/>
  },
  {
    path:'/todo',
    element:<Todo/>,
    errorElement: <PageError/>
  },
  {
    path:'/contact',
    element:<Contact/>,
    errorElement: <PageError/>
  }
])


function App() {
  return <RouterProvider router={router}/>
}

export default App
