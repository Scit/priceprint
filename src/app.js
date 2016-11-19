import React from 'react'
import Frame from './components/Frame'
import Split from 'react-split-pane'
import '../assets/split-styles.css'

export default class App extends React.Component {
  render() {
    return (
      <Frame>
        <Split split="vertical" minSize={50} defaultSize={700} className="primary">
          <div>
            <p>left</p>
          </div>
          <div>
            <p>right</p>
          </div>
        </Split>
      </Frame>
    )
  }
}
