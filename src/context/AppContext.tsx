import { createContext, useContext, useState } from "react";
import { MovieMode } from "../types";

interface IAppProvider {
    children: React.ReactNode;
}

type InitialStateType = {
    isGridLayout: boolean;
    modeMovieFetching: MovieMode;
    onSwitchGridLayout: () => void;
    onSwitchMovieMode: (mode: MovieMode) => void;
}

const initialState: InitialStateType = {
    isGridLayout: true,
    modeMovieFetching: 'now-playing',
    onSwitchGridLayout: () => null,
    onSwitchMovieMode: (mode: MovieMode) => null
}

const AppContext = createContext<InitialStateType>(initialState);

const AppProvider = ({ children }: IAppProvider) => {
    const [isGridLayout, setIsGridLayout] = useState(true);
    const [modeMovieFetching, setModeMovieFetching] = useState<MovieMode>('now-playing');

    const onSwitchGridLayout = () => setIsGridLayout(prev => !prev);
    const onSwitchMovieMode = (mode: MovieMode) => setModeMovieFetching(mode);

    return (
        <AppContext.Provider value={{ isGridLayout, onSwitchGridLayout, modeMovieFetching, onSwitchMovieMode }} >
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider }
