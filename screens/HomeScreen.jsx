import { View, Text, SafeAreaView, StyleSheet, Platform, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, {	useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import { COLORS, FONTS } from "../components/contants";
import { Feather } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import {  fetchBalance, transactionsSelector, clearState } from '../redux/slices/transactionSlice';


const HomeScreen = () => {
	 const dispatch = useDispatch();
	 const { isFetching, isSuccess, isError, errorMessage } = useSelector(transactionsSelector);
		const { transactions } = useSelector(transactionsSelector);
		const [allTransactions, setTransactions] = useState(transactions)
  const [filterIndex, setFilterIndex] = useState(0);
	
const filters = ["All", 'Deposits', 'Transfers', 'Withdrawals', 'Data', 'Airtime'];
	
useEffect(() =>{
if(filterIndex){
	// let results = transactions.filter(transaction => transaction.category === filters[filterIndex].toLowerCase());
	// setTransactions([...results])

	console.log("here")

	setTransactions(current =>{
		let results = current.filter(transaction => transaction.category === filters[filterIndex].toLowerCase())
		return results.length === 0 ? transactions : results
	})
}
}, [filters, filterIndex, transactions, setTransactions])	

console.log(allTransactions)
	
	
const Card = ({data: {type, name, status, amount, date}}) => {
		return (
			<View style={styles.card}>
				<View style={[styles.iconBox, { borderColor: type == 'credit' ? COLORS.PRIMARY : COLORS.FAILED, backgroundColor: type == 'credit' ? COLORS.PRIMARY_LIGHT : COLORS.FAILED_LIGHT,}]}>
					<Feather
						name={type == 'credit' ? "arrow-down-left" : "arrow-up-right"}
						size={44}
						color={type == 'credit' ? COLORS.PRIMARY : COLORS.FAILED} />
				</View>
				<View style={styles.contentBox}>
					<View style={styles.contentColumnStart}>
					<Text style={styles.name}>{name}</Text>
						<Text style={styles.status}>{status}</Text>
					</View>
					<View style={styles.contentColumnEnd}>
						<Text style={[styles.amount, {color: type == 'credit' ? COLORS.PRIMARY : COLORS.FAILED,}]}> {type == 'credit' ? '+': '-' } {amount}</Text>
						<Text style={styles.dateTime}>{date}</Text>
					</View>

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
					{/* <View style={styles.mainContainer}>
						<View style={styles.date}>
													<Text style={styles.dateText}>DATE</Text>
						</View>
						<Card />
						<Card />
						<Card />
					</View> */}
					<View>
					{/* <FlatList
								data={allTransactions}
								keyExtractor={item => item.id}
								renderItem={({ item }) => {
            return <Card  data={item}/>

        }}
        
      /> */}
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
			borderWidth: 1,
		borderColor: '#858993',
		
	},
	filtersSelected: {
		backgroundColor: COLORS.YELLOW_LIGHT,
		borderWidth: 1,
		borderColor: COLORS.YELLOW
	},
	filterText: {
		fontSize: 16,
		color: '#858993',
		fontFamily: FONTS.H1
	},
	filterTextSelected: {
    color: COLORS.YELLOW
    
	},
	mainContainer: {
		marginTop: 15
	},
	date: {
		paddingHorizontal: 10,
		paddingVertical: 10,
		backgroundColor: COLORS.BLUE_LIGHT,
		maxWidth: 150,
		alignItems: "center",
		justifyContent: 'center',
		marginVertical: 10,
		borderWidth: 2,
		borderColor: COLORS.BLUE
	},
	dateText: {
		color: COLORS.BLUE,
		fontWeight: 'bold',
		fontFamily: FONTS.H1
	},
	card: {
		paddingVertical: 10,
		paddingHorizontal: 10,
		marginTop: 10,
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: COLORS.WHITE,
		justifyContent: 'space-between',
		shadowColor: COLORS.BLACK,
		shadowOffset: {
      width: 5,
      height: 5,
    },
   shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 9,
},
	iconBox: {
		borderWidth: 2,
		height: 100,
		width: 100,
		alignItems: 'center',
		justifyContent: 'center',
		
},
	contentBox: {
		height: 100,
		width: '75%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
		contentColumnStart: {
		flexDirection: 'column',
			alignItems: 'flex-start',
			paddingHorizontal: 15,
	},
	contentColumnEnd: {
		flexDirection: 'column',
		alignItems: 'flex-end',
		paddingHorizontal: 15,
	},
	name: {
		fontFamily: FONTS.H1,
		fontSize: 18,
		color: COLORS.BLACK,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	status: {
		fontFamily: FONTS.H1,
		fontSize: 14,
		color: COLORS.BLACK,
		fontWeight: '600',
		opacity: 0.5,
	},
	amount: {
	fontFamily: FONTS.H1,
		fontSize: 16,
		color: COLORS.BLACK,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	dateTime: {
fontFamily: FONTS.H1,
		fontSize: 14,
		color: COLORS.BLACK,
		fontWeight: '600',
		opacity: 0.5,
	}
})

export default HomeScreen