import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7159c1',
    },
    title: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    }
});

export default function App() {
  return (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
        
        <View style={styles.container} >
            <Text style={styles.title}>Hello World</Text>
        </View>
    </>
  )
}
