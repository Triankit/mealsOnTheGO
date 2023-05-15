import {View, FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../componets/CategoryGridTile';

function CategoriesScreen({navigation}) {
  function renderCategoryitem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverView', {categoryId: itemData.item.id});
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryitem}
        numColumns={2}
      />
    </View>
  );
}

export default CategoriesScreen;
