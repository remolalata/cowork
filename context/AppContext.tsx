import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from "react";

import { Features, SocialProof, Statistics } from "@/types/customTypes";

interface AppState {
    toggleMobileNav: boolean,
    isMobile: boolean,
    socialProof: SocialProof,
    features: Features,
    statistics: Statistics
}

type Action =
    | { type: "TOGGLE_MOBILE_NAV" }
    | { type: "SET_IS_MOBILE" , payload: boolean }
    | { type: "SET_SOCIAL_PROOF", payload: SocialProof }
    | { type: "SET_FEATURES", payload: Features }
    | { type: "SET_STATISTICS", payload: Statistics }

const initialState: AppState = {
    toggleMobileNav: false,
    isMobile: false,
    socialProof: [],
    features: [],
    statistics: []
}

const AppContext = createContext<{
    state: AppState;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

const appReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case "TOGGLE_MOBILE_NAV":
            return {
                ...state,
                toggleMobileNav: !state.toggleMobileNav
            }
        case "SET_IS_MOBILE":
            return {
                ...state,
                isMobile: action.payload
            }
        case "SET_SOCIAL_PROOF":
            return {
                ...state,
                socialProof: action.payload
            }
        case "SET_FEATURES":
            return {
                ...state,
                features: action.payload
            }
        case "SET_STATISTICS":
            return {
                ...state,
                statistics: action.payload
            }
        default:
            return state;
    };
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);