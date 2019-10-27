import React from 'react';
import {View, ImageBackground, ScrollView, SafeAreaView, Text, Swipe} from 'react-native';
import FavItems from './FavItems';
import MenuBar from './MenuBar';
import {Actions} from 'react-native-router-flux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import style from '../styles/CompStyles/List-style';

function List(){
    return(
        <View style={{position:"absolute", width:'100%', height:'100%', top:'85%'}}>
            <View style={{ height: "100%", backgroundColor:"#0E1617", borderTopLeftRadius:100, borderTopRightRadius:100, top:30}}>
                <View style={{height:75, justifyContent:'center', alignItems:'center'}}>
                    <FontAwesomeIcon icon="arrow-up" size={32} color="#ffef86"/>
                    <Text style={style.tabTxt}>View Map</Text>
                </View>
                <SafeAreaView>
                <ScrollView>
                    <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                    <FavItems />
                </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default List;