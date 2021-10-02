import { useState, useRef } from 'react';
import SVG from 'react-inlinesvg';
import styles from './circulo.module.scss'


export default function Circulo(props){


    const [selected, setSelected] = useState([false, false])
    const circulo = useRef()

    function handleClick(e){
        const paths = circulo.current.querySelectorAll('svg,path')
        const target = e.target
        let _selected = [...selected]
        const _color = target.getAttribute('fill') ? {hex: target.getAttribute('fill') } : false

        if(!e.target.tagName == "path" || !_color) {
            return false
        }

        if(e.shiftKey) {
           _selected[0] = target
           props.setColor(_color)
        } else {
            _selected[1] = target
            props.setFondo(_color)
        }

        setSelected(_selected)     

        paths.forEach(path => (
          path.style["filter"] = ""
        ))

        _selected.filter(path => {return path}).forEach(path => (
            path.style["filter"] = "brightness(1.5)"
        ))
    
        
      }

    return(
        <div className={`${styles.circulo} mx-auto`} onClick={handleClick} ref={circulo}>
             <SVG src={'/images/circulo.svg'} width={300} height={300} title="Círculo cromático" />
        </div>
    )
    
}