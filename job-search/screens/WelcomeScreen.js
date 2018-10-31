import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to JobApp', color: '#03A9F4' },
    { text: 'An app that will help you to find a job', color: '#009688' },
    { text: 'If you think you are ready, we can beggin.', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }
    

    render() {
        return (
            <Slides 
                data={SLIDE_DATA} 
                onComplete={this.onSlidesComplete}      
            />
        );
    }
}

export default WelcomeScreen;