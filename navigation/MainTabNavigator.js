import React from 'react';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';

import ScheduleScreen from "../screens/ScheduleScreen";
import FavoriteScheduleScreen from "../screens/FavoriteScheduleScreen";
import SpeakersScreen from "../screens/SpeakersScreen";
import GalleryScreen from "../screens/GalleryScreen";
import AboutScreen from "../screens/AboutScreen";

import Colors from "../constants/Colors";
import Ionicon from 'react-native-vector-icons/Ionicons';
import Layout from "../constants/Layout";


// const createTab = (screen, icon) => ({
//     screen: screen,
//     navigationOptions: {
//         tabBarIcon: ({focused}) => (
//             <Ionicon
//                 name={icon}
//                 color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
//                 size={Layout.icon_size}
//             />
//         )
//     }
// });
//
// export default MainTabNavigator = createMaterialTopTabNavigator(
//     {
//         Schedule: createTab(ScheduleScreen, "md-calendar"),
//         FavoriteSchedule: createTab(FavoriteScheduleScreen, "md-star"),
//         Speakers: createTab(SpeakersScreen, "md-contacts"),
//         Gallery: createTab(GalleryScreen, "md-images"),
//         About: createTab(AboutScreen, "md-information-circle")
//     },
//     {
//         tabBarPosition: 'bottom',
//         tabBarOptions : {
//             labelStyle: {
//                 fontSize: 8,
//             },
//             showLabel : true,
//             showIcon : true,
//             style: {
//                 backgroundColor: Colors.tabBar
//             },
//             indicatorStyle: {
//                 backgroundColor: Colors.primaryColor,
//                 opacity: .8
//             }
//         },
//     }
// )

const ScheduleStack = createStackNavigator({
    Home: ScheduleScreen,
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
    Home: FavoriteScheduleScreen,
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
    Home: SpeakersScreen,
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
