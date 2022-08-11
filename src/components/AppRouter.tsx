import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes, RouteNames} from "../router";

const AppRouter = () => {
    const auth = true
    return (
        auth === true
            ?
            <Routes>
                {
                    privateRoutes.map(({path, Component}) =>
                        <Route
                            key={path}
                            path={path}
                            element={<Component/>}
                        />
                    )
                }
                <Route
                    path="*"
                    element={  <Navigate to={RouteNames.LOGIN} replace/>}
                />
            </Routes>
            :
            <Routes>
                {
                    publicRoutes.map(({path, Component}) =>
                        <Route
                            key={path}
                            path={path}
                            element={<Component/>}
                        />
                    )
                }
                <Route
                    path="*"
                    element={  <Navigate to={RouteNames.LOGIN} replace/>}
                />
            </Routes>
    );
};

export default AppRouter;