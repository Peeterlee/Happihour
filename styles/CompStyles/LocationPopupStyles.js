import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container:{
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        height:"100%"
    },
    wrapper:{
        width:"80%",
        height:"40%",
        borderRadius:15
    },
    scroll:{
        width:"100%", 
        height:"100%",
    },
    titlewrap:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        width:"100%",
        borderTopLeftRadius:13,
        borderTopRightRadius:13,
        padding:10,
        backgroundColor:'#071a20',
        position:"relative"
    },
    title:{
        color:"#f4e664",
        fontSize:20
    },
    locationwrap:{
        backgroundColor:"#0b2933",
        borderColor:"#74726B",
        borderWidth:0.8,
        width:"100%",
        justifyContent:'center',
        alignItems:'center'
    },
    location:{
        color:"white",
        fontSize:25,
        paddingVertical:5
    },
    arrowwrap:{
        justifyContent:'center',
        alignItems:"center",
        width:"100%",
        borderBottomLeftRadius:13,
        borderBottomRightRadius:13,
        backgroundColor:'#0b2933'
    }
})  

export default styles;