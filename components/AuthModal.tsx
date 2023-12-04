"use client"

import Modal from "@/components/Modal";
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
import {useRouter} from "next/navigation";
import {Auth} from "@supabase/auth-ui-react";
import {ThemeSupa} from "@supabase/auth-ui-shared";

export const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();

    return (
        <Modal isOpen
               onChange={() => {
               }}
               title="Bienvenido"
               description="Ingresa a tu sesión"
        >
            <Auth
                theme="dark"
                providers={["github"]}
                magicLink
                supabaseClient={supabaseClient}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "22c55e"
                            }
                        }
                    }
                }}
            />
        </Modal>
    )
}
