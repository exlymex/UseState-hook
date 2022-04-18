import React from "react";
import s from "./Container.module.css"

const changeDiv = (props) =>{
    const back = ['blue', 'yellow', 'red', 'green','grey']
    let randomBack = Math.floor(Math.random() * back.length)
    props.setState({
        background:back[randomBack],
    })
}
const ContainerBack = (props) => {
    return(
        <div style={{ backgroundColor: props.state.background}} className={s.container}>
            <button style={{ backgroundColor: props.state.color}} className = {s.button} onClick={() => changeDiv(props)}></button>
        </div>
    )
}

export default ContainerBack