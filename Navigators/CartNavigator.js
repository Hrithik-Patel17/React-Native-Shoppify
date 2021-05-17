import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Cart from '../src/Screens/Cart/Cart';
import CheckoutNavigator from './CheckOutNavigator';
const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
             name="Cart"
             component={Cart}
             options={{
                 headerShown: false
             }}
            />
            <Stack.Screen 
             name="CheckOut"
             component={CheckoutNavigator}
             options={{
                title: 'CheckOut'
             }}
            /> 
             
        </Stack.Navigator>
    )
}


export default function CartNavigator() {
    return <MyStack/>
}