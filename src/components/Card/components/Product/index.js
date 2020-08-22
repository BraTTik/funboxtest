import React from 'react';
import PropTypes from 'prop-types';
import Circle from './components/Circle';
import DisableWindow from './components/DisableWindow';
import './style.css';


const Product = (props) => {
    const {
        subtitle,
        title,
        size,
        flavour,
        borderColor,
        isDisabled
    } = props;

    const style = {
        borderColor
    }

    const getCorrectMouse = (number) => {
        if(number === 1) return 'мышь'
        if(number > 1 && number < 5) return 'мыши'
        return 'мышей';
    }

    return (
        <div className="card-product" style={style}>
            {subtitle}
            <h2>{title}</h2>
            <h3>{flavour}</h3>

            <div>
                <p><strong>{size.portions}</strong> порций</p>
                <p><strong>{size.mice}</strong> {getCorrectMouse(size.mice)} в подарок</p>
            </div>

            <Circle size={size.weight} backgroundColor={borderColor}/>

            {isDisabled&&<DisableWindow />}
            <span className="card-product__border-fix" style={style}/>
        </div>
    )
}

Product.propTypes = {
    subtitle: PropTypes.object,
    title: PropTypes.string,
    size: PropTypes.object,
    flavour: PropTypes.string,
    borderColor: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Product;