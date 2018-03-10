import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { LinearGradient } from 'expo';

import Button from '../Button';

class Timer extends Component {
    render() {
        return (
            <LinearGradient style={styles.container} colors={['#5c76af', '#3b5998', '#192f6a']}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Button iconName="play-circle" onPress={() => alert('it works!')} />
                    <Button iconName="stop-circle" onPress={() => alert('it works!')} />
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
