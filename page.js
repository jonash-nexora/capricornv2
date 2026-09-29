'use client';
import { useState } from 'react';
import { Sparkles, MessageSquare, Settings, UserRound, Plus, Send, Menu, X, SlidersHorizontal, Zap, ShieldCheck, Brain, ChevronDown } from 'lucide-react';

const starter = [
  {role:'assistant', text:"Hi, I’m Capricorn. I’m your focused AI workspace — ask me to explain, brainstorm, plan, write, or solve something."},
];

function answerFor(input){
  const q=input.toLowerCase();
  if(q.includes('hello')||q.includes('hi ')) return "Hey! I’m Capricorn. Tell me what you’re working on and I’ll help you turn it into a clear next step.";
  if(q.includes('code')||q.includes('website')) return "Absolutely. I can help architect the UI, break the feature into components, and write clean implementation steps. Start with the goal and any constraints.";
  if(q.includes('study')||q.includes('homework')) return "Let’s make it manageable: identify the topic, split it into small tasks, then tackle the hardest part first. I can explain concepts step by step.";
  if(q.includes('idea')||q.includes('project')) return "Try defining the problem first, then the target user, the core feature, and one reason someone would return. I can turn that into a project spec.";
  return "That’s a good one. I’d break it down into the goal, the important constraints, and the next concrete action. Give me a little more context and I’ll work through it with you.";
}

export default function Home(){
 const [messages,setMessages]=useState(starter); const [input,setInput]=useState(''); const [tab,setTab]=useState('chat'); const [open,setOpen]=useState(false); const [model,setModel]=useState('Capricorn Smart');
 const send=()=>{ if(!input.trim()) return; const text=input.trim(); setInput(''); setMessages(m=>[...m,{role:'user',text},{role:'assistant',text:answerFor(text)}]); };
 return <div className="shell">
  <aside className={open?'sidebar open':'sidebar'}>
   <div className="brand"><div className="logo"><Sparkles size={19}/></div><div><b>CAPRICORN</b><span>SMART AI</span></div><button className="close" onClick={()=>setOpen(false)}><X size={18}/></button></div>
   <button className="newchat" onClick={()=>setMessages(starter)}><Plus size={18}/> New chat</button>
   <nav>
    <button className={tab==='chat'?'active':''} onClick={()=>{setTab('chat');setOpen(false)}}><MessageSquare size={18}/> Chat</button>
    <button className={tab==='settings'?'active':''} onClick={()=>{setTab('settings');setOpen(false)}}><Settings size={18}/> Settings</button>
    <button className={tab==='account'?'active':''} onClick={()=>{setTab('account');setOpen(false)}}><UserRound size={18}/> Account</button>
   </nav>
   <div className="sidebottom"><div className="status"><span></span> Capricorn online</div><div className="mini">Private workspace · v1.0</div></div>
  </aside>
  <main className="main">
   <header><button className="mobilemenu" onClick={()=>setOpen(true)}><Menu size={21}/></button><div className="mobiletitle"><span className="tinylogo"><Sparkles size={14}/></span>Capricorn</div><div className="header-right"><div className="model"><Brain size={15}/><select value={model} onChange={e=>setModel(e.target.value)}><option>Capricorn Smart</option><option>Capricorn Fast</option><option>Capricorn Focus</option></select><ChevronDown size={13}/></div><div className="avatar">C</div></div></header>
   {tab==='chat' && <section className="chatpage"><div className="hero"><div className="orb"><Sparkles size={34}/></div><p className="eyebrow">YOUR INTELLIGENT WORKSPACE</p><h1>Think smarter with <em>Capricorn.</em></h1><p className="sub">A clean, focused AI that helps you think, create, learn, and get things done.</p></div>
    <div className="messages">{messages.map((m,i)=><div className={m.role==='user'?'msg user':'msg'} key={i}><div className="msgicon">{m.role==='user'?<UserRound size={14}/>:<Sparkles size={14}/>}</div><div><span className="who">{m.role==='user'?'You':'Capricorn'}</span><p>{m.text}</p></div></div>)}</div>
    <div className="composer"><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();send()}}} placeholder="Ask Capricorn anything..." rows="1"/><button onClick={send} aria-label="Send"><Send size={18}/></button></div><div className="hint">Enter to send · Shift + Enter for a new line</div>
   </section>}
   {tab==='settings' && <section className="panel"><div className="panelhead"><p className="eyebrow">CAPRICORN</p><h2>Settings</h2><p>Shape how your AI workspace behaves.</p></div><div className="setting"><div><b>Smart responses</b><span>Use deeper reasoning for complex prompts.</span></div><label className="switch"><input type="checkbox" defaultChecked/><i/></label></div><div className="setting"><div><b>Compact interface</b><span>Keep conversations dense and focused.</span></div><label className="switch"><input type="checkbox"/><i/></label></div><div className="setting"><div><b>Accent glow</b><span>Show cyan highlights throughout the workspace.</span></div><label className="switch"><input type="checkbox" defaultChecked/><i/></label></div></section>}
   {tab==='account' && <section className="panel"><div className="profile"><div className="bigavatar">C</div><div><p className="eyebrow">ACCOUNT</p><h2>Capricorn User</h2><p>Free workspace · Member since today</p></div></div><div className="accountgrid"><div><ShieldCheck size={20}/><b>Privacy first</b><span>Your demo conversations stay in this browser.</span></div><div><Zap size={20}/><b>Smart mode</b><span>Capricorn is configured for focused answers.</span></div></div><button className="outline">Manage account</button></section>}
  </main>
 </div>
}
