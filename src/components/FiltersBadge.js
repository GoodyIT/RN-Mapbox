import React from 'react';
import PropTypes from 'prop-types';
import { Badge, Text } from 'native-base';
import { Grid } from 'react-native-easy-grid';
import { commonStyles } from '../modules';

const FiltersBadge = ({ filters }) => (
  <Grid
    style={{
      paddingTop: 7,
      paddingBottom: 7,
      paddingLeft: 5,
      paddingRight: 5,
      flexWrap: 'wrap',
    }}>
    {filters.map(filter => (
      <Badge key={`${Math.random()}`} warning style={commonStyles.m_2}>
        <Text>{filter}</Text>
      </Badge>
    ))}
  </Grid>
);

FiltersBadge.propTypes = {
  filters: PropTypes.array.isRequired,
};

export default FiltersBadge;
