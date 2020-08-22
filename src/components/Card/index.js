import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from './components/Product';
import Footer from './components/Footer';
import colors from './cardColorSet'
import './style.css'


const Card = (props) => {
    const {
        flavour,
        size
    } = props;

    const title = 'Нямушка';
    
    const [borderColor, setBorderColor] = useState(colors.default);
    const [isSelected, setIsSelected] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    const defaultSubtitle = <h4>Сказочное заморское яство</h4>;
    const confirmedSubtitle = <h4 style={{color: borderColor}}>Коте не одобряет?</h4>
    const [subtitle, setSubtitle] = useState(defaultSubtitle);
 
    useEffect(() => {
        isSelected ? setBorderColor(colors.hoverSelected) : setBorderColor(colors.hoverDefault)

        //Определяем количество товара по размеру упаковки
        const {amounts} = props.flavour;
        const {size} = props.size;
        const founded = amounts.find( amount =>  amount.size === size);

        //Если на количество товара 0, тогда делаем не доступным
        founded.amount === 0 && setIsDisabled(true) 
        isDisabled&&setBorderColor(colors.disabled);
    }, [isSelected, isDisabled])


    const handleMouseOver = () => {
        if(isDisabled) return;
        isSelected ? setBorderColor(colors.hoverSelected) : setBorderColor(colors.hoverDefault);
        isConfirmed ? setSubtitle(confirmedSubtitle) : setSubtitle(defaultSubtitle);
    }

    const handleMouseLeave = () => {
        if(isDisabled) return;
        if(isSelected){
            setBorderColor(colors.selected);
            setIsConfirmed(true);
        }else{
            setBorderColor(colors.default);
            setIsConfirmed(false)
        }
        setSubtitle(defaultSubtitle);
    }

    const handleClick = () => {
        if(isDisabled) return;
        if(isSelected){
            setIsSelected(false);
            setIsConfirmed(false);
        }else{
            setIsSelected(true);
        }
        setSubtitle(defaultSubtitle);
    }

    const setFooterText = () => {
        let text = <p>Чего сидишь? Порадуй котэ, <span style={{color: borderColor, borderColor: borderColor}}>купи.</span></p>
        if(isSelected){
            text = <p>{ flavour.description }</p>;
        }
        if(isDisabled){
            text = <p style={{color: '#d1d152'}}>Печалька {flavour.flavour} закончился</p>
        }

        return text;
    }

    return (
        <div className="card"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <Product 
                title={title} 
                subtitle={subtitle} 
                flavour={flavour.flavour}
                size={size}
                borderColor={borderColor}
                isDisabled={isDisabled}
                />
            <Footer>
                { setFooterText() }
            </Footer>
        </div>
    )
}

Card.propTypes = {
    flavor: PropTypes.object,
    size: PropTypes.object
}

export default Card;
