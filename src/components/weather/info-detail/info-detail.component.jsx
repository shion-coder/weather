import React from 'react';

import InfoDetailSummary from 'components/weather/info-detail-summary/info-detail-summary.component';
import InfoDetailOther from 'components/weather/info-detail-other/info-detail-other.component';

import { InfoDetailContainer } from './info-detail.styles';

/* -------------------------------------------------------------------------- */

const InfoDetail = () => (
  <InfoDetailContainer>
    <InfoDetailSummary />
    <InfoDetailOther />
  </InfoDetailContainer>
);

/* -------------------------------------------------------------------------- */

export default InfoDetail;
