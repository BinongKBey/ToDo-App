import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Alert, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import { MaterialIcons } from '@expo/vector-icons'

export default function App() {

  const [name, setName] = useState('')
  const [crossed, setCrossed] = useState(false)

  const [items, setItems] = useState([
    { name: "Binong", key: '1' },
    { name: "Binit", key: '2' },
    { name: "Joker", key: '3' }
  ])

  const addItem = () => {
    if (name.length > 3) {
      const newItems = [{ name: name, key: Math.random().toString() }, ...items]
      setItems(newItems)
      Keyboard.dismiss()
    }
    else {
      Alert.alert("OOPS!", "The length must be at least 3 letters", [{
        text: "Understood", onPress: () => { console.log("Alert closed") }
      }])
    }
  }

  const removeItem = (key) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.key != key)
    })
  }
  const toggleStroke = () => {
    setCrossed(!crossed)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.header}>
          <TextInput style={styles.input} placeholder='Enter Something' onChangeText={(val) => setName(val)} />
          <Button title="Add" onPress={addItem} />
        </View>
        <View style={styles.body}>
          {/* {name ? <></> : <Text style={styles.bodyText1}>Add Something</Text>} */}
          <FlatList style={styles.list} data={items} renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.item} onPress={toggleStroke}>
                <Text style={crossed ? styles.itemTextCrossed : styles.itemText}>{item.name}</Text>
                <TouchableOpacity onPress={() => removeItem(item.key)}>
                  <MaterialIcons size={20} color='white' name='delete' />
                </TouchableOpacity>
              </TouchableOpacity>
            )
          }} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    backgroundColor: '#212121',
    padding: 16,
    margin: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    color: '#ffffff',
  },
  itemTextCrossed: {
    textAlign: 'center',
    fontSize: 20,
    flex: 1,
    textDecorationLine: 'line-through',
    color: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  header: {
    // backgroundColor: '#9e9e9e',
    padding: 20,
    borderStyle: 'dashed',
    borderBottomWidth: 2,
    // marginBottom: 10,
    textAlign: 'center',
    width: '100%'
  },
  input: {
    textAlign: 'center',
    width: '100%',
    fontSize: 20,
    marginBottom: 4,
  },
  body: {
    backgroundColor: '#fafafa',
    padding: 10,
    flex: 1,
    width: '100%'
  },
});
