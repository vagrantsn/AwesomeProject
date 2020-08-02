import React from 'react'
import {
  FlatList,
  StyleSheet,
  View,
  RefreshControl,
} from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

import TransactionItem from './Item'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
})

const TransactionsContainer = ({
  items,
  loading,
  onRefresh,
} : {
  items: any,
  loading: boolean,
  onRefresh: any,
}) => (
  <View
    style={styles.container}
  >
    {loading
      ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={items}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={onRefresh} />
          }
          renderItem={({ item }) => (
            <TransactionItem
              key={item.id}
              id={item.id}
              amount={item.amount}
            />
          )}
        />
      )
    }
  </View>
)

export default TransactionsContainer
