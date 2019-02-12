import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import Colors from "../constants/Colors";
import FirstDayFavoriteScreen from "../screens/FirstDayFavoriteScreen";
import SecondDayFavoriteScreen from "../screens/SecondDayFavoriteScreen";
import ThirdDayFavoriteScreen from "../screens/ThirdDayFavoriteScreen";
import TabBarLabel from "../components/TabBarLabel";


export default FavoriteNavigator = createMaterialTopTabNavigator(
    {
        FirstDay : {
            screen : FirstDayFavoriteScreen,
            navigationOptions : {
                tabBarLabel : ({focused}) => (
                    <TabBarLabel
                        focused={focused}
                        index={0} />
                ),
            }
        },
        SecondDay: {
            screen : SecondDayFavoriteScreen,
            navigationOptions : {
                tabBarLabel : ({focused}) => (
                    <TabBarLabel
                        focused={focused}
                        index={1}/>
                )
            }
        },
        ThirdDay: {
            screen : ThirdDayFavoriteScreen,
            navigationOptions : {
                tabBarLabel : ({focused}) => (
                    <TabBarLabel
                        focused={focused}
                        index={2}/>
                ),
            }
        },
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