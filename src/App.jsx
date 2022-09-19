import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>Home Page</h1>
      </section>
    </>
  );
};

const Explore = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>Explore Page</h1>
      </section>
    </>
  );
};

const Stats = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>Stats Page</h1>
      </section>
    </>
  );
};

const Resources = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>Resources Page</h1>
      </section>
    </>
  );
};

const Create = () => {
  return (
    <>
      <Navbar />
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>Create Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
