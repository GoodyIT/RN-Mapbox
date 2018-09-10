import React from 'react';
import { Text, CardItem, Card, Body } from 'native-base';
import PropTypes from 'prop-types';
import { commonStyles } from '../modules';

// DATA STRUCRURE^
// photo_cat_id: 3,
// photo_id: 3,
// label: "string",
// confidence: 3,
// cat_0: "string",
// cat_1: "string",
// cat_2: "string",
// cat_3: "string",
// cat_4: "string",
// cat_5: "string",
// cat_6: "string",
// cat_7: "string"

const CategoryCard = props => {
  const { photo_cat_id: photoCatId, label } = props;
  return (
    <Card style={{ ...commonStyles.rounded_10 }} key={photoCatId}>
      <CardItem style={{ ...commonStyles.rounded_10 }}>
        <Body style={{ ...commonStyles.rounded_10 }}>
          <Text style={{ display: 'flex', width: '100%', textAlign: 'center' }}>{label}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};

CategoryCard.propTypes = {
  photo_cat_id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CategoryCard;
