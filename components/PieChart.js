import React, { Component } from 'react';
import {
  requireNativeComponent
} from 'react-native';
import PropTypes from 'prop-types';

import {
  globalCommonProps,
  pieRadarCommonProps,
  commonDataSetProps
} from '../utils/commonProps';

import { processColors } from '../utils/commonColorProps';
const RNPieChart = requireNativeComponent('RNPieChartSwift', PieChart);


class PieChart extends Component {
  render() {
    let { config, ...otherProps } = this.props;
    config = JSON.stringify(processColors(config));
    return <RNPieChart config={config} {...otherProps} />;
  }
}

PieChart.propTypes = {
  config: PropTypes.shape({
    ...globalCommonProps,
    ...pieRadarCommonProps,
    dataSets: PropTypes.arrayOf(PropTypes.shape({
      ...commonDataSetProps,
      sliceSpace: PropTypes.number,
      selectionShift: PropTypes.number
    })),
    labels: PropTypes.arrayOf(PropTypes.string),
    holeColor: PropTypes.string,
    holeTransparent: PropTypes.bool,
    holeAlpha: PropTypes.number,
    drawHoleEnabled: PropTypes.bool,
    centerText: PropTypes.string,
    drawCenterTextEnabled: PropTypes.bool,
    holeRadiusPercent: PropTypes.number,
    transparentCircleRadiusPercent: PropTypes.number,
    drawSliceTextEnabled: PropTypes.bool,
    usePercentValuesEnabled: PropTypes.bool,
    centerTextRadiusPercent: PropTypes.number,
    maxAngle: PropTypes.number
  }),
  onSelect: PropTypes.func,
};

export default PieChart;
