import React, { createContext, useContext, ReactNode, FC } from 'react';
import { useStorageState } from '@/hooks/useStorageState';

interface AuthContextType {
    signIn: () => void;
    signOut: () => void;
    session: string | null;
    isLoading: boolean;
}

interface SessionProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false,
});

export const useSession = (): AuthContextType => {
    return useContext(AuthContext);
};

export const SessionProvider: FC<SessionProviderProps> = ({ children }) => {
    const [[isLoading, session], setSession] = useStorageState('session');

    const signIn = () => {
        // Perform sign-in logic here
        setSession('xxx');
    };

    const signOut = () => {
        setSession(null);
    };

    return (
        <AuthContext.Provider value={{ signIn, signOut, session, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};
