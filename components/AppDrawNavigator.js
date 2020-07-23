import React from 'react';
import {createDrawerNavigator}from 'react-navigation-drawer'
import {AppTabNavigator}from './AppTabNavigator'
import CostumSideBarMenu from './CostumSideBarMenu'
import SettingScreen from '../screens/SettingScreen'
export const AppDrawerNavigator=createDrawerNavigator({
    Home:{screen:AppTabNavigator},
    Setting:{screen:SettingScreen}
}
,
{contentComponent:CostumSideBarMenu},{initialRouteName:'Home'}
)