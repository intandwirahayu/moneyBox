import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { IconMenu, Logo } from '../assets/assets.js';
import { SliderHeader, PopularItem, NewItems } from '../component/component.js';

class Home extends Component {
    render(){
        return (
            <ScrollView style={styles.containerHome}>
                <View style={styles.containerHeader}>
                    <View style={styles.containerHeaderTop}>
                        <Logo/>
    
                        <TouchableOpacity style={styles.touchMenu} onPress={()=> this.props.navigation.openDrawer()}>
                            <IconMenu/>
                        </TouchableOpacity>
                    </View>
    
                    <View>
                        <SliderHeader/>
    
                        <View style={styles.containerStarted}>
                            <Text style={styles.titleStared}>Get Started</Text>
    
                            <TouchableOpacity style={styles.touchSignUp}>
                                <Text style={styles.labelTouchSignUp}>SIGN UP</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
    
                <View style={styles.containerContent}>
                    <View>
                        <Text style={styles.titleContainer}>Popular Items</Text>
                        <PopularItem/>
                    </View>
    
                    <View>
                        <Text style={styles.titleContainer}>New Items</Text>
                        <NewItems/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    containerHome: {
        flex: 1,
        backgroundColor: '#ffc764'
    },
    containerHeaderTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18
    },
    touchMenu: {
        paddingVertical: 11,
        paddingLeft: 15,
    },
    containerStarted: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: -6,
        marginBottom: 12,
        marginHorizontal: 15
    },
    titleStared: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        color: '#3E3C3C',
        marginRight: 10,
        marginTop: 2.1
    },
    touchSignUp: {
        backgroundColor: 'white',
        borderRadius: 8
    },
    labelTouchSignUp: {
        fontFamily: 'Poppins-Light',
        fontSize: 10.3,
        paddingTop: 8,
        paddingBottom: 5,
        paddingHorizontal: 13,
    },
    containerContent: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 45,
        paddingTop: 20,
        paddingHorizontal: 23
    },
    titleContainer: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14.2,
        color: '#3E3C3C',
        marginBottom: 8,
        marginLeft: 5
    }
});
