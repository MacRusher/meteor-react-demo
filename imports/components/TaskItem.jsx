import React from 'react';

export default ({checked, text, onRemove, onChecked}) => (
    <li className={checked ? 'checked' : ''}>
        <button className="delete" onClick={onRemove}>
            &times;
        </button>

        <input
            type="checkbox"
            readOnly={true}
            checked={checked}
            onClick={onChecked}
        />

        <span className="text">{text}</span>
    </li>);
