import React, {useEffect} from 'react'

export function useCreateDocTitle(count) {
    // we'll simply use that useEffect functionality as that's exactly what's been repeating among those components and needs to be modularized as a custom hook
    // as this will not render any JSX we can simply get rid of it from here and make use of that count variable that will be p[assed down from components to be used in useEffect hook]

    useEffect(() => document.title = 'custom hookified: '+count)
}
