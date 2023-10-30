"use client"
import React, {useMemo} from "react";
import {usePathname} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import {Box} from "./Box";
import {SideBarItem} from "./SideBarItem";
import {Library} from "./Library";

interface SideBarProps {
    children: React.ReactNode
}

export const SideBar: React.FC<SideBarProps> = ({children}) => {
    const pathname = usePathname();
    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: "Home",
            active: pathname !== "/search",
            href: "/"
        },
        {
            icon: BiSearch,
            label: "Search",
            active: pathname === "/search",
            href: "/search"
        }
    ], [pathname])

    return (
        <div className="flex h-full">
            <div className="hidden
            flex-col
            md:flex
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
            ">
                <Box>
                    <div className="
                        flex
                        flex-col
                        gap-y-4
                        px-5
                        py-4
                    ">
                        {
                            routes.map(item => (
                                <SideBarItem
                                    key={item.label}
                                    {...item}
                                >
                                    item
                                </SideBarItem>
                            ))
                        }
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library/>
                </Box>
            </div>
            <div className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </div>
        </div>
    )
}

export default SideBar;