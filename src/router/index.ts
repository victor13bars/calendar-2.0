import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRoute {
    path: string
    Component: React.ComponentType
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, Component: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.EVENT, Component: Event}
]