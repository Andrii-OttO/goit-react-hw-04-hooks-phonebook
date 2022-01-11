import React from 'react';
import style from './style.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
    return (
        <form className={style.filter}>
            <label className={style.filter_lable}>
                Find contacts by name
                <input type="text" value={value} onChange={onChange}></input>
            </label>
        </form>
    );
};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};
export default Filter;
