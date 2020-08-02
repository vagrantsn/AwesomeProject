import React from 'react'
import {
  FlatList,
  Text,
  View,
} from 'react-native'

const TransactionsContainer = ({ items } : { items: any }) => {
  const renderItem = ({ item } : { item: any }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  )

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
    />
  )
}

export default TransactionsContainer
