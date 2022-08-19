import React from 'react'
import "./button.css"
import { useState } from 'react'

export default function utton({text, icon, bgcolor, color, bordercolor}) {


  return (
    <div id="container">
        <button id="btn" style={{ backgroundColor: bgcolor, color: color, borderColor: bordercolor}}>{text} <span id="icon">{icon}</span></button>

    </div>
  )
}
