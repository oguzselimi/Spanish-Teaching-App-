import { View, FlatList, StyleSheet } from 'react-native';

import TextNameCard from './TextNameCard';

function FavoriteContentList({items}) {
  function renderContentItem(itemData) {
    const item = itemData.item;
        

   
    const contentItemProps = {
      headline: item.headline,
      id: item.id,
     coverName: item.coverName,
     text: item.text
     }
  
   

    return <TextNameCard {...contentItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderContentItem}
      />
    </View>
  );
}

export default FavoriteContentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
});