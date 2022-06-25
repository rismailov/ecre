/**
 * Global loading context used for overlays.
 *
 */
import React, { createContext, useContext, useState } from 'react'

interface LoaderContextInterface {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoaderContext = createContext<LoaderContextInterface | undefined>(undefined)

export const useLoaderContext = () => {
    const ctxValue = useContext(LoaderContext)
    if (ctxValue === undefined) throw new Error('Expected context value to be set')
    return ctxValue // now type AppContextValue
    // or provide domain methods instead of whole context for better encapsulation
}
