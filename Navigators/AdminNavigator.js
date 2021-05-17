import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Categories from '../src/Screens/Admin/Categories';
import Orders from '../src/Screens/Admin/Orders';
import Products from '../src/Screens/Admin/Products';
import ProductForm from '../src/Screens/Admin/ProductForm';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
    
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductForm"
        component={ProductForm}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AdminNavigator() {
  return <MyStack />;
}
