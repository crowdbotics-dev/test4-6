import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, FlatList } from 'react-native';
const flavors = [{
  id: '1',
  name: 'Vanilla',
  price: 5
}, {
  id: '2',
  name: 'Chocolate',
  price: 6
}, {
  id: '3',
  name: 'Strawberry',
  price: 7
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

  return <SafeAreaView style={{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={{
      width: 200,
      height: 200
    }} />
      <Text style={{
      fontSize: 24,
      fontWeight: 'bold'
    }}>Ice Cream Store</Text>
      <Text style={{
      fontSize: 20
    }}>Select Flavor</Text>
      <FlatList data={flavors} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity onPress={() => setSelectedFlavor(item)}>
            <Text style={{
        fontSize: 18
      }}>{item.name}</Text>
          </TouchableOpacity>} />
      <Text style={{
      fontSize: 20
    }}>Select Cup Size</Text>
      <FlatList data={cupSizes} keyExtractor={item => item.id} renderItem={({
      item
    }) => <TouchableOpacity onPress={() => setSelectedCupSize(item)}>
            <Text style={{
        fontSize: 18
      }}>{item.name}</Text>
          </TouchableOpacity>} />
      <TouchableOpacity onPress={addToCart} style={{
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5
    }}>
        <Text style={{
        color: 'white',
        fontSize: 18
      }}>Add to Cart</Text>
      </TouchableOpacity>
      <Text style={{
      fontSize: 20
    }}>Cart Total: ${cart.reduce((total, item) => total + item.flavor.price + item.cupSize.price, 0)}</Text>
    </SafeAreaView>;
};

export default IceCreamStore;