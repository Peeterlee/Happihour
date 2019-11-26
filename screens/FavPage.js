import React, {useState, useEffect} from 'react';
import {View, FlatList, ScrollView, SafeAreaView, Image, ImageBackground, AsyncStorage} from 'react-native';
import FavItems from '../comps/FavItems';
import MenuBar from '../comps/MenuBar';

function FavPage(){


    const [fav_restaurnts, Setfav_restaurants] = useState([]);
  
    async function getInfo(){
      var data = await AsyncStorage.getItem("userinfo");
      data = JSON.parse(data);
      var id = Number(data.info[0]['user_id'])
      getFavRestaurants(id)
      console.log("userid",id);
    }

    var getFavRestaurants=async(id)=>{
                                    //use ip address
        let response = await fetch('http://142.232.63.126//Happihour/Favourites.php',{
            method:'POST',
            headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_id : id
            })
        })
                                    
        // data echoed out in php
        let data = await response.json();
        if(data == "wrong"){
          Setfav_restaurants([])
        }else{
            Setfav_restaurants(data);   
        }
         
                    
    }

    useEffect(()=>{      
        getInfo();
    },[])

    return(
        <View style={{ height: "100%", backgroundColor:"#0E1617"}}>
            {/* <Image  source={require('../imgs/Flow_Header.svg')} /> */}
            <ImageBackground source={require('../imgs/bg1.png')} style={{width:'100%', height:'100%'}}>
                <Image source={require('../imgs/Flow_Header.png')} style={{width:'100%', height:50}} />
            <View style={{flex:9}}>
                <SafeAreaView>
                <ScrollView>
                    {
                        fav_restaurnts.map((obj,i)=>{
                            return <FavItems 
                                key={i}
                                name={obj.name}
                                address={obj.address}
                            />
                        })
                    }

                </ScrollView>
                </SafeAreaView>
             </View>
             <MenuBar 
                map='#74726C'
                home='#74726C'
                fav='#F4B869'
                profile='#74726C'/>
             </ImageBackground>
        </View>
    )
}

export default FavPage;