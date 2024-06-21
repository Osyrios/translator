import {createBrowserRouter} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {PageError} from "./pages/PageError.jsx";
import {Translator} from "./pages/Translator.jsx";
import {Todo} from "./pages/Todo.jsx";
import {Contact} from "./pages/Contact.jsx";

export const router = createBrowserRouter([
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