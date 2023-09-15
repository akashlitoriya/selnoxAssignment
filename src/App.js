
import './App.css';
import CreateEmployee from './component/CreateEmployee';
import EmployeeList from './component/EmployeeList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './component/AppLayout';
import DateAndEmployee from './component/DateAndEmployee';
function App() {
  const app_router = createBrowserRouter([
    {
      path:"/",
      element: <AppLayout />,
      children:[
        {
          path:'createEmployee',
          element: <CreateEmployee />
        },
        {
          path: 'viewEmployee',
          element: <EmployeeList />
        },
        {
          path: 'dropdowns',
          element: <DateAndEmployee />
        }
      ]
    }
  ])
  return (
    
    <RouterProvider router={app_router} />
  );
}

export default App;
