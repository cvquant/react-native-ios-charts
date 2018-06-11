import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

import {
  globalCommonProps,
  barLineCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';
const RNBubbleChart = requireNativeComponent('RNBubbleChartSwift', BubbleChart);

class BubbleChart extends Component {
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNBubbleChart config={config} {...otherProps} />;
  }
}

BubbleChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...barLineCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      values: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number,
        size: PropTypes.number
      })).isRequired,
      highlightCircleWidth: PropTypes.number
    }))
  }),
  onSelect: PropTypes.func,
};

export default BubbleChart;
