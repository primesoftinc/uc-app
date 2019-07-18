import React ,{Component}from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Avatar,Badge} from 'react-native-elements';

const avat ={
    online:{
       
        borderColor:'#0fda1e'
    },
    offline:{
       
        borderColor:'red'
    },
    busy:{
        borderColor:'#f5b041'
    }
}


export default class AvatarComponent extends Component{
    constructor(props){
        super(props);
    }
    render(){ 
        const {status,size,styl} = this.props;
        console.log(status);
        return(
            <View><Text>Avatar!!!</Text>
            <View>
            </View>
                <Avatar 
                rounded
                source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    
                }}
                size={size}
                avatarStyle={[styles.default,avat[status]]}
                />
            </View>
        );
    }
}
const styles=StyleSheet.create({
    default:{
        borderWidth:1.5,
        borderRadius:100,
    }
})