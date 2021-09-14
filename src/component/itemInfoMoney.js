import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ItemInfoMoney = ({title, value}) => {
    return(
        <View>
            <Text style={styles.titleMoney}>{title}</Text>
            <Text style={styles.valueMoney}>{value}</Text>
        </View>
    );
};

export default ItemInfoMoney;

const styles = StyleSheet.create({
    titleMoney: {
        color: '#3E3C3C',
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
    },
    valueMoney: {
        color: '#3E3C3C',
        fontFamily: 'Poppins-Light',
        fontSize: 15,
        marginTop: -2
    }
});