import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from "../redux/Favorites"
import { useLayoutEffect } from 'react';
import useFetch from "../hooks/UseFetch";
import IconButton from "../components/IconButton";

import Quiz from "../quiz/Quiz";

function ContentScreen({ route, navigation }) {

    const { id} = route.params
   
   
    const { data, loading, error } = useFetch('https://my-json-server.typicode.com/oguzselimi/secondjson/veriler?id=' + id);
 

    const favoriteContentIds= useSelector ( (state)=> state.favoriteContents.ids );
    const dispatch = useDispatch ();
    
    const contentIsFavorite = favoriteContentIds.includes(id)
  
    function changeFavoriteStatusHandler() {
      if (contentIsFavorite) {
        
        dispatch(removeFavorite({ id: id }));
      } else {
        
        dispatch(addFavorite({ id: id }));
      }
    }
  
  
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => {
          return (
            <IconButton
              icon={contentIsFavorite ? 'star' : 'star-outline'}
              color="white"
              onPress={changeFavoriteStatusHandler}
            />
          );
        },
      });
    }, [navigation, changeFavoriteStatusHandler]);
  


    if (loading) {
        return <ActivityIndicator size="large" />
    }


    if (error) {
        return <Text>{error}</Text>
    }


    return (
        <View style={{backgroundColor:"#f1bf00", flex:1}}>
            <View style={{ alignItems: "center", padding: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 40 }}> {data[0].headline}</Text>
            </View>

            <View style={{ paddingBottom: 10, marginBottom:20 }}>
                <Text style={{fontSize:15}}> {data[0].text}</Text>
            </View>

            <View style={{ alignItems: "center" }}>
                <Text style={{  fontSize:30, fontWeight:"bold" }}>Preguntas Sobre El Texto</Text>
            </View>
            <Quiz armutId={id} />
            
        </View>
    )
}
export default ContentScreen;

