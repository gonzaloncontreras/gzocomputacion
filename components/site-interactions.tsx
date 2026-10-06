"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function SiteInteractions() {
 const pathname=usePathname();
 useEffect(()=>{
  const cleanups: (()=>void)[]=[];
  document.querySelectorAll<HTMLDetailsElement>('.faq-list details').forEach(details=>{
   const summary=details.querySelector('summary');if(!summary)return;
   let wantedOpen=details.open;
   let animation: Animation | undefined;
   let answerAnimation: Animation | undefined;
   const click=(event:Event)=>{
    event.preventDefault();wantedOpen=!wantedOpen;
    const from=details.getBoundingClientRect().height;
    animation?.cancel();answerAnimation?.cancel();details.open=true;
    const to=wantedOpen?details.getBoundingClientRect().height:summary.getBoundingClientRect().height+2;
    details.classList.toggle('is-closing',!wantedOpen);details.style.overflow='hidden';
    const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
    const answer=details.querySelector('p');
    if(answer)answerAnimation=answer.animate(wantedOpen?[{opacity:0},{opacity:1}]:[{opacity:1},{opacity:0}],{duration:reduced?120:240});
    const current=details.animate([{height:from+'px'},{height:to+'px'}],{duration:reduced?160:340,easing:'cubic-bezier(.22,1,.36,1)'});
    animation=current;current.onfinish=()=>{if(animation!==current)return;details.open=wantedOpen;details.style.overflow='';details.classList.remove('is-closing');animation=undefined;};
   };
   summary.addEventListener('click',click);
   cleanups.push(()=>{summary.removeEventListener('click',click);animation?.cancel();answerAnimation?.cancel();details.style.overflow='';details.classList.remove('is-closing');});
  });
  return ()=>cleanups.forEach(cleanup=>cleanup());
 },[pathname]);
 return null;
}
