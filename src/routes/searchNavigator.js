import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchPage from '../components/SearchPage';
import SubcategoryPage from '../components/SubcategoryPage';

const SeachStackNavigator = createStackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Subcategory: {
    screen: SubcategoryPage,
  }
});

export default SeachStackNavigator
