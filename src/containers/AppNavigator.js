import React, { Component } from 'react';
import InitialScreen from '../components/InitialScreen';
import FilterScreen from '../screens/FilterScreen';
import MultiSelectDropDown from '../components/MultiSelectDropDown';
import { createStackNavigator, createAppContainer, TabBarBottom, createSwitchNavigator } from 'react-navigation';
import ButtonComponent from '../components/ButtonComponent'
import Home from '../components/Home';
import DynamicRating from '../components/DynamicRating'
import StarButton from '../components/StarButton'
import AvatarButton from '../components/AvatarButton'
import DurationComponent from '../components/DurationComponent'

import Calender from '../components/CalendarComponent';

// import SymptomForm from '../components/SymptomForm'
import Carousel from '../components/Carousal'

import CardButton from '../components/CardButton'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import DurationScreen from '../screens/DurationScreen'
import MyAppointmentCardScreen from '../components/MyAppointmentCardScreen';

import Permissions from '../screens/Permissions'
import AppoinmentScreen from '../screens/AppoinmentScreen'
import MyButton from '../components/MyButton'

import HospitalScreen from '../screens/HospitalsScreen'
const AppRoutes = createStackNavigator({
    Home: { screen: Home },
    MyAppointmentCardScreen,
    ButtonComponent,
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
   InitialScreen: {screen: InitialScreen},
//    Button : { screen: Button },
   DynamicRating : { screen: DynamicRating },
   StarButton : { screen :StarButton},
//    SymptomForm:{screen : SymptomForm},
   Carousel:{screen:Carousel},
   CardButton:{screen:CardButton},
   AvatarButton:{screen:AvatarButton},
   DurationComponent:{screen:DurationComponent},
},

{
  initialRouteName: 'Home'
}
);

const AppContainer = createAppContainer(AppRoutes);

// Now AppContainer is the main component for React to render

export default AppContainer;

// export default class AppNavigator extends React.Component {
//   render() {

//     return <AppContainer />;
  
//   }
// }


