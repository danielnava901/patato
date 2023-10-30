import type {Metadata} from 'next'
import {Figtree} from 'next/font/google'
import './globals.css'
import SideBar from "../../components/SideBar";

const font = Figtree({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Spotify Clone',
    description: 'Listen to music!',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout(
    {
        children,
    }: RootLayoutProps) {
    return (
        <html lang="en">
        <body className={font.className}>
        <SideBar>
            {children}
        </SideBar>
        </body>
        </html>
    )
}
