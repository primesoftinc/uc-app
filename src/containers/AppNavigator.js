import React, { Component } from 'react';
import { createStackNavigator, createAppContainer, TabBarBottom, createSwitchNavigator } from 'react-navigation';
import InitialScreen from '../components/InitialScreen';

const AppRoutes = createStackNavigator({
    InitialScreen,
});

export default createAppContainer(AppRoutes);