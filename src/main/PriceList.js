import React from 'react'


export default function({data, selectedProduct, onSelectProduct}) {
  return (
    <div>
      <div className="table-responsive">
        <table className="table-pricelist table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          { data.map(row => (
            <tr key={row.pk} onClick={() => onSelectProduct(row.pk)} className={row.pk === selectedProduct ? "active" : ""}>
              <td>{row.pk}</td>
              <td>{row.title}</td>
              <td>{row.price}</td>
            </tr>
          )) }
          </tbody>
        </table>
      </div>
    </div>
  )
}
