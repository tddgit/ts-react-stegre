import React, { useState } from 'react';

const GuestList: React.FC = () => {
    const [name, setName] = useState('');

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="button">Add Guest</button>
        </div>
    );
};
export default GuestList;
