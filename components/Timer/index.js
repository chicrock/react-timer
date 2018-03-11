import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as tomatoActions } from '../../reducer';
import Timer from './presenter';

/**
 * bind props and state (it's variables in reducer)
 *
 * @param {*} state
 */
function mapStateToProps(state) {
    const { isPlaying, elapedTime, timerDuration } = state;
    return {
        isPlaying,
        elapedTime,
        timerDuration,
    };
}

/**
 * bind props and dispatch (it's function in reducer)
 *
 * @param {*} dispatch
 */
function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    };
}

/// connect can connect with Timer and mapStateToProps components
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
