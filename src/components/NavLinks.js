import { NavLink } from 'react-router-dom';
import links from '../utils/links';
import { useDispatch } from 'react-redux';

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className='flex flex-col  gap-y-8'>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            className={({ isActive }) => {
              return isActive
                ? 'text-primary flex items-center gap-x-2 text-xl'
                : 'text-dark flex items-center gap-x-2 text-xl';
            }}
            key={id}
            onClick={toggleSidebar}
            end
          >
            <span className='text-lg'>{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
