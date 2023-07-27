import React from 'react'
import './Styles/Calculator.css'


const Calculator = () => {
  return (
    <div className='container'>
        <div className='Wrap'>
                <input placeholder='0'/>
                <div className='buttonWrap'>
                    <div className='row'>
                        <button className="red">CE</button>
                        <button>xl</button>
                        <button>(</button>
                        <button>)</button>
                        <button>%</button>
                        <button className="green">AC</button>
                    </div>
                    <div className='row'>
                        <button>Sin</button>
                        <button>`&pi;`</button>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>/</button>
                    </div>
                    <div className='row'>
                        <button>Cos</button>
                        <button>log</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>*</button>
                    </div>
                    <div className='row'>
                        <button>tan</button>
                        <button>CE</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>
                    </div>
                    <div className='row'>
                        <button>CE</button>
                        <button>e</button>
                        <button>0</button>
                        <button>.</button>
                        <button className="blue">=</button>
                        <button >+</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Calculator