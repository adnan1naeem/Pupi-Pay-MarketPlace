import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

const Home = () => {
  const itemList = [{
    key: 1,
    title: 'The Metaverse',
    userName: 'jonathan',
    image: require('./assets/Image1.png'),
    userIcon: require('./assets/user1.png'),
    value:'usman'
  }, {
    key: 2,
    title: 'The Metaverse',
    userName: 'jonathan',
    image: require('./assets/Image2.png'),
    userIcon: require('./assets/user2.png'),
    value:'saim'
  },{
    key: 3,
    title: 'The Metaverse',
    userName: 'jonathan',
    image: require('./assets/Image3.png'),
    userIcon: require('./assets/user3.png'),
    value:'usama'
  },{
    key: 4,
    title: 'The Metaverse',
    userName: 'jonathan',
    image: require('./assets/Image4.png'),
    userIcon: require('./assets/user4.png'),
    value:'umair'
  }] 
  return (
    <>
      <Navbar />
      <div style={{backgroundColor:'#F7F7FF'}}>
        <section className='hero-section'>
          <MyList items={itemList}/>
        </section>
      </div>
    </>
  );
};

function MyList({items}) {
  return (
   <div style={{display: 'flex', flexDirection: 'row'}}>
    {items?.map((item) => <Item key={item.key} value={item} />)}
   </div>
 );
}

function Item({value}) {
  return (
    <div style={{margin: 50, backgroundColor:'white', padding:15, borderRadius:15}}>
      <img style={{height:200, width:200}} resizeMode={'cover'} src={value?.image}/>
      <div style={{display: 'flex', flexDirection: 'row', marginTop:10}}>
        <img style={{height:30, width:30}} src={value?.image}/>
        <div style={{marginLeft:10}}>
          <h3>{value?.title}</h3>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{fontSize:10, textTransform:'none', marginRight:3}}>by</p>
            <h6>{value?.title}</h6>
          </div>
        </div>
      </div>
      <p style={{fontSize:12, fontWeight:600,marginTop:10,color:'grey', textTransform:'none', marginRight:3}}>Current Bid</p>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <img style={{height:13, width:13,marginTop:3,marginRight:5}} src={value?.image}/>
        <h3>8.97 ETH</h3>
        <p style={{fontSize:10, textTransform:'none', marginLeft:3}}>($2,871.198)</p>
      </div>
      <div style={{backgroundColor:value?.key !== 2 ? null:'#4B32C2',border: `0.7px solid #D8D3F0`, padding:10,marginTop:20, borderRadius: 10}}>
        <p style={{fontSize:13, color:value?.key !== 2 ? '#4B32C2':'white', fontWeight:500, textAlign:'center', textTransform:'none', marginRight:3}}>Place a Bid</p>
      </div>
    </div>
  )
}

// const itemCard = () => {
//   return 
// }

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
