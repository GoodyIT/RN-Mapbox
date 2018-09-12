import React, { Component } from 'react';
import { Switch, ImageBackground, Image, Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Content, Button, Icon, Text, Thumbnail, Badge, Picker } from 'native-base';
import { Col, Grid } from 'react-native-easy-grid';
import { commonStyles } from '../../modules';
import styles from './styles';

var { height, width } = Dimensions.get('window');

class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={styles.container}>
                <View>
                    <ImageBackground resizeMode='stretch' source={require('../../Images/profile_back.jpg')} style={{ height: 120, width: width }} />
                </View>

                <Content style={{ ...commonStyles.rounded_topLeft_20, ...commonStyles.rounded_topRight_20, ...commonStyles.pt_20 }}>
                    <Grid style={{ ...commonStyles.px_20 }}>
                        <View>
                            <Image source={require('../../Images/icon_1.png')} style={{ width: 60, height: 40 }} />
                        </View>
                        <View style={{ ...commonStyles.px_10, ...commonStyles.mt_7 }}>
                            <Text style={{ ...commonStyles.fontColor_black, ...commonStyles.fontSize_20 }}>Animal Specialty Center</Text>
                        </View>
                        <View>
                            <Button rounded color='red' style={styles.button_heart}>
                                <Icon type="FontAwesome" name="heart" style={{ color: '#f8c415', marginRight: 0, marginLeft: 0 }} />
                            </Button>
                        </View>
                    </Grid>
                </Content>
            </Container>
        )
    }
}

ProfilePage.propTypes = {
    // logOut: PropTypes.func.isRequired,
};

export default ProfilePage;