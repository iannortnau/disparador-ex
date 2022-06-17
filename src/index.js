import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {GlobalProvider} from "./context/GlobalContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalProvider>
            <DevSupport
                ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
                <App/>
            </DevSupport>
        </GlobalProvider>
    </React.StrictMode>
);
