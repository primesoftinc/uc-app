import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import FilterScreen from "../screens/FilterScreen";
import MultiSelectDropDown from "../components/MultiSelectDropDown";
import {
  createStackNavigator,
  createAppContainer,
  TabBarBottom,
  createSwitchNavigator
} from "react-navigation";
import ButtonComponent from "../components/ButtonComponent";
import DynamicRating from "../components/DynamicRating";
import StarButton from "../components/StarButton";
import AvatarButton from "../components/AvatarButton";
import DurationComponent from "../components/DurationComponent";
import DemoScreen from "../components/DummyScreen";
import Calender from "../components/CalendarComponent";

// import SymptomForm from '../components/SymptomForm'
import Carousel from "../components/Carousal";

import CardButton from "../components/CardButton";
import SignUp from "../screens/SignUp";
import Login from "../screens/Login";
import DurationScreen from "../screens/DurationScreen";
import MyAppointmentCard from "../components/MyAppointmentCard";
import Permissions from "../screens/Permissions";
import AppoinmentScreen from "../screens/AppoinmentScreen";
import MyButton from "../components/MyButton";

import HospitalScreen from "../screens/HospitalsScreen";
const AppRoutes = createStackNavigator({
  MyAppointmentCard,
  ButtonComponent,
  DemoScreen,
  SignUp,
  Login,
  DurationScreen,
  FilterScreen,
  MyButton,
  AppoinmentScreen,
  Permissions,
  Calender,
  HospitalScreen,
  MultiSelectDropDown,
  //    Button : { screen: Button },
  DynamicRating,
  StarButton,
  //    SymptomForm:{screen : SymptomForm},
  Carousel,
  CardButton,
  AvatarButton,
  DurationComponent
});
class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("userToken");

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

const AppStack = AppRoutes;
const AuthStack = createStackNavigator({ Login: Login });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

// export default class AppNavigator extends React.Component {
//   render() {

//     return <AppContainer />;

//   }
// }
