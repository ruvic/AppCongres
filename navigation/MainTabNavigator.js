import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import ScheduleScreen from "../screens/ScheduleScreen";
import FavoriteScheduleScreen from "../screens/FavoriteScheduleScreen";
import SpeakersScreen from "../screens/SpeakersScreen";
import SpeakersDetailsScreen from "../screens/SpeakerDetailsScreen";
import GalleryScreen from "../screens/GalleryScreen";
import AboutScreen from "../screens/AboutScreen";
import ActivityDetailsScreen from "../screens/ActivityDetailsScreen";

import Colors from "../constants/Colors";
import Ionicon from 'react-native-vector-icons/Ionicons';
import Layout from "../constants/Layout";


const ScheduleStack = createStackNavigator({
    Schedule: ScheduleScreen,
    ActivityDetails : ActivityDetailsScreen,
});

ScheduleStack.navigationOptions = {
    tabBarLabel: 'Schedule',
    tabBarIcon: ({ focused }) => (
        <Ionicon
            name={"md-calendar"}
            color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
            size={Layout.icon_size}
        />
    ),
};

const FavoriteStack = createStackNavigator({
    FavoriteHome: FavoriteScheduleScreen,
    FavoriteActivityDetails : ActivityDetailsScreen,
});

FavoriteStack.navigationOptions = {
    tabBarLabel: 'My Schedule',
    tabBarIcon: ({ focused }) => (
        <Ionicon
            name={"md-star"}
            color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
            size={Layout.icon_size}
        />
    ),

};

const SpeakerStack = createStackNavigator({
    SpeakerHome: SpeakersScreen,
    SpeakerDetails: SpeakersDetailsScreen,
});

SpeakerStack.navigationOptions = {
    tabBarLabel: 'Speaker',
    tabBarIcon: ({ focused }) => (
        <Ionicon
            name={"md-contacts"}
            color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
            size={Layout.icon_size}
        />
    ),
};

const GalleryStack = createStackNavigator({
    Home: GalleryScreen,
});

GalleryStack.navigationOptions = {
    tabBarLabel: 'Gallery',
    tabBarIcon: ({ focused }) => (
        <Ionicon
            name={"md-images"}
            color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
            size={Layout.icon_size}
        />
    ),
};

const AboutStack = createStackNavigator({
    Home: AboutScreen,
});

AboutStack.navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({ focused }) => (
        <Ionicon
            name={"md-information-circle"}
            color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
            size={Layout.icon_size}
        />
    ),
};



export default createBottomTabNavigator({
    ScheduleStack,
    FavoriteStack,
    SpeakerStack,
    GalleryStack,
    AboutStack,
}, {
    tabBarOptions: {
        activeTintColor: Colors.primaryColor,
        inactiveTintColor : Colors.inactiveBarIconColor,
    }
});
