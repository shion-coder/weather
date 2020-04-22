import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { selectSearchFetchError } from 'redux/search-fetch/search-fetch.selectors';
import { clearErrorMessage } from 'redux/search-fetch/search-fetch.actions';

import { ErrorContainer, Message, ButtonContainer, CloseButton } from './error.styles';

/* -------------------------------------------------------------------------- */

const Error = ({ theme, error, clearErrorMessage }) => {
  const message = error.message || 'Something went wrong !';

  return (
    <ErrorContainer background={theme}>
      <Message>{message}</Message>

      <ButtonContainer onClick={clearErrorMessage}>
        <CloseButton role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </CloseButton>
      </ButtonContainer>
    </ErrorContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
  error: selectSearchFetchError,
});

Error.propTypes = {
  theme: PropTypes.string,
  error: PropTypes.object,
  clearErrorMessage: PropTypes.func,
};

export default connect(mapStateToProps, { clearErrorMessage })(Error);
