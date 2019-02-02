import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';

import FirstDayScreen from "../screens/FirstDayScreen";
import SecondDayScreen from "../screens/SecondDayScreen";
import ThirdDayScreen from "../screens/ThirdDayScreen";
import Colors from "../constants/Colors";
// import ActivitiesListScreen from "../screens/ActivitiesListScreen";
// import ActivityScreen from "../screens/ActivityScreen";

// FirstStack.navigationOptions = {
//     tabBarLabel: 'Speaker',
//     tabBarIcon: ({ focused }) => (
//         <Ionicon
//             name={"md-contacts"}
//             color={(focused)?Colors.primaryColor:Colors.inactiveBarIconColor}
//             size={Layout.icon_size}
//         />
//     ),
// };


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