import type {Metadata} from 'next'
import {Figtree} from 'next/font/google'
import './globals.css'
import SideBar from "@/components/SideBar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";

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
        <SupabaseProvider>
            <UserProvider>
                <ModalProvider/>
                <SideBar>
                    {children}
                </SideBar>
            </UserProvider>
        </SupabaseProvider>
        </body>
        </html>
    )
}
