import { createDrawerNavigator } from '@react-navigation/drawer';

import Atividades from '../atividades';
import Sobre from '../sobre';

const drawerNavegation = createDrawerNavigator();

export default function Drawer() {
    return (
        drawerNavegation.Screen 
    )
}

const MyDrawer = createDrawerNavigator({
  screens: {
    Atividades,
    Sobre,
  },
});

