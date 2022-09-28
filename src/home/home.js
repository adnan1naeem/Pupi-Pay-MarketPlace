import React from 'react';
import { MyList } from './components/NotableDrops';
import { DiscoverCard } from './components/DiscoverActionCard';
import { useMediaQuery } from '@mui/material';

const Home = () => {
    const itemList = [{
      key: 1,
      title: 'The Metaverse',
      userName: 'jonathan',
      image: require('./../assets/Image1.png'),
      userIcon: require('./../assets/user1.png'),
      value:'usman'
    }, {
      key: 2,
      title: 'The Metaverse',
      userName: 'jonathan',
      image: require('./../assets/Image2.png'),
      userIcon: require('./../assets/user2.png'),
      value:'saim'
    },{
      key: 3,
      title: 'The Metaverse',
      userName: 'jonathan',
      image: require('./../assets/Image3.png'),
      userIcon: require('./../assets/user3.png'),
      value:'usama'
    },{
      key: 4,
      title: 'The Metaverse',
      userName: 'jonathan',
      image: require('./../assets/Image4.png'),
      userIcon: require('./../assets/user4.png'),
      value:'umair'
    }] 
    const isRowBased = useMediaQuery('(max-width: 850px)');
    const discover = {
        key: 1,
        title: 'The Metaverse',
        userName: 'jonathan',
        image: require('./../assets/Image1.png'),
        userIcon: require('./../assets/user1.png'),
        value:'usman'
      }
    return (
      <>
        <div style={{backgroundColor:'#F7F7FF', overflow:'auto', width:'100%'}}>
            <div style={{display:'flex', flexDirection:'row',overflow:'auto', padding:80,flexWrap:'wrap', justifyContent:'center',paddingTop:50, paddingBottom:50}}>
                <div style={{width:isRowBased ? null:'50%', alignSelf:'center'}}>
                    <h1 style={{fontSize:isRowBased ? 40 : 55}}>Discover, collect, and sell extraordinary NFTs</h1>
                    <p style={{fontSize: 25, color:'grey',marginTop:20}}>OpenSea is the world's first and </p>
                    <p style={{fontSize: 25, color:'grey'}}>largest NFT marketplace</p>
                    <div>
                    <div style={{width:'100%', display:'flex'}}>
                        <div style={{backgroundColor:'#D8D3F0',marginRight:30,paddingLeft:20, paddingRight:20, border: `0.7px solid #D8D3F0`, padding:10,marginTop:20, borderRadius: 10}}>
                            <p style={{fontSize:13, color:'#4B32C2', fontWeight:500, textAlign:'center', textTransform:'none', marginRight:3}}>Place a Bid</p>
                        </div>
                        <div style={{border: `0.7px solid #000000`,paddingLeft:20, paddingRight:20, padding:10,marginTop:20, borderRadius: 10}}>
                            <p style={{fontSize:13, fontWeight:500, textAlign:'center', textTransform:'none', marginRight:3}}>Place a Bid</p>
                        </div>
                    </div>
                    <div style={{display:'flex', marginTop:30}}>
                        <img style={{height:40, width:40,marginTop:3,marginRight:5}} src={require('./../assets/Play.png')}/>
                        <p style={{alignSelf:'center'}}>Learn more about PupiPay</p>
                    </div>
                </div>
                </div>
                <div style={{width:'50%'}}>
                    <DiscoverCard item={discover}/>
                </div>
            </div>
          <MyList items={itemList}/>
        </div>
      </>
    );
  };

  export default Home;