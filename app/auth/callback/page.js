'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabaseClient';
export default function Callback(){const r=useRouter();useEffect(()=>{supabase.auth.getSession().finally(()=>r.replace('/'));},[]);return <p>Signing in…</p>}