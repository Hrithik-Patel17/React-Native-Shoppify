import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Button,
  Image,
} from 'react-native';
import {Header, Item, Input} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';
import ListItem from './ListItem';
import EasyButton from '../../components/StyledComponent/EasyButton';
import axios from 'axios';
import baseURL from '../../assets/common/baseUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

var {height, width} = Dimensions.get('window');

const icon_search = require('../../assets/images/icon_search.png');
const icon_checked = require('../../assets/images/icon_checked.png');
const icon_plus = require('../../assets/images/icon_plus.png');

const Products = props => {
  const [productList, setProductList] = useState();
  const [productFilter, setProductFilter] = useState();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState();

  useFocusEffect(
    useCallback(() => {
      //Get Token
      AsyncStorage.setItem('jwt')
        .then(res => {
          setToken(res);
        })
        .catch(error => console.log(error));

      //Calling API

      axios.get(`${baseURL}products`).then(res => {
        setProductList(res.data);
        setProductFilter(res.data);
        setLoading(false);
      });

      return () => {
        setProductList();
        setProductFilter();
        setLoading(true);
      };
    }, []),
  );

  // Title of Products
  const ListHeader = () => {
    return (
      <View elevation={1} style={styles.listHeader}>
        <View style={styles.headerItem}></View>
        <View style={styles.headerItem}>
          <Text style={{fontWeight: '600'}}>Brand</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={{fontWeight: '600'}}>Name</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={{fontWeight: '600'}}>Category</Text>
        </View>
        <View style={styles.headerItem}>
          <Text style={{fontWeight: '600'}}>Price</Text>
        </View>
      </View>
    );
  };

  // Search Products
  const searchProduct = text => {
    if (text == '') {
      setProductFilter(productList);
    }
    setProductFilter(
      productList.filter(i =>
        i.name.toLowerCase().includes(text.toLowerCase()),
      ),
    );
  };
  // Delete Products
  const deleteProduct = id => {
    axios
      .delete(`${baseURL}products/${id}`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(res => {
        const products = productFilter.filter(item => item.id !== id);
        setProductFilter(products);
      })
      .catch(error => console.log(error));
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <EasyButton
          secondary
          medium
          onPress={() => props.navigation.navigate('Orders')}>
          <Image source={icon_checked} style={{backgroundColor: 'white'}} />
          <Text style={styles.buttonText}>Orders</Text>
        </EasyButton>
        <EasyButton
          secondary
          medium
          onPress={() => props.navigation.navigate('ProductForm')}>
          <Image source={icon_plus} style={{backgroundColor: 'white'}}/>
          <Text style={styles.buttonText}>Products</Text>
        </EasyButton>
        <EasyButton
          secondary
          medium
          onPress={() => props.navigation.navigate('Categories')}>
          <Image source={icon_plus} style={{backgroundColor: 'white'}}/>
          <Text style={styles.buttonText}>Categories</Text>
        </EasyButton>
      </View>
      <View>
        <Header searchBar rounded>
          <Item style={{padding: 5}}>
            <Image source={icon_search} />
            <Input
              placeholder="Search"
              onChangeText={text => searchProduct(text)}
            />
          </Item>
        </Header>
      </View>
      {loading ? (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={productFilter}
          ListHeaderComponent={ListHeader}
          renderItem={({item, index}) => (
            <ListItem
              {...item}
              navigation={props.navigation}
              index={index}
              delete={deleteProduct}
            />
          )}
          keyExtractor={item => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  listHeader: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'gainsboro',
  },
  headerItem: {
    margin: 3,
    width: width / 6,
  },
  spinner: {
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    marginBottom: 160,
    backgroundColor: 'white',
  },
  buttonContainer: {
    margin: 20,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonText: {
    marginLeft: 4,
    color: 'black',
  },
});

export default Products;
