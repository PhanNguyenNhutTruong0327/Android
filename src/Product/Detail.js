import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Rating } from 'react-native-ratings';
// import StarRating from 'react-native-star-rating';

const Detail = ({ route }) => {
  const { product } = route.params;

  const [rating, setRating] = useState(0);

  const addToCart = async () => {
    try {
      const existingCartItems = await AsyncStorage.getItem('cartItems');
      let cartItems = [];

      if (existingCartItems) {
        cartItems = JSON.parse(existingCartItems);
      }

      cartItems.push(product);

      await AsyncStorage.setItem('cartItems', JSON.stringify(cartItems));

      console.log('Product added to cart:', product);
    } catch (error) {
      console.log('Error adding product to cart:', error);
    }
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.images[0] }} style={styles.productImage} />
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>Giá : {product.price}</Text>
      <Text style={styles.productDescription}>Chi tiết : {product.description}</Text>
      <TouchableOpacity style={styles.cartButton} onPress={addToCart}>
        {/* <Icon name="shopping-cart" size={24} color="white" /> */}
        <Text style={{color:'#FFFFFFCC'}}>Mua ngay</Text>
      </TouchableOpacity>
      <Text style={{marginTop:20}}>Đánh giá:</Text>
      <Rating style={styles.rating}
        disabled={false}
        maxStars={5}
        rating={rating}
        selectedStar={handleRatingChange}
        starSize={24}
        fullStarColor="gold"
        emptyStarColor="gold"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
  },
  cartButton: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    color:'#FFFFFFCC'
  },
  rating: {
    marginTop:10
  }
});

export default Detail;