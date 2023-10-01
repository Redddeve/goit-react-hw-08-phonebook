import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const RegisterPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        toast.success('Welcome');
        navigate('/contacts');
      })
      .catch(() => toast.error('Data is not valid!'));
  };
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <section className="grid place-content-center">
      <form
        className="flex flex-col items-center gap-2.5 py-4 px-4"
        onSubmit={handleSubmit(submit)}
      >
        <label className="grid gap-3 w-full">
          Name
          <input
            {...register('name', {
              required: true,
              pattern:
                /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            })}
            type="text"
            placeholder="Your name"
            className="border-2 border-black pl-2"
          />
        </label>
        <label className="grid gap-3 w-full">
          Email
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Your e-mail"
            className="border-2 border-black pl-2"
          />
        </label>
        <label className="grid gap-3 w-full mb-4">
          Password
          <input
            {...register('password', { required: true })}
            type="password"
            placeholder="Should be at least 6 characters"
            autoComplete="off"
            className="border-2 border-black pl-2 "
          />
        </label>
        <button
          type="submit"
          className="w-fit py-2 px-8 bg-white cursor-pointer border border-gray-500 rounded-xl hover:text-white hover:bg-teal-800"
        >
          Submit
        </button>
        <span>
          You already created an account? Let's{' '}
          <Link to="/login" className="underline text-teal-500">
            sign in!
          </Link>{' '}
        </span>
      </form>
    </section>
  );
};

export default RegisterPage;
