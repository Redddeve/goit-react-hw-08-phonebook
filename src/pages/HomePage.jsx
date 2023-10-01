import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

const Homepage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { name } = useSelector(selectUser);
  return (
    <div className="flex col-auto items-center justify-center mt-20">
      {!isLoggedIn ? (
        <>
          <h1 className="text-4xl mb-8">Welcome to my phonebook application</h1>
          <p className="text-2xl mb-4">
            React application designed to store your contacts{' '}
          </p>
          <Link className="text-teal-500 underline" to="/register">
            Get Started
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-4xl mb-8">
            Welcome to my phonebook application, {name}!
          </h1>
          <p className="text-2xl mb-4">
            You can visit the{' '}
            <Link className="text-teal-500 underline" to="/contacts">
              Contacts
            </Link>{' '}
            page and look through your saved data
          </p>
        </>
      )}
    </div>
  );
};

export default Homepage;
