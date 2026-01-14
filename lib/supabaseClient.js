import { createClient } from "@supabase/supabase-js";

export function getSupabase() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );
}
