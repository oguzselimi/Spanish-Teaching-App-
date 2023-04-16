import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import useFetch from '../hooks/UseFetch';

import FavoriteContentList from '../components/FavoriteContentList';







function FavoritesScreen() {
  
  const favoriteContentIds = useSelector((state) => state.favoriteContents.ids);

  const {data}=useFetch ("https://my-json-server.typicode.com/oguzselimi/secondjson/veriler")
  
  const favoriteContents = data.filter((Metin) =>
  favoriteContentIds.includes(Metin.id)
  );


  if (favoriteContents.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite contens yet.</Text>
      </View>
    );
  }

  return <FavoriteContentList items={favoriteContents} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});