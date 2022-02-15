import React from 'react';
import MenuItem from "../UI/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuComponent = (props) => {
    return (
        <React.Fragment>
            <MenuItem linkTo={'/all'}>All</MenuItem>
            <MenuItem linkTo={'/category/men'}>男士</MenuItem>
            <MenuItem linkTo={'/category/women'}>女士</MenuItem>
            <MenuItem linkTo={'/category/kids'}>孩童</MenuItem>
            <MenuItem linkTo={'/sale'}>Sale</MenuItem>
            <MenuItem linkTo={'/cart'}>
                Cart <span className="badge badge-light">{props.cartCount}</span>
            </MenuItem>
        </React.Fragment>
    )
};

MenuComponent.propTypes = {
    cartCount: PropTypes.number
};

export default MenuComponent;
