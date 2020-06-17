import React from 'react'
import '../App.css'

export const TransactionList = () => {
    return (
        <>
        <h4>History</h4>
        <hr></hr>
        <ul>
            <li className="TraList">
                Cash <button className="delete-btn">x</button><span>-$400.00</span> 
            </li>
            <li className="TraList">
                Loan <button className="delete-btn">x</button><span>-$400.00</span> 
            </li>
            {/* <li className="TraList">
                Grocery <button className="delete-btn">x</button><span>-$400.00</span> 
            </li>
            <li className="TraList">
                Food <button className="delete-btn">x</button><span>-$400.00</span> 
            </li> */}
        </ul>

        </>
    )
}
