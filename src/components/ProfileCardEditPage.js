import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Title, Subtitle, Button, Thumbnail } from 'native-base';
import { Image } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { commonStyles } from '../modules';
import { getProfileInfo } from '../ducks/ProfileInfo';
import Map from './Map';
import ProfilesCard from './ProfilesCard';
import FiltersBadge from './FiltersBadge';

const imageURL =
  'https://u.tfstatic.com/restaurant_photos/581/201581/169/612/kombi-bar-vue-de-la-salle-87e4b.jpg';
const uri =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Tom%27s_Restaurant%2C_NYC.jpg/220px-Tom%27s_Restaurant%2C_NYC.jpg';

class ProfileCardEditPage extends React.Component {
  componentDidMount = () => {
    const { getProfileInfo: getProfile } = this.props;
    getProfile(3261);
  };

  render() {
    const { place, navigation } = this.props;
    const { lat, lng } = place;
    return (
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col>
                <Title
                  numberOfLines={2}
                  style={{
                    color: 'black',
                    ...commonStyles.text_align_left,
                    ...commonStyles.px_10,
                  }}>
                  {place.name}
                </Title>
              </Col>
              <Col style={{ ...commonStyles.w_auto }}>
                <Ionicons
                  onPress={() => navigation.navigate('CreateEditCard')}
                  name="ios-create"
                  size={25}
                  style={{ ...commonStyles.blue }}
                />
              </Col>
              <Col style={{ ...commonStyles.w_auto, ...commonStyles.px_10 }}>
                <Thumbnail large source={{ uri }} />
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row style={{ flexDirection: 'column' }}>
              <Col style={{ ...commonStyles.px_10 }}>
                <Subtitle style={{ color: 'black', textAlign: 'left' }}>Category</Subtitle>
              </Col>
              <Col
                style={{
                  paddingTop: 7,
                  paddingBottom: 7,
                  paddingLeft: 5,
                  paddingRight: 5,
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}>
                <FiltersBadge
                  filters={['Music', 'Television', 'Food', 'Internet', 'Harmonica Music']}
                />
              </Col>
            </Row>
          </Grid>
          <Image source={{ uri: imageURL }} style={{ height: 130, width: 'auto', flex: 1 }} />
          <Text style={{ ...commonStyles.px_10 }} note>
            Note about this place
          </Text>
          <Grid style={{ ...commonStyles.my_10 }}>
            <Row>
              <Col>
                <Map lat={lat} lng={lng} />
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row style={{}}>
              <Col style={{ ...commonStyles.pl_10, ...commonStyles.pr_5 }}>
                <Button full success style={{ ...commonStyles.rounded_10 }}>
                  <Text>
                    <Ionicons name="ios-call" size={25} color="white" />
                  </Text>
                </Button>
              </Col>
              <Col style={{ ...commonStyles.pr_10, ...commonStyles.pl_5 }}>
                <Button full success style={{ ...commonStyles.rounded_10 }}>
                  <Text>
                    <Ionicons name="ios-chatbubbles" size={25} color="white" />
                  </Text>
                </Button>
              </Col>
            </Row>
          </Grid>
          <ProfilesCard cardText="Feed card" />
        </Content>
      </Container>
    );
  }
}
ProfileCardEditPage.propTypes = {
  getProfileInfo: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  ...state.profileInfo,
});
const mapDispatchToProps = {
  getProfileInfo,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCardEditPage);
