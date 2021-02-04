import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function HomeScreen(props) {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        categoryId={itemData.item.id}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );

  {
    /*return (
    <View style={styles.container}>
      <Text style={styles.title}>This is home screen</Text>
      <Button
        title='Go to screen 2'
        onPress={() =>
          navigation.navigate('Screen2', { myParams: 'theses are the params' })
        }
      />
    </View>
  );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {},
});
