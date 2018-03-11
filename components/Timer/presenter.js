import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import Button from '../Button';

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    time -= minutes * 60;
    let seconds = parseInt(time % 60, 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

class Timer extends Component {
    /**
     * Call every time will get new props
     */
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        //console.log(`current: ${currentProps.isPlaying} new ones: ${nextProps.isPlaying}`);

        if (!currentProps.isPlaying && nextProps.isPlaying) {
            /// start the interval
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);

            this.setState({
                timerInterval,
            });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            /// stop the interval
            clearInterval(this.state.timerInterval);
        }
    }
    render() {
        console.log(this.props);
        const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;
        return (
            <LinearGradient style={styles.container} colors={['#5c76af', '#3b5998', '#192f6a']}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
                </View>
                <View style={styles.lower}>
                    {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
                    {isPlaying && <Button iconName="stop-circle" onPress={restartTimer} />}
                </View>
            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lower: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    time: {
        color: 'white',
        fontSize: 120,
        fontWeight: '100',
    },
});

export default Timer;
