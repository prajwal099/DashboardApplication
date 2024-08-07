import React, { Component } from 'react'

export class OrdersTable extends Component {
  render() {
    return (
<div className='dash-card'>
<table>
  <tr>
    <th>Customers</th>
    <th>Order No.</th>
    <th>Amount</th>
    <th>Status</th>
  </tr>
  <tr>
    <td>Wade Warren</td>
    <td>12345678</td>
    <td>124</td>
    <td>Deliverd</td>
   
  </tr>
  <tr>
    <td>Ryan Jamison</td>
    <td>33555266</td>
    <td>699</td>
    <td>Deliverd</td>
  </tr>
  <tr>
    <td>Gia Maximus</td>
    <td>44552893</td>
    <td>889</td>
    <td>Deliverd</td>
  </tr>
  <tr>
    <td>Sophia Fox</td>
    <td>7766559</td>
    <td>334</td>
    <td>Deliverd</td>
  </tr>
  <tr>
    <td>Wade Wilson</td>
    <td>2345622</td>
    <td>332</td>
    <td>Deliverd</td>
  </tr>
 
</table>

</div>
    )
  }
}

export default OrdersTable
