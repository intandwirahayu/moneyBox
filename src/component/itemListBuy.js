import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { IconArrowBottom } from '../assets/assets.js';
import { DataListBuy } from '../utils/utils.js';
import { ContainerInfoContent } from '../component/component.js';

const ItemListBuy = () => {
    return(
        DataListBuy.map((itemListBuy, index) => {
            return(
                <View key={index} style={{marginBottom: 20}}>
                    <View style={styles.containerHeaderItem}>
                        <Image source={itemListBuy.imageItem} style={styles.imageItem}/>
            
                        <View style={styles.containerNameItem}>
                            <Text style={styles.nameItemBuy}>{itemListBuy.nameItem}</Text>
                            <Text style={styles.nameStoreBuy}>{itemListBuy.nameStore}</Text>
                        </View>
            
                        <View>
                            <TouchableOpacity>
                                <IconArrowBottom/>
                            </TouchableOpacity>
                        </View>
                    </View>
            
                    <View style={styles.containerContentItem}>
                        <ContainerInfoContent titleContent="price" priceContent={itemListBuy.price}/>

                        <ContainerInfoContent titleContent="include" priceContent={itemListBuy.include}/>

                        <ContainerInfoContent titleContent="finish" priceContent={itemListBuy.finish}/>
                    </View>
                </View>
            );
        })
    );
};

export default ItemListBuy;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerHeaderItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageItem: {
        width: windowWidth*0.13,
        height: windowHeight*0.07,
        borderRadius: 100
    },
    containerNameItem: {
        width: '73%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameItemBuy: {
        fontFamily: 'Poppins-Light',
        fontSize: 12.3,
        color: '#3E3C3C',
        marginRight: 10
    },
    nameStoreBuy: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12.3,
        color: '#3E3C3C'
    },
    containerContentItem: {
        width: '70%',
        flexDirection: 'row',
        marginLeft: 62,
        justifyContent: 'space-between'
    }
});