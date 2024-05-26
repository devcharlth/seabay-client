import { useSession } from '@/contexts/AuthContext';
import { Redirect, Stack } from 'expo-router';

export default function AppLayout() {
  const { session } = useSession();

  if (!session) return <Redirect href="/(auth)" />;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}