import React, { Component } from 'react';

import Error from 'components/error/error.component';

import { ErrorBoundaryContainer } from './error-boundary.styles';

/* -------------------------------------------------------------------------- */

class ErrorBoundary extends Component {
  state = {
    hasErrored: false,
  };

  // Catch error in any of the children
  static getDerivedStateFromError() {
    return { hasErrored: true };
  }

  render() {
    const { hasErrored } = this.state;
    const { children } = this.props;

    return hasErrored ? (
      <ErrorBoundaryContainer>
        <Error />
      </ErrorBoundaryContainer>
    ) : (
      children
    );
  }
}

/* -------------------------------------------------------------------------- */

export default ErrorBoundary;
