import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Drawer from './drawer';


export default function Navergacao() {
  return (
    <NavigationContainer>
        <Drawer/>
    </NavigationContainer>
  );
}