import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {useState,useEffect} from 'react/cjs/react.development';
import Swiper from 'react-native-swiper/src';
import colors from '../assets/constants/colors';
var {width} = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      "https://images.vexels.com/media/users/3/126443/preview2/ff9af1e1edfa2c4a46c43b0c2040ce52-macbook-pro-touch-bar-banner.jpg",
      "https://pbs.twimg.com/media/D7P_yLdX4AAvJWO.jpg",
      "https://www.yardproduct.com/blog/wp-content/uploads/2016/01/gardening-banner.jpg",
    ]);

    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.swiper}>
          <Swiper
            style={{height: width / 2}}
            autoplay={true}
            showButton={false}
            autoplayTimout={2}>
            {bannerData.map(item => {
              return (
                <Image
                  key={item}
                  style={styles.imageBanner}
                  resizeMode="contain"
                  source={{uri: item}}
                />
              );
            })}
          </Swiper>
          <View style={{height: 20}}></View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.SCREEN_BACKGROUND,
  },
  swiper: {
    width: width,
    marginTop: 10,
    alignItems: 'center',
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default Banner;
