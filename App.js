import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style ={styles.scrollView}>

        <Text style={styles.head}>Super Cars</Text>
        <br></br>
        <Image
         style={styles.image}
        source={{
         
          height:250,
          width:290,
          uri:
          'https://carwow-uk-wp-3.imgix.net/best-supercars-1-lead-scaled.jpg?auto=format&cs=tinysrgb&fit=clip&ixlib=rb-1.1.0&q=10&w=460'
        }}
        />
       <br></br><br></br>
     
      <Text> Zenvo Automotive was founded in 2007 in Præstø, Denmark with the intention of building
         limited-edition hypercars, the first prototype was the TS1 which was developed into the 
         TS1 GT, a TSR track-only car, and the ultimate flagship, the TSR-S with a lightweight carbon
          fiber body built in-house and powered by a flat-plane, twin-turbocharged V8 engine that
           develops a massive 1,177 hp … but the most intricate detail about the Zenvo TSR-S is still 
           that Centripetal rear wing, a Zenvo patent, that pivots depending on steering input to increase
            downforce to the axle that requires it.</Text>
            
            <br></br><br></br>

            <Text> Zenvo Automotive was founded in 2007 in Præstø, Denmark with the intention of building
         limited-edition hypercars, the first prototype was the TS1 which was developed into the 
         TS1 GT, a TSR track-only car, and the ultimate flagship, the TSR-S with a lightweight carbon
          fiber body built in-house and powered by a flat-plane, twin-turbocharged V8 engine that
           develops a massive 1,177 hp … but the most intricate detail about the Zenvo TSR-S is still 
           that Centripetal rear wing, a Zenvo patent, that pivots depending on steering input to increase 
           downforce to the axle that requires it.</Text>
             
      <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:StatusBar.currentHeight,
  },
  scrollView:{
    backgroundColor:'gray',
    marginHorizontal:20,
    padding:10,
  },
Text:{
  fontSize:36,
  alignContent:'space-around',
  
},
image:{
 marginLeft:10,
},
head:{
fontSize:40,
textAlign:'center',
fontWeight:400,

}

});
export default App;