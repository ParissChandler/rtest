import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    Platform
} from 'react-native';

class App extends Component {
    render() {
        return (
            <Provider store={{store: 'store'}}>
                <View style={Styles.main}>
                    <Text>
                        This is a test project for Rez
                    </Text>
                </View>
            </Provider>
        )
    }
};

export default App;

const Styles = StyleSheet.create({
    main: {
        marginTop: 20
    }
})