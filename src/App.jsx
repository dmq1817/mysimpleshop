// Import libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import files
import './App.css';
import configLayouts from './Router';
import DefaultLayout from './Layouts/DefaultLayout';
import SharedLayout from './Layouts/SharedLayout';

function App() {
    return (
        <Router basename="/">
            <div className="App">
                <Routes>
                    {configLayouts.map((route, index) => {
                        const LayoutType = route.sharedLayout === true ? SharedLayout : DefaultLayout;
                        const PageContent = route.component;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <LayoutType>
                                        <PageContent />
                                    </LayoutType>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
            ;
        </Router>
    );
}

export default App;
