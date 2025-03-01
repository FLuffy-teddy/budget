'use client'

import React, { useEffect, useState } from 'react'

interface Expenses {
  category: string
  amount: string
  id: string
}
interface Budget {
  id: string
  expense: string
  amount: string
  expenses: Expenses[]
}

const BudgetPull: React.FC = () => {
  const [budget, setBudget] = useState<Budget | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const response = await fetch('/api/budget')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        console.log('Fetched budget data:', data) // Log the fetched data
        setBudget(data.docs[0])
      } catch (err) {
        setError('Failed to fetch budget data')
      } finally {
        setLoading(false)
      }
    }
    fetchBudget()
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  if (!budget) {
    return <div>No budget data available</div>
  }

  return (
    <div>
      <h1>Budget</h1>
      <ul>
        {budget.expenses.map((item: Expenses) => (
          <li key={item.id}>
            {item.category}: ${item.amount}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BudgetPull
