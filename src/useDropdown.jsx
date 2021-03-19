import React, { useState } from 'react';

const useDropdown = (label, defaultState, options) => {
    const [state, setState] = useState(defaultState);
    const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;
    const Dropdown = () => {
        return (
            <label htmlFor={id}>
                {label}
                <select
                    name={id}
                    id={id}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    onBlur={(e) => setState(e.target.value)}
                    disabled={!options.length}
                >
                    <option value="All">All</option>
                    {options.map((option) => {
                        return (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </label>
        );
    };

    return [state, Dropdown, setState];
};

export default useDropdown;
