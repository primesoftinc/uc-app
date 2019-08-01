import React ,{Component}from 'react';
import {View,StyleSheet,Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Searchbar } from 'react-native-paper';
import { EvilIcons as Icons ,MaterialCommunityIcons as MIcon,} from '@expo/vector-icons';
import CardComponent from'../components/CardComponent';
const images = {
    source:[
    {uri:'https://images.pexels.com/photos/1516648/pexels-photo-1516648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
        {uri:'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png'},
    {uri:'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg'},
    {uri:'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg'},
    {uri:'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?cs=srgb&dl=desk-doctor-health-48604.jpg&fm=jpg'},
  ]};
export default class HospitalScreen extends Component{
    constructor(){
        super()
        this.state = {
            search: '',
          };
    }
    updateSearch = search => {
        this.setState({ search });
        
      };
    render(){
        const { search } = this.state;
        return(
            <View style={styles.mainContainer}>
                <View style={styles.subContainer}>
                   
                <View style={{paddingTop:10,paddingLeft:10,paddingRight:10,}}>
                    <Searchbar
                    
                    placeholder="Search"
                    onChangeText={this.updateSearch}
                    value={search}
                    />
                </View>
                {/* <SearchBar 
                // containerStyle= {styles.containerStyle}              
                placeholder="Type Here..."
                round
                inputContainerStyle={styles.inputContainerStyle}
                onChangeText={this.updateSearch}
                placeholderTextColor='#6600ff'
                value={search} 
                containerStyle={styles.containerStyle}
                /> */}
                <ScrollView>
                < CardComponent  images={images} place='kakinada' Spec='Cardiologist' Name='Venkateswar'/>                    
                < CardComponent  images={images} place='Rajahmundry' Spec='Neurologist' Name='Satyanarayana'/>                    
                < CardComponent  images={images} place='Hyderabad' Spec='Orthopedician' Name='Brandon '/>                    
                < CardComponent  images={images} place='Vizag' Spec='Cardiologist'Name='Venkateswar'/>                    
                < CardComponent  images={images} place='kakinada' Spec='Gyneic' Name='Satyanarayana'/>                    
                    </ScrollView>
                    </View>
                    <View style={styles.FooterView}>
                        
                            {/* <Icons color='white' style={{paddingTop:10}}
                            name='location' size={35}></Icons>
                            <MIcon 
                            name='doctor' size={30} color='white' style={{paddingTop:10}}/>
                            <MIcon name='clock-outline' color='white' size={30} style={{paddingTop:10}}/> */}

                            <MIcon color='#6600ff' style={{paddingTop:10}}
                            name='filter' size={30} 
                            onPress={() =>
                                this.props.navigation.navigate('FilterForm')}
                            ></MIcon>
                            {/* <Text style={{color:'#ffffff',alignSelf:'center',paddingLeft:5}}>Time</Text>
                            <Text style={{color:'#ffffff',alignSelf:'center'}}>specialization</Text>
                            <Text style={{color:'#ffffff',alignSelf:'center'}}>Distance</Text>
                            <Text style={{color:'#ffffff',alignSelf:'center',paddingRight:5}}>filter</Text> */}


                        
                    </View>
               
            </View>

        )
    }
}
const styles=StyleSheet.create({
    mainContainer:{
        backgroundColor:'#6600ff',
        paddingTop:20,
        flex:1
    },
    subContainer:{
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        flex:1,
        backgroundColor:'#e6e6e6'
    },
    inputContainerStyle:{
        backgroundColor:'white',
        borderColor:'#e6e6e6',
        borderWidth:2
    },
    containerStyle:{
        backgroundColor:'#ffffff',borderColor:'white'
    },
    FooterView:{
        backgroundColor:'#ffffff',
        height:50,
        alignItems:'flex-end',
        shadowColor: "#000",
    shadowOffset: {
	    width: 3,
	    height: 3,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 10,
        
    }
})