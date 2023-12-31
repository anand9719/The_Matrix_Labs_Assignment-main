import React, { createContext, useState } from 'react'
export const context = createContext()

const ProviderContext = ({ children }) => {
    const [search, setSearch] = useState("")
    return (
        <context.Provider value={{ search, setSearch }}>
            {children}
        </context.Provider>
    )
}

export default ProviderContext