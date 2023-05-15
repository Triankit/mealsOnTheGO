import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList} from 'react-native-gesture-handler';
import MealItem from '../componets/MealItem';

function MealsOverViewScreen({route, navigation}) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter(mealItems => {
    return mealItems.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => {
      return category.id === catId;
    }).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  function rennderMealItem(itemData) {
    const items = itemData.item;
    const mealsItemProps = {
      id: items.id,
      title: items.title,
      imageUrl: items.imageUrl,
      affordability: items.affordability,
      complexity: items.complexity,
      duration: items.duration,
    };
    return <MealItem {...mealsItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={item => item.id}
        renderItem={rennderMealItem}
      />
    </View>
  );
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
