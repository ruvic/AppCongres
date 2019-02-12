import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import FirstDayScreen from "../screens/FirstDayScreen";
import SecondDayScreen from "../screens/SecondDayScreen";
import ThirdDayScreen from "../screens/ThirdDayScreen";
import Colors from "../constants/Colors";
import TabBarLabel from "../components/TabBarLabel";


export default ScheduleNavigator = createMaterialTopTabNavigator(
    {
        FirstDay : {
            screen : FirstDayScreen,
            navigationOptions : {
                tabBarLabel : ({focused}) => (
                    <TabBarLabel
                        focused={focused}
                        index={0} />
                ),
            }
        },
        SecondDay: {
            screen : SecondDayScreen,
            navigationOptions : {
                tabBarLabel : ({focused}) => (
                    <TabBarLabel
                        focused={focused}
                        index={1}/>
                )
            }
        },
        ThirdDay: {
            screen : ThirdDayScreen,
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
            },

        },

    }
)
