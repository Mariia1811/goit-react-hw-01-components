import React from 'react';
import PropTypes from 'prop-types';
import TransactionTableRow from './TransactionTableRow';
import css from "./TransactionHistory.module.css";

function TransactionHistory({items}) {
  return (
    <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody>
{items.map(({id, type, amount, currency }) => (
   <TransactionTableRow 
key = {id}
type ={type}
amount = {amount}
currency = {currency}/> 
))}
  </tbody>
</table>
  )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        }),
      )
    .isRequired,
}

export default TransactionHistory
