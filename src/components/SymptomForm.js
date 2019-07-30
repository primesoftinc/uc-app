import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  AsyncStorage,
  Button,
  TouchableOpacity,
  Keyboard,
  Platform
} from "react-native";
import { Input } from 'react-native-elements';
import {Feather as Delete} from '@expo/vector-icons'
const isAndroid = Platform.OS == "android";
const viewPadding = 10;

export default class SymptomForm extends Component {
  state = {
    tasks: [],
    text: ""
  };

  changeTextHandler = text => {
    this.setState({ text: text });
  };

  addTask = () => {
    let notEmpty = this.state.text.trim().length > 0;

    if (notEmpty) {
      this.setState(
        prevState => {
          let { tasks, text } = prevState;
          return {
            tasks: tasks.concat({ key: tasks.length, text: text }),
            text: ""
          };
        },
        () => {Tasks.save(this.state.tasks)
         }
      );
    }
  };

  deleteTask = i => {
    this.setState(
      prevState => {
        let tasks = prevState.tasks.slice();

        tasks.splice(i, 1);

        return { tasks: tasks };
      },
      () => {Tasks.save(this.state.tasks)
        }
    );
  };

  onSubmitTask = ( ) => {
    this.setState(
      
      () => {Tasks.save(this.state.tasks)
        console.log(this.state.tasks)}
    );
  };

  componentDidMount() {
    Keyboard.addListener(
      isAndroid ? "keyboardDidShow" : "keyboardWillShow",
      e => this.setState({ viewPadding: e.endCoordinates.height + viewPadding })
    );

    Keyboard.addListener(
      isAndroid ? "keyboardDidHide" : "keyboardWillHide",
      () => this.setState({ viewPadding: viewPadding })
    );

    Tasks.all(tasks => this.setState({ tasks: tasks || [] }));
  }
  
  

  render() {
    return (
      <View style={{height:100}}
        style={[styles.container, { paddingBottom: this.state.viewPadding }]}
      >
        <Input 
        label='Add Symptoms here'
        labelStyle={styles.label}            
          style={styles.textInput}
          onChangeText={this.changeTextHandler}
          onSubmitEditing={this.addTask}
          value={this.state.text}
          placeholder='enter Symptoms'
          returnKeyType='done'
          returnKeyLabel='done'
        />
        <FlatList
          style={styles.list}
          data={this.state.tasks}
          renderItem={({ item, index }) =>
            <View>
              <View style={styles.listItemCont}>
                <Text style={styles.listItem}>
                  {item.text}
                </Text>
                <TouchableOpacity onPress={() => this.deleteTask(index)}>
              <View style={styles.direction}>
                <Delete size={20} name='delete'  color='#4e38fe'/>
              </View>
            </TouchableOpacity>
              </View>
              <View style={styles.hr} />
            </View>}
        />
         <Button
          textColor ="white"
          buttonColor={'#4e38fe'}
          radius ="25"
          style={{marginTop:20}}
          width="335"
          title='submit'
          onPress={this.onSubmitTask} />
        
                       
      </View>
    );
  }
}

let Tasks = {
  convertToArrayOfObject(tasks, callback) {
    
    return callback(
      
      tasks ? tasks.split("||").map((task, i) => ({ key: i, text: task })) : []
    );
  },
  convertToStringWithSeparators(tasks) {
    return tasks.map(task => task.text).join("||");
  },
  all(callback) {
    return AsyncStorage.getItem("TASKS", (err, tasks) =>
      this.convertToArrayOfObject(tasks, callback)
    );
  },
  save(tasks) {
    AsyncStorage.setItem("TASKS", this.convertToStringWithSeparators(tasks));
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    padding: viewPadding,
    paddingTop: 20
  },
  list: {
    width: "100%"
  },
  listItem: {
    padding: viewPadding,
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 18
  },
  hr: {
    paddingStart:20,
    height: 1,
    backgroundColor: "gray"
  },
  listItemCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textInput: {
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
    borderColor: "gray",
    borderWidth: isAndroid ? 0 : 1,
    width: "100%"
  },
  label:{
    color:"#4e38fe", 
fontWeight:"normal"}
});

AppRegistry.registerComponent("TodoList", () => TodoList);