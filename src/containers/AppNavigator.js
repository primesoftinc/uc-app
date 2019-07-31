import React, { Component } from 'react';
import InitialScreen from '../components/InitialScreen';

import { createStackNavigator, createAppContainer, TabBarBottom, createSwitchNavigator } from 'react-navigation';
import ButtonComponent from '../components/ButtonComponent'
import Home from '../components/Home';
import DynamicRating from '../components/DynamicRating'
import StarButton from '../components/StarButton'
import AvatarButton from '../components/AvatarButton'
import DurationComponent from '../components/DurationComponent'
// import SymptomForm from '../components/SymptomForm'
import Carousel from '../components/Carousal'
import CardComponent from '../components/CardComponent'
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Permissions from '../screens/Permissions'
const AppRoutes = createStackNavigator({
    Home: { screen: Home },
    ButtonComponent,
    SignUp,
    Login,
    Permissions,
    Profile,
   InitialScreen: {screen: InitialScreen},
//    Button : { screen: Button },
   DynamicRating : { screen: DynamicRating },
   StarButton : { screen :StarButton},
//    SymptomForm:{screen : SymptomForm},
   Carousel:{screen:Carousel},
   CardComponent:{screen:CardComponent},
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


