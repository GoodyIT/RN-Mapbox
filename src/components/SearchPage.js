import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';
import { initialSearch, loadMore, destroy, search } from '../ducks/PlacesSearch';

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    };
  }

  componentWillMount = () => {
    const { initialSearch: initialSearchPlaces } = this.props;
    initialSearchPlaces();
  };

  componentWillUnmount = () => {
    const { destroy: clearPlaces } = this.props;
    clearPlaces();
  };

  getMoreResults = () => {
    const { page, loadMore: loadMorePlaces, loading } = this.props;
    const { filter: name } = this.state;
    const filter = { name };
    if (!loading) loadMorePlaces({ page: page + 1, filter });
  };

  search = () => {
    const { filter: name } = this.state;
    const filter = { name };
    const { search: searchProps, initialSearch } = this.props;
    if (filter.name) {
      searchProps(filter);
    } else {
      initialSearch();
    }
  };

  _renderItem = (places, refreshing) => {
    return (
      <FlatList
        renderItem={p => (
          <Text key={`${Math.random()}`} style={{ padding: 25 }}>
            {p && p.item.name}
          </Text>
        )}
        data={places}
        keyExtractor={() => `${Math.random()}`}
        onEndReached={this.getMoreResults}
        onRefresh={this.search}
        refreshing={refreshing}
      />
    )
  }

  render() {
    const { places, refreshing } = this.props;
    return (
      <Container>
        <Header searchBar transparent rounded>
          <Item rounded>
            <Icon name="arrow-back" />
            <Input
              placeholder="Search"
              onChangeText={value => this.setState({ filter: value.toLowerCase() })}
              onSubmitEditing={this.search}
            />
            <Icon button onPress={this.search} name="ios-search" />
          </Item>
          <Button onPress={this.search} transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        {refreshing && <Spinner color='green' />}
        {!!places.length && this._renderItem(places, refreshing)}
      </Container>
    );
  }
}
SearchPage.propTypes = {
  initialSearch: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  refreshing: PropTypes.bool.isRequired,
  places: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({
  ...state.placesSearch,
});
const mapDispatchToProps = {
  initialSearch,
  loadMore,
  destroy,
  search,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
