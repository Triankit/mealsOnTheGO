import React, {useLayoutEffect} from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import MealDetails from '../componets/MealsDetails';
import {MEALS} from '../data/dummy-data';
import Subtitle from '../componets/MealDetail/Subtitle';
import List from '../componets/MealDetail/List';
import IconButton from '../componets/IconButton';
import {Alert} from 'react-native';

function MealsDeatailScreen({route, navigation}) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handlePress() {
    Alert.alert('Pressed');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return <IconButton icon="home" color="blue" onPress={handlePress} />;
      },
    });
  }, [navigation, handlePress]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealsDeatailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
  },
  detailText: {},
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
