"use client";
import { getSupabase } from "../../../lib/supabaseClient";

export default function Callback() {
  const supabase = getSupabase();
  if (supabase) supabase.auth.getSession();
  return null;
}
