import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import FirstDayScreen from "../screens/FirstDayScreen";
import SecondDayScreen from "../screens/SecondDayScreen";
import ThirdDayScreen from "../screens/ThirdDayScreen";
import Colors from "../constants/Colors";


export default ScheduleNavigator = createMaterialTopTabNavigator(
    {
        FirstDay: FirstDayScreen,
        SecondDay: SecondDayScreen,
        ThirdDay: ThirdDayScreen,
    },
    {
        tabBarPosition: 'top',
        tabBarOptions : {
            showLabel : true,
            showIcon : false,
            style: {
                backgroundColor: Colors.primaryColor
            },
            indicatorStyle: {
                backgroundColor: 'white',
                opacity: 1.0
            }
        },

    }
)