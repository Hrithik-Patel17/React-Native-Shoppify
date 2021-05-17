import React,{useState} from 'react';
import {ListItem,Body,Left,Right,Thumbnail,Text} from 'native-base';
import { StyleSheet } from 'react-native';
import colors from '../../assets/constants/colors'
const CartItem = (props) => {
  const data = props.item.item.product;
  const [quantity, setQuantity] = useState(props.item.item.quantity);

  return (
    <ListItem style={styles.listItem} key={Math.random()} avatar>
      <Left>
        <Thumbnail
          source={{
            uri: data.image
              ? data.image
              : 'https://www.freepngimg.com/thumb/fifa/11-2-fifa-png-images.png',
          }}
        />
      </Left>
      <Body style={styles.body}>
        <Left>
          <Text>{data.name}</Text>
        </Left>
        <Right>
          <Text>{data.price}</Text>
        </Right>
      </Body>
    </ListItem>
  );
};

const styles = StyleSheet.create({

    listItem: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.WHITE
      },
      body: {
          margin: 10,
          alignItems: 'center',
          flexDirection: 'row'
      },
})
export default CartItem;
