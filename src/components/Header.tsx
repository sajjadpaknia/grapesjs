import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-full bg-gray-400">
      <ul className="w-full flex justify-center p-2 gap-8 bg-gray-100">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/builder">Builder</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
