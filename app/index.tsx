import { useSession } from '@/contexts/AuthContext';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function Root() {
    const { session, isLoading } = useSession();

    useEffect(() => {
        if (!isLoading) {
            if (session) {
                router.replace('(main)/(tabs)/booking');
            } else {
                router.replace('(auth)');
            }
        }
    }, [isLoading, session]);

    return null;
}