import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Main from './Layout/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {path:"home",element:<Home></Home>},
        {path:"about",element:<About></About>},
        {path:"products",element:<Products></Products>},
        {
          path: "friends",
          loader: async () => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
          element: <Friends></Friends>
        },
        {
          path: '/friend/:friendId',
          loader: async ({params}) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element:<FriendDetails></FriendDetails>
        },
        {
          path:"*", element:<div>Not found</div>
        }
      ]
    },
    
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
