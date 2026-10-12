'use client';
import {useEffect,useState} from 'react';
import {motion} from 'framer-motion';
import {ArrowRight,MapPin} from 'lucide-react';
import {Mark} from './Logo';
export default function IntroLoader({onSkip}:{onSkip:()=>void}){
 const [progress,setProgress]=useState(0);
 useEffect(()=>{let frame=0;const start=performance.now();const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const update=(time:number)=>{const next=Math.min(100,Math.round((time-start)/(reduced?250:1700)*100));setProgress(next);if(next<100)frame=requestAnimationFrame(update)};frame=requestAnimationFrame(update);return()=>cancelAnimationFrame(frame)},[]);
 const stage=progress<35?'ROOTED IN KHARADI':progress<75?'CONNECTING EAST PUNE':'YOUR NEXT ADDRESS AWAITS';
 return <motion.div className="intro-loader" initial={{opacity:1}} exit={{opacity:0,y:-24}} transition={{duration:.35}} aria-label="Welcome to Sanskruti Associates">
 <img className="intro-loader-photo" src="/images/hero-mobile.webp" alt="" aria-hidden="true"/>
 <div className="intro-grid"/><div className="intro-glow"/>
 <div className="intro-top"><span><MapPin size={15}/>KHARADI · PUNE EAST</span><button onClick={onSkip}>Skip intro<ArrowRight size={15}/></button></div>
 <div className="intro-brand"><div className="intro-mark"><Mark/></div><motion.p initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{duration:.45}}>SANSKRUTI<span>ASSOCIATES · EST. 2007</span></motion.p><motion.h2 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.5,delay:.15}}>Your next address.<br/><span>Starts with trust.</span></motion.h2><div className="intro-progress"><span style={{width:`${progress}%`}}/></div><div className="intro-progress-copy"><span aria-live="polite">{stage}</span><strong aria-hidden="true">{String(progress).padStart(2,'0')}%</strong></div></div>
 <div className="intro-bottom"><span>LOCAL SINCE 2007</span><span>18+ YEARS OF PERSPECTIVE</span></div>
 </motion.div>
}
