import { View, Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, ScrollView } from 'react-native';
import React, {	useState } from 'react';
import SearchBox from '../components/SearchBox';
import { COLORS, FONTS } from "../components/contants";


const HomeScreenWireframe = () => {
const [filterIndex, setFilterIndex] = useState(0);
	
const filters = ['Deposits', 'Transfers', 'Withdrawals', 'Data'];
	
const Card = () => {
		return (
			<View style={styles.card}>
				<View style={styles.iconBox}>

		</View>
				<View style={styles.contentBox}>

				</View>
			</View>
		)
	}
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<ScrollView
					vertical={true}
					horizontal={false}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}>
				<View style={styles.container}>
						<SearchBox />
						<ScrollView
					vertical={false}
					horizontal={true}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}>
					<View style={styles.filterContainer}>
				{filters.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
						onPress={
							() => setFilterIndex(index)
						} style={[
                styles.filters,
                filterIndex === index && styles.filtersSelected,
              ]}>
            <Text
              style={[
                styles.filterText,
                filterIndex === index && styles.filterTextSelected,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
    	))}
							</View>
							</ScrollView>
					<View style={styles.mainContainer}>
						<View style={styles.date}>
													<Text style={styles.dateText}>DATE</Text>
						</View>
						<Card />
						<Card />
						<Card />
					</View>
					<View style={styles.mainContainer}>
						<View style={styles.date}>
													<Text style={styles.dateText}>DATE</Text>
						</View>
						<Card />
						<Card />
						<Card />
					</View>
									<View style={styles.mainContainer}>
						<View style={styles.date}>
													<Text style={styles.dateText}>DATE</Text>
						</View>
						<Card />
						<Card />
						<Card />
					</View>
					</View>
					</ScrollView>
				</SafeAreaView>
		)
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 25,
		paddingTop: Platform.OS =='android' ? 65 : height * 0.08,
		backgroundColor: COLORS.WHITE,
	},
	filterContainer: {
		flexDirection: 'row',
		marginVertical: 20,
	},
	filters: {
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginRight: 15,
		backgroundColor: COLORS.BG_FADED,
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		
	},
	filtersSelected: {
		backgroundColor: COLORS.PRIMARY,
	},
	filterText: {
		fontSize: 16,
		color: '#858993',
		fontFamily: FONTS.H1
	},
	filterTextSelected: {
    color: COLORS.WHITE,
    
	},
	mainContainer: {
		marginTop: 15
	},
	date: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: COLORS.BLUEBUTTON,
		maxWidth: 150,
		alignItems: "center",
		justifyContent: 'center',
		marginVertical: 10,
	},
	dateText: {
		color: COLORS.BLACK,
		fontWeight: 'bold',
		fontFamily: FONTS.H1
	},
	card: {
		paddingVertical: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
},
	iconBox: {
		borderWidth: 1,
		borderColor: COLORS.PRIMARY,
		height: 100,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: COLORS.FAILED,
},
	contentBox: {
		backgroundColor: COLORS.PURPLE,
		height: 100,
		width: '75%',
	}
})

export default HomeScreenWireframe