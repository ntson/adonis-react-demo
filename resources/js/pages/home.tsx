import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return <h1 className="text-3xl font-bold underline">Hello world</h1>;
};

Home.layout = (page) => <Layout children={page} title="Home" />;

export default Home;
