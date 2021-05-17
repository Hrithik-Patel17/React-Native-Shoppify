/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
//Navigators
import Main from './Navigators/Main';

//Screens
import Header from './src/components/Header';

//Redux

import {Provider} from 'react-redux'; // Bind our Entire App with Redux states
import store from './Redux/store';

//Context API
import Auth from './Context/store/Auth';

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <Main />
          {/* <ProductContainer />  */}
          <Toast ref={ref => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });
