
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView,FlatList,CheckBox } from 'react-native';
// import { Searchbar } from 'react-native-paper';

// import CheckBox from '@react-native-community/checkbox';




const TicketsScreen = () => {

    const [isSelected, setSelection] = useState(false);


    const DATA = [
        {
          id: 1,
          title: 'John Doe',
        },
        {
          id: '2',
          title: 'John Doe',
        },
        {
          id: '3',
          title: 'John Doe',
        },
      ];


      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
    
      const Item = ({ title }) => (
        <View style={{marginTop:10, flexDirection:"row"}}>
             {/* <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        /> */}
          <Text style={styles.title}>{title}</Text>
        </View>
      );

  return (
    <ScrollView style={styles.container}>
        <Text style={{marginLeft: 20, fontWeight:"bold"}}>Titre de ticket</Text>
    <TextInput style={{ backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: "85%",
    height:50,
    padding: 12,
    marginLeft: 20,
    marginTop:5,
    borderRadius: 5,}} 
    multiline={true} 
    placeholder="********" />
    <View style={{marginTop:20}}>

     <Text style={{marginLeft: 20, fontWeight:"bold"}}>Description</Text>
    <TextInput style={{ backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
    width: "85%",
    height:250,
    paddingBottom: 200,
    padding:12,
    marginLeft: 20,
    marginTop:5,
    borderRadius: 5,}} 
    // multiline={true} 
    placeholder="********" />
    </View>
    <View style={{marginTop:20}}>
        <View style={{flexDirection:"row"}}>
        <Text style={{marginLeft:20, fontWeight:"bold"}}>Collaboration</Text>
        <Text style={{marginLeft: 160}}>Select all</Text>
        {/* <CheckBox 
        value={isSelected}
        onValueChange={setSelection}
        /> */}
        </View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        
    </View>
    <View style={{marginTop:20}}>
        <Text style={{marginLeft:20, fontWeight:"bold"}}>Piéces jointes</Text>
        <TouchableOpacity style={{borderWidth:2, height:70, width:"85%",marginLeft: 20,borderRadius:10, alignContent:"center",alignItems:"center",justifyContent:"center",backgroundColor:"#FAEBD7",marginTop:5}}>
           <Text>Click here</Text>
        </TouchableOpacity>
    </View>
    <View style={{flexDirection:"row"}}>
    <View style={styles.button}>
        <TouchableOpacity style={styles.but}>
          <Text style={styles.buttontext}>Annuler</Text>
        </TouchableOpacity>
      </View>
    <View style={styles.button1}>
        <TouchableOpacity style={styles.but}>
          <Text style={styles.buttontext}>Créer le ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
    <Text></Text>
    <Text></Text>

    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    </ScrollView>
  );
};

export default TicketsScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,

  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  button: {
    backgroundColor: "red",
    width:"40%",
    fontSize: 16,
    height: 45,
    borderRadius: 5,
    marginVertical: 3,
    marginBottom: 10,
    marginTop: 10, 
    marginLeft: 20,

  },
  button1: {
    backgroundColor: "green",
    width:"40%",
    fontSize: 16,
    height: 48,
    borderRadius: 5,
    marginVertical: 3,
    marginBottom: 10,
    marginTop: 10, 
    marginLeft: 20,

  },
  but: {
    textAlign: "center",
    alignItems: "center",
    justifyContent:"center",
    alignSelf:"center",
    marginTop:12
  },
  buttontext: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    marginLeft: 20,
    marginTop:5
  },

});

