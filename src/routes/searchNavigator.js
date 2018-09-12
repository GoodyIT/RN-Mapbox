import React from 'react';
import { createStackNavigator } from 'react-navigation';
import SearchPage from '../components/SearchPage';
import SubcategoryPage from '../components/SubcategoryPage';
import StoreDetailPage from '../components/StoreDetailPage';

const SeachStackNavigator = createStackNavigator({
  Search: {
    screen: SearchPage,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Subcategory: {
    screen: SubcategoryPage,
  },
  StoreDetail: {
    screen: StoreDetailPage
  }
});

export default SeachStackNavigator
