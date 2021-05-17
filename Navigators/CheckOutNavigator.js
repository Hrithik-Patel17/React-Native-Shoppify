import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens
import CheckOut from '../src/Screens/Cart/CheckOut/CheckOut';
import Payment from '../src/Screens/Cart/CheckOut/Payment';
import Confirm from '../src/Screens/Cart/CheckOut/Confirm';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Shipping" component={CheckOut} />
            <Tab.Screen name="Payment" component={Payment} />
            <Tab.Screen name="Confirm" component={Confirm} />
        </Tab.Navigator>
    );
}

export default function CheckoutNavigator() {
    return <MyTabs />
}