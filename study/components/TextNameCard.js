import { Pressable, View, Text, StyleSheet } from "react-native";
import {  useNavigation} from "@react-navigation/native";

function TextNameCard({ id , coverName}) {


    const navigation = useNavigation();
    function contentPageHandler () {
        navigation.navigate ("ContentPage", {id})
      };

 

      return (
        <View >
        <Pressable
          style={styles.button}
          android_ripple={{ color: "#ccc" }}
          onPress={contentPageHandler}
        >
          <View style={styles.innerContainer}>
            <Text style={styles.levelNames} >{coverName}</Text>
          </View>
        </Pressable>
        </View>
      );

};



export default TextNameCard;

const styles = StyleSheet.create({
    button: {
       
      backgroundColor: "#aa151b",
     
      borderRadius: 50,
      height: 80,
      margin: 2,
      justifyContent: "center",
      alignItems: "center", 
    },
    innerContainer: {
        flex:1,
        justifyContent:"center"
      
    },
    levelNames: {
      color: "white",
      fontWeight: "bold",
      fontSize: 20,
    },
  });
