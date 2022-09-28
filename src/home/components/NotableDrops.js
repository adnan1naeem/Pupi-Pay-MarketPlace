import React from 'react';

export function MyList({items}) {
    return (
     <div style={{display: 'flex',justifyContent:'center', flexWrap:'wrap'}}>
      {items?.map((item) => <Item key={item.key} value={item} />)}
     </div>
   );
  }
  
function Item({value}) {
    return (
      <div style={{margin: 10, backgroundColor:'white', padding:15, borderRadius:15}}>
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