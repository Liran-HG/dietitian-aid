import React from "react"

export function useRepeatElement(): {repeat: (element: JSX.Element, n: number) => JSX.Element[]} {
    let seed: string = String(Math.random())
    const repeatElement = (element: JSX.Element, n: number) => {
        return Array.from({ length: n }, (_, i) => 
            React.cloneElement(element, {key: i.toString() + seed})
        )
    }
    
    return {repeat : repeatElement}

}
