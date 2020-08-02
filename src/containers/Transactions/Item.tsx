import React from 'react'
import { List } from 'react-native-paper'

const TransactionItem = ({
  id,
  amount,
} : {
  id: string,
  amount: string,
}) => (
  <List.Item
    title={`R$ ${amount}`}
    description={`Transaction ${id}`}
  />
)

export default TransactionItem
