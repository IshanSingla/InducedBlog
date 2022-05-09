import React, { Component } from 'react'

export default class Compiler extends Component {
  render() {
    return (
      <div >
          <br/>
            <h1 className="header "> Induced IDE </h1>
            <div className="control-panel">
                Select Language:
                <select id="languages" className="languages" >
                    <option value="#"> None </option>
                    <option value="python"> Python </option>
                    <option value="c" > C </option>
                    <option value="cpp"> C++ </option>
                    <option value="html"> HTHL / CSS / JS </option>
                    <option value="php"> PHP </option>
                    <option value="dart"> Dart </option>
                </select>
                Select FrameWork:
                <select id="languages" className="languages" >

                    <option value="#"> None </option>
                    <option value="node"> Node JS </option>
                    <option value="react"> React </option>
                </select>
            </div>
            <iframe  title="" height={"600px"} width="100%" src='https://repl.it/@IshanSingla/HtmlCssJs?lite=true' scrolling='no' frameBorder={"no"} sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-popups allow-forms'></iframe>

          
            {/* HtmlCssJs */}
            {/* NodeJs */}
            {/* React */}
            {/* Dart */}
            {/* C-1 */}
            {/* C */}
            {/* Php */}

      </div>
    )
  }
}
