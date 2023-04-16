import { Pressable, View, Text, StyleSheet } from "react-native";

function LevelCoverName({ onSelect, zulu }) {

    return (
       
       <View style={styles.container}>
        <View style={styles.levelContainer}>
            <Pressable style={styles.button}
                android_ripple={{ color: '#ccc' }}
                onPress={onSelect}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.levelNames}>{zulu.seviye}</Text>
                </View>
            </Pressable>
        </View>
        </View>
       
    )

};



export default LevelCoverName;

const styles = StyleSheet.create({
    container: {
               
        justifyContent: "center",
        
    },

    button: {
       
        flex:1,
     },

    levelContainer: {
       
        justifyContent:"center",
        backgroundColor:"#aa151b",
        borderRadius: 50,        
        height:80,
        margin:2
                 
    },

    innerContainer: {
        flex: 1,
        padding: 16,
        alignItems: "center",
        justifyContent: "center"

    },
    levelNames: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
  

});