import React, { Component } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

const tryConvert = (temperature,scaleInput) => {
   const input = Number(temperature)
   if((Number.isNaN(input) || temperature == '')  ){
    return ''
   }
   let output 
   output = scaleInput === 'f' ? (input - 32) / 1.8 :  input * 1.8 + 32
   output = Math.round(output * 1000)/1000
   return output
}
const scaleNames = {
  c : 'Celsius',
  f : 'Fahrenheit'
}

export class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperator: '',
      scale: 'c'
    }
  }
  handleChange = (scale) => (value) => {
    this.setState({
      temperator: value,
      scale
    })
  }
  render() {
    const {scale,temperator} = this.state
    const celsius = scale === 'f' ? tryConvert(temperator,scale) : temperator
    const fahrenheit = scale === 'c' ? tryConvert(temperator,scale) : temperator
    return (
      <div>
        <TemperatureInput
          title={scaleNames.c}
          temperature={celsius}
          onTemperatureChange={this.handleChange('c')}
        />
        <TemperatureInput
          title={scaleNames.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleChange('f')}
        />
        <BoilingVerdict celsius={celsius || 0} />
      </div>
    )
  } 
}

export default Calculator
