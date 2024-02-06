
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient("https://lqjcibdksfsjvpzoodqg.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxamNpYmRrc2ZzanZwem9vZHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwMTI0ODksImV4cCI6MjAxMzU4ODQ4OX0.LUlU1wmRkOEmxvYA8dcQpjtI3b0gWc-dnl8t_HOdZWE", {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});