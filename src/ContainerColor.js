import React from "react";
import s from "./Container.module.css"

const changeDiv = (props) =>{
    const color = ['blue', 'yellow', 'red', 'green','grey']
    let randomColor = Math.floor(Math.random() * color.length)
    props.setState({
        color:color[randomColor],
    })
}
const ContainerColor = (props) => {

    return(
        <div style={{ backgroundColor: props.state.background, marginTop: '0px'}} className={s.container}>
            <button style={{ backgroundColor: props.state.color}} className = {s.button} onClick={() => changeDiv(props)}></button>
        </div>
    )
}

export default ContainerColor