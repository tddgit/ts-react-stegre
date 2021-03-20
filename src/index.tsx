import ReactDOM from 'react-dom';

import React from 'react';
import GuestList from './state/GuestList';
import Parent from './props/Parent';
import UserSearch from './state/UserSearch';
import EventComponent from './events/EventComponent';

const App: React.FC = () => {
    return (
        <div>
            <EventComponent />
            <GuestList />
            <UserSearch />
            <Parent />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
