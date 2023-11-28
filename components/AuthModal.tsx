"use client"

import Modal from "@/components/Modal";

export const AuthModal = () => {
    return (
        <Modal isOpen
               onChange={() => {
               }}
               title="Bienvenido"
               description="Ingresa a tu sesión">
            Auth modal
        </Modal>
    )
}
