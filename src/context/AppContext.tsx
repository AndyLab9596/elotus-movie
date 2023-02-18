import { createContext, useContext, useState } from "react";

interface IAppProvider {
    children: React.ReactNode;
}

type InitialStateType = {
    isGridLayout: boolean;
    onSwitchGridLayout: () => void;
}

const initialState: InitialStateType = {
    isGridLayout: true,
    onSwitchGridLayout: () => null,
}

const AppContext = createContext<InitialStateType>(initialState);

const AppProvider = ({ children }: IAppProvider) => {
    const [isGridLayout, setIsGridLayout] = useState(true);

    const onSwitchGridLayout = () => setIsGridLayout(prev => !prev);

    return (
        <AppContext.Provider value={{ isGridLayout, onSwitchGridLayout }} >
            {children}
        </AppContext.Provider>
    )
}


export const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider }
