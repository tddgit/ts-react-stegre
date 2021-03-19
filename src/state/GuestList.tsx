import React, { useState } from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onClick = () => {
        setName('');
        setGuests([...guests, name]);
    };
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={onClick}>
                Add Guest
            </button>
        </div>
    );
};
export default GuestList;
