import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { IconHome, IconAvatar, IconSearch, IconChat, IconShopping, IconItems, IconAccount, IconBack, ImageUser } from '../assets/assets';
import StyleDrawerItem from './styleDrawerItem.js';

const CustomDrawerContent = ({...props}) => {
    return(
        <DrawerContentScrollView {...props}>
            <View style={styles.containerHeader}>
                <TouchableOpacity style={styles.touchBack} onPress={()=>props.navigation.closeDrawer()}>
                    <IconBack/>
                </TouchableOpacity>

                <View style={styles.containerInfoUser}>
                    <Image source={ImageUser} style={styles.imageUser}/>

                    <View style={{justifyContent: 'center'}}>
                        <Text style={styles.nameUser}>zeus nair juris</Text>
                        <Text style={styles.pointUser}>70 points</Text>
                    </View>
                </View>
            </View>

            <View>
                
                <View style={{paddingHorizontal: 17}}>
                    <DrawerItem
                        label='home'
                        icon={()=> <IconHome/>}
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(-17)}
                        style={{paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='profile'
                        icon={()=> <IconAvatar/>}
                        onPress={()=> props.navigation.navigate('Profile')}
                        labelStyle={StyleDrawerItem(-13)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='search item'
                        icon={()=> <IconSearch/>}
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(-16)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='chat'
                        icon={()=> <IconChat/>}
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(-16)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='shopping bag'
                        icon={()=> <IconShopping/>}
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(-12)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />
                </View>

                <View style={styles.containerSubMenu}>
                    <IconItems/>
                    <Text style={styles.titleSubMenu}>items</Text>
                </View>

                <View style={{paddingHorizontal: 8}}>
                    <DrawerItem
                        label='list buy items'
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(0)}
                        style={{paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='recent buy items'
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(0)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />
                </View>

                <View style={styles.containerSubMenu}>
                    <IconAccount/>
                    <Text style={styles.titleSubMenu}>account</Text>
                </View>

                <View style={{paddingHorizontal: 8}}>
                    <DrawerItem
                        label='edit account'
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(0)}
                        style={{paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='add account'
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(0)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />

                    <DrawerItem
                        label='logout'
                        onPress={()=> props.navigation.navigate('Home')}
                        labelStyle={StyleDrawerItem(0)}
                        style={{marginTop: -4, paddingVertical: -2}}
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerHeader: {
        backgroundColor: 'white',
        borderBottomColor: 'white'
    },
    touchBack: {
        width: '20%',
        paddingLeft: 4,
        paddingVertical: 15,
        marginLeft: 11,
    },
    containerInfoUser: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingLeft: 14
    },
    imageUser: {
        width: windowWidth*0.13,
        height: windowHeight*0.075,
        borderRadius: 10,
        marginRight: 15
    },
    nameUser: {
        color: '#3E3C3C',
        fontFamily: 'Poppins-Medium',
        fontSize: 13
    },
    pointUser: {
        color: '#3E3C3C',
        fontFamily: 'Poppins-Light',
        fontSize: 9.5,
        marginTop: -3
    },
    containerSubMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 11.5,
        paddingTop: 15,
    },
    titleSubMenu: {
        color: '#3E3C3C',
        fontSize: 12.5,
        fontFamily: 'Poppins-Medium',
        marginLeft: 20,
        marginBottom: -5.5,
    },
});