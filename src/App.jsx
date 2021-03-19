import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import SearchParams from './SearchParams.jsx';
import DetailsWithErrorBoundary from './DetailsWithErrorBoundary.jsx';
import ThemeContext from './ThemeContext.jsx';
import NavBar from './NavBar.jsx';

const Page = () => {
    return <h1>PAGE</h1>;
};

const App = () => {
    const themeHook = useState('darkblue');

    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <NavBar />
                    {/* <header> */}
                    {/*    <Link to="/">Adopt me</Link> */}
                    {/*    /!* <Link to={'/details'}>Details</Link> *!/ */}
                    {/* </header> */}
                    <Router>
                        <SearchParams path="/" />
                        {/* <Page path="details" /> */}
                        <DetailsWithErrorBoundary path="/details/:id" />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    );
};

export default App;
