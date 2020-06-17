import React from 'react'
import '../App.css'

export const AddTransaction = () => {
    return (
        <>
            <h4>Add New Transaction</h4>
            <hr></hr>
            <p className="AddPara">Text</p>
            <input type="text" placeholder="Enter text.."></input>
            <p className="AddPara">Amount</p>
            <p className="example">(negative = expense & positive = income)</p>
            <input type="amount" placeholder="Enter amount.."></input>
            <button className="addBtn">Add transaction</button>
        </>
    )
}
