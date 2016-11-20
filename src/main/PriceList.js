import React from 'react'


export default function(props) {
  const data = [
    {pk: 1, title: "Lorem", price: 100},
    {pk: 2, title: "Lorem", price: 200},
    {pk: 3, title: "Lorem", price: 300},
    {pk: 4, title: "Lorem", price: 400},
    {pk: 5, title: "Lorem", price: 500},
    {pk: 6, title: "Lorem", price: 600},
  ]

  return (
    <div>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          { data.map(row => (
            <tr key={row.pk}>
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
