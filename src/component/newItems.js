import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text } from 'react-native';
import { DataAllNewItem } from '../utils/utils.js';

const NewItems = () => {
    return(
        <View style={styles.containerNewItem}>
            {
                DataAllNewItem.map((allNewItem, index) => {
                    return(
                        <TouchableOpacity style={styles.containerItemPopular} key={index}>
                            <Image source={allNewItem.sourceImage} style={styles.imageItem}/>
                            <Text style={styles.nameItem}>{allNewItem.nameImage}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}

export default NewItems;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerNewItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    containerItemPopular: {
        paddingHorizontal: 20,
        paddingBottom: 16
    },
    imageItem: {
        width: windowWidth*0.17,
        height: windowHeight*0.091,
        borderRadius: 20,
        marginBottom: 6
    },
    nameItem: {
        fontFamily: 'Poppins-Light',
        fontSize: 11,
        color: '#3E3C3C'
    }
});
