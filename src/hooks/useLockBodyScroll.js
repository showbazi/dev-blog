import React, { useEffect, useState } from 'react'

const useLockBodyScroll = () => {
    
    const [isLocked, setIsLocked] = useState(false);
    
    useEffect(() => {
        const bodyStyles = document.body.style;

        bodyStyles.overflowY = isLocked ? "hidden" : "auto";      
    }, [isLocked])
    
    const handleToggle = () => {
        setIsLocked(!isLocked);
    }

    return {isLocked, handleToggle}
}

export default useLockBodyScroll;