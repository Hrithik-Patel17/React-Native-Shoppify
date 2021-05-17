import React,{useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image,View} from 'react-native';
import CartIcon from '../src/components/CartIcon';

//Stack 
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import UserNavigator from './UserNavigator';
import AdminNavigator from './AdminNavigator';
import AuthGlobal from '../Context/store/AuthGlobal';

const icon_Home = require('../src/assets/images/icon_home.png');
const icon_Shopping = require('../src/assets/images/icon_checked.png');
const icon_Auth = require('../src/assets/images/icon_activity.png');
const icon_User = require('../src/assets/images/icon_employee.png')



const Tab = createBottomTabNavigator();

const Main = () => {
  const context = useContext(AuthGlobal);
    return (

        <Tab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          activeTintColor: '#4288E4',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <Image
                source={icon_Home}
                style={{position: 'relative'}}
                color={color}
                size={30}
              />
            ),
          }}
        />
    
        <Tab.Screen
          name="Cart"
          component={CartNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <View>
                <Image name="shopping-cart" source={icon_Shopping} color={color} size={30} />
                <CartIcon />
              </View>
              
            ),
          }}
        />
       {context.stateUser.user.isAdmin == true ? (
          <Tab.Screen
          name="Admin"
          component={AdminNavigator}
          options={{
            tabBarIcon: ({color}) => <Image color={color} source={icon_User} size={30} />,
          }} />
       ): null}
       
       
    
        <Tab.Screen
          name="User"
          component={UserNavigator}
          options={{
            tabBarIcon: ({color}) => <Image color={color} source={icon_Auth} size={30} />,
          }}
        />
      </Tab.Navigator>
    )
  
};

export default Main;
