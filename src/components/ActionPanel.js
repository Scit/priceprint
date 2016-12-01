import React from 'react'
import keymirror from 'keymirror'

export const ACTIONS = keymirror({ADD: null, EDIT: null, DELETE: null, PRINT: null})

export default function({onAction}) {
  return (
    <div className="btn-toolbar action-panel">
      <div className="btn-group">
        <button className="btn btn-lg btn-default" onClick={() => onAction(ACTIONS.ADD)}>Add</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-lg btn-default" onClick={() => onAction(ACTIONS.EDIT)}>Edit</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-lg btn-default" onClick={() => onAction(ACTIONS.DELETE)}>Delete</button>
      </div>
      <div className="btn-group">
        <button className="btn btn-lg btn-default" onClick={() => onAction(ACTIONS.PRINT)}>Print</button>
      </div>
    </div>
  )
}
