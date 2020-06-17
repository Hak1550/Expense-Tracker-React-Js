import React from 'react'
import '../App.css'
export const IncomeExpence = () => {
    return (
        <>
        <div className="IncomeExpense">
        <div className='income'>
        <p > Income</p>
        <p className="incomeAmount"> +$0.00</p>
        </div>

        <div className='expense'>
        <p > Expense </p>
        <p className="expenseAmount"> -$0.00</p>
        </div>
        </div>
        </>
    )
}
