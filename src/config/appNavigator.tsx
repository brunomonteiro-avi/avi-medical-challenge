import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  PracticesListView,
  PracticesMapView
} from '../features/practices';
import * as Routes from './routes';

const Stack = createStackNavigator();

const AppNavigation = (props: any) => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {backgroundColor: '#FFFFFF'},
        gestureEnabled: false,
      }}>
      <Stack.Screen
        name={Routes.ROUTE_PRACTICES_LIST}
        component={PracticesListView}
      />
       <Stack.Screen
        name={Routes.ROUTE_PRACTICES_MAP}
        component={PracticesMapView}
      />
    </Stack.Navigator>
  );
};


export default AppNavigation;
