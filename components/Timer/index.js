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
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
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
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch),
    };
}

/// connect can connect with Timer and mapStateToProps components
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
