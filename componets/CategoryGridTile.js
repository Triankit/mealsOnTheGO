import React from 'react';
import {View, Text, Pressable, StyleSheet, Platform} from 'react-native';

function CategoryGridTile({title, color, onPress}) {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}>
        <View style={[styles.innerConatainer, {backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#ffffff',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {width: 0, height: 2},
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,
  },
  innerConatainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default CategoryGridTile;
