import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, FlatList, View, StyleSheet } from 'react-native';
const flavors = [{
  id: '1',
  name: 'Vanilla',
  price: 5,
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '2',
  name: 'Chocolate',
  price: 6,
  image: 'https://tinyurl.com/42evm3m3'
}, {
  id: '3',
  name: 'Strawberry',
  price: 7,
  image: 'https://tinyurl.com/42evm3m3'
}];
const cupSizes = [{
  id: '1',
  name: 'Small',
  price: 2
}, {
  id: '2',
  name: 'Medium',
  price: 3
}, {
  id: '3',
  name: 'Large',
  price: 4
}];

const IceCreamStore = () => {
  const [selectedFlavor, setSelectedFlavor] = useState(null);
  const [selectedCupSize, setSelectedCupSize] = useState(null);
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    if (selectedFlavor && selectedCupSize) {
      setCart([...cart, {
        flavor: selectedFlavor,
        cupSize: selectedCupSize
      }]);
      setSelectedFlavor(null);
      setSelectedCupSize(null);
    }
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Ice Cream Store</Text>
      <Text style={styles.subtitle}>Select Flavor</Text>
      <FlatList data={flavors} keyExtractor={item => item.id} renderItem={({
      item
    }) => <View style={styles.row}>
            <Image source={{
        uri: item.image
      }} style={styles.image} />
            <Text style={styles.itemName}>{item.name}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedFlavor(item)}>
              <Text style={styles.buttonText}>Select</Text>
            </TouchableOpacity>
          </View>} />
      <Text style={styles.subtitle}>Select Cup Size</Text>
      <FlatList data={cupSizes} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity style={styles.button} onPress={() => setSelectedCupSize(item)}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </TouchableOpacity>} />
      <TouchableOpacity onPress={addToCart} style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
      <Text style={styles.total}>
        Cart Total: $
        {cart.reduce((total, item) => total + item.flavor.price + item.cupSize.price, 0)}
      </Text>
    </SafeAreaView>;
};

export default IceCreamStore;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitle: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  itemName: {
    flex: 1,
    fontSize: 18
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18
  },
  addToCartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18
  },
  total: {
    fontSize: 20,
    marginTop: 20
  }
});