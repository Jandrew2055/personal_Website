import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 text-white shadow-md fixed w-full z-10 top-0 left-0'>
      <ul>
        <li>
          <Link to='about-Section'>About Me</Link>
        </li>
        <li>
          <Link to='project-Section' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to='technology-Section'>Technologies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
