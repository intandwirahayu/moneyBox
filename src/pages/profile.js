import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Logo, ImageUser2, IconEdit, IconMenu, IconSeeMore } from '../assets/assets';
import { ItemListBuy, ItemRecentBuy, ItemInfoMoney } from '../component/component';

class Profile extends Component{
    render(){
        return(
            <ScrollView style={{backgroundColor: 'white'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.containerHeaderLeft}>
                        <Logo style={{marginBottom: 11}}/>

                        <View style={styles.containerInfoUser}>
                            <Image source={ImageUser2} style={styles.imageUser}/>

                            <View>
                                <Text style={styles.nameUser}>zues nair juris</Text>
                                <Text style={styles.addressUser}>Lombok, Indonesia</Text>
                            </View>

                            <View style={styles.containerTouchEdit}>
                                <TouchableOpacity>
                                    <IconEdit/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.containerInfoMoney}>
                            <ItemInfoMoney title="salary" value="Rp. 8.000.000,-"/>

                            <ItemInfoMoney title="buy item" value="Rp. 3.000.000,-"/>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.containerMenu} onPress={()=> this.props.navigation.openDrawer()}>
                            <IconMenu/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.containerHeaderItem}>
                        <Text style={styles.titleHeaderItem}>List Buy Item</Text>
                        <Text style={styles.dateHeaderListBuy}>may 2019</Text>
                    </View>

                    <ItemListBuy/>

                    <View style={styles.containerSeeMore}>
                        <TouchableOpacity style={styles.touchSee}>
                            <Text style={styles.titleSee}>see more item</Text>
                            <IconSeeMore/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.containerItem}>
                    <View style={styles.containerHeaderItem}>
                        <Text style={styles.titleHeaderItem}>Recent Buy Item</Text>
                    </View>

                    <ItemRecentBuy/>
                </View>
            </ScrollView>
        );
    }
}

export default Profile;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerHeaderLeft: {
        width: '88%',
        backgroundColor: '#ffc764',
        paddingHorizontal: 18,
        paddingTop: 7,
        paddingBottom: 11,
        borderBottomRightRadius: 40,
        marginBottom: 10.5
    },
    containerInfoUser: {
        flexDirection: 'row',
        marginBottom: 18
    },
    imageUser: {
        width: windowWidth*0.27,
        height: windowHeight* 0.19,
        borderRadius: 8,
        marginRight: 15
    },
    nameUser: {
        color: '#3E3C3C',
        fontFamily: 'Poppins-Regular',
        fontSize: 17
    },
    addressUser: {
        color: '#3E3C3C',
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        marginTop: -2
    },
    containerTouchEdit: {
        marginTop: 4,
        marginLeft: 10
    },
    containerInfoMoney: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    containerMenu: {
        paddingVertical: 11,
        paddingHorizontal: 13.1,
    },
    containerItem: {
        paddingHorizontal: 18
    },
    containerHeaderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    titleHeaderItem: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: '#3E3C3C'
    },
    dateHeaderListBuy: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        color: '#3E3C3C'
    },
    containerSeeMore: {
        alignItems: 'flex-end',
        marginBottom: 5
    },
    touchSee: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleSee: {
       fontFamily: 'Poppins-Light',
       fontSize: 10,
       color: '#3E3C3C',
       marginRight: 12.5,
       marginBottom: -2
    }
});