import { Pressable, View, Text, StyleSheet } from "react-native";

function ContentCard({ onSelect, armut }) {

    return (
        <View style={styles.levelContainer}>
            <Pressable style={styles.button}
                android_ripple={{ color: '#ccc' }}
                onPress={onSelect}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.levelNames}>{armut.headline}</Text>
                </View>
            </Pressable>
        </View>
    )

};



export default ContentCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 90

    },

    button: {
        flex: 1
    },
    levelContainer: {
        flex: 1,

        backgroundColor: "#28BCAE",
        height: 150,
        margin: 5,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: "#691b0a",


    },

    innerContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center"

    },
    levelNames: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    levelTitle: {
        fontSize: 30,
        fontWeight: "bold",

    }

});