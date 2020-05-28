import React from 'react';
import PropTypes from 'prop-types';

const LinearGradient = props => {
  const { data } = props;
  const boxStyle = {
    width: 180,
    margin: 'auto'
  };
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${data.fromColor} , ${data.toColor})`,
    height: 20
  };
  return (
    <View>
      <View style={boxStyle} className="display-flex">
        <span>{data.min}</span>
        <span className="fill"></span>
        <span>{data.max}</span>
      </View>
      <View style={{ ...boxStyle, ...gradientStyle }} className="mt8"></View>
    </View>
  );
};

LinearGradient.propTypes = {
  data: PropTypes.object.isRequired
};

export default LinearGradient;
