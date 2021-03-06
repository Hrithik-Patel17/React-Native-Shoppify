import React from 'react';
import {ScrollView, TouchableOpacity,StyleSheet} from 'react-native';
import {ListItem, Badge,Text} from 'native-base';
import colors from '../../assets/constants/colors';

const CategoriesFilter = (props) => {
  return (
    <ScrollView bounces={true} horizontal={true} style={{backgroundColor: colors.CATEGORIES_FILTER_BACKGROUND}}>
      <ListItem style={{margin: 0, padding: 0, borderRadius: 0}}>
        <TouchableOpacity
         key={1}
         onPress={()=> {
            props.categoryFilter('all'), props.setActive(-1) 
         }}>
            <Badge style={[styles.badge, props.active == -1 ? styles.active : styles.inactive]}>
               <Text style={{color: colors.WHITE}}>All</Text>
            </Badge>
        </TouchableOpacity>
        {props.categories.map((item) => (
                      <TouchableOpacity
                      key={item._id}
                      onPress={() => {
                          props.categoryFilter(item._id), 
                          props.setActive(props.categories.indexOf(item))
                      }}
                  >
                      <Badge
                          style={[styles.center, 
                            {margin: 5},
                            props.active == props.categories.indexOf(item) ? styles.active : styles.inactive
                          ]}
                      >
                          <Text style={{ color: colors.WHITE }}>{item.name}</Text>
                      </Badge>
                  </TouchableOpacity>
                ))}
      </ListItem>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    badge: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    active: {
        backgroundColor: colors.ACTIVE_CATEGORIES
    },
    inactive: {
        backgroundColor: colors.INACTIVE_CATEGORIES
    }
})

export default CategoriesFilter;
