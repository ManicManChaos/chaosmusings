'use client';
import { useState } from 'react';
import SigilNav from '../components/SigilNav';
import TodayView from '../components/views/TodayView';
import YearView from '../components/views/YearView';
import RoidBoyView from '../components/views/RoidBoyView';
import MomentsView from '../components/views/MomentsView';
import SettingsView from '../components/views/SettingsView';
export default function Home(){const [t,setT]=useState('today');return <main><SigilNav active={t} onChange={setT}/>{t==='today'&&<TodayView/>}{t==='year'&&<YearView/>}{t==='roid'&&<RoidBoyView/>}{t==='moments'&&<MomentsView/>}{t==='settings'&&<SettingsView/>}</main>}