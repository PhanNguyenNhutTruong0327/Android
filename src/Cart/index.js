import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Cart = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getCartItems();
  }, []);

  const getCartItems = async () => {
    try {
      const existingCartItems = await AsyncStorage.getItem('cartItems');

      if (existingCartItems) {
        const parsedCartItems = JSON.parse(existingCartItems);
        setCartItems(parsedCartItems);
      }
    } catch (error) {
      console.log('Error retrieving cart items:', error);
    }
  };

  const removeCartItem = async (itemId) => {
    try {
      const existingCartItems = await AsyncStorage.getItem('cartItems');

      if (existingCartItems) {
        const parsedCartItems = JSON.parse(existingCartItems);

        const updatedCartItems = parsedCartItems.filter(item => item.id !== itemId);

        await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        setCartItems(updatedCartItems);
      }
    } catch (error) {
      console.log('Error removing cart item:', error);
    }
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image source={{ uri: item.images[0] }} style={styles.productImage} />
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
        <TouchableOpacity onPress={() => removeCartItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Xóa</Text>
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giỏ hàng</Text>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Pay')} style={styles.payButton}>
        <Text style={styles.payButtonText}>Thanh toán </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  removeButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  payButton: {
    backgroundColor: '#ff0000',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    height:40,
    // margin:'40 0'
  },

  removeButtonText: {
    color: '#fff',
  },
  payButtonText: {
    color: '#fff',
    textAlign:'center',
    marginTop:5
  },

});

export default Cart;