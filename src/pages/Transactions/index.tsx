import React, { useContext, useEffect, useState } from 'react'
import pagarme from '../../clients/pagarme'

import { Context } from '../../UserContext'

import TransactionsContainer from '../../containers/Transactions'

const TransactionsPage = () => {
  const { session } = useContext(Context)
  const [loading, setLoading] = useState(true)
  const [transactions, setTransactions] = useState([])
  const [error, setError] = useState(null)

  const fetchTransactions = async () => {
    try {
      setLoading(true)

      const response = await pagarme.transactions.findAll({
        count: 10,
        session_id: session,
      })

      setLoading(false)
      setTransactions(response)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  if (error) {
    throw error
  }

  return (
    <TransactionsContainer
      items={transactions}
      loading={loading}
      onRefresh={fetchTransactions}
    />
  )
}

export default TransactionsPage
