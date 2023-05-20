import React from "react";

import { useDispatch } from "react-redux";
import { AudioPlayerProvider } from "react-use-audio-player";
import RoutesRender from "routes/routes-render";
import { getUserFromCookies } from "services/saveUser";
import { setUser } from "store/slices/authSlice";
import "./App.css";

const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(setUser(getUserFromCookies()));
    }, []);

    return (
        <div className="app">
            {/* <Loader /> */}
            <AudioPlayerProvider>
                <RoutesRender />
            </AudioPlayerProvider>
        </div>
    );
};

export default App;
