import React, {useEffect} from 'react';
import type {ReactNode} from 'react';

export default function Home(): ReactNode {
    useEffect(() => {
        // remplace l'URL actuelle sans ajouter une entrée dans l'historique
        window.location.replace('/docs/welcome/');
    }, []);

    return null; // n'affiche rien, redirection immédiate
}
