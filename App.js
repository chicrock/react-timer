import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Timer from './components/Timer';

import reducer from './reduser';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/// create redux store with reducer I made
let store = createStore(reducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Timer />
            </Provider>
        );
    }
}
