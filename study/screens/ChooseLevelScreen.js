
import { Text, FlatList, SafeAreaView, ActivityIndicator, View } from "react-native";



import useFetch from "../hooks/UseFetch";

import LevelCoverName from "../components/LevelCoverName";


const ChooseLevelScreen = ({ navigation }) => {
    const { data, error, loading } = useFetch('https://my-json-server.typicode.com/oguzselimi/secondjson/seviyeler');


    const contentSelect = level => {
        navigation.navigate("ItemScreen", { level })
    }

    const renderProduct = ({ item }) => <LevelCoverName zulu={item}
        onSelect={() => contentSelect(item.levelid)}   
    />;

    if (loading) {
        return <ActivityIndicator size="large" />;
    }
    if (error) {
        return <Text>{error}</Text>
    }


    return (
     
            <FlatList
                data={data}
                renderItem={renderProduct} 
                contentContainerStyle={{ flex: 1, justifyContent:"center", padding:16}}
              
            />
       
    )
}

export default ChooseLevelScreen;