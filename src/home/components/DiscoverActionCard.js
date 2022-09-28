import React from 'react';

export function DiscoverCard({item}) {
    return (
     <div style={{display: 'flex',justifyContent:'center', flexWrap:'wrap'}}>
      <Card key={item.key} value={item} />
     </div>
   );
  }
  
function Card({value}) {
    return (
      <div style={{margin: 50, backgroundColor:'white', padding:15, borderRadius:25, boxShadow:30}}>
        <img style={{height:250, width:290}} resizeMode={'cover'} src={value?.image}/>
        
        <h2 style={{marginLeft:20}}>{value?.title}</h2>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{width:'45%'}}>
                <p style={{fontSize:10, fontWeight:600,marginTop:10,color:'grey', textTransform:'none', marginRight:3}}>Current Bid</p>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <img style={{height:13, width:13,marginTop:3,marginRight:5}} src={value?.image}/>
                    <h3>8.97 ETH</h3>
                    <p style={{fontSize:8, textTransform:'none', marginLeft:3}}>($2,871.198)</p>
                </div>
                <div style={{backgroundColor:'#000000',border: `0.7px solid #000000`, padding:10,marginTop:20, borderRadius: 10}}>
                    <p style={{fontSize:13, color:'white', fontWeight:500, textAlign:'center', textTransform:'none', marginRight:3}}>Place a Bid</p>
                </div>
            </div>
            <div style={{width:'45%'}}>
            <p style={{fontSize:10, fontWeight:600,marginTop:10,color:'grey', textTransform:'none', marginRight:3}}>Ends in</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{justifyContent:'space-evenly',width:'100%', display:'flex'}}>
                    <>
                        <h3>11</h3>
                        <p style={{fontSize:8, color:'grey', alignSelf:'center'}}>HRS</p>
                    </>
                    <>
                        <h3>22</h3>
                        <p style={{fontSize:8, color:'grey', alignSelf:'center'}}>Mins</p>
                    </>
                    <>
                        <h3>45</h3>
                        <p style={{fontSize:8, color:'grey', alignSelf:'center'}}>sec</p>
                    </>
                </div>
                </div>
                <div style={{backgroundColor:value?.key !== 2 ? null:'#000000',border: `0.7px solid #000000`, padding:10,marginTop:20, borderRadius: 10}}>
                    <p style={{fontSize:13, color:value?.key !== 2 ? '#000000':'white', fontWeight:500, textAlign:'center', textTransform:'none', marginRight:3}}>Place a Bid</p>
                </div>
            </div>
        </div>
      </div>
    )
  }