import { useForm, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import Input from '../../components/Input';
import Layout from '../../components/Layout';

const Register = () => {
  const {
    props: { errors },
  } = usePage();

  const { post, setData, data, processing } = useForm({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/auth/register');
  };

  const handleChange = (e) => {
    setData(e.target.name, e.target.value);
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen gap-10">
        <h1 className="font-bold text-2xl">Create an account</h1>

        <form
          onSubmit={handleSubmit}
          className="w-11/12 max-w-md flex flex-col gap-6"
        >
          <Input
            name="email"
            label="Email"
            id="email"
            required
            type="email"
            value={data.email}
            onChange={handleChange}
            error={errors?.email}
          />

          <Input
            name="firstName"
            label="First name"
            id="firstname"
            required
            type="text"
            value={data.firstName}
            onChange={handleChange}
            error={errors?.firstName}
          />

          <Input
            name="lastName"
            label="Last name"
            id="lastname"
            required
            type="text"
            value={data.lastName}
            onChange={handleChange}
            error={errors?.lastName}
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
            error={errors?.password}
          />

          <Input
            name="confirmPassword"
            label="Confirm password"
            id="confirm-password"
            required
            type="password"
            value={data.confirmPassword}
            onChange={handleChange}
            minLength={8}
            error={errors?.confirmPassword}
          />

          <button
            type="submit"
            className="bg-gray-700 text-white rounded-md p-2 mt-6"
            disabled={processing}
          >
            Register
          </button>
        </form>
      </main>
    </>
  );
};

Register.layout = (page) => <Layout children={page} title="Register" />;

export default Register;
