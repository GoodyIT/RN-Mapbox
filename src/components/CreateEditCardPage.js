import React, { Component } from 'react';
import { Container, Content, Text, Button, Item, Input, Form, DatePicker } from 'native-base';
import { Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { commonStyles } from '../modules';
import FiltersBadge from './FiltersBadge';

class ProfileCardEditPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { chosenDate: new Date() };
  //   this.setDate = this.setDate.bind(this);
  // }

  // setDate(newDate) {
  //   this.setState({ chosenDate: newDate });
  // }

  render() {
    // const { chosenDate } = this.state;
    const imageURL = 'https://www.flirt.com/blog/wp-content/uploads/flirt-com/Black-Cat.jpg';

    return (
      <Container style={{ paddingTop: getStatusBarHeight() }}>
        <Content>
          <Grid>
            <Row style={{}}>
              <Col style={{ ...commonStyles.pl_10, ...commonStyles.pr_5 }}>
                <Button full success style={{ ...commonStyles.rounded_10 }}>
                  <Text>Take a pic</Text>
                </Button>
              </Col>
              <Col style={{ ...commonStyles.pr_10, ...commonStyles.pl_5 }}>
                <Button full success style={{ ...commonStyles.rounded_10 }}>
                  <Text>Choose pic</Text>
                </Button>
              </Col>
            </Row>
            <Image
              source={{ uri: imageURL }}
              style={{ height: 230, width: 'auto', flex: 1, marginTop: 20 }}
            />
          </Grid>

          <Grid>
            <Row style={{ flexDirection: 'column' }}>
              <FiltersBadge filters={['Filter', 'Filter', 'Filter', 'Filter']} />
            </Row>
          </Grid>

          <Grid style={{ margin: 5 }}>
            <Form>
              <Item>
                <Input placeholder="Enter text overlay..." />
              </Item>
              <Item>
                <DatePicker
                  defaultDate={new Date(2018, 4, 4)}
                  minimumDate={new Date(2018, 1, 1)}
                  maximumDate={new Date(2018, 12, 31)}
                  locale="en"
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType="fade"
                  androidMode="default"
                  placeHolderText="Select date"
                  placeHolderTextStyle={{ color: '#d3d3d3' }}
                  onDateChange={this.setDate}
                />
                {/* <Text style={{ }}>Date: {chosenDate.toString().substr(4, 12)}</Text> */}
              </Item>
            </Form>
            <Row style={{ marginTop: 10 }}>
              <Col style={{ ...commonStyles.pr_10, ...commonStyles.pl_5 }}>
                <Button success style={{ alignSelf: 'center', ...commonStyles.rounded_10 }}>
                  <Text>Save</Text>
                </Button>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

export default ProfileCardEditPage;
