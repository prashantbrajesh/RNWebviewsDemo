import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native'

class Home extends Component {
	state = {
		links: [
			{ title: 'Make Payment', link: 'http://10.0.2.2:8000/payments/ingenico/process-transaction?paymentId=PMT00F6CCF0992345B79F0678C2A04636CF' },
			{ title: 'My Portfolio', link: 'https://amanhimself.dev' }
		]
	}

	handleButtonPress(item) {
		const { title, link } = item
		this.props.navigation.navigate('Browser', { title, link })
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.list}>
					{this.state.links.map((item, index) => (
						<TouchableOpacity
							key={index}
							onPress={() => this.handleButtonPress(item)}
							style={styles.button}
						>
							<Text style={styles.text}>{item.title}</Text>
						</TouchableOpacity>
					))}
					<Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://google.com')}>Google</Text>
					<Text style={{color: 'blue'}} onPress={() => Linking.openURL('http://10.0.2.2:8000/payments/ingenico/process-transaction?paymentId=PMT00F6CCF0992345B79F0678C2A04636CF')}>Make Payment</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonList: {
		flex: 1,
		justifyContent: 'center'
	},
	button: {
		margin: 10,
		backgroundColor: '#356bca',
		borderRadius: 5,
		padding: 10
	},
	text: {
		color: '#fff',
		textAlign: 'center'
	}
})

export default Home
