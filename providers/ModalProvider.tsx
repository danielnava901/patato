"use client";

import {useEffect, useState} from "react";
import Modal from "@/components/Modal";
import {AuthModal} from "@/components/AuthModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return <>
        <AuthModal
            isOpen
            title="Modal titulo numero 1"
            description="Prueba de modal"
            onChange={(isOpen) => {

            }}
        >
            Body
        </AuthModal>
    </>
}

export default ModalProvider;