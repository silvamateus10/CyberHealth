import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  formContext: {
    flex:1,
    // width:"100%",
    // height:"100%",
    // justifyContent: "space-around",     
    backgroundColor:"#FFF",
    alignItems:"center",
    borderTopLeftRadius: 30,
    borderTopRightRadius:30,
    paddingTop: 30,
  },
  form:{
    width:"100%",    
  },
  formLabel:{
    color:"#000",
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput:{
    width:"90%",
    borderRadius: 50,
    backgroundColor: "#f6f6f6",
    height:40,
    margin: 12,
    paddingLeft: 10,
  },
  buttonCalculator:{
    borderRadius: 50,
    alignItems: "center",
    justifyContent:"center",
    width:"100%",
    backgroundColor: "#FF0043",
    paddingTop:14,
    paddingBottom:14,
    marginLeft:12,
    margin:30,
  },
  textButtonCalculator:{
    fontSize:20,
    color:"#FFF",
  },
  errorMessage:{
     fontSize: 12,
     color: "red",
     fontWeight:"bold",
    paddingLeft: 20
  },
  exibitionResultImc:{
    width: "100%",
    height:"50%",
  },
  
  listImc:{
    marginTop: 20
  },
  resultImcItem:{
    fontSize: 28 ,
    color:"red",
    height: 50,
    width:"100%",
    paddingRight: 20,
  },
  textImcItemList:{
    fontSize: 16,
    color:"#000"    
  },
});

export default styles;