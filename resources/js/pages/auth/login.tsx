import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import ErrorBox from '../../components/ErrorBox';
import Input from '../../components/Input';
import Layout from '../../components/Layout';

const Login = () => {
  const {
    props: { errors },
  } = usePage();

  const { post, setData, data, processing } = useForm({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/auth/login');
  };

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="font-bold text-2xl">Login</h1>

        <form
          onSubmit={handleSubmit}
          className="w-11/12 max-w-md flex flex-col gap-6"
        >
          {errors?.login && <ErrorBox message={errors.login} />}

          <Input
            name="email"
            label="Email"
            id="email"
            required
            type="email"
            value={data.email}
            onChange={handleChange}
          />

          <Input
            name="password"
            label="Password"
            id="password"
            required
            type="password"
            value={data.password}
            onChange={handleChange}
            minLength={8}
          />

          <button
            type="submit"
            className="bg-gray-700 text-white rounded-md p-2 mt-6"
            disabled={processing}
          >
            Login
          </button>
        </form>
      </main>
    </>
  );
};

Login.layout = (page) => <Layout children={page} title="Login" />;

export default Login;
