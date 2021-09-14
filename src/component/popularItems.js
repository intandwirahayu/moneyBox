import React from 'react';
import { View, Image, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { ImagePopular6 } from '../assets/assets.js';
import { DataAllImagePopular } from '../utils/utils.js';

const PopularItem = () =>{
    return(
        <View style={styles.containerPopularItem}>
            {
                DataAllImagePopular.map((allImagePopular, index) => {
                    return(
                        <TouchableOpacity style={styles.containerItemPopular} key={index}>
                            <Image source={allImagePopular.sourceImage} style={styles.imageItem}/>
                            <Text style={styles.nameItem}>{allImagePopular.nameImage}</Text>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity style={styles.containerItemPopular}>
                <Image source={ImagePopular6} style={styles.imageItem}/>
            </TouchableOpacity>
        </View>
    );
} 

export default PopularItem;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    containerPopularItem: {
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

