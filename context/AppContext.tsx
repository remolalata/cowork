import React, { createContext, useReducer, useContext, Dispatch, ReactNode } from "react";

interface AppState {
    toggleMobileNav: boolean
}

type Action = | { type: "TOGGLE_MOBILE_NAV" };

const initialState: AppState = {
    toggleMobileNav: false
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