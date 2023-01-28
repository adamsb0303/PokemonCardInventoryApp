import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'

const SearchBar = () => {
    return (
        <View style={styles.search}>
            <TextInput placeholder='Search...'/>
        </View>
    );
};

const styles = StyleSheet.create({
    search:{
        height: 30,
    }
});

export default SearchBar;