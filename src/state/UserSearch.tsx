import React, { useState } from 'react';

const users = [
    {
        name: 'Sarah',
        age: 20,
    },
    {
        name: 'Alex',
        age: 20,
    },
    {
        name: 'Michael',
        age: 20,
    },
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string; age: number }>();
    const onClick = () => {
        const foundUser = users.find((_user) => {
            return _user.name === name;
        });
        setUser(foundUser);
    };
    return (
        <div>
            User Search
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="button" onClick={onClick}>
                Find User
            </button>
            <div>{user && user.name}</div>
        </div>
    );
};
export default UserSearch;
