import React from 'react'
import Button from './Button'

const ButtonPanel = ({clickHandler}) => {
    return (
        <div>
           <div className="group1">
            <Button name="AC" handleClick={clickHandler}/>
            <Button name="+/-" handleClick={clickHandler}/>
            <Button name="%" handleClick={clickHandler}/>
            <Button name="/" handleClick={clickHandler}/>
           </div> 
           <div className="group2">
            <Button name="7" handleClick={clickHandler}/>
            <Button name="8" handleClick={clickHandler}/>
            <Button name="9" handleClick={clickHandler}/>
            <Button name="x" handleClick={clickHandler}/>
           </div>
           <div className="group3">
            <Button name="4" handleClick={clickHandler}/>
            <Button name="5" handleClick={clickHandler}/>
            <Button name="6" handleClick={clickHandler}/>
            <Button name="-" handleClick={clickHandler}/>
           </div>
           <div className="group4">
            <Button name="1" handleClick={clickHandler}/>
            <Button name="2" handleClick={clickHandler}/>
            <Button name="3" handleClick={clickHandler}/>
            <Button name="+" handleClick={clickHandler}/>
           </div>
           <div className="group5">
            <Button name="0" handleClick={clickHandler}/>
            <Button name="." handleClick={clickHandler}/>
            <Button name="=" handleClick={clickHandler}/>
           </div>
        </div>
        
    )
}

export default ButtonPanel
