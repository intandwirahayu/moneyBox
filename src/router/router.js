import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CobaGambar, Home, Profile } from '../pages/pages.js';
import { CustomDrawerContent } from '../component/component.js';

const Drawer = createDrawerNavigator();

const MenuDrawer = () => {
    return(
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawerContent {...props}/>}
            screenOptions={{
                drawerStyle: {
                    width: 220
                },
                drawerPosition: 'right'
            }}
            
        >
            <Drawer.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Drawer.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        </Drawer.Navigator>
    );
};

const Stack = createNativeStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="MenuDrawer" component={MenuDrawer} options={{headerShown: false}}/>
        </Stack.Navigator>        
    );
};

export default Router;