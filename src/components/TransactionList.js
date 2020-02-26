import React, { Fragment } from 'react';
 
const TransactionList = () => {
   
        return (
            <Fragment>
                
                <h3>History</h3>
                <ul class="list">
                 <li class="minus">
          Cash <span>-₦400</span><button class="delete-btn">x</button>
        </li>
      </ul>
            </Fragment>
        );
    
}

export default TransactionList;