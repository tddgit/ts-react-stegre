import ReactDOM from 'react-dom';

import React from 'react';
import GuestList from './state/GuestList';
import Parent from './props/Parent';

const App: React.FC = () => {
    return (
        <div>
            <GuestList />
            <Parent />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
