import { Dropdown } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { StyledLink } from 'styledComponents/NavBar.styled';

const NavBar = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <nav className="flex items-center justify-between gap-5 p-4 mb-4 shadow-[0_4px_8px_0_rgb(157,158,160)] ">
        <ul className="flex items-center">
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          {isLoggedIn && (
            <li>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </li>
          )}
        </ul>
        {!isLoggedIn ? (
          <ul className="flex items-center">
            <li>
              <StyledLink to="/register">Register</StyledLink>
            </li>
            <li>
              <StyledLink to="/login">Log in</StyledLink>
            </li>
          </ul>
        ) : (
          <Dropdown label={name}>
            <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 w-full ">
              {email}
            </li>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => dispatch(logOutUser())}>
              Logout
            </Dropdown.Item>
          </Dropdown>
        )}
      </nav>
    </>
  );
};

export default NavBar;
