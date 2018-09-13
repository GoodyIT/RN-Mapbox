import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch, ImageBackground, Image, Dimensions, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Content, Button, Icon, Text, Thumbnail, Badge, Picker } from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { Col, Grid } from 'react-native-easy-grid';
import { Rating } from 'react-native-ratings';
import { commonStyles } from '../../modules';

import OverViewTab from './OverViewTab';

import styles from './styles';

var { height, width } = Dimensions.get('window');

const tabVarItems = [
    {
        id: 0,
        title: 'OVERVIEW'
    },
    {
        id: 1,
        title: 'REVIEWS'
    },
    {
        id: 2,
        title: 'PHOTOS'
    }
]

const dataReviews = [
    {
        id: 0,
        img: require('../../Images/face1.jpg')
    },
    {
        id: 1,
        img: require('../../Images/face2.jpg')
    }
]
class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            indexTab: 0,
        }
    }
    renderTabView(index) {
        switch (index) {
            case 0:
                return <OverViewTab />;
                break;
            case 1:
                return ReviewsRoute();
                break;
            case 2:
                return PhotosRoute();
                break;
        }
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <ImageBackground resizeMode='stretch' source={require('../../Images/profile_back.jpg')} style={{ height: 120, width: width }} />
                </View>

                <View style={styles.contentView}>
                    <View style={styles.titleView1}>
                        <View>
                            <Image source={require('../../Images/icon_1.png')} style={{ width: 60, height: 40 }} />
                        </View>
                        <View style={{ ...commonStyles.px_15, flex: 1 }}>
                            <Text style={{ ...commonStyles.color_black, ...commonStyles.fontSize2 }}>Animal Specialty Center</Text>
                        </View>
                        <Button rounded style={styles.button_heart}>
                            <Icon type="FontAwesome" name="heart" style={{ color: '#f8c415', marginRight: 0, marginLeft: 0 }} />
                        </Button>
                    </View>
                    <View style={styles.titleView1}>
                        <View style={{ marginLeft: 75 }}>
                            <Text style={{ ...commonStyles.color_grey, ...commonStyles.fontSize1 }}>Veterinary</Text>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ ...commonStyles.color_green, ...commonStyles.fontSize1 }}>Best</Text>
                        </View>
                    </View>
                    <View style={styles.titleView2}>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Rating
                                    imageSize={15}
                                    rating={1}
                                    ratingBackgroundColor='#ff0000'
                                    fill-color='red'
                                    ratingCount={5}
                                />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={{ ...commonStyles.color_grey, ...commonStyles.fontSize1 }}>108 reviews</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', ...commonStyles.mt_7 }}>
                                <Text style={{ ...commonStyles.color_black, ...commonStyles.fontSize1 }}>900m - 5min</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 15, flexDirection: 'row', width: 120, justifyContent: 'flex-end' }}>
                            <View>
                                <FlatList
                                    data={dataReviews}
                                    horizontal
                                    renderItem={({ item }) =>
                                        <Image source={item.img} style={{ width: 30, height: 30, borderRadius: 15, marginLeft: 3 }} />
                                    }
                                />
                            </View>
                            <Button rounded style={styles.button_addReview}>
                                <Text style={{ ...commonStyles.color_black, ...commonStyles.fontSize1, paddingLeft: 0, paddingRight: 0 }}>+</Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <View style={{ height: 20 }} />

                <View style={{ borderBottomWidth: 1, ...commonStyles.bordercolor, paddingHorizontal: 20 }}>
                    <FlatList
                        data={tabVarItems}
                        extraData={this.state}
                        horizontal
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.tabItemButton}
                                onPress={() => { this.setState({ indexTab: item.id }) }}
                            >
                                <View style={{ height: 2 }} />
                                <Text style={this.state.indexTab == item.id ? styles.tabItemText_sel : styles.tabItemText}>{item.title}</Text>
                                <View style={{ width: 20, height: 2, backgroundColor: this.state.indexTab == item.id ? 'black' : 'transparent' }} />
                            </TouchableOpacity>
                        }
                    />
                </View>
                {
                    this.renderTabView(this.state.indexTab)
                }
            </ScrollView >
        )
    }
}

const ReviewsRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);
const PhotosRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);

ProfilePage.propTypes = {
    // logOut: PropTypes.func.isRequired,
};

export default ProfilePage;