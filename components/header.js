import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function () {

    return (
        <View style={styles.header}>
            <Text style={styles.title}>To Do List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#f44336'
    },
    title: {
        textAlign: 'center',
        color: '#fafafa',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 2
    }
})