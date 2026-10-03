/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const DEFAULT_SUPABASE_URL = "https://kgtnsrkursvctptzfzup.supabase.co";
const DEFAULT_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtndG5zcmt1cnN2Y3RwdHpmenVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgyODA1MDgsImV4cCI6MjEwMzg1NjUwOH0.iezmETdQiY6_HQfKeck5PdyQb1VQJKGpLEVP0FH05D4";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false
    }
  }
);

export const hasSupabaseConfig = !!(supabaseUrl && supabaseAnonKey);
