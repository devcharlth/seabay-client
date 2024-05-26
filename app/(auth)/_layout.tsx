import { useSession } from '@/contexts/AuthContext';
import { Redirect, Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: true }} />
      <Stack.Screen name="register" options={{ headerShown: true }} />
    </Stack>
  );
}