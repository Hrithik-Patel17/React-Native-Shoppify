import React from 'react';
import {View,Text,Dimensions,TouchableOpacity} from 'react-native';
import ProductCard from './ProductCard';
import colors from '../../assets/constants/colors';
var {width} = Dimensions.get('window');

const ProductList = (props) => {
  const {item} = props;
    return (
        <TouchableOpacity style={{width: '50%'}} onPress={()=> props.navigation.navigate("Product Detail", { item: item})}>
          <View style={{width: width / 2 , backgroundColor: colors.SCREEN_BACKGROUND}}>
               <ProductCard {...item}/>       
          </View>
        </TouchableOpacity>       
    );
    
}

export default ProductList