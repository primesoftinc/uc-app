import React, { Component } from 'react';
import { View } from 'react-native';
import MultiSelect from 'react-native-multiple-select';

export default class MultiSelectExample extends Component {
constructor(props){
  super(props);

  this.state = {
    selectedItems:[]
  };

  this.items = [{
    id: '0',
    name: 'Cardiologist',
  }, {
    id: '1',
    name: 'Orthopedic',
  }, {
    id: '2',
    name: 'Dermotologist',
  }, {
    id: '3',
    name: 'Neurologist',
  }, {
    id: '4',
    name: 'Allergist',
  }, {
    id: '5',
    name: 'Anesthesiologists',
  }, {
    id: '6',
    name: 'Endocrinologists ',
  }, {
    id: '7',
    name: 'Hematologists ',
  }, {
    id: '8',
    name: 'Nephrologists ',
  },
  {
    id: '9',
    name: 'Gynecologists ',
  },
  {
    id: '10',
    name: 'sfhdfyhk ',
  }];
}
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  render() {
    const { selectedItems } = this.state;
    return (
      
        <MultiSelect
        styleTextDropdown={{color:'#CCC',fontSize:16,fontWeight:'normal'}}
          styleDropdownMenuSubsection={{borderBottomColor:'#4e38fe'}}
          styleListContainer={{height:140 }}
          hideTags={false}
          items={this.items}
          uniqueKey="id"
          ref={(component) => { this.multiSelect = component }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText='Select'
          styleTextDropdownSelected={{color:'#4e38fe',fontWeight:'normal'}}
          styleDropdownMenu={{paddingLeft:10,paddingRight:10,height:100,}}
          searchInputPlaceholderText="Search"
          onChangeInput=      {(component) => { this.multiSelect = component }}
          tagRemoveIconColor="#4e38fe"
          tagBorderColor="#4e38fe"
          tagTextColor="#4e38fe"
          selectedItemTextColor="#4e38fe"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          submitButtonColor="#4e38fe"
          submitButtonText="Submit"
          />
     
    );
  }
}