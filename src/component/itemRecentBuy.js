import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DataItemRecentBuy } from '../utils/utils.js';

const ItemRecentBuy = () => {
    return(
        <View style={styles.containerRecentBuy}>
            <View style={styles.containerContentRecent}>
                {
                    DataItemRecentBuy.map((DataItem, index) => {
                        return(
                            <TouchableOpacity key={index} style={{marginRight: 10}}>
                                <Image source={DataItem.sourceImage} style={styles.imageRecent}/>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <Text style={styles.dateContainer}>Febuary 2019</Text>
        </View>
    );
}

export default ItemRecentBuy;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerRecentBuy: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 199, 100, 0.5)',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10
    },
    containerContentRecent: {
        flexDirection: 'row'
    },
    imageRecent: {
        width: windowWidth*0.1,
        height: windowHeight*0.055,
        borderRadius: 10
    },
    dateContainer: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        color: '#3E3C3C',
        marginTop: 4
    }
});