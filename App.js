import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header, colors } from "react-native-elements";
import { dictionary } from './database';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      wordSearched:'',
      wordReturnedFromDataBase:'',
      lexicalCategory:'',
      definition:'',
      isSearchPressed:'',
    }
  }

  render(){
    return (
      <View style={styles.container}>

        <Header 
        centerComponent={{
        text:"Pocket Dictionary"}}
        style={styles.head}/>

        <TouchableOpacity style={styles.button}

          onPress={(displayText)=>{
            getWord=(text)=>{
              var text = text.toLowerCase();
              try{
                var word = dictionary[text]["word"];
                var lexicalCategory = dictionary[text]["lexicalCategory"];
                var definition = dictionary[text]["definition"]

                this.setState({"word":word,
                  "lexicalCategory":lexicalCategory,
                  "defintion":defintion
                })
              }
              catch(err){
                alert("Sorry! This Word Is Not Avaliable At The Moment")
                this.setState({
                  'text':'',
                  'isSearchPressed': false
                })
              }
            }

          }}>

         <Text>Search</Text>

        </TouchableOpacity>

        <TextInput style={styles.search}

        onChangeText={(text)=>{
          this.setState({text:text});
        }}/>

        <StatusBar style="auto" />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  /*head:{
    alignSelf:"center",
    marginBottom:100,
    width:100,
    height:100
  },*/
  search:{
    borderWidth:2,
    alignSelf:"center",
    textAlign:"center",
    borderRadius:2,
    width:300
  },
  button:{
    marginBottom:30,
    alignSelf:"center",
    borderWidth:2,
    borderRadius:5
  }
});
