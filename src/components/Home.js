import React from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Platform, Animated,StatusBar } from 'react-native';
import {
  NativeViewGestureHandler,
  RectButton,
} from 'react-native-gesture-handler';
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from 'react-navigation';

import ButtonComponent from '../components/ButtonComponent'
import DynamicRating from '../components/DynamicRating'
import FilterScreen from '../screens/FilterScreen';
import MyButton from '../components/MyButton';
import DurationScreen from '../screens/DurationScreen';
import SignUp from '../screens/SignUp'
import Login from '../screens/Login'
import Permissions from '../screens/Permissions'
import MyAppointmentCardScreen from '../components/MyAppointmentCardScreen';
import Calender from './CalendarComponent';
import MultiSelectDropDown from '../components/MultiSelectDropDown';
import StarButton from '../components/StarButton'
import AvatarButton from '../components/AvatarButton'
import DurationComponent from '../components/DurationComponent'
// import SymptomForm from '../components/SymptomForm'
import Carousel from '../components/Carousal'
import CardButton from '../components/CardButton'
import HospitalScreen from '../screens/HospitalsScreen'
import AppoinmentScreen from '../screens/AppoinmentScreen'
const ExampleInfo = {
  MyAppointmentCardScreen: {
    description: 'Render additional views around a Tab navigator',
    name:'MyAppointmentCardScreen',
  },
  DynamicRating: {
    description: 'Render additional views around a Tab navigator',
    name:'DynamicRating',
  },
  StarButton: {
    description: 'Custom tabs with tab router',
    name: 'StarButton',
  },
  AvatarButton: {
    description: 'Custom transitioner with stack router',
    name: 'AvatarButton  ',
  },
  CardButton: {
    description: 'A drawer combined with tabs',
    name: 'CardComponent',
  },
  Carousel: {
    description:
      'Declarative NavigationEvents component to subscribe to navigation events',
    name: 'Carousel',
  },
  SignUp:{
    description:'fd',
    name:'SignUp',
  },
  Login:{
    description:'fddgdf fg',
    name:'Login',
  },
  Permissions:{
    description:'fd',
    name:'Permissions',
  },
 
  DurationComponent: {
    description: 'Receive the focus prop to know when a screen is focused',
    name: 'DurationComponent',
  },
  ButtonComponent: {
    description:
      'Declarative NavigationEvents component to subscribe to navigation events',
    name: 'ButtonComponent',
  },
  HospitalScreen: {
    description: 'Render additional views around a Tab navigator',
    name:'HospitalScreen',
  },
  FilterScreen: {
    description: 'Shows the filter elements',
    name:'FilterScreen',
  },
  MultiSelectDropDown: {
    description: 'To select multiple items from a list',
    name:'MultiSelect',
  },
  
  
  Calender: {
    description: 'To select multiple items from a list',
    name:'CalenderComponent',
  },
  
  AppoinmentScreen: {
    description: 'To select multiple items from a list',
    name:'AppoinmentScreen',
  },
  MyButton: {
    description: 'MyButton',
    name:'MyButton',
  },
  DurationScreen: {
    description: 'DurationScreen',
    name:'DurationScreen',
  },

};
const ExampleRoutes = {
  MyAppointmentCardScreen,
  Calender,
  MultiSelectDropDown,
  HospitalScreen,
  FilterScreen,
  MyButton,
  AppoinmentScreen,
  DurationScreen,
    DynamicRating,
  StarButton,
  AvatarButton,
  DurationComponent,
  Carousel,
  CardButton,
  ButtonComponent,
  SignUp,
  Login,
  Permissions,
 
  
};


export default class Home extends React.Component {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { navigation } = this.props;

    const scale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0, 100],
      outputRange: [2, 1, 0.8],
    });

    const translateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [-150, 0, 40],
    });

    const opacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [1, 0],
    });

    const underlayOpacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [0, 1],
    });

    const backgroundScale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0],
      outputRange: [3, 1],
    });

    const backgroundTranslateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0],
      outputRange: [0, 0],
    });

    return (
      <View style={{ flex: 1 }}>
        <NativeViewGestureHandler>
          <Animated.ScrollView
            style={{ flex: 1, backgroundColor: '#eee' }}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollY } },
                },
              ],
              { useNativeDriver: true }
            )}
          >
            <Animated.View
              style={[
                styles.backgroundUnderlay,
                {
                  transform: [
                    { scale: backgroundScale },
                    { translateY: backgroundTranslateY },
                  ],
                },
              ]}
            />
            <Animated.View
              style={{ opacity, transform: [{ scale }, { translateY }] }}
            >
              <SafeAreaView
                style={styles.bannerContainer}
                forceInset={{ top: 'always', bottom: 'never' }}
              >
                <View style={styles.banner}>
                 
                  <Text style={styles.bannerTitle}>
                    React Navigation Examples
                  </Text>
                </View>
              </SafeAreaView>
            </Animated.View>

            <SafeAreaView
              forceInset={{ top: 'never', bottom: 'always' }}
              style={{ backgroundColor: '#eee' }}
            >
              <View style={{ backgroundColor: '#fff' }}>
                {Object.keys(ExampleRoutes).map((routeName) => (
                  <RectButton
                    key={routeName}
                    underlayColor="#ccc"
                    activeOpacity={0.3}
                    onPress={() => {
                      const route = ExampleRoutes[routeName];
                      if (route.screen || route.path || route.params) {
                        const { path, params, screen } = route;
                        const { router } = screen;
                        const action =
                          path &&
                          router.getActionForPathAndParams(path, params);
                        navigation.navigate(routeName, {}, action);
                      } else {
                        navigation.navigate(routeName);
                      }
                    }}
                  >
                    <View style={styles.item}>
                      <Text style={styles.title}>
                        {ExampleInfo[routeName].name}
                      </Text>
                      <Text style={styles.description}>
                        {ExampleInfo[routeName].description}
                      </Text>
                    </View>
                  </RectButton>
                ))}
              </View>
            </SafeAreaView>
          </Animated.ScrollView>
        </NativeViewGestureHandler>
        <StatusBar barStyle="light-content" />
        <Animated.View
          style={[styles.statusBarUnderlay, { opacity: underlayOpacity }]}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    height: 300,
    left: 0,
    position: 'absolute',
    right: 0,
    top: -100,
  },
  banner: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  bannerImage: {
    height: 36,
    margin: 8,
    resizeMode: 'contain',
    tintColor: '#fff',
    width: 36,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
    marginRight: 5,
    marginVertical: 8,
  },
  description: {
    color: '#999',
    fontSize: 13,
  },
  image: {
    alignSelf: 'center',
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 120,
  },
  item: {
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    height: 20,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

  