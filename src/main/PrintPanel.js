import React from 'react'
import classnames from 'classnames'
import shortid from 'shortid'


export default function({items, selectedProduct, onSelectProduct}) {
  const chunks = []
  const chunkSize = 6
  let i, j
  for (i=0, j=items.length; i<j; i+=chunkSize) {
      chunks.push(items.slice(i, i+chunkSize))
  }

  return (
    <div className="price-page">
      {
        chunks.map(
          row => (renderRow(row, selectedProduct, onSelectProduct))
        )
      }
    </div>
  )
}

function renderRow(row, selectedProduct, onSelectProduct) {
  return (
    <div className="row" key={shortid.generate()}>
      { row.map(item =>
        (
          <div className={classnames('col-md-2', 'price-item', {'active': item.pk === selectedProduct})}
               onClick={() => onSelectProduct(item.pk)}  key={shortid.generate()}>

            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        )
      )}
    </div>
  )
}
