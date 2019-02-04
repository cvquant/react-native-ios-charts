//
//  RNPieChart.swift
//  PoliRank
//
//  Created by Jose Padilla on 2/8/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

import Charts
import SwiftyJSON

@objc(RNBubbleChart)
class RNBubbleChart : BubbleChartView {

  override init(frame: CGRect) {
    super.init(frame: frame);
    self.frame = frame;
  }

  required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented");
  }

  func setConfig(_ config: String!) {
    setBarLineChartViewBaseProps(config);

    var labels: [String] = [];

    var json: JSON = nil;
    if let data = config.data(using: String.Encoding.utf8) {
      json = try! JSON(data: data);
    };

    if json["labels"].exists() {
      labels = json["labels"].arrayValue.map({$0.stringValue});
    }

    self.data = getBubbleData(labels, json: json);

  }

}
