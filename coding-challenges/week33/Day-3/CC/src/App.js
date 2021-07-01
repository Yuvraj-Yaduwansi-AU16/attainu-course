import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { incrementcnt, decrementcnt } from './actions';
const App = ({ counter, incrementcnt, decrementcnt }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <button onClick={() => incrementcnt()}>Increment Counter</button>
    <h1 style={{ margin: '100px' }}>Counter: {counter}</h1>
    <button onClick={() => decrementcnt()}>Decrement Counter</button>
  </div>
);
const mapStateToProps = (state) => ({
  counter: state.counter,
});
App.propTypes = {
  counter: PropTypes.number,
  incrementcnt: PropTypes.func.isRequired,
  decrementcnt: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { incrementcnt, decrementcnt })(App);
