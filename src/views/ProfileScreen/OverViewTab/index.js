import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image } from 'react-native';
import { Button } from 'native-base';
import { Icon, Text } from 'native-base';
import { commonStyles } from '../../../modules';
import styles from './styles';

const location = 'Animal Specially Center,\n421 E Drachman, Tucson AZ 85705 - 7598\n USA';
const phone = '011 4905 3399';
const siteUrl = 'www.animalspecialtycenter.com';
const info = 'Animal Specialty Center started as a dream for Dr.\nRichard Joseph and Dr. Jason Berg nearly a decade ago. In the fall of 2007 it became a reality a complete, purpose-built, specialty veterinary center in Westchester County';

const veterinarianData = [
    {
        id: 0,
        img: require('../../../Images/veterinarian1.jpg')
    },
    {
        id: 1,
        img: require('../../../Images/veterinarian2.jpg')
    },
    {
        id: 2,
        img: require('../../../Images/veterinarian3.jpg')
    },
    {
        id: 3,
        img: require('../../../Images/veterinarian4.jpg')
    },
    {
        id: 4,
        img: require('../../../Images/veterinarian5.jpg')
    },
]
const emotionData = [
    {
        id: 0,
        img1: require('../../../Images/emotions/muted_dis.png'),
        img2: require('../../../Images/emotions/muted_en.png'),
        description: 'Muted'
    },
    {
        id: 1,
        img1: require('../../../Images/emotions/sad_dis.png'),
        img2: require('../../../Images/emotions/sad_en.png'),
        description: 'Sad'
    },
    {
        id: 2,
        img1: require('../../../Images/emotions/meh_dis.png'),
        img2: require('../../../Images/emotions/meh_en.png'),
        description: 'Meh'
    },
    {
        id: 3,
        img1: require('../../../Images/emotions/smile_dis.png'),
        img2: require('../../../Images/emotions/smile_en.png'),
        description: 'Good'
    },
    {
        id: 4,
        img1: require('../../../Images/emotions/happy_dis.png'),
        img2: require('../../../Images/emotions/happy_en.png'),
        description: 'Happy'
    },
]

class OverViewTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexEmotion: -1,
        }
    }
    render() {
        return (
            <View
                style={[styles.containerOverView,]}
            >
                <View style={{ borderRadius: 20, ...commonStyles.mt_20, overflow: 'hidden' }}>
                    {/* <MapView
                        style={{ height: 200 }}
                        initialRegion={{
                            latitude: 51.5074,
                            longitude: 0.1278,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    /> */}
                </View>
                <View style={{ flexDirection: 'row', ...commonStyles.mt_15 }}>
                    <View>
                        <Icon type="FontAwesome" name="phone" style={{ ...commonStyles.color_grey, ...commonStyles.fontSize3 }} />
                    </View>
                    <View style={{ ...commonStyles.pl_20 }}>
                        <Text style={{ ...commonStyles.color_black, ...commonStyles.fontSize1 }}> {location} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', ...commonStyles.mt_15 }}>
                    <View>
                        <Icon type="FontAwesome" name="phone" style={{ ...commonStyles.color_grey, ...commonStyles.fontSize3 }} />
                    </View>
                    <View style={{ ...commonStyles.pl_20 }}>
                        <Text style={{ ...commonStyles.color_black, ...commonStyles.fontSize1 }}> {phone} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', ...commonStyles.mt_15 }}>
                    <View>
                        <Icon type="FontAwesome" name="phone" style={{ ...commonStyles.color_grey, ...commonStyles.fontSize3 }} />
                    </View>
                    <View style={{ ...commonStyles.pl_20 }}>
                        <Text style={{ ...commonStyles.color_blue, ...commonStyles.fontSize1 }}> {siteUrl} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', ...commonStyles.mt_15 }}>
                    <View>
                        <Icon type="FontAwesome" name="phone" style={{ ...commonStyles.color_grey, ...commonStyles.fontSize3 }} />
                    </View>
                    <View style={{ ...commonStyles.pl_20 }}>
                        <Text style={{ ...commonStyles.color_black, ...commonStyles.fontSize1 }}> {info} </Text>
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, ...commonStyles.bordercolor, ...commonStyles.mt_15, marginHorizontal: -20 }} />
                <View style={{ ...commonStyles.mt_20 }} >
                    <Text style={styles.textBold} >PHOTOS</Text>
                </View>
                <FlatList
                    style={{ ...commonStyles.mt_15 }}
                    data={veterinarianData}
                    horizontal
                    renderItem={({ item }) =>
                        <View
                            style={{ marginRight: 10 }}
                        >
                            <Image
                                source={item.img}
                                style={styles.imgVeterinarian}
                            />
                        </View>
                    }
                />
                <View style={{ borderBottomWidth: 1, ...commonStyles.bordercolor, ...commonStyles.mt_20, marginHorizontal: -20 }} />
                <View style={{ ...commonStyles.mt_20 }} >
                    <Text style={styles.textBold} >REVIEWS</Text>
                </View>
                <View style={{ alignItems: 'center', ...commonStyles.mt_20 }}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../../../Images/icon2.png')}
                    />
                </View>
                <View style={{ alignItems: 'center', ...commonStyles.mt_20 }}>
                    <Text style={{ ...commonStyles.fontSize1, ...commonStyles.color_black }} >How would you rate our Restaurant?</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 3 }}>
                    <Text style={{ ...commonStyles.fontSize1, ...commonStyles.color_grey }} >Share your experience</Text>
                </View>
                <View style={{ ...commonStyles.mt_15, alignItems: 'center' }} >
                    <FlatList
                        data={emotionData}
                        extraData={this.state}
                        horizontal
                        renderItem={({ item }) =>
                            <View style={{ alignItems: 'center', marginHorizontal: 3 }}>
                                <Button
                                    horizontal
                                    rounded
                                    style={this.state.indexEmotion == item.id ? styles.emotionButton_sel : styles.emotionButton}
                                    onPress={() => { this.setState({ indexEmotion: item.id }); }}
                                >
                                    <Image
                                        source={this.state.indexEmotion == item.id ? item.img2 : item.img1}
                                        style={this.state.indexEmotion == item.id ? styles.imgEmotion_sel : styles.imgEmotion}
                                    />
                                </Button>
                                <View
                                >
                                    <Text
                                        style={[{ ...commonStyles.fontSize1, },
                                        this.state.indexEmotion == item.id ? commonStyles.color_grey : { color: 'transparent' }
                                        ]}
                                    >
                                        {item.description}
                                    </Text>
                                </View>
                            </View>
                        }
                    />
                </View>
                <View style={{ borderBottomWidth: 1, ...commonStyles.bordercolor, ...commonStyles.mt_20, marginHorizontal: -20 }} />
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={styles.textBold} >REVIEWS</Text>

                </TouchableOpacity>

                <View style={{ borderBottomWidth: 1, ...commonStyles.bordercolor, ...commonStyles.mt_20, marginHorizontal: -20 }} />
                <View style={{ height: 500 }} />
            </View>
        )
    }
}

export default OverViewTab;