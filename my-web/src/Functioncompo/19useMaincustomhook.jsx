import React from 'react'
import { useEffect } from "react";

function useMaincustomhook(count) {
    return (
        useEffect((Count) => {
            document.title = `Count ${count} `
        }, [count])
    )
}

export default useMaincustomhook;