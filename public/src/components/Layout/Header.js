import { Link } from "react-router-dom";

export default function Header() {
  const navigation = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/login',
      title: 'Login'
    },
    {
      path: '/signin',
      title: 'SignIn'
    }
  ];

  return(
    <header className="">
      <ul className="flex justify-around text-white rounded-lg">
        {navigation.map(item => 
          <NavItem
            title={item.title}
            path={item.path}
          />
        )}
      </ul>
    </header>
  );
}

function NavItem({title, path}) {
  return(
    <li className="border-2 border-white my-8 p-4 rounded-lg shadow-blue-500	shadow-lg">
      <Link to={path}>{title}</Link>
    </li>
  );
}