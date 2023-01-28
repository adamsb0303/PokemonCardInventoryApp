import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import React from 'react'

import Card from '../components/Card';
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default function HomeScreen() {
	const cards = [
		{id: 478118},
		{id: 478119},
		{id: 478120},
		{id: 478121},
		{id: 478122},
		{id: 478123}
	]

	return (
		<View style={styles.container}>
			<Header title={"Home"} />
			<View style={styles.body}>
				<SearchBar />
				<View style={styles.section}>
					<Text style={styles.header}>Sets</Text>
					<View>
					</View>
				</View>
				<View style={styles.section}>
					<Text style={styles.header}>Collection</Text>
					<FlatList 
						data = {cards}
						renderItem = {({item}) => (
							<Card style={styles.card} id={item.id} />
						)}
						horizontal = {true}
						ItemSeparatorComponent={() => <View style={{width:5}}/>}
					/>
				</View>
				<View style={styles.section}>
					<Text style={styles.header}>Collection Value</Text>
					<View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
						<Text style={{textAlign: 'center', fontSize: 30, color: 'green'}}>$000,000,000.00</Text>
					</View>
				</View>
			</View>
			<TouchableOpacity style={styles.cameraButton}>
				
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	body: {
		paddingRight: 10,
		paddingLeft: 10,
		height: Dimensions.get('window').height - 60 - 90
	},
	cameraButton: {
		backgroundColor: "#A0A0A0",
		height: 60,
		width: 60,
		top: 15,
		left: Dimensions.get('window').width / 2 - 30,
		borderRadius: 30,
	},
	container: {
		paddingTop: 30
	},
	header: {
		fontSize: 20
	},
	section:{
		flex: 1,
		height: "30%"
	}
})