import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Home from './home/home';

// const itemCard = () => {
//   return 
// }

const Explore = () => {
  return (
    <>
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
      <section className='hero-section'>
        <p>Welcome to </p>
        <h1>Create Page</h1>
      </section>
    </>
  );
};

const App = () => {
  return (
    <div style={{display: 'flex', height:'100%', flexDirection: 'column', flexWrap:'wrap'}}>
    <Navbar />
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
