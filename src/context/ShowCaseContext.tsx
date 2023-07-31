import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react'
import { ReactNode } from 'react-markdown/lib/ast-to-react'

type ShowCaseType = 'Default' | 'list' | 'mixed' | 'two-culomn'

type ShowCaseContextType = {
    state: ShowCaseType,
    setState: Dispatch<SetStateAction<ShowCaseType>>
}

const ShowCaseContext = createContext({} as ShowCaseContextType)

export const useShowCaseContext = () => {
    return useContext(ShowCaseContext)
}

export default function ShowCaseContextProvider({ children }: { children: ReactNode }): JSX.Element {
    const [showCaseType, setShowCaseType] = useState<ShowCaseType>('list');

    return (
        <ShowCaseContext.Provider value={{ state: showCaseType, setState: setShowCaseType }}>
            {children}
        </ShowCaseContext.Provider>
    )
}