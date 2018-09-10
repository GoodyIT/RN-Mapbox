import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Modal } from 'react-native';
import { Title, Subtitle } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { commonStyles } from '../modules';

const PlaceShortInfoModal = props => {
  const { visible, toggleVisibility } = props;

  return (
    <Modal
      animationType="fade"
      transparent
      visible={visible}
      onRequestClose={() => {
        alert('Modal has been closed.');
      }}>
      <TouchableHighlight
        style={{ height: '100%' }}
        onPress={() => {
          toggleVisibility(false);
        }}>
        <Grid
          style={{
            backgroundColor: '#00000050',
            justifyContent: 'center',
          }}>
          <Row
            style={{
              height: 'auto',
            }}>
            <Col
              style={{
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 10,
                marginLeft: 7,
                marginRight: 7,
              }}>
              <Title style={{ ...commonStyles.color_black }}>Place name</Title>
              <Subtitle style={{ ...commonStyles.color_black }}>Category</Subtitle>
            </Col>
          </Row>
        </Grid>
      </TouchableHighlight>
    </Modal>
  );
};

PlaceShortInfoModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default PlaceShortInfoModal;
