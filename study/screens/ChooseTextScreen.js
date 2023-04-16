import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

import useFetch from '../hooks/UseFetch';
import TextNameCard from '../components/TextNameCard';


const ChooseTextScreen = ({route, navigation}) => {
  const { level } = route.params

  const {data, loading, error} = useFetch('https://my-json-server.typicode.com/oguzselimi/secondjson/veriler?level=' + level);
  
  

  if (loading) {
      return <ActivityIndicator size="large"/>
    }
  
  
  if (error) {
      return <Text>{error}</Text>
  }
   

  function renderLevelItem (itemData) {

    const item= itemData.item

   
   const levelItemProps = {
    headline: item.headline,
    id: item.id,
   coverName: item.coverName
   };

    
    return (
      <View style={{justifyContent:"center"}}>
      <TextNameCard {...levelItemProps} /> 
      </View>
    );
   
     
   };

  return (
    <View  style={styles.container}>
    <FlatList
        data={data}
        renderItem={renderLevelItem} 
        contentContainerStyle={{ flex: 1, justifyContent:"center", padding:16}}
    />
</View>
  );
};

export default ChooseTextScreen;

const styles = StyleSheet.create({
 
container: {
    flex: 1,
     backgroundColor:"#f1bf00",
  }
});
