import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Colors from "../constants/Colors";
import FirstDayFavoriteScreen from "../screens/FirstDayFavoriteScreen";
import SecondDayFavoriteScreen from "../screens/SecondDayFavoriteScreen";
import ThirdDayFavoriteScreen from "../screens/ThirdDayFavoriteScreen";


export default FavoriteNavigator = createMaterialTopTabNavigator(
    {
        FirstDay: FirstDayFavoriteScreen,
        SecondDay: SecondDayFavoriteScreen,
        ThirdDay: ThirdDayFavoriteScreen,
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