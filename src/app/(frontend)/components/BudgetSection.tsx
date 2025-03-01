'use client'

import React, { useState, FormEvent } from 'react'
import '../styles.css'

export default function BudgetSection() {
  const [income, setIncome] = useState<string>('')
  const [expense, setExpense] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [amount, setAmount] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = { income, expense, category, amount }
    await fetch('/api/budget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    setIncome('')
    setExpense('')
    setCategory('')
    setAmount('')
  }

  return (
    <div className="budget-page">
      <div className="budget-container">
        <h1 className="budget-title">Budget Overview</h1>
        <form className="budget-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
