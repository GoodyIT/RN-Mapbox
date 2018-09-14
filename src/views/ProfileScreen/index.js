import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Dimensions, View, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon, Text, Picker } from 'native-base';
import HeaderImageScrollView from 'react-native-image-header-scroll-view';
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

const STAR_IMAGE = require('../../Images/star.png')
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
    renderContent() {
        return (
            <View style={styles.container}>
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
                                    type='custom'
                                    imageSize={15}
                                    ratingBackgroundColor='transparent'
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
            </View>
        )
    }
    renderHeader() {
        return (
            <View style={{ justifyContent: 'space-between', flex: 1, paddingBottom: 50, zIndex: 1 }}>
                <View></View>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ ...commonStyles.color_white, ...commonStyles.fontSize1 }}>Veterinary</Text>
                        </View>
                        <View style={{ marginLeft: 15 }}>
                            <Text style={{ ...commonStyles.color_green, ...commonStyles.fontSize1 }}>Best</Text>
                        </View>
                    </View>
                    <View style={{ ...commonStyles.mt_20 }}>
                        <Text style={{ ...commonStyles.color_white, ...commonStyles.fontSize4 }}>Animal Specialty Center</Text>
                    </View>
                    <View style={{ flexDirection: 'row', ...commonStyles.mt_20, alignItems: 'center' }}>
                        <Rating
                            imageSize={15}
                            ratingCount={5}
                        />
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ ...commonStyles.color_white, ...commonStyles.fontSize2 }}>108 reviews</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', ...commonStyles.mt_7, alignItems: 'center' }}>
                        <Text style={{ ...commonStyles.color_white, ...commonStyles.fontSize2 }}>900m - 5min</Text>
                    </View>
                    <Icon type='Feather' name='heart' style={{ color: 'white', fontSize: 24, ...commonStyles.mt_20 }} />

                </View>
            </View>
        )
    }
    renderFixedHeader() {
        const { goBack } = this.props.navigation;
        return (
            <View style={{ justifyContent: 'space-between', height: 100, width: '100%', paddingBottom: 50, position: 'absolute', overflow: 'hidden' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        style={{ padding: 20 }}
                        onPress={() => goBack()}
                    >
                        <Icon type='Entypo' name='chevron-thin-left' style={{ color: 'white', ...commonStyles.fontSize3 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 20 }}>
                        <Icon type='EvilIcons' name='share-apple' style={{ color: 'white', fontSize: 40 }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderImageScrollView
                    style={{ zIndex: 1 }}
                    maxHeight={height}
                    maxOverlayOpacity={0}
                    minHeight={100}
                    renderHeader={() => (<Image source={require('../../Images/profile_back.jpg')} />)}
                    renderForeground={() => this.renderHeader()}
                    foregroundParallaxRatio={3}
                // renderFixedForeground={() => this.renderFixedHeader()}
                >
                    {this.renderContent()}
                </HeaderImageScrollView>
                {
                    this.renderFixedHeader()
                }
            </View>
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