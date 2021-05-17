import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {Content, Body, Left, ListItem, Thumbnail, Text} from 'native-base';

var {width} = Dimensions.get('window');
const SearchedProduct = props => {
  const {productFiltered} = props;
  return (
    <Content style={{width: width}}>
      {productFiltered.length > 0
        ? productFiltered.map((item => (
            <ListItem key={item._id} avatar onPress={()=> props.navigation.navigate('Product Detail',{item:item})}>
              <Left>
                <Thumbnail
                  source={{
                    uri: item.image
                      ? item.image
                      : 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png',
                  }}
                />
              </Left>
              <Body>
                  <Text>{item.name}</Text>
                  <Text note>{item.description}</Text>
              </Body>
            </ListItem>
        ))
        ): (
            <View style={styles.center}>
             <Text>{'No Products Match the selected Criteria'}</Text>
            </View>
        )}
    </Content>
  );
};

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default SearchedProduct;
 