import React, { Component } from 'react';
import { View ,Alert} from 'react-native';
import moment from 'moment';
import CalendarStrip from 'react-native-calendar-strip';
let datesWhitelist = [
  {
    start: moment(),
    end: moment().add(5, 'days'), // total 4 days enabled
  },
];
let datesBlacklist = [moment().add(1, 'days')]; // 1 day disabled

export default class Example extends Component {
  constructor(){
    super();
    this.state={
      Date:moment()
    }
  }
  render() {
    return (
      <View>
        <CalendarStrip
          calendarAnimation={{ type:'parallel', duration: 30 }}
          daySelectionAnimation={{
            type:'background',
            duration: 150,
            highlightColor:'#4e38fe'
            
          }}

          style={{ height: 100, paddingTop: 10, paddingBottom: 10,borderBottomColor:'#e6e6e6',borderBottomWidth:1 }}
          calendarHeaderStyle={{ color: '#5B5850' }}
          calendarColor={'white'}
          dateNumberStyle={{ color: '#5B5850',fontStyle:'normal',fontSize:14 }}
          dateNameStyle={{ color: '#5B5850' ,fontStyle:'normal',fontSize:14}}
          highlightDateNumberStyle={{ color: '#ffffff'}}
          highlightDateNameStyle={{ color: '#ffffff' }}
          disabledDateNameStyle={{ color: '#5B5850' }}
          disabledDateNumberStyle={{ color: '#5B5850' }}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={(date) => {
            this.setState({ Date: date });
      console.log(this.state.Date)
        }}
          selectedDate={this.state.Date}
        />
      </View>
    );
  }
}
