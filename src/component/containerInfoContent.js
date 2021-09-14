import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const ContainerInfoContent = ({titleContent, priceContent}) => {
    return(
        <View style={styles.containerInfoContent}>
            <Text style={styles.titleContentItem}>{titleContent}</Text>
            <Text style={styles.priceContentItem}>{priceContent}</Text>
        </View>
    );
};

export default ContainerInfoContent;

const styles = StyleSheet.create({
    containerInfoContent: {
        width: '30.3%',
        marginRight: 10,
    },
    titleContentItem: {
        fontFamily: 'Poppins-Medium',
        fontSize: 11.5,
        color: '#3E3C3C'
    },
    priceContentItem: {
        fontFamily: 'Poppins-Light',
        fontSize: 11.5,
        color: '#3E3C3C'
    }
});
