import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Image, Text } from 'react-native';
import { ImageSlider1, ImageSlider2, ImageSlider3 } from '../assets/assets.js';

const allImageSlider = [ ImageSlider1, ImageSlider2, ImageSlider3 ];

class SliderHeader extends Component {
    constructor(props){
        super(props);

        this.state = {
            active : 0
        }
    }

    change(nativeEvent){
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

            if(slide !== this.state.active){
                this.setState({
                    active: slide
                })
            }
        }
    }
    
    render(){
        return(
            <View>
                <ScrollView 
                    horizontal={true} 
                    showsHorizontalScrollIndicator={false} 
                    onScroll={({nativeEvent}) => this.change(nativeEvent)}
                >
                    {
                        allImageSlider.map((imageSlider, index) => {
                            return(
                                <View style={{paddingLeft: 18}} key={index}>
                                    <Image source={imageSlider} style={styles.containerImageSlider} />
                                </View>
                            )
                        })
                    }
                </ScrollView>
    
                <View style={styles.containerDot}>
                    {
                        allImageSlider.map((imageSlider, index) => {
                            return(
                                <Text key={index} style={this.state.active === index? styles.iconDotActive : styles.iconDot}>●</Text>
                            )
                        })
                    }
                </View>
            </View>
        );
    }
};

export default SliderHeader;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
    containerImageSlider: {
        width: windowWidth*0.85,
        height: windowHeight*0.22,
        borderRadius: 20,
        marginTop: 2
    },
    containerDot: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 5
    },
    iconDot: {
        fontSize: 11,
        color: 'rgba(255, 255, 255, 0.5)',
        marginRight: 4,
    },
    iconDotActive: {
        fontSize: 11,
        color: 'white',
        marginRight: 4,
    }
});
