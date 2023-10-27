import React from "react";

interface SideBarProps {
    children: React.ReactNode
}

export const SideBar: React.FC<SideBarProps> = ({children}) => {
    return (
        <div>
            {
                children
            }
        </div>
    )
}

export default SideBar;