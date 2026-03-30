import{r as e}from"./rolldown-runtime-Dw2cE7zH.js";import{$ as t,$t as n,A as r,At as i,B as a,Bt as o,C as s,Cn as c,Ct as l,D as u,Dn as d,Dt as f,E as p,En as m,Et as ee,F as h,Ft as g,G as te,Gt as _,H as ne,Ht as re,I as v,It as ie,J as ae,Jt as oe,K as se,Kt as y,L as ce,Lt as b,M as le,Mt as ue,N as x,Nt as S,O as de,On as C,Ot as fe,P as pe,Pt as me,Q as he,Qt as w,R as ge,Rt as _e,S as ve,Sn as T,St as E,T as ye,Tn as be,Tt as D,U as xe,Ut as Se,V as Ce,Vt as O,W as k,Wt as we,X as Te,Xt as A,Y as j,Yt as Ee,Z as M,Zt as N,_ as De,_n as P,_t as F,a as Oe,an as I,at as ke,b as L,bn as Ae,bt as je,c as Me,cn as Ne,ct as R,d as Pe,dn as z,dt as Fe,en as Ie,et as Le,f as Re,fn as ze,ft as B,g as Be,gn as Ve,gt as He,h as Ue,hn as V,ht as H,i as We,in as Ge,it as Ke,j as qe,jt as U,k as Je,kt as Ye,l as Xe,ln as Ze,lt as Qe,m as $e,mn as et,mt as tt,n as nt,nn as rt,nt as it,o as at,on as ot,ot as W,p as st,pn as ct,pt as lt,q as ut,qt as dt,r as ft,rn as G,rt as pt,s as mt,sn as K,st as ht,t as gt,tn as _t,tt as vt,u as yt,un as bt,ut as xt,v as St,vn as q,vt as Ct,w as wt,wn as Tt,wt as Et,x as Dt,xn as J,xt as Y,y as Ot,yn as kt,yt as At,z as jt,zt as Mt}from"./vendor-DwHPW4zp.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var Nt=e(d(),1),X=e(C(),1),Pt=P({palette:{primary:{main:`#8B5A2B`,light:`#C19A6B`,dark:`#5D3A1A`},secondary:{main:`#D4AF37`,light:`#F4C542`,dark:`#996515`},background:{default:`#FDFBF7`,paper:`#FFFFFF`},text:{primary:`#2C1810`,secondary:`#5C4033`}},typography:{fontFamily:`"Playfair Display", "Georgia", serif`,h1:{fontWeight:400,fontSize:`4rem`,"@media (max-width:600px)":{fontSize:`2.5rem`}},h2:{fontWeight:400,fontSize:`3rem`,"@media (max-width:600px)":{fontSize:`2rem`}},h3:{fontWeight:400,fontSize:`2.5rem`},body1:{fontFamily:`"Montserrat", "Arial", sans-serif`,fontSize:`1rem`,lineHeight:1.7}},components:{MuiButton:{styleOverrides:{root:{borderRadius:0,textTransform:`uppercase`,letterSpacing:`2px`,fontWeight:400,padding:`12px 24px`},contained:{boxShadow:`none`,"&:hover":{boxShadow:`none`}}}},MuiCard:{styleOverrides:{root:{borderRadius:0,boxShadow:`none`,border:`1px solid #E8E0D5`}}}}}),Ft=`/assets/logo-DTTQ1SiR.png`,It=`/assets/gallery4-DbiZcI6e.jpg`,Lt=`/assets/tour3-BYx_Putt.jpg`,Rt=`/assets/tour5-CujvuasU.jpg`,zt=`/assets/gallery1-BDpVY2Jr.jpg`,Bt=`/assets/gallery2-wRT8d5iR.jpg`,Vt=`/assets/gallery3-BhlgO5Qx.jpg`,Ht=`/assets/gallery4-DbiZcI6e.jpg`,Ut=`/assets/gallery5-Diix0ETn.jpg`,Wt=`/assets/gallery6-DRWJSA21.jpg`,Gt=`/assets/gallery7-BLcAb5e6.jpg`,Kt=`/assets/gallery8-WONuCrlz.jpg`;const qt={safari:It};var Z=kt(),Jt=[{text:`Home`,path:`/`,icon:vt},{text:`Packages`,path:`/package-rate`,icon:Le},{text:`Itineraries`,path:`/tour-safaris`,icon:t},{text:`Discover`,path:`/discover-tanzania`,icon:he},{text:`Pages`,icon:M,type:`dropdown`,items:[{text:`About Us`,path:`/about`,icon:ae,description:`Our story, mission & team`,color:`#1976d2`},{text:`Why Choose Us`,path:`/why-choose-us`,icon:ut,description:`What makes us different`,color:`#2e7d32`},{text:`Contact`,path:`/contact`,icon:se,description:`Get in touch with us`,color:`#ed6c02`}]},{text:`Book Now`,path:`/contact`,icon:Te,highlight:!0}],Yt=()=>{let[e,t]=(0,X.useState)(!1),[n,r]=(0,X.useState)(!1),[a,s]=(0,X.useState)(!1),c=(0,X.useRef)(null),l=Ve(),u=ke(l.breakpoints.down(`lg`)),d=Tt(),f=Ke({disableHysteresis:!0,threshold:50});(0,X.useEffect)(()=>()=>{c.current&&clearTimeout(c.current)},[]),(0,X.useEffect)(()=>{s(!1),t(!1)},[d.pathname]);let p=(0,X.useCallback)(()=>{t(e=>!e),e&&r(!1)},[e]),m=(0,X.useCallback)(()=>{t(!1),r(!1)},[]),ee=()=>{r(!n)},h=()=>[`/about`,`/why-choose-us`,`/contact`].includes(d.pathname),g=()=>{c.current&&=(clearTimeout(c.current),null),s(!0)},_=()=>{c.current=setTimeout(()=>{s(!1)},150)},ne=({item:e})=>{let t=d.pathname===e.path,n=e.type===`dropdown`&&h();if(e.type===`dropdown`)return(0,Z.jsxs)(w,{sx:{position:`relative`},onMouseEnter:g,onMouseLeave:_,children:[(0,Z.jsx)(A,{disableRipple:!0,sx:{minWidth:`auto`,px:2,py:1,color:`text.primary`,position:`relative`,textTransform:`none`,fontSize:`0.9rem`,fontWeight:n?600:500,letterSpacing:`0.5px`,transition:`all 0.3s ease`,"&::after":{content:`""`,position:`absolute`,bottom:0,left:`50%`,transform:`translateX(-50%)`,width:n?`80%`:`0%`,height:`2px`,bgcolor:`secondary.main`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`},"&:hover::after":{width:`80%`},"&:hover":{bgcolor:`transparent`}},endIcon:(0,Z.jsx)(j,{sx:{fontSize:20,transform:a?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 0.3s ease`}}),children:(0,Z.jsxs)(Y,{direction:`row`,spacing:1,alignItems:`center`,children:[e.icon&&(0,Z.jsx)(e.icon,{sx:{fontSize:18}}),(0,Z.jsx)(I,{sx:{fontWeight:`inherit`,fontSize:`inherit`},children:e.text})]})}),(0,Z.jsx)(Ie,{in:a,timeout:200,children:(0,Z.jsx)(z,{elevation:0,onMouseEnter:g,onMouseLeave:_,sx:{position:`absolute`,top:`calc(100% + 8px)`,left:`50%`,transform:`translateX(-50%)`,width:280,borderRadius:2,overflow:`hidden`,zIndex:1300,border:`1px solid`,borderColor:`divider`,boxShadow:`0 20px 40px rgba(0,0,0,0.15)`,"&::before":{content:`""`,position:`absolute`,top:-8,left:`50%`,transform:`translateX(-50%)`,borderLeft:`8px solid transparent`,borderRight:`8px solid transparent`,borderBottom:`8px solid ${l.palette.background.paper}`}},children:(0,Z.jsx)(w,{sx:{p:1},children:e.items.map(e=>{let t=d.pathname===e.path,n=e.icon;return(0,Z.jsxs)(w,{component:J,to:e.path,onClick:()=>s(!1),sx:{display:`flex`,alignItems:`flex-start`,textDecoration:`none`,color:`text.primary`,p:1.5,borderRadius:1,mb:.5,bgcolor:t?q(l.palette.secondary.main,.1):`transparent`,border:`1px solid`,borderColor:t?`secondary.main`:`transparent`,transition:`all 0.2s ease`,"&:hover":{bgcolor:q(l.palette.secondary.main,.08),transform:`translateX(4px)`,"& .arrow-icon":{opacity:1,transform:`translateX(0)`}}},children:[(0,Z.jsx)(_t,{sx:{width:36,height:36,bgcolor:q(e.color,.1),color:e.color,mr:1.5,fontSize:`1.2rem`},children:(0,Z.jsx)(n,{sx:{fontSize:20}})}),(0,Z.jsxs)(w,{sx:{flex:1},children:[(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,justifyContent:`space-between`},children:[(0,Z.jsx)(I,{sx:{fontWeight:t?600:500,fontSize:`0.9rem`,color:t?`secondary.main`:`text.primary`},children:e.text}),(0,Z.jsx)(xe,{className:`arrow-icon`,sx:{fontSize:16,opacity:0,transform:`translateX(-4px)`,transition:`all 0.2s ease`,color:`secondary.main`}})]}),(0,Z.jsx)(I,{variant:`caption`,sx:{color:`text.secondary`,display:`block`,mt:.3},children:e.description})]})]},e.text)})})})})]});let r=e.icon;return e.highlight?(0,Z.jsx)(A,{component:J,to:e.path,disableRipple:!0,sx:{ml:1,px:3,py:1,borderRadius:6,textTransform:`none`,fontSize:`0.9rem`,fontWeight:600,letterSpacing:`0.5px`,color:`white`,bgcolor:`secondary.main`,boxShadow:`0 4px 12px rgba(0,0,0,0.15)`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,"&:hover":{bgcolor:`secondary.dark`,transform:`translateY(-2px)`,boxShadow:`0 6px 20px rgba(0,0,0,0.2)`}},children:(0,Z.jsxs)(Y,{direction:`row`,spacing:1,alignItems:`center`,children:[r&&(0,Z.jsx)(r,{sx:{fontSize:18}}),(0,Z.jsx)(`span`,{children:e.text})]})}):(0,Z.jsx)(A,{component:J,to:e.path,disableRipple:!0,sx:{minWidth:`auto`,px:2,py:1,color:`text.primary`,position:`relative`,textTransform:`none`,fontSize:`0.9rem`,fontWeight:t?600:500,letterSpacing:`0.5px`,transition:`all 0.3s ease`,"&::after":{content:`""`,position:`absolute`,bottom:0,left:`50%`,transform:`translateX(-50%)`,width:t?`80%`:`0%`,height:`2px`,bgcolor:`secondary.main`,transition:`all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`},"&:hover::after":{width:`80%`},"&:hover":{bgcolor:`transparent`}},children:(0,Z.jsxs)(Y,{direction:`row`,spacing:1,alignItems:`center`,children:[r&&(0,Z.jsx)(r,{sx:{fontSize:18}}),(0,Z.jsx)(`span`,{children:e.text})]})})},re=({item:e})=>{if(e.type===`dropdown`){let t=h();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(U,{onClick:ee,sx:{py:1.5,px:2,borderRadius:2,mx:1,mb:.5,bgcolor:t?q(l.palette.secondary.main,.1):`transparent`,color:t?`secondary.main`:`text.primary`,cursor:`pointer`,border:`1px solid`,borderColor:t?`secondary.main`:`transparent`,transition:`all 0.2s ease`,"&:hover":{bgcolor:t?q(l.palette.secondary.main,.15):`action.hover`}},children:[(0,Z.jsx)(i,{sx:{minWidth:40,color:`inherit`},children:(0,Z.jsx)(e.icon,{sx:{fontSize:22}})}),(0,Z.jsx)(Ye,{primary:e.text,primaryTypographyProps:{fontWeight:t?600:500,fontSize:`1rem`}}),n?(0,Z.jsx)(te,{}):(0,Z.jsx)(k,{})]}),(0,Z.jsx)(ze,{in:n,timeout:`auto`,unmountOnExit:!0,children:(0,Z.jsx)(w,{sx:{mx:2,mb:2},children:e.items.map(e=>{let t=d.pathname===e.path,n=e.icon;return(0,Z.jsxs)(U,{component:J,to:e.path,onClick:m,sx:{py:1.5,px:2,borderRadius:2,mb:.5,bgcolor:t?`secondary.main`:`grey.50`,color:t?`white`:`text.primary`,transition:`all 0.2s ease`,"&:hover":{bgcolor:t?`secondary.dark`:`secondary.light`,color:`white`,"& .MuiListItemIcon-root":{color:`white`}}},children:[(0,Z.jsx)(i,{sx:{minWidth:36,color:t?`white`:e.color},children:(0,Z.jsx)(n,{sx:{fontSize:20}})}),(0,Z.jsxs)(w,{sx:{flex:1},children:[(0,Z.jsx)(I,{sx:{fontWeight:t?600:500,fontSize:`0.95rem`},children:e.text}),(0,Z.jsx)(I,{variant:`caption`,sx:{color:t?`rgba(255,255,255,0.8)`:`text.secondary`,display:`block`},children:e.description})]}),t&&(0,Z.jsx)(w,{sx:{width:6,height:6,borderRadius:`50%`,bgcolor:`white`,ml:1}})]},e.text)})})})]})}let t=d.pathname===e.path,r=e.icon;return e.highlight?(0,Z.jsxs)(U,{component:J,to:e.path,onClick:m,sx:{py:1.5,px:2,borderRadius:2,mx:1,mb:1,bgcolor:`secondary.main`,color:`white`,boxShadow:`0 4px 12px rgba(0,0,0,0.15)`,transition:`all 0.2s ease`,"&:hover":{bgcolor:`secondary.dark`,transform:`translateX(4px)`}},children:[(0,Z.jsx)(i,{sx:{minWidth:40,color:`white`},children:(0,Z.jsx)(r,{sx:{fontSize:22}})}),(0,Z.jsx)(Ye,{primary:e.text,primaryTypographyProps:{fontWeight:600,fontSize:`1rem`}})]}):(0,Z.jsxs)(U,{component:J,to:e.path,onClick:m,sx:{py:1.5,px:2,borderRadius:2,mx:1,mb:.5,bgcolor:t?q(l.palette.secondary.main,.1):`transparent`,color:t?`secondary.main`:`text.primary`,border:`1px solid`,borderColor:t?`secondary.main`:`transparent`,transition:`all 0.2s ease`,"&:hover":{bgcolor:t?q(l.palette.secondary.main,.15):`action.hover`,transform:`translateX(4px)`}},children:[(0,Z.jsx)(i,{sx:{minWidth:40,color:`inherit`},children:(0,Z.jsx)(r,{sx:{fontSize:22}})}),(0,Z.jsx)(Ye,{primary:e.text,primaryTypographyProps:{fontWeight:t?600:500,fontSize:`1rem`}}),t&&(0,Z.jsx)(w,{sx:{width:6,height:6,borderRadius:`50%`,bgcolor:`secondary.main`}})]})};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ge,{position:`fixed`,elevation:f?4:0,sx:{bgcolor:f?`rgba(255, 255, 255, 0.95)`:`transparent`,backdropFilter:f?`blur(20px)`:`none`,borderBottom:f?`1px solid`:`none`,borderColor:`divider`,transition:l.transitions.create([`background-color`,`backdrop-filter`,`border-color`,`box-shadow`],{duration:400})},children:(0,Z.jsx)(y,{maxWidth:`xl`,children:(0,Z.jsxs)(Qe,{sx:{justifyContent:`space-between`,px:{xs:1,sm:2},py:f?1:1.5,minHeight:{xs:64,md:80},transition:l.transitions.create([`padding`,`min-height`],{duration:400})},children:[(0,Z.jsx)(ie,{in:!0,timeout:800,children:(0,Z.jsxs)(w,{component:J,to:`/`,sx:{display:`flex`,alignItems:`center`,textDecoration:`none`,gap:2},children:[(0,Z.jsx)(_t,{src:Ft,alt:`Nature Pulse`,sx:{width:{xs:42,md:50},height:{xs:42,md:50},border:`2px solid`,borderColor:f?`secondary.main`:`primary.main`,boxShadow:f?`0 4px 12px rgba(0,0,0,0.1)`:`none`,transition:`all 0.4s ease`}}),(0,Z.jsxs)(w,{sx:{display:{xs:`none`,sm:`block`}},children:[(0,Z.jsx)(I,{variant:`h6`,sx:{color:`text.primary`,fontWeight:700,letterSpacing:`2px`,lineHeight:1.2,fontSize:{xs:`1rem`,md:`1.1rem`}},children:`NATURE PULSE`}),(0,Z.jsx)(I,{variant:`caption`,sx:{color:`text.secondary`,letterSpacing:`3px`,textTransform:`uppercase`,fontSize:`0.7rem`,fontWeight:500},children:`EXPEDITIONS`})]})]})}),u?(0,Z.jsx)(K,{color:`inherit`,"aria-label":`toggle menu`,onClick:p,sx:{color:`text.primary`,bgcolor:f?`grey.100`:`rgba(255,255,255,0.8)`,border:`1px solid`,borderColor:`divider`,p:1,borderRadius:2,transition:`all 0.3s ease`,"&:hover":{bgcolor:`secondary.main`,color:`white`,borderColor:`secondary.main`}},children:e?(0,Z.jsx)(it,{}):(0,Z.jsx)(pt,{})}):(0,Z.jsx)(Ie,{in:!0,timeout:1e3,children:(0,Z.jsx)(w,{sx:{display:`flex`,alignItems:`center`,gap:.5},children:Jt.map(e=>(0,Z.jsx)(ne,{item:e},e.text))})})]})})}),(0,Z.jsx)(Qe,{sx:{minHeight:{xs:64,md:80}}}),(0,Z.jsx)(o,{variant:`temporary`,anchor:`right`,open:e,onClose:m,ModalProps:{keepMounted:!0},sx:{"& .MuiDrawer-paper":{width:320,bgcolor:`background.default`,borderTopLeftRadius:24,borderBottomLeftRadius:24,boxShadow:`-10px 0 40px rgba(0,0,0,0.1)`}},children:(0,Z.jsxs)(w,{sx:{height:`100%`,display:`flex`,flexDirection:`column`},children:[(0,Z.jsx)(w,{sx:{p:3,pb:2},children:(0,Z.jsxs)(Y,{direction:`row`,spacing:2,alignItems:`center`,children:[(0,Z.jsx)(_t,{src:Ft,alt:`Logo`,sx:{width:50,height:50,border:`2px solid`,borderColor:`secondary.main`}}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`h6`,sx:{fontWeight:700,letterSpacing:`1.5px`,fontSize:`1.1rem`},children:`NATURE PULSE`}),(0,Z.jsx)(I,{variant:`caption`,sx:{color:`text.secondary`,letterSpacing:`2px`},children:`EXPEDITIONS`})]})]})}),(0,Z.jsx)(O,{sx:{mx:2}}),(0,Z.jsx)(ue,{sx:{pt:2,pb:2,flex:1,overflowY:`auto`},children:Jt.map(e=>(0,Z.jsx)(re,{item:e},e.text))}),(0,Z.jsxs)(w,{sx:{p:3,bgcolor:`grey.50`,borderTop:`1px solid`,borderColor:`divider`},children:[(0,Z.jsxs)(I,{variant:`caption`,sx:{color:`text.secondary`,display:`block`,textAlign:`center`},children:[`© `,new Date().getFullYear(),` Nature Pulse Expeditions`]}),(0,Z.jsx)(I,{variant:`caption`,sx:{color:`text.secondary`,display:`block`,textAlign:`center`,mt:.5},children:`Premium Safari Experiences`})]})]})})]})},Q=V(S)(({theme:e})=>({color:`rgba(255,255,255,0.75)`,textDecoration:`none`,fontSize:`0.9rem`,display:`block`,marginBottom:e.spacing(1),transition:`0.3s`,"&:hover":{color:e.palette.secondary.light}})),Xt=V(W)(({theme:e})=>({"& .MuiOutlinedInput-root":{backgroundColor:`rgba(255,255,255,0.08)`,"& fieldset":{borderColor:`rgba(255,255,255,0.3)`},"& input":{color:`white`}}})),Zt=()=>{let[e,t]=(0,X.useState)(``),n=be();return(0,Z.jsx)(w,{component:`footer`,sx:{bgcolor:`#1a1a1a`,color:`white`,pt:10,pb:5,width:`100%`},children:(0,Z.jsxs)(y,{maxWidth:!1,sx:{px:{xs:3,md:8,lg:12}},children:[(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:2,mb:6},children:[(0,Z.jsx)(_t,{src:Ft,sx:{width:60,height:60,border:`2px solid`,borderColor:`secondary.main`}}),(0,Z.jsx)(I,{variant:`h5`,sx:{letterSpacing:2,fontWeight:600},children:`NATURE PULSE EXPEDITIONS`})]}),(0,Z.jsxs)(b,{container:!0,spacing:4,justifyContent:`space-between`,children:[(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,md:`auto`,children:[(0,Z.jsx)(I,{variant:`h6`,sx:{color:`secondary.light`,mb:2},children:`Explore`}),(0,Z.jsx)(Q,{component:J,to:`/`,children:`Home`}),(0,Z.jsx)(Q,{component:J,to:`/package-rate`,children:`Packages`}),(0,Z.jsx)(Q,{component:J,to:`/tour-safaris`,children:`Itineraries`}),(0,Z.jsx)(Q,{component:J,to:`/discover-tanzania`,children:`Discover`}),(0,Z.jsx)(Q,{component:J,to:`/contact`,children:`Book Now`})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,md:`auto`,children:[(0,Z.jsx)(I,{variant:`h6`,sx:{color:`secondary.light`,mb:2},children:`About`}),(0,Z.jsx)(Q,{component:J,to:`/about`,children:`About Us`}),(0,Z.jsx)(Q,{component:J,to:`/why-choose-us`,children:`Why Choose Us`}),(0,Z.jsx)(Q,{component:J,to:`/our-story`,children:`Our Story`}),(0,Z.jsx)(Q,{component:J,to:`/journal`,children:`Journal`}),(0,Z.jsx)(Q,{component:J,to:`/contact`,children:`Contact`})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,md:`auto`,children:[(0,Z.jsx)(I,{variant:`h6`,sx:{color:`secondary.light`,mb:2},children:`Safari Info`}),(0,Z.jsx)(Q,{component:J,to:`/best-time`,children:`Best Time to Visit`}),(0,Z.jsx)(Q,{component:J,to:`/planning`,children:`Safari Planner`}),(0,Z.jsx)(Q,{component:J,to:`/faq`,children:`FAQ`}),(0,Z.jsx)(Q,{component:J,to:`/great-migration`,children:`Great Migration`})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,md:`auto`,children:[(0,Z.jsx)(I,{variant:`h6`,sx:{color:`secondary.light`,mb:2},children:`Legal`}),(0,Z.jsx)(Q,{component:J,to:`/privacy-policy`,children:`Privacy Policy`}),(0,Z.jsx)(Q,{component:J,to:`/terms`,children:`Terms of Use`}),(0,Z.jsx)(Q,{component:J,to:`/sitemap`,children:`Sitemap`}),(0,Z.jsx)(Q,{component:J,to:`/offers`,children:`Special Offers`})]}),(0,Z.jsxs)(b,{item:!0,xs:12,md:`auto`,sx:{minWidth:{md:280,lg:320}},children:[(0,Z.jsx)(I,{variant:`h6`,sx:{color:`secondary.light`,mb:2},children:`Connect With Us`}),(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,mb:1},children:[(0,Z.jsx)(ce,{sx:{mr:1,fontSize:20}}),(0,Z.jsx)(I,{variant:`body2`,children:`Arusha, Tanzania`})]}),(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,mb:1},children:[(0,Z.jsx)(h,{sx:{mr:1,fontSize:20}}),(0,Z.jsx)(I,{variant:`body2`,children:`+255 713 414 727`})]}),(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,mb:3},children:[(0,Z.jsx)(v,{sx:{mr:1,fontSize:20}}),(0,Z.jsx)(I,{variant:`body2`,children:`info@naturepulseexpeditions.com`})]}),(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,mb:1},children:[(0,Z.jsx)(ne,{sx:{mr:1,fontSize:20}}),(0,Z.jsx)(I,{variant:`body2`,onClick:()=>{n(`/admin/login`),window.scrollTo({top:0,behavior:`instant`})},sx:{cursor:`pointer`,color:`inherit`,textDecoration:`none`,"&:hover":{color:`inherit`}},children:`Admin Login`})]}),(0,Z.jsxs)(w,{sx:{display:`flex`,gap:1,mb:3},children:[(0,Z.jsx)(K,{sx:{color:`white`},children:(0,Z.jsx)(a,{})}),(0,Z.jsx)(K,{sx:{color:`white`},children:(0,Z.jsx)(Ce,{})}),(0,Z.jsx)(K,{sx:{color:`white`},children:(0,Z.jsx)(jt,{})}),(0,Z.jsx)(K,{sx:{color:`white`},children:(0,Z.jsx)(ge,{})})]}),(0,Z.jsx)(Xt,{fullWidth:!0,size:`small`,placeholder:`Your email`,value:e,onChange:e=>t(e.target.value),InputProps:{endAdornment:(0,Z.jsx)(g,{position:`end`,children:(0,Z.jsx)(A,{sx:{color:`secondary.light`,minWidth:`auto`},children:(0,Z.jsx)(pe,{})})})}})]})]}),(0,Z.jsx)(O,{sx:{my:5,bgcolor:`rgba(255,255,255,0.1)`}}),(0,Z.jsxs)(w,{sx:{display:`flex`,justifyContent:`space-between`,flexWrap:`wrap`,gap:2},children:[(0,Z.jsxs)(I,{variant:`body2`,sx:{opacity:.6},children:[`© `,new Date().getFullYear(),` Nature Pulse Expeditions. All rights reserved.`]}),(0,Z.jsx)(I,{variant:`body2`,sx:{opacity:.6},children:`Developed & Maintaining by Bseries inc(bseriescompany@gmail.com)`}),(0,Z.jsxs)(w,{sx:{display:`flex`,gap:3},children:[(0,Z.jsx)(Q,{component:J,to:`/terms`,children:`Terms`}),(0,Z.jsx)(Q,{component:J,to:`/privacy-policy`,children:`Privacy`}),(0,Z.jsx)(Q,{component:J,to:`/sitemap`,children:`Sitemap`}),(0,Z.jsx)(Q,{component:J,to:`/contact`,children:`Support`})]})]})]})})},Qt=({title:e,subtitle:t,description:n,buttonText:r,buttonLink:i,imageUrl:a,height:o=`90vh`})=>(0,Z.jsx)(w,{sx:{height:o,backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${a})`,backgroundSize:`cover`,backgroundPosition:`center`,display:`flex`,alignItems:`center`,color:`white`,mb:6},children:(0,Z.jsxs)(y,{maxWidth:`lg`,children:[(0,Z.jsx)(I,{variant:`h1`,component:`h1`,gutterBottom:!0,sx:{maxWidth:`800px`},children:e}),(0,Z.jsx)(I,{variant:`h4`,gutterBottom:!0,sx:{maxWidth:`600px`,fontStyle:`italic`},children:t}),(0,Z.jsx)(I,{variant:`body1`,sx:{maxWidth:`500px`,mb:4,fontSize:`1.2rem`},children:n}),r&&(0,Z.jsx)(A,{component:J,to:i,variant:`contained`,color:`secondary`,size:`large`,children:r})]})}),$t=`/assets/gallery9-DSmUmrZv.jpg`,en=`/assets/gallery10-BCsdpxvT.jpg`,tn=`/assets/gallery11-Bzm-tBoA.jpg`,nn=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,rn=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .hp-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* hero navigation */
  .hp-hero-nav {
    position: absolute; bottom: 40px; left: 50%;
    transform: translateX(-50%);
    display: flex; gap: 16px; z-index: 10;
  }
  .hp-hero-dot {
    width: 12px; height: 12px; border-radius: 50%;
    background: rgba(255,255,255,0.6);
    cursor: pointer; transition: all .2s;
  }
  .hp-hero-dot.active { background: var(--gold); width: 32px; border-radius: 6px; }
  .hp-hero-dot:hover { background: var(--gold-light); transform: scale(1.2); }

  .hp-hero-arrow {
    position: absolute; top: 50%; transform: translateY(-50%);
    width: 56px; height: 56px; border-radius: 50%;
    background: rgba(0,0,0,0.5); backdrop-filter: blur(4px);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all .2s; z-index: 10;
    color: white;
  }
  .hp-hero-arrow svg { width: 28px; height: 28px; }
  .hp-hero-arrow:hover { background: var(--gold); transform: translateY(-50%) scale(1.05); }
  .hp-hero-arrow-left { left: 32px; }
  .hp-hero-arrow-right { right: 32px; }

  /* main container */
  .hp-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 80px;
  }

  /* welcome section */
  .hp-welcome {
    text-align: center; padding: 80px 0 64px;
  }
  .hp-logo {
    width: 120px; height: 120px; border-radius: 50%;
    border: 3px solid var(--gold); margin: 0 auto 32px;
    object-fit: cover;
  }
  .hp-eyebrow {
    font-size: 20px;
    text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 20px; font-family: var(--sans);
    font-weight: 600;
  }
  .hp-title {
    font-family: var(--serif); font-size: clamp(56px,8vw,96px);
    font-weight: 400; line-height: 1.1; color: var(--gray-800);
    margin-bottom: 32px;
  }
  .hp-title em { font-style: italic; color: var(--gold); }
  .hp-desc {
    font-size: 20px;
    color: var(--gray-600); max-width: 850px;
    margin: 0 auto; line-height: 1.7;
  }
  .hp-desc + .hp-desc { margin-top: 20px; }

  /* section header */
  .hp-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .hp-section-eyebrow {
    font-size: 20px;
    text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .hp-section-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,68px);
    font-weight: 400; color: var(--gray-800);
  }
  .hp-section-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* feature grid */
  .hp-grid {
    display: grid; grid-template-columns: repeat(5, 1fr);
    gap: 28px; margin-bottom: 90px;
  }
  @media (max-width: 1000px) { .hp-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 680px) { .hp-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .hp-grid { grid-template-columns: 1fr; } }

  .hp-feature-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 24px; text-align: center;
    transition: all .3s; box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .hp-feature-card:hover { 
    transform: translateY(-8px); 
    border-color: var(--gold);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  }
  .hp-feature-icon {
    font-size: 68px;
    margin-bottom: 20px; display: inline-block;
  }
  .hp-feature-title {
    font-family: var(--sans); font-size: 20px;
    font-weight: 700;
    color: var(--gray-700); letter-spacing: .3px;
  }

  /* why choose grid */
  .hp-why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 24px; margin-bottom: 90px;
  }
  @media (max-width: 680px) { .hp-why-grid { grid-template-columns: 1fr; } }
  .hp-why-item {
    display: flex; align-items: center; gap: 20px;
    padding: 20px 0; border-bottom: 1px solid var(--gray-200);
  }
  .hp-why-icon {
    color: var(--gold); flex-shrink: 0;
    background: var(--gold-pale); width: 56px; height: 56px;
    border-radius: 50%; display: flex; align-items: center;
    justify-content: center;
  }
  .hp-why-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }
  .hp-why-text {
    font-size: 20px;
    color: var(--gray-700); font-weight: 600;
  }

  /* destinations grid */
  .hp-dest-grid {
    display: grid; grid-template-columns: repeat(6, 1fr);
    gap: 3px; margin-bottom: 90px;
  }
  @media (max-width: 1200px) { .hp-dest-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 680px) { .hp-dest-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .hp-dest-grid { grid-template-columns: 1fr; } }

  .hp-dest-card {
    position: relative; overflow: hidden;
    aspect-ratio: 4/3; cursor: pointer;
  }
  .hp-dest-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s cubic-bezier(.25,.46,.45,.94);
  }
  .hp-dest-card:hover .hp-dest-img { transform: scale(1.08); }
  .hp-dest-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%);
    display: flex; flex-direction: column; justify-content: flex-end;
    padding: 24px; opacity: 0; transition: opacity .3s;
  }
  .hp-dest-card:hover .hp-dest-overlay { opacity: 1; }
  .hp-dest-name {
    font-family: var(--serif); font-size: 24px;
    font-weight: 600;
    color: var(--gold); margin-bottom: 8px;
  }
  .hp-dest-desc {
    font-size: 15px;
    color: var(--gray-100); line-height: 1.4;
  }
  .hp-dest-title {
    position: absolute; bottom: 24px; left: 24px; z-index: 1;
    font-family: var(--serif); font-size: 22px;
    font-weight: 600;
    color: white; text-shadow: 0 2px 4px rgba(0,0,0,0.4);
  }

  /* inclusion cards */
  .hp-inclusion-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 40px; margin-bottom: 90px;
  }
  @media (max-width: 800px) { .hp-inclusion-grid { grid-template-columns: 1fr; } }

  .hp-card {
    background: var(--white); border: 1px solid var(--gray-200);
    position: relative; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.04);
    transition: all .3s;
  }
  .hp-card:hover { box-shadow: 0 12px 32px rgba(0,0,0,0.1); transform: translateY(-4px); }
  .hp-card-header {
    padding: 32px 32px 24px; display: flex; align-items: center; gap: 20px;
    border-bottom: 1px solid var(--gray-200);
  }
  .hp-card-icon {
    width: 72px; height: 72px;
    border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
  }
  .hp-card-icon svg { width: 36px; height: 36px; stroke: var(--gold); fill: none; }
  .hp-card-title {
    font-family: var(--serif); font-size: 36px;
    font-weight: 500;
    color: var(--gray-800);
  }
  .hp-card-list { padding: 28px 32px; }
  .hp-card-item {
    display: flex; align-items: center; gap: 16px;
    padding: 16px 0; border-bottom: 1px solid var(--gray-100);
  }
  .hp-card-item:last-child { border-bottom: none; }
  .hp-item-check {
    width: 44px; height: 44px;
    border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold); flex-shrink: 0;
  }
  .hp-item-check svg { width: 22px; height: 22px; stroke: currentColor; fill: none; }
  .hp-item-text {
    font-size: 19px;
    color: var(--gray-700); font-weight: 500;
  }
  .hp-item-text-strike {
    font-size: 19px;
    color: var(--gray-500); text-decoration: line-through;
  }
  .hp-card-badge {
    position: absolute; bottom: 24px; right: 24px;
    opacity: 0.04;
  }
  .hp-card-badge svg { width: 120px; height: 120px; stroke: var(--gray-600); fill: none; }

  /* cta section */
  .hp-cta {
    text-align: center; padding: 80px 56px;
    background: var(--gray-50); border: 1px solid var(--gray-200);
    margin-top: 48px;
  }
  .hp-cta-title {
    font-family: var(--serif); font-size: clamp(44px,7vw,64px);
    font-weight: 500; color: var(--gray-800); margin-bottom: 24px;
  }
  .hp-cta-desc {
    font-size: 20px;
    color: var(--gray-600); max-width: 650px;
    margin: 0 auto 40px; line-height: 1.7;
  }
  .hp-btn {
    display: inline-block; padding: 18px 56px;
    background: var(--gold); color: white;
    text-decoration: none; font-family: var(--sans);
    font-size: 16px;
    text-transform: uppercase; letter-spacing: 2.5px;
    font-weight: 700; transition: all .2s;
    border: 2px solid var(--gold);
    cursor: pointer;
  }
  .hp-btn:hover { background: var(--gold-dark); transform: translateY(-3px); }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .hp-fade-in { animation: fadeUp .7s ease both; }

  @media (max-width: 768px) {
    .hp-container { padding: 0 20px 56px; }
    .hp-welcome { padding: 56px 0 40px; }
    .hp-feature-card { padding: 28px 20px; }
    .hp-card-header { padding: 24px; }
    .hp-card-list { padding: 24px; }
    .hp-cta { padding: 56px 28px; }
    .hp-feature-icon { font-size: 56px; }
    .hp-feature-title { font-size: 18px; }
    .hp-why-text { font-size: 18px; }
    .hp-dest-title { font-size: 18px; bottom: 16px; left: 16px; }
    .hp-dest-name { font-size: 20px; }
    .hp-dest-desc { font-size: 13px; }
    .hp-card-title { font-size: 28px; }
    .hp-item-text, .hp-item-text-strike { font-size: 17px; }
  }
`,an=()=>{let e=be(),[t,n]=(0,X.useState)(0),r=[{title:`Explore beyond borders`,subtitle:`Luxury & Authentic Safari Experiences`,description:`Experience breathtaking landscapes, iconic wildlife, and unforgettable moments — crafted with care, elegance, and local expertise.`,image:zt},{title:`Witness the Great Migration`,subtitle:`Nature's Greatest Spectacle`,description:`Follow the incredible journey of millions of wildebeest across the vast plains. A once-in-a-lifetime experience awaits.`,image:Bt},{title:`Conquer the Peaks`,subtitle:`Africa's Highest Summit`,description:`Stand on the roof of Africa. Our expert guides ensure your safety and success on this unforgettable adventure.`,image:Vt},{title:`Discover Local Culture`,subtitle:`Meet the People`,description:`Immerse yourself in rich traditions and vibrant cultures that have thrived alongside wildlife for centuries.`,image:Ht},{title:`Wilderness Retreats`,subtitle:`Comfort in the Wild`,description:`Experience the perfect blend of adventure and comfort at our carefully selected properties.`,image:Ut}];(0,X.useEffect)(()=>{let e=setInterval(()=>{n(e=>e===r.length-1?0:e+1)},6e3);return()=>clearInterval(e)},[r.length]);let i=(t,n)=>{t.preventDefault(),window.scrollTo({top:0,behavior:`smooth`}),setTimeout(()=>{e(n)},300)},a=[{name:`Northern Plains`,image:Wt,description:`Endless plains, home of the Great Migration`},{name:`Crater Highlands`,image:Gt,description:`UNESCO World Heritage Site`},{name:`Elephant Reserve`,image:Kt,description:`Famous for baobabs and elephant herds`},{name:`Lake District`,image:$t,description:`Tree-climbing lions and flamingos`},{name:`Mountain Peaks`,image:en,description:`Africa's highest peak, trekking adventures`},{name:`Coastal Zone`,image:tn,description:`A tropical paradise where Africa meets the sea`}];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[nn,rn]}),(0,Z.jsxs)(`div`,{className:`hp-page`,children:[(0,Z.jsxs)(w,{sx:{position:`relative`},children:[(0,Z.jsx)(Qt,{title:r[t].title,subtitle:r[t].subtitle,description:r[t].description,buttonText:`Plan Your Journey`,buttonLink:`/tour-safaris`,imageUrl:r[t].image},t),(0,Z.jsx)(`div`,{className:`hp-hero-arrow hp-hero-arrow-left`,onClick:()=>n(e=>e===0?r.length-1:e-1),children:(0,Z.jsx)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,Z.jsx)(`path`,{d:`M15 18l-6-6 6-6`})})}),(0,Z.jsx)(`div`,{className:`hp-hero-arrow hp-hero-arrow-right`,onClick:()=>n(e=>e===r.length-1?0:e+1),children:(0,Z.jsx)(`svg`,{width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,Z.jsx)(`path`,{d:`M9 18l6-6-6-6`})})}),(0,Z.jsx)(`div`,{className:`hp-hero-nav`,children:r.map((e,r)=>(0,Z.jsx)(`div`,{className:`hp-hero-dot ${r===t?`active`:``}`,onClick:()=>n(r)},r))})]}),(0,Z.jsxs)(`div`,{className:`hp-container`,children:[(0,Z.jsxs)(`div`,{className:`hp-welcome hp-fade-in`,children:[(0,Z.jsx)(`img`,{src:Ft,alt:`Nature Pulse Expeditions`,className:`hp-logo`}),(0,Z.jsx)(`div`,{className:`hp-eyebrow`,children:`Welcome to Nature Pulse Expeditions`}),(0,Z.jsxs)(`h1`,{className:`hp-title`,children:[`Curated `,(0,Z.jsx)(`em`,{children:`Wilderness Journeys`})]}),(0,Z.jsx)(`p`,{className:`hp-desc`,children:`We specialize in curated safari experiences across East Africa. From the endless plains of the Northern Circuit to the majestic Crater Highlands, we create journeys that blend adventure, comfort, and personalized service.`}),(0,Z.jsx)(`p`,{className:`hp-desc`,children:`Whether you seek a luxury retreat or an authentic camping adventure, we design every expedition to match your vision.`})]}),(0,Z.jsxs)(`div`,{className:`hp-section-header`,children:[(0,Z.jsx)(`div`,{className:`hp-section-eyebrow`,children:`Why Travel With Us`}),(0,Z.jsx)(`h2`,{className:`hp-section-title`,children:`Nature Pulse Expeditions`}),(0,Z.jsx)(`div`,{className:`hp-section-underline`})]}),(0,Z.jsx)(`div`,{className:`hp-grid`,children:[{icon:`🇹🇿`,title:`Locally Owned & Operated`},{icon:`🦁`,title:`Professional Safari Guides`},{icon:`🏕️`,title:`Carefully Selected Properties`},{icon:`💰`,title:`Transparent & Competitive`},{icon:`📋`,title:`Personalized Itineraries`}].map((e,t)=>(0,Z.jsxs)(`div`,{className:`hp-feature-card`,children:[(0,Z.jsx)(`div`,{className:`hp-feature-icon`,children:e.icon}),(0,Z.jsx)(`div`,{className:`hp-feature-title`,children:e.title})]},t))}),(0,Z.jsxs)(`div`,{className:`hp-section-header`,children:[(0,Z.jsx)(`div`,{className:`hp-section-eyebrow`,children:`Why Choose Us`}),(0,Z.jsx)(`h2`,{className:`hp-section-title`,children:`Our Commitment to You`}),(0,Z.jsx)(`div`,{className:`hp-section-underline`})]}),(0,Z.jsx)(`div`,{className:`hp-why-grid`,children:[`Personalized safari planning`,`Transparent pricing – no hidden fees`,`Local expertise & trusted guides`,`Flexible itineraries`,`24/7 support during your journey`].map((e,t)=>(0,Z.jsxs)(`div`,{className:`hp-why-item`,children:[(0,Z.jsx)(`div`,{className:`hp-why-icon`,children:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,Z.jsx)(`span`,{className:`hp-why-text`,children:e})]},t))}),(0,Z.jsxs)(`div`,{className:`hp-section-header`,children:[(0,Z.jsx)(`div`,{className:`hp-section-eyebrow`,children:`Discover`}),(0,Z.jsx)(`h2`,{className:`hp-section-title`,children:`Featured Destinations`}),(0,Z.jsx)(`div`,{className:`hp-section-underline`})]}),(0,Z.jsx)(`div`,{className:`hp-dest-grid`,children:a.map((e,t)=>(0,Z.jsxs)(`div`,{className:`hp-dest-card`,children:[(0,Z.jsx)(`img`,{src:e.image,alt:e.name,className:`hp-dest-img`}),(0,Z.jsx)(`div`,{className:`hp-dest-title`,children:e.name}),(0,Z.jsxs)(`div`,{className:`hp-dest-overlay`,children:[(0,Z.jsx)(`div`,{className:`hp-dest-name`,children:e.name}),(0,Z.jsx)(`div`,{className:`hp-dest-desc`,children:e.description})]})]},t))}),(0,Z.jsxs)(`div`,{className:`hp-section-header`,children:[(0,Z.jsx)(`div`,{className:`hp-section-eyebrow`,children:`What to Expect`}),(0,Z.jsx)(`h2`,{className:`hp-section-title`,children:`Safari Inclusions`}),(0,Z.jsx)(`div`,{className:`hp-section-underline`})]}),(0,Z.jsxs)(`div`,{className:`hp-inclusion-grid`,children:[(0,Z.jsxs)(`div`,{className:`hp-card`,children:[(0,Z.jsxs)(`div`,{className:`hp-card-header`,children:[(0,Z.jsx)(`div`,{className:`hp-card-icon`,children:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,Z.jsx)(`h3`,{className:`hp-card-title`,children:`What's Included`})]}),(0,Z.jsx)(`div`,{className:`hp-card-list`,children:[`Park and reserve fees`,`Professional English-speaking guide`,`4x4 safari vehicle with pop-up roof`,`Accommodation (based on package)`,`Meals during safari`,`Bottled drinking water`,`Airport transfers`].map((e,t)=>(0,Z.jsxs)(`div`,{className:`hp-card-item`,children:[(0,Z.jsx)(`div`,{className:`hp-item-check`,children:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}),(0,Z.jsx)(`span`,{className:`hp-item-text`,children:e})]},t))}),(0,Z.jsx)(`div`,{className:`hp-card-badge`,children:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})})]}),(0,Z.jsxs)(`div`,{className:`hp-card`,children:[(0,Z.jsxs)(`div`,{className:`hp-card-header`,children:[(0,Z.jsx)(`div`,{className:`hp-card-icon`,children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,Z.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,Z.jsx)(`h3`,{className:`hp-card-title`,children:`Not Included`})]}),(0,Z.jsx)(`div`,{className:`hp-card-list`,children:[`International flights`,`Travel insurance`,`Visa fees`,`Tips & personal expenses`].map((e,t)=>(0,Z.jsxs)(`div`,{className:`hp-card-item`,children:[(0,Z.jsx)(`div`,{className:`hp-item-check`,children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,Z.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})}),(0,Z.jsx)(`span`,{className:`hp-item-text-strike`,children:e})]},t))}),(0,Z.jsx)(`div`,{className:`hp-card-badge`,children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),(0,Z.jsx)(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]})})]})]}),(0,Z.jsxs)(`div`,{className:`hp-cta`,children:[(0,Z.jsx)(`h3`,{className:`hp-cta-title`,children:`Ready to Begin Your Adventure?`}),(0,Z.jsx)(`p`,{className:`hp-cta-desc`,children:`Let us help you plan the perfect journey tailored to your preferences and vision.`}),(0,Z.jsx)(`button`,{onClick:e=>i(e,`/contact`),className:`hp-btn`,children:`Plan Your Journey`})]})]})]})]})},on=`/assets/tour1-DR6B8RiJ.jpg`,sn=`/assets/tour2-C7LRETuS.jpg`,cn=`/assets/tour4-BOQfGOLJ.jpg`,ln=`/assets/gallery8-WONuCrlz.jpg`,un=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,dn=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .ts-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* ── filter bar ── */
  .ts-filter-bar {
    background: var(--white);
    border-bottom: 1px solid var(--gray-200);
    position: sticky; top: 0; z-index: 100;
    padding: 0 clamp(20px, 5vw, 80px);
  }
  .ts-filter-inner {
    max-width: 1400px; margin: 0 auto;
    display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
    padding: 20px 0;
  }
  .ts-search-wrap { position: relative; flex: 1; min-width: 240px; }
  .ts-search-wrap svg {
    position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
    color: var(--gray-500); pointer-events: none;
    width: 18px; height: 18px;
  }
  .ts-search {
    width: 100%; background: var(--white);
    border: 1px solid var(--gray-200); border-radius: 4px;
    padding: 12px 16px 12px 44px;
    font-family: var(--sans); font-size: 15px; color: var(--gray-800);
    outline: none; transition: border-color .2s;
  }
  .ts-search::placeholder { color: var(--gray-500); }
  .ts-search:focus { border-color: var(--gold); }

  .ts-select-wrap { position: relative; }
  .ts-select-wrap svg {
    position: absolute; right: 14px; top: 50%; transform: translateY(-50%);
    pointer-events: none; color: var(--gold);
    width: 14px; height: 14px;
  }
  .ts-select {
    appearance: none;
    background: var(--white);
    border: 1px solid var(--gray-200); border-radius: 4px;
    padding: 12px 40px 12px 16px;
    font-family: var(--sans); font-size: 15px; color: var(--gray-800);
    cursor: pointer; outline: none; transition: border-color .2s;
    min-width: 180px;
  }
  .ts-select option { background: var(--white); }
  .ts-select:focus { border-color: var(--gold); }

  .ts-filter-count {
    margin-left: auto;
    font-size: 14px; color: var(--gray-500); white-space: nowrap;
    font-family: var(--serif); letter-spacing: .5px; font-style: italic;
  }

  /* ── page heading ── */
  .ts-heading {
    max-width: 1400px; margin: 0 auto;
    padding: clamp(56px,8vw,112px) clamp(20px,5vw,80px) 0;
    display: flex; align-items: flex-end; justify-content: space-between;
    flex-wrap: wrap; gap: 32px;
  }
  .ts-heading-logo {
    width: 64px; height: 64px; border-radius: 50%;
    border: 2px solid var(--gold);
    object-fit: cover; margin-bottom: 20px;
  }
  .ts-heading-eyebrow {
    font-family: var(--sans); font-size: 20px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 5px; color: var(--gold);
    margin-bottom: 16px;
  }
  .ts-heading h2 {
    font-family: var(--serif); font-size: clamp(48px,6vw,84px);
    font-weight: 400; line-height: 1.1; color: var(--gray-800);
    letter-spacing: -.5px;
  }
  .ts-heading h2 em { font-style: italic; color: var(--gold); }
  .ts-heading-sub {
    font-size: 18px; color: var(--gray-600); line-height: 1.7; max-width: 420px;
    margin-top: 20px;
  }
  .ts-heading-rule {
    width: 1px; height: 100px; background: var(--gray-200);
    margin: 0 28px; flex-shrink: 0;
  }
  .ts-heading-stat { text-align: center; }
  .ts-heading-stat-num {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); line-height: 1;
  }
  .ts-heading-stat-lbl {
    font-size: 13px; text-transform: uppercase; letter-spacing: 2.5px;
    color: var(--gray-500); margin-top: 8px;
  }
  .ts-heading-stats { display: flex; align-items: center; gap: 0; }

  /* ── grid ── */
  .ts-grid-wrap {
    max-width: 1400px; margin: 0 auto;
    padding: 56px clamp(20px,5vw,80px) 90px;
  }
  .ts-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 1100px) { .ts-grid { grid-template-columns: repeat(2,1fr); } }
  @media (max-width: 680px)  { .ts-grid { grid-template-columns: 1fr; } }

  /* ── card ── */
  .ts-card {
    position: relative; overflow: hidden;
    background: var(--white);
    cursor: pointer;
    display: flex; flex-direction: column;
    transition: all .3s;
    border: 1px solid var(--gray-200);
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .ts-card:hover { 
    transform: translateY(-8px);
    border-color: var(--gold);
    box-shadow: 0 16px 32px rgba(0,0,0,0.1);
  }

  .ts-card-img-wrap {
    position: relative; overflow: hidden;
    aspect-ratio: 4/3;
  }
  .ts-card-img {
    width: 100%; height: 100%;
    object-fit: cover; display: block;
    transition: transform .8s cubic-bezier(.25,.46,.45,.94), filter .8s;
  }
  .ts-card:hover .ts-card-img {
    transform: scale(1.07);
  }

  /* gradient overlay */
  .ts-card-img-wrap::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 30%,
      rgba(0,0,0,.3) 70%,
      rgba(0,0,0,.5) 100%
    );
    pointer-events: none;
  }

  /* popular badge */
  .ts-badge {
    position: absolute; top: 20px; left: 20px; z-index: 2;
    background: var(--gold);
    color: var(--white);
    font-family: var(--sans); font-size: 12px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    padding: 5px 12px;
  }

  /* duration */
  .ts-card-duration {
    position: absolute; bottom: 18px; right: 18px; z-index: 2;
    font-family: var(--serif); font-size: 14px; font-style: italic;
    color: var(--white); display: flex; align-items: center; gap: 6px;
    background: rgba(0,0,0,0.6); padding: 6px 10px; border-radius: 4px;
  }

  .ts-card-body { padding: 26px 28px 28px; flex: 1; display: flex; flex-direction: column; }

  .ts-card-name {
    font-family: var(--serif); font-size: 26px; font-weight: 500;
    color: var(--gray-800); line-height: 1.2; margin-bottom: 12px;
    transition: color .2s;
  }
  .ts-card:hover .ts-card-name { color: var(--gold); }

  .ts-card-desc {
    font-size: 15px; color: var(--gray-600); line-height: 1.65;
    margin-bottom: 18px; flex: 1;
  }

  /* regions row */
  .ts-card-regions {
    display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
    margin-bottom: 18px;
  }
  .ts-region-dot {
    width: 5px; height: 5px; border-radius: 50%; background: var(--gold);
    flex-shrink: 0;
  }
  .ts-region-name { font-size: 13px; color: var(--gray-500); letter-spacing: .3px; }
  .ts-region-arrow { font-size: 12px; color: var(--gray-400); }

  /* highlights */
  .ts-highlights { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 22px; }
  .ts-hl {
    font-size: 12px; color: var(--gold);
    border: 1px solid rgba(201,168,76,.3);
    padding: 4px 12px; letter-spacing: .5px;
    font-family: var(--sans);
  }

  /* rating */
  .ts-rating {
    display: flex; align-items: center; gap: 10px; margin-bottom: 22px;
  }
  .ts-stars { display: flex; gap: 3px; }
  .ts-star { color: var(--gold); font-size: 14px; }
  .ts-star-empty { color: var(--gray-300); font-size: 14px; }
  .ts-rating-text { font-size: 13px; color: var(--gray-500); }
  .ts-rating-score { font-family: var(--serif); color: var(--gold); font-size: 17px; }

  /* card footer */
  .ts-card-footer {
    display: flex; gap: 10px; border-top: 1px solid var(--gray-200);
    padding-top: 20px; margin-top: auto;
  }
  .ts-btn-outline {
    flex: 1; padding: 12px; text-align: center;
    border: 1px solid var(--gray-300); color: var(--gray-700);
    font-family: var(--sans); font-size: 13px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    text-decoration: none; transition: all .2s;
    background: transparent;
  }
  .ts-btn-outline:hover {
    background: var(--gold-pale); border-color: var(--gold); color: var(--gold);
  }
  .ts-btn-solid {
    flex: 1; padding: 12px; text-align: center;
    background: var(--gold); color: var(--white);
    font-family: var(--sans); font-size: 13px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 1.5px;
    text-decoration: none; transition: all .2s;
    border: 1px solid var(--gold);
  }
  .ts-btn-solid:hover { background: var(--gold-dark); }

  /* ── skeleton ── */
  @keyframes shimmer {
    0%   { background-position: -800px 0; }
    100% { background-position: 800px 0; }
  }
  .ts-skeleton {
    background: linear-gradient(90deg, var(--gray-100) 25%, var(--gray-200) 50%, var(--gray-100) 75%);
    background-size: 800px 100%;
    animation: shimmer 1.6s infinite;
  }

  /* ── empty state ── */
  .ts-empty {
    grid-column: 1/-1; text-align: center;
    padding: 100px 20px;
  }
  .ts-empty-icon {
    font-family: var(--serif); font-size: 96px; color: var(--gray-300);
    margin-bottom: 20px; display: block;
  }
  .ts-empty h3 { font-family: var(--serif); font-size: 32px; font-weight: 400; color: var(--gray-600); }
  .ts-empty p  { font-size: 16px; color: var(--gray-500); margin-top: 12px; }

  /* ── about section ── */
  .ts-about {
    background: var(--gray-50);
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    padding: clamp(70px,9vw,140px) clamp(20px,5vw,80px);
  }
  .ts-about-inner { max-width: 1400px; margin: 0 auto; }
  .ts-about-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 90px;
    align-items: start;
  }
  @media (max-width: 900px) { .ts-about-grid { grid-template-columns: 1fr; gap: 56px; } }

  .ts-about-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 20px; font-family: var(--sans);
    font-weight: 600;
  }
  .ts-about h3 {
    font-family: var(--serif); font-size: clamp(38px,5vw,60px);
    font-weight: 400; color: var(--gray-800); line-height: 1.1;
    margin-bottom: 28px;
  }
  .ts-about h3 em { font-style: italic; color: var(--gold); }
  .ts-about p { font-size: 16px; color: var(--gray-600); line-height: 1.8; margin-bottom: 20px; }

  .ts-about-pillars { display: flex; flex-direction: column; gap: 32px; margin-top: 12px; }
  .ts-pillar { padding-left: 24px; border-left: 2px solid var(--gold); }
  .ts-pillar h4 {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 8px;
  }
  .ts-pillar p { font-size: 15px; color: var(--gray-600); line-height: 1.7; margin: 0; }

  .ts-about-box {
    background: var(--white);
    border: 1px solid var(--gray-200);
    padding: 48px;
  }
  .ts-about-box h4 {
    font-family: var(--serif); font-size: 32px; font-weight: 400;
    color: var(--gold); margin-bottom: 24px;
  }
  .ts-about-box p { font-size: 15px; color: var(--gray-600); line-height: 1.8; margin-bottom: 18px; }
  .ts-about-box-img {
    width: 100%; aspect-ratio: 16/9; object-fit: cover; display: block;
    margin-top: 28px;
  }

  /* ── accommodation banner ── */
  .ts-banner {
    background: var(--white);
    border-top: 1px solid var(--gray-200);
    border-bottom: 1px solid var(--gray-200);
    padding: clamp(56px,8vw,112px) clamp(20px,5vw,80px);
  }
  .ts-banner-inner {
    max-width: 1400px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 70px; align-items: center;
  }
  @media (max-width: 800px) { .ts-banner-inner { grid-template-columns: 1fr; } }
  .ts-banner h3 {
    font-family: var(--serif); font-size: clamp(38px,5vw,60px);
    font-weight: 400; color: var(--gray-800); margin-bottom: 24px;
  }
  .ts-banner h3 em { font-style: italic; color: var(--gold); }
  .ts-banner p { font-size: 16px; color: var(--gray-600); line-height: 1.8; max-width: 600px; }
  .ts-banner p + p { margin-top: 16px; }
  .ts-banner-img {
    width: 320px; aspect-ratio: 3/4; object-fit: cover;
    border: 1px solid var(--gray-200);
  }
  @media (max-width: 800px) { .ts-banner-img { width: 100%; aspect-ratio: 16/9; } }

  /* fade in on mount */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .ts-card {
    animation: fadeUp .5s ease both;
  }
`;function fn({value:e}){return(0,Z.jsx)(`div`,{className:`ts-stars`,children:[1,2,3,4,5].map(t=>(0,Z.jsx)(`span`,{className:t<=Math.round(e)?`ts-star`:`ts-star-empty`,children:`★`},t))})}function pn(){return(0,Z.jsxs)(`div`,{className:`ts-card`,children:[(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{aspectRatio:`4/3`}}),(0,Z.jsxs)(`div`,{style:{padding:`26px 28px 28px`},children:[(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{height:32,borderRadius:2,marginBottom:12}}),(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{height:16,borderRadius:2,marginBottom:8,width:`90%`}}),(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{height:16,borderRadius:2,marginBottom:8,width:`75%`}}),(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{height:16,borderRadius:2,marginBottom:22,width:`60%`}}),(0,Z.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{flex:1,height:44,borderRadius:2}}),(0,Z.jsx)(`div`,{className:`ts-skeleton`,style:{flex:1,height:44,borderRadius:2}})]})]})]})}var mn=()=>{let[e,t]=(0,X.useState)([]),[n,r]=(0,X.useState)([]),[i,a]=(0,X.useState)(!0),[o,s]=(0,X.useState)({sortBy:`popularity`,duration:`all`,searchTerm:``});(0,X.useEffect)(()=>{setTimeout(()=>{let e=[{id:1,name:`Wilderness & Coastal Discovery`,description:`Journey through diverse landscapes — from wildlife-rich plains to tranquil coastal shores.`,image:on,highlights:[`Wildlife Viewing`,`Coastal Exploration`],regions:[`Northern Plains`,`Eastern Reserves`,`Coastal Zone`],duration:`10 days`,popularity:98,rating:4.8,reviewCount:124},{id:2,name:`Coastal Serenity & Wildlife Adventure`,description:`Experience the perfect balance of wildlife encounters and coastal relaxation.`,image:sn,highlights:[`Beach Retreat`,`Wildlife Safaris`],regions:[`Northern Plains`,`Central Highlands`,`Coastal Zone`],duration:`16 days`,popularity:95,rating:4.9,reviewCount:89},{id:3,name:`Highlands & Lake Region Expedition`,description:`Discover the unique ecosystems of the highlands and surrounding lake districts.`,image:Lt,highlights:[`Highland Landscapes`,`Lake Ecosystems`],regions:[`Lake District`,`Highland Region`,`Savannah Plains`],duration:`8 days`,popularity:92,rating:4.7,reviewCount:156},{id:4,name:`Great Migration Experience`,description:`Witness one of nature's most spectacular wildlife movements across vast savannahs.`,image:cn,highlights:[`Migration Routes`,`Savannah Wildlife`],regions:[`Northern Corridor`,`Central Plains`,`Eastern Reserves`],duration:`12 days`,popularity:99,rating:5,reviewCount:203},{id:5,name:`Classic Wilderness Circuit`,description:`Explore the region's most celebrated wildlife areas on this comprehensive journey.`,image:Rt,highlights:[`Wildlife Reserves`,`Scenic Landscapes`],regions:[`Northern Circuit`,`Central Plains`,`Highland Region`],duration:`7 days`,popularity:91,rating:4.6,reviewCount:178},{id:6,name:`Elephant Herds & Crater Views`,description:`For wildlife enthusiasts — vast elephant populations amid breathtaking crater scenery.`,image:ln,highlights:[`Elephant Viewing`,`Crater Landscapes`],regions:[`Northern Plains`,`Highland Region`,`Eastern Reserves`],duration:`5 days`,popularity:88,rating:4.5,reviewCount:145}];t(e),r(e),a(!1)},1500)},[]);let c=(e,t,n,i)=>{let a=[...e];if(i){let e=i.toLowerCase();a=a.filter(t=>t.name.toLowerCase().includes(e)||t.description.toLowerCase().includes(e)||t.highlights.some(t=>t.toLowerCase().includes(e)))}n!==`all`&&(a=a.filter(e=>{let t=parseInt(e.duration);return n===`short`?t<=5:n===`medium`?t>5&&t<=10:n===`long`?t>10:!0})),t===`popularity`&&a.sort((e,t)=>t.popularity-e.popularity),t===`rating`&&a.sort((e,t)=>t.rating-e.rating),t===`duration`&&a.sort((e,t)=>parseInt(e.duration)-parseInt(t.duration)),r(a)},l=(t,n)=>{let r={...o,[t]:n};s(r),c(e,r.sortBy,r.duration,r.searchTerm)};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[un,dn]}),(0,Z.jsxs)(`div`,{className:`ts-page`,children:[(0,Z.jsx)(Qt,{title:`Wilderness Expeditions`,subtitle:`Curated journeys through pristine landscapes`,description:`From wildlife migrations to coastal havens — discover our handcrafted experiences.`,buttonText:`Explore Journeys`,buttonLink:`#packages`,imageUrl:qt.safari||`data:image/jpeg;base64,`}),(0,Z.jsx)(`div`,{className:`ts-filter-bar`,children:(0,Z.jsxs)(`div`,{className:`ts-filter-inner`,children:[(0,Z.jsxs)(`div`,{className:`ts-search-wrap`,children:[(0,Z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,Z.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,Z.jsx)(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),(0,Z.jsx)(`input`,{className:`ts-search`,placeholder:`Search expeditions…`,value:o.searchTerm,onChange:e=>l(`searchTerm`,e.target.value)})]}),(0,Z.jsxs)(`div`,{className:`ts-select-wrap`,children:[(0,Z.jsxs)(`select`,{className:`ts-select`,value:o.sortBy,onChange:e=>l(`sortBy`,e.target.value),children:[(0,Z.jsx)(`option`,{value:`popularity`,children:`Sort: Popularity`}),(0,Z.jsx)(`option`,{value:`rating`,children:`Sort: Rating`}),(0,Z.jsx)(`option`,{value:`duration`,children:`Sort: Duration`})]}),(0,Z.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),(0,Z.jsxs)(`div`,{className:`ts-select-wrap`,children:[(0,Z.jsxs)(`select`,{className:`ts-select`,value:o.duration,onChange:e=>l(`duration`,e.target.value),children:[(0,Z.jsx)(`option`,{value:`all`,children:`All Durations`}),(0,Z.jsx)(`option`,{value:`short`,children:`Short (≤5 days)`}),(0,Z.jsx)(`option`,{value:`medium`,children:`Medium (6–10 days)`}),(0,Z.jsx)(`option`,{value:`long`,children:`Long (10+ days)`})]}),(0,Z.jsx)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),(0,Z.jsx)(`span`,{className:`ts-filter-count`,children:i?`—`:`${n.length} expedition${n.length===1?``:`s`}`})]})}),(0,Z.jsxs)(`div`,{className:`ts-heading`,id:`packages`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`img`,{src:Ft,alt:`Nature Pulse`,className:`ts-heading-logo`,onError:e=>{e.target.style.display=`none`}}),(0,Z.jsx)(`div`,{className:`ts-heading-eyebrow`,children:`Handcrafted Expeditions`}),(0,Z.jsxs)(`h2`,{children:[`Safari `,(0,Z.jsx)(`em`,{children:`Experiences`})]}),(0,Z.jsx)(`p`,{className:`ts-heading-sub`,children:`A wilderness safari is a transformative experience — magnificent wildlife, wild landscapes, and intimate encounters with the natural world.`})]}),(0,Z.jsx)(`div`,{className:`ts-heading-stats`,children:[{num:`20+`,lbl:`Years Experience`},{num:`6`,lbl:`Expeditions`},{num:`98%`,lbl:`Guest Satisfaction`}].map((e,t)=>(0,Z.jsxs)(X.Fragment,{children:[t>0&&(0,Z.jsx)(`div`,{className:`ts-heading-rule`}),(0,Z.jsxs)(`div`,{className:`ts-heading-stat`,children:[(0,Z.jsx)(`div`,{className:`ts-heading-stat-num`,children:e.num}),(0,Z.jsx)(`div`,{className:`ts-heading-stat-lbl`,children:e.lbl})]})]},t))})]}),(0,Z.jsx)(`div`,{className:`ts-grid-wrap`,children:(0,Z.jsx)(`div`,{className:`ts-grid`,children:i?[...[,,,,,,]].map((e,t)=>(0,Z.jsx)(pn,{},t)):n.length===0?(0,Z.jsxs)(`div`,{className:`ts-empty`,children:[(0,Z.jsx)(`span`,{className:`ts-empty-icon`,children:`◈`}),(0,Z.jsx)(`h3`,{children:`No expeditions found`}),(0,Z.jsx)(`p`,{children:`Try adjusting your filters or search term.`})]}):n.map((e,t)=>(0,Z.jsxs)(`div`,{className:`ts-card`,style:{animationDelay:`${t*80}ms`},children:[(0,Z.jsxs)(`div`,{className:`ts-card-img-wrap`,children:[e.popularity>95&&(0,Z.jsx)(`span`,{className:`ts-badge`,children:`Most Sought After`}),(0,Z.jsx)(`img`,{className:`ts-card-img`,src:e.image,alt:e.name}),(0,Z.jsxs)(`div`,{className:`ts-card-duration`,children:[(0,Z.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,Z.jsx)(`polyline`,{points:`12 6 12 12 16 14`})]}),e.duration]})]}),(0,Z.jsxs)(`div`,{className:`ts-card-body`,children:[(0,Z.jsx)(`h3`,{className:`ts-card-name`,children:e.name}),(0,Z.jsx)(`div`,{className:`ts-card-regions`,children:e.regions.map((t,n)=>(0,Z.jsxs)(X.Fragment,{children:[(0,Z.jsx)(`span`,{className:`ts-region-dot`}),(0,Z.jsx)(`span`,{className:`ts-region-name`,children:t}),n<e.regions.length-1&&(0,Z.jsx)(`span`,{className:`ts-region-arrow`,children:`›`})]},n))}),(0,Z.jsx)(`p`,{className:`ts-card-desc`,children:e.description}),(0,Z.jsx)(`div`,{className:`ts-highlights`,children:e.highlights.map((e,t)=>(0,Z.jsx)(`span`,{className:`ts-hl`,children:e},t))}),(0,Z.jsxs)(`div`,{className:`ts-rating`,children:[(0,Z.jsx)(fn,{value:e.rating}),(0,Z.jsx)(`span`,{className:`ts-rating-score`,children:e.rating.toFixed(1)}),(0,Z.jsxs)(`span`,{className:`ts-rating-text`,children:[`(`,e.reviewCount,` reviews)`]})]}),(0,Z.jsxs)(`div`,{className:`ts-card-footer`,children:[(0,Z.jsx)(J,{to:`/trip/${e.id}`,className:`ts-btn-outline`,children:`View Journey`}),(0,Z.jsx)(J,{to:`/contact`,className:`ts-btn-solid`,children:`Inquire`})]})]})]},e.id))})}),!i&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`div`,{className:`ts-about`,children:(0,Z.jsx)(`div`,{className:`ts-about-inner`,children:(0,Z.jsxs)(`div`,{className:`ts-about-grid`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`ts-about-eyebrow`,children:`Who We Are`}),(0,Z.jsxs)(`h3`,{children:[`About Nature Pulse `,(0,Z.jsx)(`em`,{children:`Expeditions`})]}),(0,Z.jsx)(`p`,{children:`As a locally-rooted expedition company, we design and manage every journey from concept to completion. Our team combines international expertise with deep local knowledge of the landscapes and cultures we explore.`}),(0,Z.jsx)(`div`,{className:`ts-about-pillars`,children:[{title:`Private Journeys`,text:`We specialise in entirely private expeditions — your own vehicle, your own guide, your own pace. Every experience is intimate and tailored to your interests.`},{title:`Expert Field Guides`,text:`Our guides are selected through a rigorous process based on years of experience, professional conduct, and genuine passion for the wilderness.`},{title:`Personalised Planning`,text:`From initial concept to your final evening under the stars, our team provides dedicated support and expert guidance at every stage.`}].map((e,t)=>(0,Z.jsxs)(`div`,{className:`ts-pillar`,children:[(0,Z.jsx)(`h4`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.text})]},t))})]}),(0,Z.jsx)(`div`,{children:(0,Z.jsxs)(`div`,{className:`ts-about-box`,children:[(0,Z.jsx)(`h4`,{children:`Custom Journey Design`}),(0,Z.jsx)(`p`,{children:`Every expedition is built entirely around your vision. You determine the destinations, pace, activities, and style of travel — we bring it to life with meticulous attention to detail.`}),(0,Z.jsx)(`p`,{children:`The itineraries shown here are crafted for inspiration. If a journey resonates with you, we will adapt it precisely to your interests, group, and travel style.`}),(0,Z.jsxs)(`p`,{children:[(0,Z.jsx)(`strong`,{style:{color:`var(--gray-800)`},children:`Connect with our specialists`}),` `,`to begin designing your personalised expedition.`]}),(0,Z.jsx)(`img`,{src:`/assets/tour4-BOQfGOLJ.jpg`,alt:`Custom journey`,className:`ts-about-box-img`})]})})]})})}),(0,Z.jsx)(`div`,{className:`ts-banner`,children:(0,Z.jsxs)(`div`,{className:`ts-banner-inner`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`ts-about-eyebrow`,children:`Your Stay`}),(0,Z.jsxs)(`h3`,{children:[`Thoughtfully Selected `,(0,Z.jsx)(`em`,{children:`Retreats`})]}),(0,Z.jsx)(`p`,{children:`Throughout your journey you will stay in properties handpicked by our team — each routinely evaluated for quality, positioning, and authenticity of experience.`}),(0,Z.jsx)(`p`,{children:`Wake to the sounds of the wilderness. Step outside to landscapes that few travellers ever witness. Every property we recommend complements the spirit of your expedition.`})]}),(0,Z.jsx)(`img`,{src:`/assets/tour1-DR6B8RiJ.jpg`,alt:`Wilderness retreat`,className:`ts-banner-img`})]})})]})]})]})},hn=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,gn=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .contact-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .contact-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .contact-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .contact-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .contact-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,84px);
    font-weight: 400; color: var(--gray-800);
  }
  .contact-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* contact cards grid */
  .contact-cards-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .contact-cards-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .contact-cards-grid { grid-template-columns: 1fr; } }

  .contact-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 28px; text-align: center;
    transition: all .3s;
  }
  .contact-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .contact-card-icon {
    width: 96px; height: 96px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    margin: 0 auto 24px;
    color: var(--gold);
  }
  .contact-card-icon svg { width: 48px; height: 48px; stroke: currentColor; fill: none; }
  .contact-card-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-card-detail {
    font-size: 18px; color: var(--gray-700); font-weight: 600;
    margin-bottom: 10px;
  }
  .contact-card-sub {
    font-size: 14px; color: var(--gray-500);
    margin-bottom: 24px;
  }
  .contact-card-btn {
    display: inline-block; padding: 10px 28px;
    border: 1px solid var(--gray-300); background: transparent;
    color: var(--gray-700); text-decoration: none;
    font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px;
    transition: all .2s;
  }
  .contact-card-btn:hover { border-color: var(--gold); color: var(--gold); background: var(--gold-pale); }

  /* form section */
  .contact-form-section {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 48px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .contact-form-section { grid-template-columns: 1fr; } }

  .contact-form-paper {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 48px;
  }
  .contact-form-title {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 28px;
  }
  .contact-form {
    display: flex; flex-direction: column; gap: 24px;
  }
  .contact-form-row {
    display: grid; grid-template-columns: 1fr 1fr; gap: 20px;
  }
  @media (max-width: 500px) { .contact-form-row { grid-template-columns: 1fr; } }
  .contact-input {
    width: 100%; padding: 14px 18px;
    border: 1px solid var(--gray-200); background: var(--white);
    font-family: var(--sans); font-size: 16px; color: var(--gray-800);
    outline: none; transition: all .2s;
  }
  .contact-input:focus { border-color: var(--gold); }
  .contact-input::placeholder { color: var(--gray-400); }
  .contact-select {
    width: 100%; padding: 14px 18px;
    border: 1px solid var(--gray-200); background: var(--white);
    font-family: var(--sans); font-size: 16px; color: var(--gray-800);
    cursor: pointer;
  }
  .contact-textarea {
    width: 100%; padding: 14px 18px;
    border: 1px solid var(--gray-200); background: var(--white);
    font-family: var(--sans); font-size: 16px; color: var(--gray-800);
    resize: vertical; outline: none;
  }
  .contact-textarea:focus { border-color: var(--gold); }
  .contact-checkbox {
    display: flex; align-items: center; gap: 12px;
    cursor: pointer;
  }
  .contact-checkbox input {
    width: 20px; height: 20px; cursor: pointer;
    accent-color: var(--gold);
  }
  .contact-checkbox span {
    font-size: 15px; color: var(--gray-600);
  }
  .contact-submit {
    padding: 16px; background: var(--gold); border: none;
    color: white; font-family: var(--sans); font-size: 15px;
    text-transform: uppercase; letter-spacing: 2px; font-weight: 700;
    cursor: pointer; transition: all .2s;
  }
  .contact-submit:hover { background: var(--gold-dark); transform: translateY(-2px); }
  .contact-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  /* map section */
  .contact-map-paper {
    background: var(--white); border: 1px solid var(--gray-200);
    overflow: hidden;
  }
  .contact-map {
    width: 100%; height: 360px; border: none;
  }
  .contact-social {
    padding: 28px; text-align: center;
    border-top: 1px solid var(--gray-200);
  }
  .contact-social-title {
    font-family: var(--serif); font-size: 24px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-social-icons {
    display: flex; justify-content: center; gap: 20px;
  }
  .contact-social-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold); transition: all .2s;
  }
  .contact-social-icon:hover { background: var(--gold); color: white; transform: scale(1.05); }
  .contact-social-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }

  /* why choose section */
  .contact-why-section {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 48px; margin-bottom: 80px;
  }
  .contact-why-title {
    font-family: var(--serif); font-size: 36px; font-weight: 500;
    text-align: center; color: var(--gray-800); margin-bottom: 48px;
  }
  .contact-why-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 36px; margin-bottom: 48px;
  }
  @media (max-width: 700px) { .contact-why-grid { grid-template-columns: 1fr; } }
  .contact-why-item h4 {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gold); margin-bottom: 10px;
  }
  .contact-why-item p {
    font-size: 16px; color: var(--gray-600); line-height: 1.7;
  }
  .contact-stats {
    display: flex; justify-content: space-around;
    flex-wrap: wrap; gap: 28px; padding-top: 40px;
    border-top: 1px solid var(--gray-200);
  }
  .contact-stat {
    text-align: center;
  }
  .contact-stat-number {
    font-family: var(--serif); font-size: 42px; font-weight: 400;
    color: var(--gold); margin-bottom: 6px;
  }
  .contact-stat-label {
    font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;
    color: var(--gray-500);
  }

  /* office hours */
  .contact-hours {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 48px; display: flex; justify-content: space-between;
    flex-wrap: wrap; gap: 40px;
  }
  @media (max-width: 700px) { .contact-hours { flex-direction: column; text-align: center; } }
  .contact-hours-left h3 {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-hours-left p {
    font-size: 16px; color: var(--gray-600); margin-bottom: 10px;
  }
  .contact-hours-right {
    text-align: right;
  }
  @media (max-width: 700px) { .contact-hours-right { text-align: center; } }
  .contact-hours-right h3 {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .contact-hours-right p {
    font-size: 16px; color: var(--gray-600); margin-bottom: 20px;
  }
  .contact-emergency {
    display: inline-block; padding: 10px 24px;
    background: var(--gold-pale); color: var(--gold);
    font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px;
  }

  /* alert */
  .contact-alert {
    position: fixed; bottom: 24px; right: 24px;
    background: var(--gold); color: white;
    padding: 14px 28px; border-radius: 4px;
    font-size: 15px; z-index: 1000;
    animation: slideIn .3s ease;
  }
  .contact-alert-error {
    background: #d32f2f;
  }
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fadeUp .5s ease both; }
`,_n=()=>{let[e,t]=(0,X.useState)({firstName:``,lastName:``,email:``,phone:``,message:``,inquiryType:``,subscribeNewsletter:!1}),[n,r]=(0,X.useState)(!1),[i,a]=(0,X.useState)(!1),[o,s]=(0,X.useState)(``),[c,l]=(0,X.useState)(`success`),u=[{id:1,name:`Safari Packages`},{id:2,name:`Mountain Trekking`},{id:3,name:`Day Tours`},{id:4,name:`Accommodation`},{id:5,name:`Transportation`},{id:6,name:`General Inquiry`}],d=[{icon:`phone`,title:`Phone`,detail:`+255 713 414 727`,sub:`24/7 Support Available`,action:`tel:+255713414727`,btnText:`Call Now`},{icon:`email`,title:`Email`,detail:`info@naturepulseexpeditions.com`,sub:`safari@naturepulseexpeditions.com`,action:`mailto:info@naturepulseexpeditions.com`,btnText:`Send Email`},{icon:`location`,title:`Office`,detail:`Arusha, Tanzania`,sub:`P.o Box 10450, Mnazi Mmoja`,action:`https://maps.google.com/?q=Arusha+Tanzania`,btnText:`View on Map`}],f=[{title:`✓ 24/7 Safari Support`,desc:`Our team is always available to assist you during your safari, ensuring peace of mind throughout your journey.`},{title:`✓ Expert Local Knowledge`,desc:`All our consultants and guides have extensive firsthand experience of Tanzania's wildlife, culture, and hidden gems.`},{title:`✓ Custom Itineraries`,desc:`Every safari is tailored to your preferences, interests, and budget. We create your perfect adventure.`},{title:`✓ Best Price Guarantee`,desc:`Direct bookings ensure you get the best value without compromising on quality. Transparent pricing with no hidden costs.`}],p=e=>{let{name:n,value:r,type:i,checked:a}=e.target;t(e=>({...e,[n]:i===`checkbox`?a:r}))},m=async n=>{n.preventDefault(),r(!0),a(!1);try{let n={firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,message:e.message,inquiry_type:e.inquiryType?parseInt(e.inquiryType):null,subscribe_newsletter:e.subscribeNewsletter},r=await x.post(`http://localhost:8000/contact/submit/`,n,{headers:{"Content-Type":`application/json`}});if(r.data.success)s(r.data.message||`Message sent successfully! We will get back to you soon.`),l(`success`),a(!0),t({firstName:``,lastName:``,email:``,phone:``,message:``,inquiryType:``,subscribeNewsletter:!1});else throw Error(r.data.message||`Failed to send message`)}catch(e){console.error(`Error submitting form:`,e);let t=`Failed to send message. Please try again.`;if(e.response)if(e.response.data.errors){let n=e.response.data.errors;t=Object.values(n).flat().join(`, `)}else e.response.data.message&&(t=e.response.data.message);else e.request&&(t=`Cannot connect to server. Please check your internet connection.`);s(t),l(`error`),a(!0)}finally{r(!1),setTimeout(()=>{a(!1)},5e3)}},ee=({name:e})=>(0,Z.jsx)(`div`,{className:`contact-card-icon`,children:{phone:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z`})}),email:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,Z.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),location:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),facebook:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`})}),instagram:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,Z.jsx)(`line`,{x1:`17`,y1:`7`,x2:`17.01`,y2:`7`})]}),whatsapp:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`})})}[e]}),h=({name:e,href:t})=>(0,Z.jsx)(`a`,{href:t,target:`_blank`,rel:`noopener noreferrer`,className:`contact-social-icon`,children:{facebook:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`})}),instagram:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`2`,width:`20`,height:`20`,rx:`5`,ry:`5`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,Z.jsx)(`line`,{x1:`17`,y1:`7`,x2:`17.01`,y2:`7`})]}),whatsapp:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`})})}[e]});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[hn,gn]}),(0,Z.jsxs)(`div`,{className:`contact-page`,children:[(0,Z.jsx)(Qt,{title:`Contact Us`,subtitle:`Start planning your adventure today`,description:`Get in touch with our team for any inquiries or to start planning your dream expedition. We're here to help 24/7.`,buttonText:`Send Inquiry`,buttonLink:`#contact-form`,imageUrl:qt.safari||`data:image/jpeg;base64,`}),(0,Z.jsxs)(`div`,{className:`contact-container`,children:[(0,Z.jsx)(`div`,{className:`contact-cards-grid`,children:d.map((e,t)=>(0,Z.jsxs)(`div`,{className:`contact-card fade-in`,style:{animationDelay:`${t*100}ms`},children:[(0,Z.jsx)(ee,{name:e.icon}),(0,Z.jsx)(`h3`,{className:`contact-card-title`,children:e.title}),(0,Z.jsx)(`div`,{className:`contact-card-detail`,children:e.detail}),(0,Z.jsx)(`div`,{className:`contact-card-sub`,children:e.sub}),(0,Z.jsx)(`a`,{href:e.action,target:e.title===`Office`?`_blank`:`_self`,className:`contact-card-btn`,children:e.btnText})]},t))}),(0,Z.jsxs)(`div`,{className:`contact-form-section`,id:`contact-form`,children:[(0,Z.jsxs)(`div`,{className:`contact-form-paper fade-in`,children:[(0,Z.jsx)(`h2`,{className:`contact-form-title`,children:`Send us a Message`}),(0,Z.jsxs)(`form`,{onSubmit:m,className:`contact-form`,children:[(0,Z.jsxs)(`div`,{className:`contact-form-row`,children:[(0,Z.jsx)(`input`,{type:`text`,name:`firstName`,placeholder:`First Name`,className:`contact-input`,value:e.firstName,onChange:p,required:!0,disabled:n}),(0,Z.jsx)(`input`,{type:`text`,name:`lastName`,placeholder:`Last Name`,className:`contact-input`,value:e.lastName,onChange:p,required:!0,disabled:n})]}),(0,Z.jsx)(`input`,{type:`email`,name:`email`,placeholder:`Email Address`,className:`contact-input`,value:e.email,onChange:p,required:!0,disabled:n}),(0,Z.jsx)(`input`,{type:`tel`,name:`phone`,placeholder:`Phone Number (include country code)`,className:`contact-input`,value:e.phone,onChange:p,required:!0,disabled:n}),(0,Z.jsxs)(`select`,{name:`inquiryType`,className:`contact-select`,value:e.inquiryType,onChange:p,disabled:n,children:[(0,Z.jsx)(`option`,{value:``,children:`Select inquiry type`}),u.map(e=>(0,Z.jsx)(`option`,{value:e.id,children:e.name},e.id))]}),(0,Z.jsx)(`textarea`,{name:`message`,rows:`4`,placeholder:`Your message...`,className:`contact-textarea`,value:e.message,onChange:p,required:!0,disabled:n}),(0,Z.jsxs)(`label`,{className:`contact-checkbox`,children:[(0,Z.jsx)(`input`,{type:`checkbox`,name:`subscribeNewsletter`,checked:e.subscribeNewsletter,onChange:p,disabled:n}),(0,Z.jsx)(`span`,{children:`Subscribe to our newsletter for updates and special offers`})]}),(0,Z.jsx)(`button`,{type:`submit`,className:`contact-submit`,disabled:n,children:n?`Sending...`:`Send Message`})]})]}),(0,Z.jsxs)(`div`,{className:`contact-map-paper fade-in`,style:{animationDelay:`150ms`},children:[(0,Z.jsx)(`iframe`,{src:`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.35832864525!2d36.68257995!3d-3.36682045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371c8f1c7e3c9d%3A0x8e0e4c3e3e3e3e3e!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s`,className:`contact-map`,allowFullScreen:!0,loading:`lazy`,title:`Office Location`}),(0,Z.jsxs)(`div`,{className:`contact-social`,children:[(0,Z.jsx)(`h3`,{className:`contact-social-title`,children:`Follow Us`}),(0,Z.jsxs)(`div`,{className:`contact-social-icons`,children:[(0,Z.jsx)(h,{name:`facebook`,href:`https://facebook.com/naturepulse`}),(0,Z.jsx)(h,{name:`instagram`,href:`https://instagram.com/naturepulse`}),(0,Z.jsx)(h,{name:`whatsapp`,href:`https://wa.me/255713414727`})]})]})]})]}),(0,Z.jsxs)(`div`,{className:`contact-why-section fade-in`,children:[(0,Z.jsx)(`h2`,{className:`contact-why-title`,children:`Why Choose Nature Pulse Expeditions?`}),(0,Z.jsx)(`div`,{className:`contact-why-grid`,children:f.map((e,t)=>(0,Z.jsxs)(`div`,{className:`contact-why-item`,children:[(0,Z.jsx)(`h4`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.desc})]},t))}),(0,Z.jsxs)(`div`,{className:`contact-stats`,children:[(0,Z.jsxs)(`div`,{className:`contact-stat`,children:[(0,Z.jsx)(`div`,{className:`contact-stat-number`,children:`5,000+`}),(0,Z.jsx)(`div`,{className:`contact-stat-label`,children:`Happy Travelers`})]}),(0,Z.jsxs)(`div`,{className:`contact-stat`,children:[(0,Z.jsx)(`div`,{className:`contact-stat-number`,children:`98%`}),(0,Z.jsx)(`div`,{className:`contact-stat-label`,children:`Satisfaction Rate`})]}),(0,Z.jsxs)(`div`,{className:`contact-stat`,children:[(0,Z.jsx)(`div`,{className:`contact-stat-number`,children:`15+`}),(0,Z.jsx)(`div`,{className:`contact-stat-label`,children:`Expert Guides`})]}),(0,Z.jsxs)(`div`,{className:`contact-stat`,children:[(0,Z.jsx)(`div`,{className:`contact-stat-number`,children:`10+`}),(0,Z.jsx)(`div`,{className:`contact-stat-label`,children:`Years Experience`})]})]})]}),(0,Z.jsxs)(`div`,{className:`contact-hours fade-in`,children:[(0,Z.jsxs)(`div`,{className:`contact-hours-left`,children:[(0,Z.jsx)(`h3`,{children:`Office Hours`}),(0,Z.jsx)(`p`,{children:`Monday - Friday: 8:00 AM - 6:00 PM`}),(0,Z.jsx)(`p`,{children:`Saturday: 9:00 AM - 2:00 PM`}),(0,Z.jsx)(`p`,{children:`Sunday: Closed (Emergency support available)`})]}),(0,Z.jsxs)(`div`,{className:`contact-hours-right`,children:[(0,Z.jsx)(`h3`,{children:`Quick Response`}),(0,Z.jsx)(`p`,{children:`We typically respond within 24 hours`}),(0,Z.jsx)(`span`,{className:`contact-emergency`,children:`24/7 Emergency Support`})]})]})]}),i&&(0,Z.jsx)(`div`,{className:`contact-alert ${c===`error`?`contact-alert-error`:``}`,children:o})]})]})},vn=V(z)(({theme:e})=>({background:q(e.palette.background.paper,.9),backdropFilter:`blur(20px)`,borderRadius:e.spacing(3),border:`1px solid ${q(e.palette.divider,.5)}`,overflow:`hidden`,transition:`transform 0.3s ease, box-shadow 0.3s ease`,"&:hover":{transform:`translateY(-4px)`,boxShadow:`0 20px 40px ${q(e.palette.common.black,.1)}`}})),yn=V(Ee)(({theme:e})=>({borderRadius:e.spacing(2),border:`none`,background:q(e.palette.background.paper,.8),backdropFilter:`blur(10px)`,transition:`all 0.3s ease`,"&:hover":{transform:`translateX(8px)`,boxShadow:e.shadows[4]}})),bn=V(dt)(({theme:e})=>({height:280,borderRadius:e.spacing(2),cursor:`pointer`,transition:`all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`,"&:hover":{transform:`scale(1.03)`,boxShadow:e.shadows[8]}})),xn=V(ht)(({theme:e})=>({"& .MuiTabs-indicator":{height:3,borderRadius:`3px 3px 0 0`,backgroundColor:e.palette.secondary.main},"& .MuiTab-root":{textTransform:`none`,fontWeight:500,fontSize:`1rem`,minHeight:56,transition:`all 0.2s`,"&:hover":{color:e.palette.secondary.main,backgroundColor:q(e.palette.secondary.main,.05)},"&.Mui-selected":{color:e.palette.secondary.main,fontWeight:600}}})),Sn=V(G)(({theme:e})=>({borderRadius:e.spacing(1.5),fontWeight:500,fontSize:`0.85rem`,"& .MuiChip-icon":{color:`inherit`}})),Cn=V(w)(({theme:e,color:t=`secondary`})=>({width:56,height:56,borderRadius:e.spacing(1.5),display:`flex`,alignItems:`center`,justifyContent:`center`,backgroundColor:q(e.palette[t].main,.1),color:e.palette[t].main,transition:`all 0.3s ease`,"&:hover":{backgroundColor:e.palette[t].main,color:e.palette[t].contrastText,transform:`scale(1.1) rotate(5deg)`}})),wn=({children:e,value:t,index:n,...r})=>(0,Z.jsx)(Ie,{in:t===n,timeout:400,children:(0,Z.jsx)(`div`,{role:`tabpanel`,hidden:t!==n,id:`tabpanel-${n}`,"aria-labelledby":`tab-${n}`,...r,children:t===n&&(0,Z.jsx)(w,{sx:{py:4},children:e})})}),Tn=()=>{let{id:e}=m(),[t,n]=(0,X.useState)(null),[r,i]=(0,X.useState)(!0),[a,o]=(0,X.useState)(0),[c,d]=(0,X.useState)(!1),[f,p]=(0,X.useState)(0),g=Ve();(0,X.useEffect)(()=>{let t=setTimeout(()=>{n({1:{id:1,name:`Big Five Encounters & Zanzibar Beaches`,shortDescription:`Experience the best of Tanzania with thrilling wildlife safaris and relaxation on pristine Zanzibar beaches.`,fullDescription:`This comprehensive safari combines the thrill of witnessing the Big Five in their natural habitat with the relaxation of Zanzibar's stunning beaches.`,highlights:[`Game drives in Serengeti National Park`,`Ngorongoro Crater exploration`,`Tarangire elephant herds`,`Spice tour in Zanzibar`,`Prison Island snorkeling`,`Sunset dhow cruise`],itinerary:[{day:1,title:`Arrival in Arusha`,description:`Arrive at Kilimanjaro International Airport. Meet your guide and transfer to your hotel.`,accommodation:`Arusha Serena Hotel`,meals:[`Dinner`],activities:[`Airport transfer`,`Welcome briefing`]},{day:2,title:`Arusha to Tarangire National Park`,description:`After breakfast, drive to Tarangire National Park. Afternoon game drive in search of elephants.`,accommodation:`Tarangire Safari Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`,`Bird watching`]},{day:3,title:`Tarangire to Serengeti`,description:`Morning game drive in Tarangire, then drive to Serengeti.`,accommodation:`Serengeti Serena Safari Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`,`Scenic drive`]},{day:4,title:`Full Day in Serengeti`,description:`Full day exploring Serengeti. Picnic lunch in the bush.`,accommodation:`Serengeti Serena Safari Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Full day game drive`,`Bush picnic`]},{day:5,title:`Serengeti to Ngorongoro`,description:`Morning game drive in Serengeti, then drive to Ngorongoro.`,accommodation:`Ngorongoro Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`,`Maasai village visit`]},{day:6,title:`Ngorongoro Crater Tour`,description:`Descend into the Ngorongoro Crater for a half-day game drive.`,accommodation:`Lake Manyara Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Crater game drive`,`Picnic lunch`]},{day:7,title:`Lake Manyara to Zanzibar`,description:`Morning game drive in Lake Manyara. Afternoon flight to Zanzibar.`,accommodation:`Zanzibar Beach Resort`,meals:[`Breakfast`,`Lunch`],activities:[`Game drive`,`Flight to Zanzibar`]},{day:8,title:`Zanzibar Beach Relaxation`,description:`Free day to relax on the beautiful beaches of Zanzibar.`,accommodation:`Zanzibar Beach Resort`,meals:[`Breakfast`],activities:[`Beach relaxation`,`Swimming`]},{day:9,title:`Stone Town Tour`,description:`Guided tour of this UNESCO World Heritage site.`,accommodation:`Stone Town Hotel`,meals:[`Breakfast`],activities:[`Stone Town tour`,`Spice market visit`]},{day:10,title:`Departure`,description:`Transfer to Zanzibar International Airport for your flight home.`,accommodation:`None`,meals:[`Breakfast`],activities:[`Airport transfer`]}],pricing:[{type:`Budget Camping`,price:`2,150`,persons:`1-2`,note:`Shared facilities`},{type:`Mid-Range Lodge`,price:`2,650`,persons:`3-4`,note:`Private facilities`},{type:`Luxury Lodge`,price:`3,250`,persons:`5-6`,note:`All-inclusive`}],included:[`Park fees`,`Professional English-speaking guide`,`4x4 safari vehicle with pop-up roof`,`Accommodation as per itinerary`,`Meals during safari`,`Bottled drinking water`,`Airport transfers`,`Flight to Zanzibar`],excluded:[`International flights`,`Travel insurance`,`Visa fees`,`Tips & gratuities`,`Personal expenses`,`Alcoholic beverages`],accommodations:[{name:`Arusha Serena Hotel`,image:`/assets/tour1-DR6B8RiJ.jpg`,description:`Luxury hotel in Arusha with beautiful gardens and pool.`,amenities:[`Pool`,`Restaurant`,`Bar`,`WiFi`,`Spa`]},{name:`Tarangire Safari Lodge`,image:`/assets/tour2-C7LRETuS.jpg`,description:`Lodge overlooking Tarangire River.`,amenities:[`Pool`,`Restaurant`,`Bar`,`Game drives`]},{name:`Serengeti Serena Safari Lodge`,image:`/assets/tour3-BYx_Putt.jpg`,description:`Lodge with stunning views of the Serengeti plains.`,amenities:[`Pool`,`Restaurant`,`Bar`,`Safari tours`]}],faqs:[{question:`What is the best time to go?`,answer:`The best time for wildlife viewing is during the dry season (June to October).`},{question:`Do I need a visa?`,answer:`Yes, most visitors need a visa for Tanzania.`},{question:`What should I pack?`,answer:`Light clothing in neutral colors, warm jacket, comfortable shoes, sunscreen, hat, camera.`}],images:[`/assets/tour1-DR6B8RiJ.jpg`,`/assets/tour2-C7LRETuS.jpg`,`/assets/tour3-BYx_Putt.jpg`,`/assets/tour4-BOQfGOLJ.jpg`,`/assets/tour5-CujvuasU.jpg`,`/assets/gallery8-WONuCrlz.jpg`],duration:`10 days / 9 nights`,groupSize:`2-6 people`,bestTime:`June to October`,difficulty:`Easy`,rating:4.8,reviewCount:124},2:{id:2,name:`Paradise Beaches & Big Five Safari Thrills`,shortDescription:`Combine the excitement of a Big Five safari with the tranquility of Zanzibar's paradise beaches.`,fullDescription:`Experience the perfect blend of adventure and relaxation on this comprehensive Tanzania safari.`,highlights:[`Big Five Safari in Northern Tanzania`,`Zanzibar White Sand Beaches`,`Stone Town UNESCO Heritage Site`,`Spice Farm Tour`,`Prison Island Excursion`],itinerary:[{day:1,title:`Arrival in Arusha`,description:`Arrive at Kilimanjaro International Airport.`,accommodation:`Arusha Planet Lodge`,meals:[`Dinner`],activities:[`Airport transfer`]},{day:2,title:`Arusha to Tarangire`,description:`Drive to Tarangire National Park. Afternoon game drive.`,accommodation:`Tarangire Safari Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:3,title:`Tarangire to Lake Manyara`,description:`Morning game drive in Tarangire, then drive to Lake Manyara.`,accommodation:`Lake Manyara Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:4,title:`Lake Manyara to Serengeti`,description:`Drive to Serengeti via Ngorongoro Conservation Area.`,accommodation:`Serengeti Heritage Camp`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`,`Scenic drive`]},{day:5,title:`Full Day in Serengeti`,description:`Full day exploring Serengeti with picnic lunch.`,accommodation:`Serengeti Heritage Camp`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Full day game drive`]},{day:6,title:`Serengeti to Ngorongoro`,description:`Morning game drive in Serengeti, then drive to Ngorongoro.`,accommodation:`Ngorongoro Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:7,title:`Ngorongoro Crater Tour`,description:`Descend into the Ngorongoro Crater for game drive.`,accommodation:`Lake Manyara Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Crater game drive`]},{day:8,title:`Lake Manyara to Zanzibar`,description:`Morning transfer to Arusha for flight to Zanzibar.`,accommodation:`Zanzibar Beach Resort`,meals:[`Breakfast`],activities:[`Flight to Zanzibar`]},{day:9,title:`Zanzibar Beach Relaxation`,description:`Free day to relax on beautiful beaches.`,accommodation:`Zanzibar Beach Resort`,meals:[`Breakfast`],activities:[`Beach relaxation`]},{day:10,title:`Spice Farm & Stone Town`,description:`Morning spice farm tour. Afternoon Stone Town tour.`,accommodation:`Stone Town Hotel`,meals:[`Breakfast`],activities:[`Spice tour`,`Stone Town tour`]},{day:11,title:`Prison Island Excursion`,description:`Boat trip to Prison Island to see giant tortoises.`,accommodation:`Stone Town Hotel`,meals:[`Breakfast`],activities:[`Prison Island`,`Snorkeling`]},{day:12,title:`Departure`,description:`Transfer to Zanzibar International Airport.`,accommodation:`None`,meals:[`Breakfast`],activities:[`Airport transfer`]}],pricing:[{type:`Budget Camping`,price:`2,150`,persons:`1-2`,note:`Shared facilities`},{type:`Mid-Range Lodge`,price:`2,650`,persons:`3-4`,note:`Private facilities`},{type:`Luxury Lodge`,price:`3,250`,persons:`5-6`,note:`All-inclusive`}],included:[`Park fees`,`Professional guide`,`4x4 safari vehicle`,`Accommodation`,`Meals during safari`,`Bottled water`,`Airport transfers`,`Flight to Zanzibar`],excluded:[`International flights`,`Travel insurance`,`Visa fees`,`Tips`,`Personal expenses`],accommodations:[{name:`Arusha Planet Lodge`,image:`/assets/tour4-BOQfGOLJ.jpg`,description:`Comfortable lodge in Arusha.`,amenities:[`Pool`,`Restaurant`,`Bar`,`WiFi`]},{name:`Serengeti Heritage Camp`,image:`/assets/tour5-CujvuasU.jpg`,description:`Mobile camp with authentic safari experience.`,amenities:[`Restaurant`,`Bar`,`Game drives`]},{name:`Zanzibar Beach Resort`,image:`/assets/gallery8-WONuCrlz.jpg`,description:`Beachfront resort with stunning ocean views.`,amenities:[`Pool`,`Restaurant`,`Bar`,`WiFi`,`Spa`]}],faqs:[{question:`Is this safari suitable for families?`,answer:`Yes, this safari is family-friendly.`}],images:[`/assets/tour2-C7LRETuS.jpg`,`/assets/tour3-BYx_Putt.jpg`,`/assets/tour4-BOQfGOLJ.jpg`,`/assets/tour5-CujvuasU.jpg`,`/assets/gallery8-WONuCrlz.jpg`,`/assets/tour1-DR6B8RiJ.jpg`],duration:`12 days / 11 nights`,groupSize:`2-6 people`,bestTime:`June to March`,difficulty:`Easy`,rating:4.9,reviewCount:89},3:{id:3,name:`Ngorongoro Crater & Lake Manyara Adventure`,shortDescription:`Discover the wonders of Ngorongoro Crater and Lake Manyara.`,fullDescription:`This compact 7-day safari focuses on two of Tanzania's most spectacular destinations.`,highlights:[`Ngorongoro Crater Game Drive`,`Lake Manyara National Park`,`Tree-climbing Lions`,`Flamingo Watching`,`Maasai Village Visit`],itinerary:[{day:1,title:`Arrival in Arusha`,description:`Arrive at Kilimanjaro International Airport.`,accommodation:`Arusha Coffee Lodge`,meals:[`Dinner`],activities:[`Airport transfer`]},{day:2,title:`Arusha to Lake Manyara`,description:`Drive to Lake Manyara. Afternoon game drive.`,accommodation:`Lake Manyara Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:3,title:`Lake Manyara to Ngorongoro`,description:`Morning game drive in Lake Manyara.`,accommodation:`Ngorongoro Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:4,title:`Ngorongoro Crater Tour`,description:`Full day exploring the Ngorongoro Crater.`,accommodation:`Ngorongoro Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Crater game drive`]},{day:5,title:`Maasai Village Visit`,description:`Morning visit to a traditional Maasai village.`,accommodation:`Ngorongoro Wildlife Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Cultural visit`,`Coffee tour`]},{day:6,title:`Ngorongoro to Arusha`,description:`Morning drive back to Arusha.`,accommodation:`Arusha Coffee Lodge`,meals:[`Breakfast`,`Lunch`],activities:[`Scenic drive`]},{day:7,title:`Departure`,description:`Transfer to Kilimanjaro International Airport.`,accommodation:`None`,meals:[`Breakfast`],activities:[`Airport transfer`]}],pricing:[{type:`Budget Camping`,price:`2,150`,persons:`2-3`,note:`Shared facilities`},{type:`Mid-Range Lodge`,price:`2,650`,persons:`2-4`,note:`Private facilities`}],included:[`Park fees`,`Professional guide`,`4x4 safari vehicle`,`Accommodation`,`Meals during safari`,`Bottled water`,`Airport transfers`],excluded:[`International flights`,`Travel insurance`,`Visa fees`,`Tips`,`Personal expenses`],accommodations:[{name:`Arusha Coffee Lodge`,image:`/assets/tour3-BYx_Putt.jpg`,description:`Luxury lodge on a coffee plantation.`,amenities:[`Restaurant`,`Bar`,`WiFi`,`Coffee tours`]},{name:`Lake Manyara Wildlife Lodge`,image:`/assets/tour2-C7LRETuS.jpg`,description:`Lodge overlooking Lake Manyara.`,amenities:[`Pool`,`Restaurant`,`Bar`]}],faqs:[{question:`What makes Ngorongoro Crater special?`,answer:`It's the largest intact caldera in the world.`}],images:[`/assets/tour3-BYx_Putt.jpg`,`/assets/tour2-C7LRETuS.jpg`,`/assets/tour4-BOQfGOLJ.jpg`,`/assets/tour1-DR6B8RiJ.jpg`],duration:`7 days / 6 nights`,groupSize:`2-6 people`,bestTime:`Year-round`,difficulty:`Easy`,rating:4.7,reviewCount:156},4:{id:4,name:`Great Wildebeest Migration Spectacle`,shortDescription:`Witness the greatest wildlife spectacle on earth.`,fullDescription:`Experience one of nature's most incredible events as millions of wildebeest cross the Serengeti.`,highlights:[`Mara River Crossing`,`Great Migration Spectacle`,`Big Five Sightings`,`Hot Air Balloon Safari`,`Bush Breakfast`],itinerary:[{day:1,title:`Arrival in Arusha`,description:`Arrive at Kilimanjaro International Airport.`,accommodation:`Arusha Serena Hotel`,meals:[`Dinner`],activities:[`Airport transfer`,`Briefing`]},{day:2,title:`Arusha to Serengeti`,description:`Fly to Serengeti. Afternoon game drive.`,accommodation:`Serengeti Migration Camp`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Flight to Serengeti`,`Game drive`]},{day:3,title:`Northern Serengeti - Mara River`,description:`Full day tracking the Great Migration.`,accommodation:`Serengeti Migration Camp`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Migration tracking`,`River crossings`]},{day:4,title:`Northern Serengeti Game Drives`,description:`Morning and afternoon game drives.`,accommodation:`Serengeti Migration Camp`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drives`,`Wildlife photography`]},{day:5,title:`Hot Air Balloon & Bush Breakfast`,description:`Early morning hot air balloon safari.`,accommodation:`Serengeti Migration Camp`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Balloon safari`,`Bush breakfast`]},{day:6,title:`Serengeti to Ngorongoro`,description:`Final morning game drive in Serengeti.`,accommodation:`Ngorongoro Crater Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`,`Scenic drive`]},{day:7,title:`Ngorongoro Crater`,description:`Full day exploring Ngorongoro Crater.`,accommodation:`Ngorongoro Crater Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Crater game drive`]},{day:8,title:`Departure`,description:`Drive back to Arusha. Transfer to airport.`,accommodation:`None`,meals:[`Breakfast`],activities:[`Airport transfer`]}],pricing:[{type:`Budget Camping`,price:`2,150`,persons:`1-2`,note:`Shared facilities`},{type:`Mid-Range Lodge`,price:`2,650`,persons:`3-4`,note:`Private facilities`},{type:`Luxury Lodge`,price:`3,250`,persons:`5-6`,note:`All-inclusive`}],included:[`Park fees`,`Professional guide`,`4x4 safari vehicle`,`Accommodation`,`Meals during safari`,`Bottled water`,`Airport transfers`,`Internal flights`],excluded:[`International flights`,`Travel insurance`,`Visa fees`,`Tips`,`Balloon safari`],accommodations:[{name:`Serengeti Migration Camp`,image:`/assets/tour4-BOQfGOLJ.jpg`,description:`Seasonal camp close to migration action.`,amenities:[`Restaurant`,`Bar`,`Game drives`]},{name:`Ngorongoro Crater Lodge`,image:`/assets/tour5-CujvuasU.jpg`,description:`Luxury lodge on the crater rim.`,amenities:[`Pool`,`Restaurant`,`Bar`,`WiFi`,`Spa`]}],faqs:[{question:`When is the best time to see the migration?`,answer:`The best time for river crossings is July to October.`}],images:[`/assets/tour4-BOQfGOLJ.jpg`,`/assets/tour5-CujvuasU.jpg`,`/assets/gallery8-WONuCrlz.jpg`,`/assets/tour1-DR6B8RiJ.jpg`,`/assets/tour2-C7LRETuS.jpg`],duration:`8 days / 7 nights`,groupSize:`2-6 people`,bestTime:`July to October`,difficulty:`Moderate`,rating:5,reviewCount:203},5:{id:5,name:`Tarangire, Serengeti & Ngorongoro Classic`,shortDescription:`The classic Northern Circuit safari.`,fullDescription:`This 7-day safari takes you through the highlights of Northern Tanzania.`,highlights:[`Tarangire Elephant Herds`,`Serengeti Game Drives`,`Ngorongoro Crater`,`Baobab Trees`,`Bird Watching`],itinerary:[{day:1,title:`Arrival in Arusha`,description:`Arrive at Kilimanjaro International Airport.`,accommodation:`Arusha Serena Hotel`,meals:[`Dinner`],activities:[`Airport transfer`]},{day:2,title:`Arusha to Tarangire`,description:`Drive to Tarangire National Park.`,accommodation:`Tarangire Sopa Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:3,title:`Tarangire to Serengeti`,description:`Morning game drive in Tarangire.`,accommodation:`Serengeti Sopa Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`,`Olduvai Gorge visit`]},{day:4,title:`Full Day in Serengeti`,description:`Full day exploring Serengeti.`,accommodation:`Serengeti Sopa Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drives`]},{day:5,title:`Serengeti to Ngorongoro`,description:`Morning game drive in Serengeti.`,accommodation:`Ngorongoro Sopa Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:6,title:`Ngorongoro Crater Tour`,description:`Descend into Ngorongoro Crater.`,accommodation:`Ngorongoro Sopa Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Crater game drive`]},{day:7,title:`Departure`,description:`Drive back to Arusha. Transfer to airport.`,accommodation:`None`,meals:[`Breakfast`],activities:[`Airport transfer`]}],pricing:[{type:`Budget Camping`,price:`2,150`,persons:`1-2`,note:`Shared facilities`},{type:`Mid-Range Lodge`,price:`2,650`,persons:`3-4`,note:`Private facilities`}],included:[`Park fees`,`Professional guide`,`4x4 safari vehicle`,`Accommodation`,`Meals during safari`,`Bottled water`,`Airport transfers`],excluded:[`International flights`,`Travel insurance`,`Visa fees`,`Tips`,`Personal expenses`],accommodations:[{name:`Tarangire Sopa Lodge`,image:`/assets/tour5-CujvuasU.jpg`,description:`Lodge on a hillside with views.`,amenities:[`Pool`,`Restaurant`,`Bar`]},{name:`Serengeti Sopa Lodge`,image:`/assets/tour4-BOQfGOLJ.jpg`,description:`Lodge on the slopes of Nyaromongo Hills.`,amenities:[`Pool`,`Restaurant`,`Bar`,`WiFi`]}],faqs:[{question:`What is the Sopa Lodges chain?`,answer:`Sopa Lodges are mid-range lodges known for excellent locations.`}],images:[`/assets/tour5-CujvuasU.jpg`,`/assets/tour4-BOQfGOLJ.jpg`,`/assets/tour3-BYx_Putt.jpg`,`/assets/tour2-C7LRETuS.jpg`,`/assets/tour1-DR6B8RiJ.jpg`],duration:`7 days / 6 nights`,groupSize:`3-6 people`,bestTime:`June to October`,difficulty:`Easy`,rating:4.6,reviewCount:178},6:{id:6,name:`Elephants Galore & Famous Ngorongoro Crater`,shortDescription:`Perfect for elephant lovers.`,fullDescription:`Focus on two of Tanzania's most elephant-rich areas.`,highlights:[`Tarangire Elephant Herds`,`Ngorongoro Crater`,`Baobab Trees`,`Hippo Pools`,`Bird Paradise`],itinerary:[{day:1,title:`Arrival in Arusha`,description:`Arrive at Kilimanjaro International Airport.`,accommodation:`Arusha Coffee Lodge`,meals:[`Dinner`],activities:[`Airport transfer`]},{day:2,title:`Arusha to Tarangire`,description:`Drive to Tarangire. Afternoon game drive.`,accommodation:`Tarangire Treetops`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:3,title:`Full Day in Tarangire`,description:`Full day exploring Tarangire.`,accommodation:`Tarangire Treetops`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drives`,`Walking safari`]},{day:4,title:`Tarangire to Ngorongoro`,description:`Morning game drive in Tarangire.`,accommodation:`Ngorongoro Serena Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Game drive`]},{day:5,title:`Ngorongoro Crater`,description:`Full day exploring Ngorongoro Crater.`,accommodation:`Ngorongoro Serena Lodge`,meals:[`Breakfast`,`Lunch`,`Dinner`],activities:[`Crater game drive`]},{day:6,title:`Departure`,description:`Drive back to Arusha. Transfer to airport.`,accommodation:`None`,meals:[`Breakfast`],activities:[`Airport transfer`]}],pricing:[{type:`Budget Camping`,price:`2,150`,persons:`1-2`,note:`Shared facilities`},{type:`Mid-Range Lodge`,price:`2,650`,persons:`3-4`,note:`Private facilities`}],included:[`Park fees`,`Professional guide`,`4x4 safari vehicle`,`Accommodation`,`Meals during safari`,`Bottled water`,`Airport transfers`],excluded:[`International flights`,`Travel insurance`,`Visa fees`,`Tips`,`Personal expenses`],accommodations:[{name:`Tarangire Treetops`,image:`/assets/gallery8-WONuCrlz.jpg`,description:`Unique treehouse-style lodge.`,amenities:[`Pool`,`Restaurant`,`Bar`,`Walking safaris`]},{name:`Ngorongoro Serena Lodge`,image:`/assets/tour1-DR6B8RiJ.jpg`,description:`Lodge on the crater rim.`,amenities:[`Restaurant`,`Bar`,`WiFi`]}],faqs:[{question:`Why is Tarangire good for elephants?`,answer:`Tarangire has the highest density of elephants in Tanzania.`}],images:[`/assets/gallery8-WONuCrlz.jpg`,`/assets/tour1-DR6B8RiJ.jpg`,`/assets/tour2-C7LRETuS.jpg`,`/assets/tour3-BYx_Putt.jpg`],duration:`5 days / 4 nights`,groupSize:`2-6 people`,bestTime:`Year-round`,difficulty:`Easy`,rating:4.5,reviewCount:145}}[e]||null),i(!1)},800);return()=>clearTimeout(t)},[e]);let te=(e,t)=>{o(t)},_=async()=>{if(navigator.share)try{await navigator.share({title:t?.name,text:t?.shortDescription,url:window.location.href})}catch{console.log(`Share cancelled`)}};return r?(0,Z.jsxs)(y,{maxWidth:`lg`,sx:{py:8},children:[(0,Z.jsx)(D,{variant:`rectangular`,height:400,sx:{borderRadius:3,mb:4}}),(0,Z.jsxs)(b,{container:!0,spacing:3,children:[(0,Z.jsxs)(b,{item:!0,xs:12,md:8,children:[(0,Z.jsx)(D,{variant:`text`,height:60}),(0,Z.jsx)(D,{variant:`text`,height:30,width:`60%`}),(0,Z.jsx)(D,{variant:`rectangular`,height:200,sx:{mt:2,borderRadius:2}})]}),(0,Z.jsx)(b,{item:!0,xs:12,md:4,children:(0,Z.jsx)(D,{variant:`rectangular`,height:300,sx:{borderRadius:3}})})]})]}):t?(0,Z.jsxs)(w,{sx:{bgcolor:`background.default`,minHeight:`100vh`},children:[(0,Z.jsx)(w,{sx:{position:`relative`,height:{xs:`60vh`,md:`70vh`},backgroundImage:`linear-gradient(to bottom, transparent 0%, ${q(g.palette.background.default,.9)} 100%), url(${t.images[0]})`,backgroundSize:`cover`,backgroundPosition:`center`,display:`flex`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,mb:-8},children:(0,Z.jsx)(y,{maxWidth:`md`,sx:{position:`relative`,zIndex:1},children:(0,Z.jsx)(Ie,{in:!0,timeout:1e3,children:(0,Z.jsxs)(w,{children:[(0,Z.jsxs)(Y,{direction:`row`,spacing:1,justifyContent:`center`,sx:{mb:3},children:[(0,Z.jsx)(G,{label:`Premium Safari`,color:`secondary`,size:`medium`,sx:{fontWeight:600,fontSize:`0.8rem`}}),(0,Z.jsx)(G,{label:t.duration,variant:`outlined`,size:`medium`,sx:{color:`white`,borderColor:`white`,fontSize:`0.8rem`}})]}),(0,Z.jsx)(I,{variant:`h2`,sx:{color:`white`,fontWeight:800,textShadow:`0 4px 20px rgba(0,0,0,0.3)`,mb:2,fontSize:{xs:`2rem`,md:`4rem`}},children:t.name}),(0,Z.jsx)(I,{variant:`h6`,sx:{color:`rgba(255,255,255,0.9)`,maxWidth:700,mx:`auto`,fontWeight:400,fontSize:{xs:`1rem`,md:`1.25rem`}},children:t.shortDescription})]})})})}),(0,Z.jsxs)(y,{maxWidth:`lg`,sx:{position:`relative`,zIndex:2},children:[(0,Z.jsx)(vn,{sx:{mb:3,px:3,py:2},children:(0,Z.jsxs)(N,{separator:(0,Z.jsx)(de,{sx:{fontSize:14}}),children:[(0,Z.jsx)(S,{component:J,to:`/`,color:`inherit`,underline:`hover`,sx:{fontSize:`0.9rem`},children:`Home`}),(0,Z.jsx)(S,{component:J,to:`/tour-safaris`,color:`inherit`,underline:`hover`,sx:{fontSize:`0.9rem`},children:`Safaris`}),(0,Z.jsx)(I,{color:`text.primary`,fontWeight:600,sx:{fontSize:`0.9rem`},children:t.name})]})}),(0,Z.jsxs)(b,{container:!0,spacing:4,children:[(0,Z.jsxs)(b,{item:!0,xs:12,lg:8,children:[(0,Z.jsxs)(vn,{sx:{mb:4,p:4},children:[(0,Z.jsxs)(w,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,mb:3},children:[(0,Z.jsx)(A,{startIcon:(0,Z.jsx)(Je,{}),component:J,to:`/tour-safaris`,variant:`outlined`,size:`medium`,sx:{borderRadius:2,fontSize:`0.85rem`},children:`Back`}),(0,Z.jsxs)(w,{sx:{display:`flex`,gap:1},children:[(0,Z.jsx)(E,{title:c?`Remove from favorites`:`Add to favorites`,children:(0,Z.jsx)(K,{onClick:()=>d(!c),sx:{bgcolor:c?q(g.palette.error.main,.1):`transparent`,"&:hover":{bgcolor:q(g.palette.error.main,.2)}},children:c?(0,Z.jsx)(L,{color:`error`}):(0,Z.jsx)(Ot,{})})}),(0,Z.jsx)(E,{title:`Share`,children:(0,Z.jsx)(K,{onClick:_,children:(0,Z.jsx)(Me,{})})})]})]}),(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:2,mb:3,flexWrap:`wrap`},children:[(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:.5},children:[(0,Z.jsx)(ee,{value:t.rating,precision:.1,readOnly:!0,size:`medium`}),(0,Z.jsx)(I,{variant:`body1`,fontWeight:600,sx:{fontSize:`1rem`},children:t.rating}),(0,Z.jsxs)(I,{variant:`body2`,color:`text.secondary`,sx:{fontSize:`0.85rem`},children:[`(`,t.reviewCount,` reviews)`]})]}),(0,Z.jsx)(O,{orientation:`vertical`,flexItem:!0}),(0,Z.jsx)(Sn,{icon:(0,Z.jsx)(ce,{}),label:`Tanzania`,size:`medium`,variant:`outlined`}),(0,Z.jsx)(Sn,{icon:(0,Z.jsx)(le,{}),label:t.duration,size:`medium`,variant:`outlined`}),(0,Z.jsx)(Sn,{icon:(0,Z.jsx)(St,{}),label:t.groupSize,size:`medium`,variant:`outlined`})]}),(0,Z.jsx)(I,{variant:`body1`,color:`text.secondary`,sx:{lineHeight:1.8,fontSize:`1.05rem`},children:t.fullDescription})]}),(0,Z.jsxs)(vn,{children:[(0,Z.jsxs)(xn,{value:a,onChange:te,variant:`scrollable`,scrollButtons:`auto`,children:[(0,Z.jsx)(H,{label:`Overview`,icon:(0,Z.jsx)(s,{sx:{fontSize:18}}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`Itinerary`,icon:(0,Z.jsx)(Te,{sx:{fontSize:18}}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`Stay`,icon:(0,Z.jsx)(u,{sx:{fontSize:18}}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`Pricing`,icon:(0,Z.jsx)(de,{sx:{fontSize:18}}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`FAQ`,icon:(0,Z.jsx)(k,{sx:{fontSize:18}}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`Gallery`,icon:(0,Z.jsx)(Re,{sx:{fontSize:18}}),iconPosition:`start`})]}),(0,Z.jsx)(O,{}),(0,Z.jsxs)(wn,{value:a,index:0,children:[(0,Z.jsxs)(b,{container:!0,spacing:4,children:[(0,Z.jsxs)(b,{item:!0,xs:12,md:6,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{mb:3,fontSize:`1.6rem`},children:`Safari Highlights`}),(0,Z.jsx)(Y,{spacing:2,children:t.highlights.map((e,t)=>(0,Z.jsx)(l,{in:!0,style:{transitionDelay:`${t*100}ms`},children:(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:2},children:[(0,Z.jsx)(Cn,{color:`secondary`,children:(0,Z.jsx)(wt,{sx:{fontSize:20}})}),(0,Z.jsx)(I,{variant:`body1`,sx:{fontSize:`1rem`},children:e})]})},t))})]}),(0,Z.jsxs)(b,{item:!0,xs:12,md:6,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{mb:3,fontSize:`1.6rem`},children:`What's Included`}),(0,Z.jsx)(Y,{spacing:1.5,children:t.included.slice(0,6).map((e,t)=>(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:1.5},children:[(0,Z.jsx)(s,{color:`success`,fontSize:`small`}),(0,Z.jsx)(I,{variant:`body2`,sx:{fontSize:`0.9rem`},children:e})]},t))})]})]}),(0,Z.jsxs)(z,{sx:{mt:4,p:3,bgcolor:q(g.palette.info.main,.05),borderRadius:3},children:[(0,Z.jsx)(I,{variant:`h6`,gutterBottom:!0,color:`info.main`,sx:{fontSize:`1.25rem`},children:`Good to Know`}),(0,Z.jsxs)(b,{container:!0,spacing:2,children:[(0,Z.jsx)(b,{item:!0,xs:12,sm:6,md:3,children:(0,Z.jsxs)(w,{sx:{textAlign:`center`},children:[(0,Z.jsx)(Cn,{color:`info`,sx:{mx:`auto`,mb:1},children:(0,Z.jsx)(Te,{})}),(0,Z.jsx)(I,{variant:`caption`,display:`block`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`Best Time`}),(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:t.bestTime})]})}),(0,Z.jsx)(b,{item:!0,xs:12,sm:6,md:3,children:(0,Z.jsxs)(w,{sx:{textAlign:`center`},children:[(0,Z.jsx)(Cn,{color:`info`,sx:{mx:`auto`,mb:1},children:(0,Z.jsx)(at,{})}),(0,Z.jsx)(I,{variant:`caption`,display:`block`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`Difficulty`}),(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:t.difficulty})]})}),(0,Z.jsx)(b,{item:!0,xs:12,sm:6,md:3,children:(0,Z.jsxs)(w,{sx:{textAlign:`center`},children:[(0,Z.jsx)(Cn,{color:`info`,sx:{mx:`auto`,mb:1},children:(0,Z.jsx)(le,{})}),(0,Z.jsx)(I,{variant:`caption`,display:`block`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`Duration`}),(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:t.duration})]})}),(0,Z.jsx)(b,{item:!0,xs:12,sm:6,md:3,children:(0,Z.jsxs)(w,{sx:{textAlign:`center`},children:[(0,Z.jsx)(Cn,{color:`info`,sx:{mx:`auto`,mb:1},children:(0,Z.jsx)(St,{})}),(0,Z.jsx)(I,{variant:`caption`,display:`block`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`Group Size`}),(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:t.groupSize})]})})]})]})]}),(0,Z.jsxs)(wn,{value:a,index:1,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{mb:1,fontSize:`1.6rem`},children:`Day-by-Day Adventure`}),(0,Z.jsx)(I,{variant:`body2`,color:`text.secondary`,paragraph:!0,sx:{fontSize:`0.9rem`},children:`Your journey through Tanzania's wilderness`}),(0,Z.jsx)(F,{orientation:`vertical`,nonLinear:!0,activeStep:f,sx:{mt:3},children:t.itinerary?.map((e,t)=>(0,Z.jsxs)(je,{completed:!1,children:[(0,Z.jsx)(At,{onClick:()=>p(f===t?-1:t),sx:{cursor:`pointer`},children:(0,Z.jsxs)(I,{variant:`h6`,fontWeight:600,sx:{fontSize:`1.1rem`},children:[`Day `,e.day,`: `,e.title]})}),(0,Z.jsx)(Ct,{children:(0,Z.jsxs)(yn,{elevation:0,children:[(0,Z.jsx)(I,{variant:`body2`,paragraph:!0,sx:{lineHeight:1.8,fontSize:`0.95rem`},children:e.description}),(0,Z.jsxs)(b,{container:!0,spacing:2,sx:{mt:2},children:[(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,children:[(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:1,mb:1},children:[(0,Z.jsx)(u,{fontSize:`small`,color:`action`}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.75rem`},children:`Accommodation`})]}),(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.9rem`},children:e.accommodation})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,children:[(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:1,mb:1},children:[(0,Z.jsx)(yt,{fontSize:`small`,color:`action`}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.75rem`},children:`Meals`})]}),(0,Z.jsx)(w,{sx:{display:`flex`,gap:.5},children:e.meals.map(e=>(0,Z.jsx)(G,{label:e,size:`small`,color:`primary`,variant:`outlined`,sx:{fontSize:`0.7rem`}},e))})]})]}),(0,Z.jsxs)(w,{sx:{mt:2},children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,display:`block`,gutterBottom:!0,sx:{fontSize:`0.75rem`},children:`Activities`}),(0,Z.jsx)(Y,{direction:`row`,spacing:1,flexWrap:`wrap`,useFlexGap:!0,children:e.activities.map(e=>(0,Z.jsx)(G,{label:e,size:`small`,sx:{bgcolor:q(g.palette.secondary.main,.1),color:`secondary.main`,fontSize:`0.75rem`}},e))})]})]})})]},e.day))})]}),(0,Z.jsxs)(wn,{value:a,index:2,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`1.6rem`},children:`Where You'll Stay`}),(0,Z.jsx)(b,{container:!0,spacing:3,sx:{mt:1},children:t.accommodations?.map((e,t)=>(0,Z.jsx)(b,{item:!0,xs:12,md:4,children:(0,Z.jsxs)(Ee,{sx:{borderRadius:3,overflow:`hidden`,height:`100%`},children:[(0,Z.jsx)(dt,{component:`img`,height:`200`,image:e.image,alt:e.name,sx:{transition:`transform 0.3s`,"&:hover":{transform:`scale(1.05)`}}}),(0,Z.jsxs)(oe,{children:[(0,Z.jsx)(I,{variant:`h6`,gutterBottom:!0,fontWeight:600,sx:{fontSize:`1.1rem`},children:e.name}),(0,Z.jsx)(I,{variant:`body2`,color:`text.secondary`,paragraph:!0,sx:{fontSize:`0.85rem`},children:e.description}),(0,Z.jsx)(Y,{direction:`row`,spacing:.5,flexWrap:`wrap`,useFlexGap:!0,children:e.amenities.map(e=>(0,Z.jsx)(G,{label:e,size:`small`,variant:`outlined`,sx:{fontSize:`0.7rem`}},e))})]})]})},t))})]}),(0,Z.jsxs)(wn,{value:a,index:3,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`1.6rem`},children:`Choose Your Experience`}),(0,Z.jsx)(b,{container:!0,spacing:3,sx:{mt:1},children:t.pricing.map((e,t)=>(0,Z.jsx)(b,{item:!0,xs:12,md:4,children:(0,Z.jsxs)(Ee,{sx:{borderRadius:3,p:3,height:`100%`,position:`relative`,overflow:`hidden`,transition:`all 0.3s`,"&:hover":{transform:`translateY(-8px)`,boxShadow:g.shadows[8]},...t===1&&{border:`2px solid ${g.palette.secondary.main}`,boxShadow:`0 8px 32px ${q(g.palette.secondary.main,.2)}`}},children:[t===1&&(0,Z.jsx)(w,{sx:{position:`absolute`,top:12,right:-28,bgcolor:`secondary.main`,color:`white`,py:.5,px:4,transform:`rotate(45deg)`,fontSize:`0.7rem`,fontWeight:700},children:`POPULAR`}),(0,Z.jsxs)(w,{sx:{textAlign:`center`,mb:3},children:[(0,Z.jsx)(_t,{sx:{mx:`auto`,mb:2,bgcolor:q(g.palette.primary.main,.1),color:`primary.main`,width:56,height:56},children:(0,Z.jsx)(at,{sx:{fontSize:28}})}),(0,Z.jsx)(I,{variant:`h6`,fontWeight:700,sx:{fontSize:`1.1rem`},children:e.type}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:e.note})]}),(0,Z.jsx)(O,{sx:{my:2}}),(0,Z.jsxs)(w,{sx:{textAlign:`center`,mb:3},children:[(0,Z.jsxs)(I,{variant:`h3`,fontWeight:800,color:`primary.main`,sx:{fontSize:{xs:`2rem`,md:`2.5rem`}},children:[`$`,e.price]}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.75rem`},children:`per person`})]}),(0,Z.jsxs)(I,{variant:`body2`,color:`text.secondary`,align:`center`,sx:{mb:2,fontSize:`0.85rem`},children:[`Up to `,e.persons,` persons`]}),(0,Z.jsx)(A,{variant:t===1?`contained`:`outlined`,color:`secondary`,fullWidth:!0,component:J,to:`/contact`,sx:{fontSize:`0.85rem`,py:1},children:`Select`})]})},t))}),(0,Z.jsxs)(z,{sx:{mt:4,p:4,borderRadius:3,bgcolor:`grey.50`},children:[(0,Z.jsx)(I,{variant:`h6`,gutterBottom:!0,sx:{fontSize:`1.25rem`},children:`What's Included / Not Included`}),(0,Z.jsxs)(b,{container:!0,spacing:4,children:[(0,Z.jsxs)(b,{item:!0,xs:12,md:6,children:[(0,Z.jsxs)(I,{variant:`subtitle2`,color:`success.main`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`0.9rem`},children:[(0,Z.jsx)(s,{sx:{fontSize:16,mr:.5,verticalAlign:`middle`}}),`Included`]}),(0,Z.jsx)(Y,{spacing:1,children:t.included.map((e,t)=>(0,Z.jsxs)(I,{variant:`body2`,color:`text.secondary`,sx:{fontSize:`0.85rem`},children:[`• `,e]},t))})]}),(0,Z.jsxs)(b,{item:!0,xs:12,md:6,children:[(0,Z.jsxs)(I,{variant:`subtitle2`,color:`error.main`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`0.9rem`},children:[(0,Z.jsx)(it,{sx:{fontSize:16,mr:.5,verticalAlign:`middle`}}),`Not Included`]}),(0,Z.jsx)(Y,{spacing:1,children:t.excluded.map((e,t)=>(0,Z.jsxs)(I,{variant:`body2`,color:`text.secondary`,sx:{fontSize:`0.85rem`},children:[`• `,e]},t))})]})]})]})]}),(0,Z.jsxs)(wn,{value:a,index:4,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`1.6rem`},children:`Common Questions`}),(0,Z.jsx)(w,{sx:{mt:2},children:t.faqs?.map((e,t)=>(0,Z.jsxs)(bt,{elevation:0,sx:{mb:1.5,border:`1px solid`,borderColor:`divider`,borderRadius:`12px !important`,overflow:`hidden`,"&:before":{display:`none`}},children:[(0,Z.jsx)(Ne,{expandIcon:(0,Z.jsx)(k,{color:`secondary`}),children:(0,Z.jsx)(I,{fontWeight:600,sx:{fontSize:`1rem`},children:e.question})}),(0,Z.jsx)(Ze,{children:(0,Z.jsx)(I,{variant:`body2`,color:`text.secondary`,sx:{lineHeight:1.8,fontSize:`0.95rem`},children:e.answer})})]},t))})]}),(0,Z.jsxs)(wn,{value:a,index:5,children:[(0,Z.jsx)(I,{variant:`h5`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`1.6rem`},children:`Photo Gallery`}),(0,Z.jsx)(b,{container:!0,spacing:2,sx:{mt:1},children:t.images.map((e,t)=>(0,Z.jsx)(b,{item:!0,xs:12,sm:6,md:4,children:(0,Z.jsx)(bn,{component:`img`,image:e,alt:`Safari moment ${t+1}`,onClick:()=>window.open(e,`_blank`)})},t))})]})]})]}),(0,Z.jsx)(b,{item:!0,xs:12,lg:4,children:(0,Z.jsxs)(w,{sx:{position:`sticky`,top:100},children:[(0,Z.jsxs)(vn,{sx:{mb:3,p:3},children:[(0,Z.jsx)(I,{variant:`h6`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`1.1rem`},children:`Quick Contact`}),(0,Z.jsxs)(Y,{spacing:2,children:[(0,Z.jsx)(A,{variant:`outlined`,fullWidth:!0,startIcon:(0,Z.jsx)(nt,{}),href:`https://wa.me/255000000000`,sx:{justifyContent:`flex-start`,borderRadius:2,py:1.5},children:(0,Z.jsxs)(w,{sx:{textAlign:`left`},children:[(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:`WhatsApp`}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`Quick response`})]})}),(0,Z.jsx)(A,{variant:`outlined`,fullWidth:!0,startIcon:(0,Z.jsx)(v,{}),component:J,to:`/contact`,sx:{justifyContent:`flex-start`,borderRadius:2,py:1.5},children:(0,Z.jsxs)(w,{sx:{textAlign:`left`},children:[(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:`Email Us`}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`Detailed inquiry`})]})}),(0,Z.jsx)(A,{variant:`outlined`,fullWidth:!0,startIcon:(0,Z.jsx)(h,{}),href:`tel:+255000000000`,sx:{justifyContent:`flex-start`,borderRadius:2,py:1.5},children:(0,Z.jsxs)(w,{sx:{textAlign:`left`},children:[(0,Z.jsx)(I,{variant:`body2`,fontWeight:600,sx:{fontSize:`0.85rem`},children:`Call Now`}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,sx:{fontSize:`0.7rem`},children:`+255 000 000 000`})]})})]})]}),(0,Z.jsxs)(vn,{sx:{p:3,bgcolor:q(g.palette.success.main,.05)},children:[(0,Z.jsx)(I,{variant:`h6`,gutterBottom:!0,fontWeight:700,color:`success.main`,sx:{fontSize:`1.1rem`},children:`Why Book With Us?`}),(0,Z.jsx)(Y,{spacing:2,children:[`Expert local guides`,`Best price guarantee`,`24/7 support`,`Flexible booking`].map((e,t)=>(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:1.5},children:[(0,Z.jsx)(s,{color:`success`,fontSize:`small`}),(0,Z.jsx)(I,{variant:`body2`,sx:{fontSize:`0.85rem`},children:e})]},t))})]})]})})]}),(0,Z.jsx)(z,{sx:{mt:6,p:{xs:4,md:6},borderRadius:4,bgcolor:`white`,textAlign:`center`,position:`relative`,overflow:`hidden`,boxShadow:`0 4px 20px rgba(0,0,0,0.08)`},children:(0,Z.jsxs)(w,{sx:{position:`relative`,zIndex:1},children:[(0,Z.jsx)(I,{variant:`h4`,gutterBottom:!0,fontWeight:800,sx:{fontSize:{xs:`1.8rem`,md:`2.5rem`},color:`text.primary`},children:`Ready for Your Adventure?`}),(0,Z.jsx)(I,{variant:`body1`,sx:{maxWidth:600,mx:`auto`,mb:4,fontSize:`1rem`,color:`text.secondary`},children:`Join thousands of travelers who have experienced the magic of Tanzania with us.`}),(0,Z.jsxs)(Y,{direction:{xs:`column`,sm:`row`},spacing:2,justifyContent:`center`,children:[(0,Z.jsx)(A,{variant:`contained`,size:`large`,component:J,to:`/contact`,sx:{bgcolor:`secondary.main`,color:`white`,fontWeight:700,px:4,py:1.5,borderRadius:3,fontSize:`0.9rem`,"&:hover":{bgcolor:`secondary.dark`}},children:`Book Now`}),(0,Z.jsx)(A,{variant:`outlined`,size:`large`,component:J,to:`/contact`,sx:{borderColor:`grey.400`,color:`text.primary`,fontWeight:700,px:4,py:1.5,borderRadius:3,fontSize:`0.9rem`,"&:hover":{borderColor:`secondary.main`,bgcolor:q(g.palette.secondary.main,.05)}},children:`Customize Trip`})]})]})})]})]}):(0,Z.jsx)(y,{maxWidth:`lg`,sx:{py:12,textAlign:`center`},children:(0,Z.jsx)(l,{in:!0,children:(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`h2`,sx:{fontSize:`4rem`,mb:2},children:`🦁`}),(0,Z.jsx)(I,{variant:`h4`,gutterBottom:!0,fontWeight:700,sx:{fontSize:`2rem`},children:`Safari Not Found`}),(0,Z.jsx)(I,{variant:`body1`,color:`text.secondary`,paragraph:!0,sx:{maxWidth:400,mx:`auto`,mb:4,fontSize:`1rem`},children:`The adventure you're looking for seems to have wandered off into the savanna.`}),(0,Z.jsx)(A,{variant:`contained`,color:`secondary`,component:J,to:`/tour-safaris`,size:`large`,endIcon:(0,Z.jsx)(de,{}),sx:{fontSize:`0.9rem`,py:1.2,px:3},children:`Explore All Safaris`})]})})})},En=[{name:`WhatsApp`,icon:nt,color:`#25D366`,link:`https://wa.me/255000000000`,label:`Chat on WhatsApp`},{name:`Facebook`,icon:Ce,color:`#1877F2`,link:`https://m.me/naturepulseexpeditions`,label:`Messenger`},{name:`Telegram`,icon:mt,color:`#0088cc`,link:`https://t.me/naturepulse`,label:`Telegram`},{name:`Instagram`,icon:a,color:`#E4405F`,link:`https://ig.me/m/naturepulseexpeditions`,label:`Instagram DM`},{name:`X`,icon:gt,color:`#000000`,link:`https://twitter.com/messages/compose?recipient_id=naturepulse`,label:`X / Twitter`}],Dn=()=>{let[e,t]=(0,X.useState)(!1),[r,i]=(0,X.useState)(!0);Ve(),(0,X.useEffect)(()=>{e&&i(!1)},[e]);let a=()=>t(!e),o=e=>{window.open(e,`_blank`,`noopener,noreferrer`)};return(0,Z.jsxs)(w,{sx:{position:`fixed`,bottom:24,right:24,zIndex:9999,display:`flex`,flexDirection:`column`,alignItems:`flex-end`,gap:1},children:[(0,Z.jsx)(l,{in:e,children:(0,Z.jsx)(Y,{spacing:1.5,alignItems:`flex-end`,sx:{mb:1},children:En.map((t,n)=>(0,Z.jsx)(l,{in:e,style:{transitionDelay:e?`${n*50}ms`:`0ms`},children:(0,Z.jsxs)(z,{elevation:4,onClick:()=>o(t.link),sx:{display:`flex`,alignItems:`center`,gap:1.5,py:1,px:2,borderRadius:3,cursor:`pointer`,bgcolor:`background.paper`,border:`1px solid`,borderColor:`divider`,transition:`all 0.3s ease`,"&:hover":{transform:`translateX(-8px)`,boxShadow:`0 8px 24px ${q(t.color,.25)}`,borderColor:t.color,"& .social-icon":{transform:`scale(1.1)`,color:t.color}}},children:[(0,Z.jsx)(I,{variant:`body2`,sx:{fontWeight:500,fontSize:`0.9rem`},children:t.label}),(0,Z.jsx)(w,{className:`social-icon`,sx:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:36,height:36,borderRadius:`50%`,bgcolor:q(t.color,.1),color:t.color,transition:`all 0.3s ease`},children:(0,Z.jsx)(t.icon,{sx:{fontSize:20}})})]})},t.name))})}),(0,Z.jsx)(E,{title:e?`Close`:`Chat with us`,placement:`left`,arrow:!0,children:(0,Z.jsx)(Mt,{onClick:a,sx:{width:64,height:64,bgcolor:e?`grey.800`:`secondary.main`,color:`white`,boxShadow:e?`0 8px 32px rgba(0,0,0,0.3)`:`0 8px 32px rgba(0,0,0,0.2)`,transition:`all 0.3s ease`,"&:hover":{bgcolor:e?`grey.900`:`secondary.dark`,transform:`scale(1.05)`}},children:(0,Z.jsxs)(n,{variant:`dot`,color:`error`,invisible:!r,overlap:`circular`,sx:{"& .MuiBadge-badge":{top:8,right:8,boxShadow:`0 0 0 2px white`}},children:[(0,Z.jsx)(l,{in:!e,style:{transitionDuration:`200ms`},children:(0,Z.jsx)(ye,{sx:{fontSize:28}})}),(0,Z.jsx)(l,{in:e,style:{transitionDuration:`200ms`},children:(0,Z.jsx)(it,{sx:{fontSize:28,position:`absolute`}})})]})})})]})},On=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,kn=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .about-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .about-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .about-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .about-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .about-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,84px);
    font-weight: 400; color: var(--gray-800);
  }
  .about-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* expandable grid */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 32px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; } }

  .about-card {
    background: var(--white); border: 1px solid var(--gray-200);
    margin-bottom: 28px; transition: all .3s;
  }
  .about-card:last-child { margin-bottom: 0; }
  .about-card-header {
    padding: 24px 28px; display: flex;
    align-items: center; justify-content: space-between;
    cursor: pointer; transition: background .2s;
  }
  .about-card-header:hover { background: var(--gold-pale); }
  .about-card-header-left {
    display: flex; align-items: center; gap: 20px;
  }
  .about-card-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold);
  }
  .about-card-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }
  .about-card-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    color: var(--gray-800);
  }
  .about-card-expand {
    color: var(--gold); transition: transform .2s;
  }
  .about-card-expand.open { transform: rotate(180deg); }
  .about-card-content {
    padding: 0 28px 28px 104px;
    border-top: 1px solid var(--gray-200);
  }
  @media (max-width: 600px) {
    .about-card-content { padding: 0 24px 24px 24px; }
  }

  /* story content */
  .about-quote {
    background: var(--gray-50); padding: 28px; margin-top: 20px;
    border-left: 4px solid var(--gold);
  }
  .about-quote p {
    font-family: var(--serif); font-size: 18px; font-style: italic;
    color: var(--gray-700); line-height: 1.6;
  }

  /* mission/vision content */
  .about-centered {
    text-align: center; padding: 20px 0;
  }
  .about-centered-icon {
    width: 96px; height: 96px; margin: 0 auto 20px;
    color: var(--gold);
  }
  .about-centered-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }
  .about-centered-title {
    font-family: var(--serif); font-size: 28px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 20px;
  }
  .about-centered-text {
    font-size: 18px; color: var(--gray-600); line-height: 1.7;
    max-width: 550px; margin: 0 auto;
  }
  .about-chips {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 14px; margin-top: 28px;
  }
  .about-chip {
    padding: 8px 20px; background: var(--gold-pale);
    font-size: 14px; color: var(--gold); letter-spacing: .5px;
  }

  /* values grid */
  .about-values-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 20px; margin-bottom: 28px;
  }
  .about-value-card {
    background: var(--gray-50); padding: 24px; text-align: center;
    transition: all .2s;
  }
  .about-value-card:hover { background: var(--gold-pale); }
  .about-value-icon {
    width: 56px; height: 56px; margin: 0 auto 14px;
    color: var(--gold);
  }
  .about-value-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }
  .about-value-title {
    font-size: 16px; font-weight: 700; color: var(--gray-800);
    margin-bottom: 8px;
  }
  .about-value-desc {
    font-size: 13px; color: var(--gray-500);
  }

  /* features */
  .about-features-title {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gray-800); margin: 28px 0 20px;
  }
  .about-features-grid {
    display: grid; grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .about-feature {
    display: flex; align-items: center; gap: 12px;
    padding: 10px 0;
  }
  .about-feature-icon {
    width: 32px; height: 32px; color: var(--gold);
  }
  .about-feature-icon svg { width: 100%; height: 100%; stroke: currentColor; fill: none; }
  .about-feature-text {
    font-size: 15px; color: var(--gray-700);
  }

  /* stats */
  .about-stats {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 40px; margin-top: 48px;
  }
  .about-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 40px; text-align: center;
  }
  @media (max-width: 800px) { .about-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .about-stats-grid { grid-template-columns: 1fr; } }
  .about-stat-number {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); margin-bottom: 10px;
  }
  .about-stat-label {
    font-size: 15px; color: var(--gray-600); text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-in { animation: fadeUp .5s ease both; }
`,An=()=>{let[e,t]=(0,X.useState)({story:!0,mission:!0,vision:!0,values:!0}),n=e=>{t(t=>({...t,[e]:!t[e]}))},r=[{icon:`nature`,title:`Sustainability`,desc:`Eco-friendly practices in all operations`},{icon:`people`,title:`Community`,desc:`Supporting local communities and conservation`},{icon:`trophy`,title:`Excellence`,desc:`Premium service and unforgettable experiences`},{icon:`forest`,title:`Authenticity`,desc:`Genuine hospitality and culture`}],i=[{icon:`flight`,text:`Airport Transfers`},{icon:`hotel`,text:`Carefully Selected Properties`},{icon:`restaurant`,text:`Gourmet Meals`},{icon:`car`,text:`4x4 Safari Vehicles`},{icon:`camera`,text:`Photography Tips`},{icon:`location`,text:`Expert Local Knowledge`}],a=({name:e})=>(0,Z.jsx)(`div`,{className:`about-card-icon`,children:{book:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M4 19.5A2.5 2.5 0 0 1 6.5 17H20`}),(0,Z.jsx)(`path`,{d:`M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z`})]}),forest:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),vision:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),trophy:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2v4M12 2L9 5M12 2L15 5`}),(0,Z.jsx)(`path`,{d:`M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z`}),(0,Z.jsx)(`path`,{d:`M5 4h14v4H5z`})]})}[e]}),o=({name:e})=>(0,Z.jsx)(`div`,{className:`about-centered-icon`,children:{forest:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),vision:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),trophy:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2v4M12 2L9 5M12 2L15 5`}),(0,Z.jsx)(`path`,{d:`M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z`}),(0,Z.jsx)(`path`,{d:`M5 4h14v4H5z`})]})}[e]}),s=({name:e})=>(0,Z.jsx)(`div`,{className:`about-value-icon`,children:{nature:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),people:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`}),(0,Z.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,Z.jsx)(`path`,{d:`M23 21v-2a4 4 0 0 0-3-3.87`}),(0,Z.jsx)(`path`,{d:`M16 3.13a4 4 0 0 1 0 7.75`})]}),trophy:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2v4M12 2L9 5M12 2L15 5`}),(0,Z.jsx)(`path`,{d:`M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z`}),(0,Z.jsx)(`path`,{d:`M5 4h14v4H5z`})]}),forest:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})})}[e]}),c=({name:e})=>(0,Z.jsx)(`div`,{className:`about-feature-icon`,children:{flight:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M5 15l4-8 4 8M9 7v10`}),(0,Z.jsx)(`path`,{d:`M3 15h12`})]}),hotel:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),restaurant:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M3 3v18h18M18 9l-4-4M12 3v12`})}),car:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M3 9h18M5 3h14M7 9v6M17 9v6`}),(0,Z.jsx)(`rect`,{x:`5`,y:`3`,width:`14`,height:`6`,rx:`1`})]}),camera:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`5`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),location:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}[e]});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[On,kn]}),(0,Z.jsxs)(`div`,{className:`about-page`,children:[(0,Z.jsx)(Qt,{title:`About Us`,subtitle:`Discover the story behind Nature Pulse Expeditions`,description:`As a locally-rooted expedition company, we design and manage every journey from concept to completion. Our team combines international expertise with deep local knowledge.`,buttonText:`Plan Your Journey`,buttonLink:`/contact`,imageUrl:qt.safari||`data:image/jpeg;base64,`}),(0,Z.jsxs)(`div`,{className:`about-container`,children:[(0,Z.jsxs)(`div`,{className:`about-section-header`,children:[(0,Z.jsx)(`div`,{className:`about-eyebrow`,children:`Our Story`}),(0,Z.jsxs)(`h1`,{className:`about-title`,children:[`Nature Pulse `,(0,Z.jsx)(`em`,{children:`Expeditions`})]}),(0,Z.jsx)(`div`,{className:`about-underline`})]}),(0,Z.jsxs)(`div`,{className:`about-grid`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`about-card fade-in`,children:[(0,Z.jsxs)(`div`,{className:`about-card-header`,onClick:()=>n(`story`),children:[(0,Z.jsxs)(`div`,{className:`about-card-header-left`,children:[(0,Z.jsx)(a,{name:`book`}),(0,Z.jsx)(`h3`,{className:`about-card-title`,children:`Our Story`})]}),(0,Z.jsx)(`svg`,{className:`about-card-expand ${e.story?`open`:``}`,width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),e.story&&(0,Z.jsxs)(`div`,{className:`about-card-content`,children:[(0,Z.jsx)(`p`,{style:{fontSize:17,color:`var(--gray-600)`,lineHeight:1.7,marginBottom:18},children:`Nature Pulse Expeditions was founded with a passion for showcasing the true beauty of East Africa's wilderness. As a locally owned and operated expedition company based in Arusha, we combine deep regional knowledge with a commitment to quality service.`}),(0,Z.jsx)(`p`,{style:{fontSize:17,color:`var(--gray-600)`,lineHeight:1.7,marginBottom:28},children:`Our goal is simple: to deliver elegant safari experiences that leave lasting memories. Every expedition we organize reflects our dedication to excellence, safety, and sustainability.`}),(0,Z.jsx)(`div`,{className:`about-quote`,children:(0,Z.jsx)(`p`,{children:`"We believe travel should be seamless, inspiring, and authentic. Every journey we craft reflects our dedication to excellence, safety, and sustainability."`})})]})]}),(0,Z.jsxs)(`div`,{className:`about-card fade-in`,style:{animationDelay:`100ms`},children:[(0,Z.jsxs)(`div`,{className:`about-card-header`,onClick:()=>n(`mission`),children:[(0,Z.jsxs)(`div`,{className:`about-card-header-left`,children:[(0,Z.jsx)(a,{name:`forest`}),(0,Z.jsx)(`h3`,{className:`about-card-title`,children:`Our Mission`})]}),(0,Z.jsx)(`svg`,{className:`about-card-expand ${e.mission?`open`:``}`,width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),e.mission&&(0,Z.jsx)(`div`,{className:`about-card-content`,children:(0,Z.jsxs)(`div`,{className:`about-centered`,children:[(0,Z.jsx)(o,{name:`forest`}),(0,Z.jsx)(`h4`,{className:`about-centered-title`,children:`Creating Unforgettable Experiences`}),(0,Z.jsx)(`p`,{className:`about-centered-text`,children:`To create unforgettable safari experiences while promoting responsible tourism and supporting local communities.`}),(0,Z.jsxs)(`div`,{className:`about-chips`,children:[(0,Z.jsx)(`span`,{className:`about-chip`,children:`Sustainable Tourism`}),(0,Z.jsx)(`span`,{className:`about-chip`,children:`Community Support`}),(0,Z.jsx)(`span`,{className:`about-chip`,children:`Wildlife Conservation`})]})]})})]})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsxs)(`div`,{className:`about-card fade-in`,style:{animationDelay:`150ms`},children:[(0,Z.jsxs)(`div`,{className:`about-card-header`,onClick:()=>n(`vision`),children:[(0,Z.jsxs)(`div`,{className:`about-card-header-left`,children:[(0,Z.jsx)(a,{name:`vision`}),(0,Z.jsx)(`h3`,{className:`about-card-title`,children:`Our Vision`})]}),(0,Z.jsx)(`svg`,{className:`about-card-expand ${e.vision?`open`:``}`,width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),e.vision&&(0,Z.jsx)(`div`,{className:`about-card-content`,children:(0,Z.jsxs)(`div`,{className:`about-centered`,children:[(0,Z.jsx)(o,{name:`vision`}),(0,Z.jsx)(`h4`,{className:`about-centered-title`,children:`Leading with Excellence`}),(0,Z.jsx)(`p`,{className:`about-centered-text`,children:`To become a trusted safari brand recognized for elegance, reliability, and authentic hospitality.`})]})})]}),(0,Z.jsxs)(`div`,{className:`about-card fade-in`,style:{animationDelay:`200ms`},children:[(0,Z.jsxs)(`div`,{className:`about-card-header`,onClick:()=>n(`values`),children:[(0,Z.jsxs)(`div`,{className:`about-card-header-left`,children:[(0,Z.jsx)(a,{name:`trophy`}),(0,Z.jsx)(`h3`,{className:`about-card-title`,children:`Our Values`})]}),(0,Z.jsx)(`svg`,{className:`about-card-expand ${e.values?`open`:``}`,width:`22`,height:`22`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),e.values&&(0,Z.jsxs)(`div`,{className:`about-card-content`,children:[(0,Z.jsx)(`div`,{className:`about-values-grid`,children:r.map((e,t)=>(0,Z.jsxs)(`div`,{className:`about-value-card`,children:[(0,Z.jsx)(s,{name:e.icon}),(0,Z.jsx)(`div`,{className:`about-value-title`,children:e.title}),(0,Z.jsx)(`div`,{className:`about-value-desc`,children:e.desc})]},t))}),(0,Z.jsx)(`div`,{className:`about-features-title`,children:`What We Offer`}),(0,Z.jsx)(`div`,{className:`about-features-grid`,children:i.map((e,t)=>(0,Z.jsxs)(`div`,{className:`about-feature`,children:[(0,Z.jsx)(c,{name:e.icon}),(0,Z.jsx)(`span`,{className:`about-feature-text`,children:e.text})]},t))})]})]})]})]}),(0,Z.jsx)(`div`,{className:`about-stats fade-in`,children:(0,Z.jsxs)(`div`,{className:`about-stats-grid`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`about-stat-number`,children:`5,000+`}),(0,Z.jsx)(`div`,{className:`about-stat-label`,children:`Happy Travelers`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`about-stat-number`,children:`98%`}),(0,Z.jsx)(`div`,{className:`about-stat-label`,children:`Satisfaction Rate`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`about-stat-number`,children:`15+`}),(0,Z.jsx)(`div`,{className:`about-stat-label`,children:`Expert Guides`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`about-stat-number`,children:`10+`}),(0,Z.jsx)(`div`,{className:`about-stat-label`,children:`Years Experience`})]})]})})]})]})]})},jn=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,Mn=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .wu-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .wu-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .wu-section-header {
    text-align: center; margin-bottom: 64px;
  }
  .wu-eyebrow {
    font-size: 20px; text-transform: uppercase; letter-spacing: 5px;
    color: var(--gold); margin-bottom: 16px; font-weight: 600;
  }
  .wu-title {
    font-family: var(--serif); font-size: clamp(48px,7vw,84px);
    font-weight: 400; color: var(--gray-800);
  }
  .wu-underline {
    width: 90px; height: 3px; background: var(--gold);
    margin: 24px auto 0;
  }

  /* stats grid */
  .wu-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 28px; margin-bottom: 90px;
  }
  @media (max-width: 800px) { .wu-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .wu-stats-grid { grid-template-columns: 1fr; } }

  .wu-stat-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 24px; text-align: center;
    transition: all .3s;
  }
  .wu-stat-card:hover { transform: translateY(-6px); border-color: var(--gold); box-shadow: 0 12px 24px rgba(0,0,0,0.08); }
  .wu-stat-number {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); margin-bottom: 10px;
  }
  .wu-stat-label {
    font-size: 15px; color: var(--gray-600); text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* reasons grid */
  .wu-reasons-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 90px;
  }
  @media (max-width: 1000px) { .wu-reasons-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .wu-reasons-grid { grid-template-columns: 1fr; } }

  .wu-reason-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 40px 32px; text-align: center;
    transition: all .3s;
  }
  .wu-reason-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .wu-reason-icon {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    margin: 0 auto 24px;
    color: var(--gold);
  }
  .wu-reason-icon svg { width: 40px; height: 40px; stroke: currentColor; fill: none; }
  .wu-reason-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 14px;
  }
  .wu-reason-desc {
    font-size: 16px; color: var(--gray-600); line-height: 1.7;
  }

  /* features section */
  .wu-features {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 48px; margin-bottom: 90px;
  }
  .wu-features-title {
    font-family: var(--serif); font-size: 36px; font-weight: 500;
    text-align: center; color: var(--gray-800); margin-bottom: 48px;
  }
  .wu-features-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }
  @media (max-width: 800px) { .wu-features-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 500px) { .wu-features-grid { grid-template-columns: 1fr; } }
  .wu-feature-item {
    display: flex; align-items: center; gap: 16px;
    padding: 14px 0;
  }
  .wu-feature-icon {
    width: 52px; height: 52px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold);
  }
  .wu-feature-icon svg { width: 26px; height: 26px; stroke: currentColor; fill: none; }
  .wu-feature-text {
    font-size: 17px; font-weight: 600; color: var(--gray-700);
  }

  /* testimonials grid */
  .wu-testimonials-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 90px;
  }
  @media (max-width: 1000px) { .wu-testimonials-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .wu-testimonials-grid { grid-template-columns: 1fr; } }

  .wu-testimonial-card {
    background: var(--white); border: 1px solid var(--gray-200);
    padding: 36px; transition: all .3s;
  }
  .wu-testimonial-card:hover { transform: translateY(-6px); border-color: var(--gold); box-shadow: 0 12px 24px rgba(0,0,0,0.08); }
  .wu-stars {
    display: flex; gap: 5px; margin-bottom: 24px;
  }
  .wu-star {
    color: var(--gold); font-size: 20px;
  }
  .wu-testimonial-text {
    font-size: 16px; color: var(--gray-600); line-height: 1.8;
    margin-bottom: 24px; font-style: italic;
  }
  .wu-testimonial-author {
    font-family: var(--serif); font-size: 18px; font-weight: 600;
    color: var(--gray-800);
  }

  /* trust badges */
  .wu-badges {
    display: flex; flex-wrap: wrap;
    justify-content: center; gap: 20px;
    margin-top: 40px; padding: 40px 0;
    border-top: 1px solid var(--gray-200);
  }
  .wu-badge {
    padding: 10px 24px; background: var(--gray-50);
    border: 1px solid var(--gray-200); font-size: 14px;
    color: var(--gray-600); letter-spacing: .5px;
    transition: all .2s;
  }
  .wu-badge:hover { border-color: var(--gold); color: var(--gold); }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .wu-fade-in { animation: fadeUp .5s ease both; }
`,Nn=e=>e.toLocaleString(`en-US`),Pn=()=>{let e=[{icon:`trophy`,title:`5+ Years Experience`,description:`Years of excellence in organizing unforgettable safaris across East Africa`},{icon:`certified`,title:`Certified Guides`,description:`All our guides are professionally trained and certified by national parks authorities`},{icon:`security`,title:`Safety First`,description:`Your safety is our priority with 24/7 support and well-maintained vehicles`},{icon:`people`,title:`Small Groups`,description:`Intimate group sizes for personalized attention and better wildlife viewing`},{icon:`offer`,title:`Best Price Guarantee`,description:`Competitive pricing without compromising on quality or experience`},{icon:`support`,title:`24/7 Customer Support`,description:`Round-the-clock assistance before, during, and after your journey`}],t=[{icon:`flight`,text:`Airport Transfers`},{icon:`hotel`,text:`Carefully Selected Properties`},{icon:`restaurant`,text:`Gourmet Meals`},{icon:`car`,text:`4x4 Safari Vehicles`},{icon:`camera`,text:`Photography Tips`},{icon:`location`,text:`Expert Local Knowledge`}],n=[{text:`The most incredible experience of our lives! The guides were knowledgeable and friendly, and every detail was perfect.`,author:`Detha & Sarah`,rating:5},{text:`Perfectly organized from start to finish. Saw incredible wildlife and made memories that will last forever.`,author:`Michael`,rating:5},{text:`Outstanding service and attention to detail. The team went above and beyond to ensure we had the best experience.`,author:`Watson`,rating:5}],r=({name:e})=>(0,Z.jsx)(`div`,{className:`wu-reason-icon`,children:{trophy:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2v4M12 2L9 5M12 2L15 5`}),(0,Z.jsx)(`path`,{d:`M5 8h14v4c0 4-3 8-7 8s-7-4-7-8V8z`}),(0,Z.jsx)(`path`,{d:`M5 4h14v4H5z`})]}),certified:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`})}),security:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),people:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2`}),(0,Z.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,Z.jsx)(`path`,{d:`M23 21v-2a4 4 0 0 0-3-3.87`}),(0,Z.jsx)(`path`,{d:`M16 3.13a4 4 0 0 1 0 7.75`})]}),offer:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M20 12V8h-4l-4-4-4 4H4v4l4 4-4 4v4h4l4-4 4 4h4v-4l-4-4 4-4z`}),(0,Z.jsx)(`path`,{d:`M12 8v8M8 12h8`})]}),support:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z`})}),flight:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M5 15l4-8 4 8M9 7v10`}),(0,Z.jsx)(`path`,{d:`M3 15h12`})]}),hotel:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),restaurant:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M3 3v18h18M18 9l-4-4M12 3v12`})}),car:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M3 9h18M5 3h14M7 9v6M17 9v6`}),(0,Z.jsx)(`rect`,{x:`5`,y:`3`,width:`14`,height:`6`,rx:`1`})]}),camera:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`5`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),location:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}[e]}),i=({name:e})=>(0,Z.jsx)(`div`,{className:`wu-feature-icon`,children:{flight:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M5 15l4-8 4 8M9 7v10`}),(0,Z.jsx)(`path`,{d:`M3 15h12`})]}),hotel:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),restaurant:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M3 3v18h18M18 9l-4-4M12 3v12`})}),car:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M3 9h18M5 3h14M7 9v6M17 9v6`}),(0,Z.jsx)(`rect`,{x:`5`,y:`3`,width:`14`,height:`6`,rx:`1`})]}),camera:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`5`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),location:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}[e]});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[jn,Mn]}),(0,Z.jsxs)(`div`,{className:`wu-page`,children:[(0,Z.jsx)(Qt,{title:`Why Choose Us`,subtitle:`Experience the difference with East Africa's trusted expedition operator`,description:`From expert guides to personalized service, discover what makes Nature Pulse Expeditions the premier choice for authentic safari experiences.`,buttonText:`Start Your Journey`,buttonLink:`/contact`,imageUrl:qt.safari||`data:image/jpeg;base64,`}),(0,Z.jsxs)(`div`,{className:`wu-container`,children:[(0,Z.jsxs)(`div`,{className:`wu-stats-grid`,children:[(0,Z.jsxs)(`div`,{className:`wu-stat-card wu-fade-in`,children:[(0,Z.jsxs)(`div`,{className:`wu-stat-number`,children:[Nn(5e3),`+`]}),(0,Z.jsx)(`div`,{className:`wu-stat-label`,children:`Happy Travelers`})]}),(0,Z.jsxs)(`div`,{className:`wu-stat-card wu-fade-in`,style:{animationDelay:`100ms`},children:[(0,Z.jsxs)(`div`,{className:`wu-stat-number`,children:[Nn(98),`%`]}),(0,Z.jsx)(`div`,{className:`wu-stat-label`,children:`Satisfaction Rate`})]}),(0,Z.jsxs)(`div`,{className:`wu-stat-card wu-fade-in`,style:{animationDelay:`200ms`},children:[(0,Z.jsxs)(`div`,{className:`wu-stat-number`,children:[Nn(15),`+`]}),(0,Z.jsx)(`div`,{className:`wu-stat-label`,children:`Expert Guides`})]}),(0,Z.jsxs)(`div`,{className:`wu-stat-card wu-fade-in`,style:{animationDelay:`300ms`},children:[(0,Z.jsxs)(`div`,{className:`wu-stat-number`,children:[Nn(5),`+`]}),(0,Z.jsx)(`div`,{className:`wu-stat-label`,children:`Years Experience`})]})]}),(0,Z.jsxs)(`div`,{className:`wu-section-header`,children:[(0,Z.jsx)(`div`,{className:`wu-eyebrow`,children:`What Makes Us Different`}),(0,Z.jsx)(`h2`,{className:`wu-title`,children:`Our Commitment to Excellence`}),(0,Z.jsx)(`div`,{className:`wu-underline`})]}),(0,Z.jsx)(`div`,{className:`wu-reasons-grid`,children:e.map((e,t)=>(0,Z.jsxs)(`div`,{className:`wu-reason-card wu-fade-in`,style:{animationDelay:`${t*80}ms`},children:[(0,Z.jsx)(r,{name:e.icon}),(0,Z.jsx)(`h3`,{className:`wu-reason-title`,children:e.title}),(0,Z.jsx)(`p`,{className:`wu-reason-desc`,children:e.description})]},t))}),(0,Z.jsxs)(`div`,{className:`wu-features`,children:[(0,Z.jsx)(`h3`,{className:`wu-features-title`,children:`Everything Included`}),(0,Z.jsx)(`div`,{className:`wu-features-grid`,children:t.map((e,t)=>(0,Z.jsxs)(`div`,{className:`wu-feature-item`,children:[(0,Z.jsx)(i,{name:e.icon}),(0,Z.jsx)(`span`,{className:`wu-feature-text`,children:e.text})]},t))})]}),(0,Z.jsxs)(`div`,{className:`wu-section-header`,children:[(0,Z.jsx)(`div`,{className:`wu-eyebrow`,children:`Guest Stories`}),(0,Z.jsx)(`h2`,{className:`wu-title`,children:`What Our Guests Say`}),(0,Z.jsx)(`div`,{className:`wu-underline`})]}),(0,Z.jsx)(`div`,{className:`wu-testimonials-grid`,children:n.map((e,t)=>(0,Z.jsxs)(`div`,{className:`wu-testimonial-card wu-fade-in`,style:{animationDelay:`${t*100}ms`},children:[(0,Z.jsx)(`div`,{className:`wu-stars`,children:[...[,,,,,]].map((e,t)=>(0,Z.jsx)(`span`,{className:`wu-star`,children:`★`},t))}),(0,Z.jsxs)(`p`,{className:`wu-testimonial-text`,children:[`"`,e.text,`"`]}),(0,Z.jsxs)(`div`,{className:`wu-testimonial-author`,children:[`— `,e.author]})]},t))}),(0,Z.jsxs)(`div`,{className:`wu-badges`,children:[(0,Z.jsx)(`span`,{className:`wu-badge`,children:`TATO Member`}),(0,Z.jsx)(`span`,{className:`wu-badge`,children:`Eco-Tourism Certified`}),(0,Z.jsx)(`span`,{className:`wu-badge`,children:`Safety Rated ★★★★★`}),(0,Z.jsx)(`span`,{className:`wu-badge`,children:`100% Local Owned`})]})]})]})]})},Fn=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,In=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .pr-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .pr-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 80px;
  }

  /* page header */
  .pr-header {
    text-align: center; padding: 64px 0 48px;
  }
  .pr-eyebrow {
    font-family: var(--sans); font-size: 20px; font-weight: 600;
    text-transform: uppercase; letter-spacing: 5px; color: var(--gold);
    margin-bottom: 20px;
  }
  .pr-title {
    font-family: var(--serif); font-size: clamp(56px,8vw,96px);
    font-weight: 400; line-height: 1.1; color: var(--gray-800);
    margin-bottom: 24px;
  }
  .pr-title em { font-style: italic; color: var(--gold); }
  .pr-sub {
    font-size: 20px; color: var(--gray-600); max-width: 700px;
    margin: 0 auto; line-height: 1.7;
  }
  .pr-divider {
    width: 90px; height: 3px; background: var(--gold);
    margin: 32px auto 0;
  }

  /* tabs */
  .pr-tabs {
    display: flex; justify-content: center; gap: 12px;
    flex-wrap: wrap; margin: 56px 0 48px;
    border-bottom: 1px solid var(--gray-200);
    padding-bottom: 20px;
  }
  .pr-tab {
    background: none; border: none; padding: 12px 28px;
    font-family: var(--sans); font-size: 16px; text-transform: uppercase;
    letter-spacing: 1.5px; font-weight: 600; color: var(--gray-600); cursor: pointer;
    transition: all .2s; border-radius: 4px;
  }
  .pr-tab:hover { color: var(--gold); background: var(--gold-pale); }
  .pr-tab-active {
    color: var(--gold); background: var(--gold-pale);
    border: 1px solid rgba(201,168,76,.3);
  }

  /* card grid */
  .pr-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px; margin-bottom: 56px;
  }
  @media (max-width: 1000px) { .pr-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 680px) { .pr-grid { grid-template-columns: 1fr; } }

  .pr-card {
    background: var(--white); border: 1px solid var(--gray-200);
    transition: transform .3s, box-shadow .3s;
    position: relative;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-card:hover { transform: translateY(-6px); box-shadow: 0 12px 24px rgba(0,0,0,0.08); border-color: var(--gold); }

  .pr-card-accent {
    height: 4px; background: var(--gold);
  }
  .pr-card-icon {
    width: 80px; height: 80px; border-radius: 50%;
    background: var(--gold-pale); display: flex; align-items: center;
    justify-content: center; margin: 28px auto 0;
    color: var(--gold);
  }
  .pr-card-icon svg { width: 40px; height: 40px; stroke: currentColor; fill: none; }
  .pr-card-content { padding: 28px; text-align: center; }
  .pr-card-title {
    font-family: var(--serif); font-size: 24px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 12px;
  }
  .pr-card-price {
    font-family: var(--serif); font-size: 42px; font-weight: 400;
    color: var(--gold); margin: 20px 0 12px;
  }
  .pr-card-price small { font-size: 16px; color: var(--gray-500); }
  .pr-card-note { font-size: 13px; color: var(--gray-500); }

  /* accordion */
  .pr-accordion {
    margin-bottom: 24px; background: var(--white);
    border: 1px solid var(--gray-200);
    transition: all .2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-accordion:hover { border-color: var(--gold); }
  .pr-accordion-header {
    padding: 24px 28px; cursor: pointer;
    display: flex; align-items: center; gap: 20px;
    transition: background .2s;
  }
  .pr-accordion-header:hover { background: var(--gold-pale); }
  .pr-accordion-icon {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    color: var(--gold); flex-shrink: 0;
  }
  .pr-accordion-icon svg { width: 28px; height: 28px; stroke: currentColor; fill: none; }
  .pr-accordion-title {
    flex: 1;
  }
  .pr-accordion-title h3 {
    font-family: var(--serif); font-size: 26px; font-weight: 500;
    color: var(--gray-800); margin-bottom: 6px;
  }
  .pr-accordion-title p {
    font-size: 14px; color: var(--gray-500);
  }
  .pr-accordion-expand {
    color: var(--gold); transition: transform .2s;
  }
  .pr-accordion-expand.open { transform: rotate(180deg); }
  .pr-accordion-content {
    padding: 0 28px 28px 104px;
    border-top: 1px solid var(--gray-200);
  }
  @media (max-width: 600px) {
    .pr-accordion-content { padding: 0 24px 24px 24px; }
    .pr-accordion-header { flex-wrap: wrap; }
  }

  /* price table */
  .pr-price-table {
    width: 100%; border-collapse: collapse;
  }
  .pr-price-table th {
    text-align: left; padding: 14px 10px;
    font-size: 13px; text-transform: uppercase; letter-spacing: 1px;
    color: var(--gray-500); font-weight: 600;
    border-bottom: 1px solid var(--gray-200);
  }
  .pr-price-table td {
    padding: 16px 10px; border-bottom: 1px solid var(--gray-100);
    font-size: 16px; color: var(--gray-700);
  }
  .pr-price-table td:last-child,
  .pr-price-table th:last-child { text-align: right; }
  .pr-price-table td:first-child,
  .pr-price-table th:first-child { padding-left: 0; }
  .pr-price-table td:last-child { padding-right: 0; }
  .pr-price-amount {
    font-family: var(--serif); font-size: 20px;
    color: var(--gold);
  }
  .pr-season-badge {
    display: inline-block; padding: 5px 12px;
    font-size: 12px; letter-spacing: .5px;
    background: var(--gold-pale);
    color: var(--gold);
  }

  /* mountain trek grid */
  .pr-trek-grid {
    display: grid; grid-template-columns: 1fr 1fr;
    gap: 32px; margin-bottom: 56px;
  }
  @media (max-width: 800px) { .pr-trek-grid { grid-template-columns: 1fr; } }
  .pr-trek-card {
    background: var(--white); border: 1px solid var(--gray-200);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-trek-card:hover { border-color: var(--gold); }
  .pr-trek-header {
    padding: 28px; background: var(--gold-pale);
    border-bottom: 1px solid var(--gray-200);
  }
  .pr-trek-header h3 {
    font-family: var(--serif); font-size: 32px; font-weight: 500;
    color: var(--gray-800); display: flex; align-items: center; gap: 14px;
  }
  .pr-trek-header p {
    font-size: 14px; color: var(--gray-500); margin-top: 8px;
  }
  .pr-trek-table {
    width: 100%; border-collapse: collapse;
  }
  .pr-trek-table th {
    text-align: left; padding: 16px 24px;
    font-size: 13px; text-transform: uppercase; letter-spacing: 1px;
    color: var(--gray-500); font-weight: 600;
    background: var(--gray-50);
  }
  .pr-trek-table td {
    padding: 16px 24px; border-bottom: 1px solid var(--gray-100);
    font-size: 16px; color: var(--gray-700);
  }
  .pr-trek-table td:last-child,
  .pr-trek-table th:last-child { text-align: right; }
  .pr-difficulty {
    display: inline-block; padding: 4px 10px;
    font-size: 12px; letter-spacing: .5px;
    background: var(--gold-pale); color: var(--gold);
  }

  /* itinerary */
  .pr-itinerary {
    background: var(--white); border: 1px solid var(--gray-200);
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
  }
  .pr-itinerary-header {
    padding: 36px; background: var(--gold-pale);
    border-bottom: 1px solid var(--gray-200);
  }
  .pr-itinerary-header h3 {
    font-family: var(--serif); font-size: 38px; font-weight: 400;
    color: var(--gray-800); margin-bottom: 10px;
  }
  .pr-itinerary-header p {
    font-size: 16px; color: var(--gray-500);
  }
  .pr-itinerary-list { padding: 0; margin: 0; list-style: none; }
  .pr-itinerary-item {
    display: flex; align-items: flex-start; gap: 24px;
    padding: 24px 32px; border-bottom: 1px solid var(--gray-100);
  }
  .pr-itinerary-item:last-child { border-bottom: none; }
  .pr-itinerary-day {
    width: 56px; height: 56px; border-radius: 50%;
    background: var(--gold-pale); display: flex;
    align-items: center; justify-content: center;
    font-family: var(--serif); font-size: 24px;
    color: var(--gold); flex-shrink: 0;
  }
  .pr-itinerary-icon {
    color: var(--gold); flex-shrink: 0;
  }
  .pr-itinerary-icon svg { width: 24px; height: 24px; stroke: currentColor; fill: none; }
  .pr-itinerary-content { flex: 1; }
  .pr-itinerary-content h4 {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    color: var(--gray-800); margin-bottom: 6px;
  }
  .pr-itinerary-content p {
    font-size: 16px; color: var(--gray-500); line-height: 1.5;
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .pr-fade-in { animation: fadeUp .5s ease both; }
`;function Ln(e){let t=typeof e==`string`?parseFloat(e):e;return t.toLocaleString(`en-US`,{minimumFractionDigits:t%1==0?0:2,maximumFractionDigits:2})}var Rn=()=>{let[e,t]=(0,X.useState)(0),[n,r]=(0,X.useState)({}),i=e=>{r(t=>({...t,[e]:!t[e]}))},a=[`Day Tours`,`Safari Packages`,`Mountain Treks`,`Itinerary`],o=[{name:`Chemka Hot Spring`,price:`100`,icon:`spa`},{name:`Materuni Waterfall`,price:`100`,icon:`terrain`},{name:`Tarangire Private Day Tour`,price:`250`,icon:`forest`},{name:`Ngorongoro Crater Private Day Tour`,price:`400`,icon:`location`},{name:`Lake Manyara Day Tour`,price:`250`,icon:`water`}],s=[{type:`Budgeted Camping Safaris`,duration:`6 Days`,icon:`camping`,color:`#4CAF50`,seasons:[{name:`Low Season (Apr 1 - May 19)`,prices:{2:1850,4:1550,6:1350}},{name:`Mid Season (Rest of Year)`,prices:{2:1950,4:1650,6:1450}},{name:`High Season (Jul, Sep, Oct, Dec)`,prices:{2:2150,4:1850,6:1650}}]},{type:`Private Mid-Range Safaris`,duration:`6 Days`,icon:`midrange`,color:`#FF9800`,seasons:[{name:`Low Season`,prices:{2:2450,4:2150,6:1950}},{name:`Mid Season`,prices:{2:2650,4:2350,6:2150}},{name:`High Season`,prices:{2:2950,4:2650,6:2450}}]},{type:`Luxury Safaris Experience`,duration:`6 Days`,icon:`luxury`,color:`#9C27B0`,seasons:[{name:`Low Season`,prices:{2:3450,4:3050,6:2750}},{name:`Mid Season`,prices:{2:3650,4:3250,6:2950}},{name:`High Season`,prices:{2:3950,4:3550,6:3250}}]},{type:`Honeymoon Package`,duration:`10 Days`,icon:`honeymoon`,color:`#E91E63`,seasons:[{name:`Low Season`,prices:{2:2705.96,4:2250.37,6:2124.28}},{name:`Mid Season`,prices:{2:2964.26,4:2409.96,6:2251.84}},{name:`High Season`,prices:{2:3315.93,4:2669.57,6:2481.66}}]}],c={kilimanjaro:[{route:`5 Days via Marangu Route`,price:`1650`,difficulty:`Moderate`},{route:`6 Days via Machame Route`,price:`1950`,difficulty:`Moderate`},{route:`7 Days via Umbwe Route`,price:`2200`,difficulty:`Challenging`},{route:`7 Days via Machame Route`,price:`2300`,difficulty:`Moderate`},{route:`7 Days via Rongai Route`,price:`2000`,difficulty:`Moderate`},{route:`7 Days via Lemosho Route`,price:`2300`,difficulty:`Moderate`},{route:`8 Days via Lemosho Route`,price:`2500`,difficulty:`Moderate`}],meru:[{route:`3 Days Mount Meru`,price:`900`,difficulty:`Moderate`},{route:`4 Days Mount Meru`,price:`1000`,difficulty:`Moderate`}]},l=[{day:1,title:`Arrival at KIA`,description:`Transfer to lodge in Arusha`,icon:`flight`},{day:2,title:`Tarangire Reserve`,description:`Game drive and wildlife viewing`,icon:`forest`},{day:3,title:`Central Plains`,description:`Full day game drive`,icon:`forest`},{day:4,title:`Central Plains`,description:`Morning and afternoon game drives`,icon:`forest`},{day:5,title:`Crater Highlands`,description:`Crater tour and wildlife viewing`,icon:`location`},{day:6,title:`Flight to Coastal Zone`,description:`Included in package`,icon:`flight`},{day:7,title:`Coastal Zone`,description:`Beach relaxation and exploration`,icon:`beach`},{day:8,title:`Coastal Zone`,description:`Optional tours and beach time`,icon:`beach`},{day:9,title:`Coastal Zone`,description:`Leisure and cultural experiences`,icon:`beach`},{day:10,title:`International Flight`,description:`Departure from Coastal Airport`,icon:`flight`}],u=({name:e})=>{let t={spa:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20z`}),(0,Z.jsx)(`path`,{d:`M12 6v6l4 2`})]}),terrain:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M14 4v10.54a4 4 0 1 1-4 0V4M8 14h8`})}),forest:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),location:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),water:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2v20M2 12h20`})}),camping:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2L2 22h20L12 2z`}),(0,Z.jsx)(`path`,{d:`M8 22h8`})]}),midrange:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),luxury:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`})}),honeymoon:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]}),flight:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M5 15l4-8 4 8M9 7v10`}),(0,Z.jsx)(`path`,{d:`M3 15h12`})]}),beach:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2v20M2 12h20`})}),mountain:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z`})})};return(0,Z.jsx)(`div`,{className:`pr-card-icon`,children:t[e]||t.spa})},d=({name:e})=>{let t={camping:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M12 2L2 22h20L12 2z`}),(0,Z.jsx)(`path`,{d:`M8 22h8`})]}),midrange:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,Z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),luxury:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z`})}),honeymoon:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]})};return(0,Z.jsx)(`div`,{className:`pr-accordion-icon`,children:t[e]||t.camping})},f=({name:e})=>{let t={flight:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M5 15l4-8 4 8M9 7v10`}),(0,Z.jsx)(`path`,{d:`M3 15h12`})]}),forest:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})}),location:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),beach:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`path`,{d:`M12 2v20M2 12h20`})})};return(0,Z.jsx)(`div`,{className:`pr-itinerary-icon`,children:t[e]||t.forest})};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[Fn,In]}),(0,Z.jsxs)(`div`,{className:`pr-page`,children:[(0,Z.jsx)(Qt,{title:`Investment & Rates`,subtitle:`Transparent pricing for unforgettable journeys`,description:`Choose from our range of thoughtfully crafted expeditions — from day tours to comprehensive safaris and mountain treks.`,buttonText:`Plan Your Journey`,buttonLink:`#packages`,imageUrl:qt.safari||`data:image/jpeg;base64,`}),(0,Z.jsxs)(`div`,{className:`pr-container`,children:[(0,Z.jsxs)(`div`,{className:`pr-header`,children:[(0,Z.jsx)(`div`,{className:`pr-eyebrow`,children:`Pricing & Packages`}),(0,Z.jsxs)(`h1`,{className:`pr-title`,children:[`Investment in `,(0,Z.jsx)(`em`,{children:`Adventure`})]}),(0,Z.jsx)(`p`,{className:`pr-sub`,children:`Every journey is unique. Below are sample rates to guide your planning — each expedition is customized to your preferences.`}),(0,Z.jsx)(`div`,{className:`pr-divider`})]}),(0,Z.jsx)(`div`,{className:`pr-tabs`,children:a.map((n,r)=>(0,Z.jsx)(`button`,{className:`pr-tab ${e===r?`pr-tab-active`:``}`,onClick:()=>t(r),children:n},r))}),e===0&&(0,Z.jsx)(`div`,{className:`pr-grid pr-fade-in`,children:o.map((e,t)=>(0,Z.jsxs)(`div`,{className:`pr-card`,children:[(0,Z.jsx)(`div`,{className:`pr-card-accent`}),(0,Z.jsx)(u,{name:e.icon}),(0,Z.jsxs)(`div`,{className:`pr-card-content`,children:[(0,Z.jsx)(`h3`,{className:`pr-card-title`,children:e.name}),(0,Z.jsxs)(`div`,{className:`pr-card-price`,children:[`$`,Ln(e.price),(0,Z.jsx)(`small`,{children:`/person`})]}),(0,Z.jsx)(`div`,{className:`pr-card-note`,children:`Private tour · Flexible timing`})]})]},t))}),e===1&&(0,Z.jsx)(`div`,{className:`pr-fade-in`,children:s.map((e,t)=>(0,Z.jsxs)(`div`,{className:`pr-accordion`,children:[(0,Z.jsxs)(`div`,{className:`pr-accordion-header`,onClick:()=>i(t),children:[(0,Z.jsx)(d,{name:e.icon}),(0,Z.jsxs)(`div`,{className:`pr-accordion-title`,children:[(0,Z.jsx)(`h3`,{children:e.type}),(0,Z.jsxs)(`p`,{children:[e.duration,` · Private or group arrangements`]})]}),(0,Z.jsx)(`svg`,{className:`pr-accordion-expand ${n[t]?`open`:``}`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,children:(0,Z.jsx)(`polyline`,{points:`6 9 12 15 18 9`})})]}),n[t]&&(0,Z.jsxs)(`div`,{className:`pr-accordion-content`,children:[(0,Z.jsxs)(`table`,{className:`pr-price-table`,children:[(0,Z.jsx)(`thead`,{children:(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`th`,{children:`Season`}),(0,Z.jsx)(`th`,{children:`2 Persons`}),(0,Z.jsx)(`th`,{children:`4 Persons`}),(0,Z.jsx)(`th`,{children:`6 Persons`})]})}),(0,Z.jsx)(`tbody`,{children:e.seasons.map((e,t)=>(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`td`,{children:(0,Z.jsx)(`span`,{className:`pr-season-badge`,children:e.name})}),(0,Z.jsx)(`td`,{children:(0,Z.jsxs)(`span`,{className:`pr-price-amount`,children:[`$`,Ln(e.prices[2])]})}),(0,Z.jsx)(`td`,{children:(0,Z.jsxs)(`span`,{className:`pr-price-amount`,children:[`$`,Ln(e.prices[4])]})}),(0,Z.jsx)(`td`,{children:(0,Z.jsxs)(`span`,{className:`pr-price-amount`,children:[`$`,Ln(e.prices[6])]})})]},t))})]}),(0,Z.jsx)(`p`,{style:{fontSize:13,color:`var(--gray-500)`,marginTop:20},children:`* Prices are per person sharing. Custom quotes available for different group sizes.`})]})]},t))}),e===2&&(0,Z.jsxs)(`div`,{className:`pr-trek-grid pr-fade-in`,children:[(0,Z.jsxs)(`div`,{className:`pr-trek-card`,children:[(0,Z.jsxs)(`div`,{className:`pr-trek-header`,children:[(0,Z.jsxs)(`h3`,{children:[(0,Z.jsx)(`svg`,{width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`none`,stroke:`var(--gold)`,children:(0,Z.jsx)(`path`,{d:`M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z`})}),`Mount Kilimanjaro`]}),(0,Z.jsx)(`p`,{children:`Africa's highest peak · 5,895m`})]}),(0,Z.jsxs)(`table`,{className:`pr-trek-table`,children:[(0,Z.jsx)(`thead`,{children:(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`th`,{children:`Route`}),(0,Z.jsx)(`th`,{children:`Price`}),(0,Z.jsx)(`th`,{children:`Difficulty`})]})}),(0,Z.jsx)(`tbody`,{children:c.kilimanjaro.map((e,t)=>(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`td`,{children:e.route}),(0,Z.jsx)(`td`,{children:(0,Z.jsxs)(`span`,{className:`pr-price-amount`,children:[`$`,Ln(e.price)]})}),(0,Z.jsx)(`td`,{children:(0,Z.jsx)(`span`,{className:`pr-difficulty`,children:e.difficulty})})]},t))})]})]}),(0,Z.jsxs)(`div`,{className:`pr-trek-card`,children:[(0,Z.jsxs)(`div`,{className:`pr-trek-header`,children:[(0,Z.jsxs)(`h3`,{children:[(0,Z.jsx)(`svg`,{width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`none`,stroke:`var(--gold)`,children:(0,Z.jsx)(`path`,{d:`M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z`})}),`Mount Meru`]}),(0,Z.jsx)(`p`,{children:`Tanzania's second highest · 4,566m`})]}),(0,Z.jsxs)(`table`,{className:`pr-trek-table`,children:[(0,Z.jsx)(`thead`,{children:(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`th`,{children:`Route`}),(0,Z.jsx)(`th`,{children:`Price`})]})}),(0,Z.jsx)(`tbody`,{children:c.meru.map((e,t)=>(0,Z.jsxs)(`tr`,{children:[(0,Z.jsx)(`td`,{children:e.route}),(0,Z.jsx)(`td`,{children:(0,Z.jsxs)(`span`,{className:`pr-price-amount`,children:[`$`,Ln(e.price)]})})]},t))})]})]})]}),e===3&&(0,Z.jsxs)(`div`,{className:`pr-itinerary pr-fade-in`,children:[(0,Z.jsxs)(`div`,{className:`pr-itinerary-header`,children:[(0,Z.jsx)(`h3`,{children:`Sample Journey: 10 Days`}),(0,Z.jsx)(`p`,{children:`Wilderness & Coastal Expedition`})]}),(0,Z.jsx)(`ul`,{className:`pr-itinerary-list`,children:l.map(e=>(0,Z.jsxs)(`li`,{className:`pr-itinerary-item`,children:[(0,Z.jsx)(`div`,{className:`pr-itinerary-day`,children:e.day}),(0,Z.jsx)(f,{name:e.icon}),(0,Z.jsxs)(`div`,{className:`pr-itinerary-content`,children:[(0,Z.jsx)(`h4`,{children:e.title}),(0,Z.jsx)(`p`,{children:e.description})]})]},e.day))})]}),(0,Z.jsx)(`div`,{style:{marginTop:56,textAlign:`center`,padding:`28px 0`,borderTop:`1px solid var(--gray-200)`},children:(0,Z.jsx)(`p`,{style:{fontSize:14,color:`var(--gray-500)`},children:`All rates are per person sharing. Custom itineraries and private arrangements available upon request.`})})]})]})]})},zn=`/assets/elephant-Cf_tsxKX.jpg`,Bn=`/assets/flamingo-DMheUGsd.jpg`,Vn=`/assets/leopard-DjAHnmUZ.jpg`,Hn=`/assets/ngorongoro-creater-Bmiy3bCU.jpg`,Un=`/assets/zebra-C1KA2we9.jpg`,Wn=`/assets/water-fall-CjZQvEVe.jpg`,Gn=`/assets/kilimanjaro-MxIUhdsN.jpg`,Kn=`/assets/meru-B0e4B2io.jpg`,qn=`/assets/oldonyo-D2kUD0oS.jpg`,Jn=`/assets/stone-town-plHUbeh5.jpg`,Yn=`/assets/mnemba-island-Dj_7AntL.jpg`,Xn=`/assets/nungwi-beach-CYWadd1V.jpg`,Zn=`/assets/mafia-island-Cdx0S6Qd.jpg`,Qn=`/assets/chumbe-island-tCWufg4T.jpg`,$n=`/assets/chole-island-DKfQpEU1.jpg`,er=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');
`,tr=`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --white:      #ffffff;
    --white-off:  #fafaf8;
    --gray-50:    #f8f9fa;
    --gray-100:   #f5f5f0;
    --gray-200:   #e8e8e3;
    --gray-300:   #d4d4cc;
    --gray-400:   #b8b8ac;
    --gray-500:   #8c8c7a;
    --gray-600:   #6b6b5c;
    --gray-700:   #4a4a3e;
    --gray-800:   #2d2d24;
    --gray-900:   #1a1a14;
    --gold:       #c9a84c;
    --gold-dark:  #b38f3a;
    --gold-light: #e2c97e;
    --gold-pale:  rgba(201,168,76,.08);
    --serif:      'Cormorant Garamond', Georgia, serif;
    --sans:       'DM Sans', sans-serif;
  }

  .dp-page { font-family: var(--sans); background: var(--white); color: var(--gray-800); }

  /* main container */
  .dp-container {
    max-width: 1400px; margin: 0 auto;
    padding: 0 clamp(20px,5vw,80px) 90px;
  }

  /* section header */
  .dp-section-header {
    margin-bottom: 56px;
    display: flex; align-items: center; gap: 20px;
  }
  .dp-section-icon {
    width: 64px; height: 64px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .dp-section-icon svg { width: 36px; height: 36px; }
  .dp-section-title {
    font-family: var(--serif); font-size: clamp(32px,5vw,48px);
    font-weight: 400; color: var(--gray-800);
  }
  .dp-section-underline {
    width: 70px; height: 3px; background: var(--gold);
    margin-top: 10px;
  }

  /* card grid */
  .dp-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 28px; margin-bottom: 80px;
  }
  @media (max-width: 1200px) { .dp-grid { grid-template-columns: repeat(3, 1fr); } }
  @media (max-width: 900px) { .dp-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .dp-grid { grid-template-columns: 1fr; } }

  .dp-card {
    position: relative; height: 380px; overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: all .3s; cursor: pointer;
  }
  .dp-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .dp-card-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .5s ease;
  }
  .dp-card:hover .dp-card-img { transform: scale(1.08); }
  .dp-card-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
    transition: background .3s;
  }
  .dp-card:hover .dp-card-overlay {
    background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%);
  }
  .dp-card-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 24px; color: white; z-index: 2;
  }
  .dp-card-title {
    font-family: var(--serif); font-size: 22px; font-weight: 600;
    margin-bottom: 10px;
  }
  .dp-card-chip {
    display: inline-flex; align-items: center; gap: 6px;
    background: rgba(255,255,255,0.2); padding: 5px 10px;
    border-radius: 4px; font-size: 12px; margin-bottom: 10px;
  }
  .dp-card-desc {
    font-size: 14px; opacity: 0; transform: translateY(10px);
    transition: all .3s; margin-top: 10px; line-height: 1.5;
  }
  .dp-card:hover .dp-card-desc {
    opacity: 1; transform: translateY(0);
  }
  .dp-card-tags {
    display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px;
  }
  .dp-tag {
    background: rgba(201,168,76,.9); padding: 4px 10px;
    font-size: 11px; border-radius: 4px;
  }

  /* trekking cards */
  .dp-trek-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 32px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .dp-trek-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .dp-trek-grid { grid-template-columns: 1fr; } }

  .dp-trek-card {
    position: relative; height: 460px; overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: all .3s;
  }
  .dp-trek-card:hover { transform: translateY(-8px); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .dp-trek-img {
    width: 100%; height: 100%; object-fit: cover;
    transition: transform .6s;
  }
  .dp-trek-card:hover .dp-trek-img { transform: scale(1.08); }
  .dp-trek-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3));
  }
  .dp-trek-content {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 32px; color: white;
  }
  .dp-trek-title {
    font-family: var(--serif); font-size: 32px; font-weight: 600;
    margin-bottom: 14px;
  }
  .dp-trek-stats {
    display: flex; gap: 14px; margin-bottom: 18px; flex-wrap: wrap;
  }
  .dp-trek-stat {
    background: rgba(201,168,76,.9); padding: 5px 12px;
    font-size: 12px; border-radius: 4px;
  }
  .dp-trek-desc {
    font-size: 15px; opacity: 0.9; line-height: 1.5;
  }

  /* zanzibar cards */
  .dp-zanzibar-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 28px; margin-bottom: 80px;
  }
  @media (max-width: 900px) { .dp-zanzibar-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .dp-zanzibar-grid { grid-template-columns: 1fr; } }

  .dp-zanzibar-card {
    position: relative; height: 340px; overflow: hidden;
    border: 1px solid var(--gray-200);
    transition: all .3s;
  }
  .dp-zanzibar-card:hover { transform: scale(1.02); border-color: var(--gold); box-shadow: 0 16px 32px rgba(0,0,0,0.1); }
  .dp-zanzibar-img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .dp-zanzibar-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.85) 100%);
    opacity: 0; transition: opacity .3s;
    display: flex; flex-direction: column;
    justify-content: center; align-items: center;
    padding: 28px; text-align: center; color: white;
  }
  .dp-zanzibar-card:hover .dp-zanzibar-overlay { opacity: 1; }
  .dp-zanzibar-title {
    font-family: var(--serif); font-size: 26px; font-weight: 600;
    margin-bottom: 10px;
  }
  .dp-zanzibar-type {
    background: var(--gold); padding: 5px 14px;
    font-size: 12px; border-radius: 4px; margin-bottom: 18px;
    display: inline-block;
  }
  .dp-zanzibar-desc {
    font-size: 14px; margin-bottom: 14px; line-height: 1.5;
  }
  .dp-zanzibar-time {
    font-size: 12px; opacity: 0.8;
  }
  .dp-zanzibar-default {
    position: absolute; bottom: 24px; left: 24px; color: white; z-index: 1;
  }
  .dp-zanzibar-default-name {
    font-family: var(--serif); font-size: 24px; font-weight: 600;
  }

  /* stats paper */
  .dp-stats {
    background: var(--gray-50); border: 1px solid var(--gray-200);
    padding: 56px 40px; margin-top: 48px;
  }
  .dp-stats-grid {
    display: grid; grid-template-columns: repeat(4, 1fr);
    gap: 40px; text-align: center;
  }
  @media (max-width: 800px) { .dp-stats-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 480px) { .dp-stats-grid { grid-template-columns: 1fr; } }
  .dp-stat-number {
    font-family: var(--serif); font-size: 56px; font-weight: 400;
    color: var(--gold); margin-bottom: 10px;
  }
  .dp-stat-label {
    font-size: 15px; color: var(--gray-600); text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  /* fade in */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .dp-fade-in { animation: fadeUp .5s ease both; }
`,nr=()=>{let e=[{name:`Serengeti National Park`,image:Vn,location:`Northern Tanzania`,bestTime:`June - Oct`,wildlife:`Big Five, Migration`,description:`Endless plains hosting the greatest wildlife spectacle on earth.`,color:`#FF6B35`},{name:`Ngorongoro Crater`,image:Hn,location:`Northern Tanzania`,bestTime:`Year-round`,wildlife:`Black Rhinos, Lions`,description:`The world's largest inactive volcanic caldera.`,color:`#2E7D32`},{name:`Arusha National Park`,image:Bn,location:`Near Arusha`,bestTime:`Year-round`,wildlife:`Flamingos, Giraffes`,description:`Diverse landscapes from Mount Meru to Momella Lakes.`,color:`#1976D2`},{name:`Lake Manyara`,image:Bn,location:`Northern Tanzania`,bestTime:`June - Feb`,wildlife:`Tree-climbing Lions`,description:`Famous for tree-climbing lions and flamingos.`,color:`#9C27B0`},{name:`Ruaha National Park`,image:zn,location:`Southern Tanzania`,bestTime:`June - Oct`,wildlife:`Elephants, Lions`,description:`Tanzania's largest national park.`,color:`#FF9800`},{name:`Udzungwa National Park`,image:Wn,location:`Southern Tanzania`,bestTime:`June - Oct`,wildlife:`Primates, Birds`,description:`A hiker's paradise with waterfalls.`,color:`#4CAF50`},{name:`Gombe National Park`,image:Wn,location:`Western Tanzania`,bestTime:`June - Oct`,wildlife:`Chimpanzees`,description:`Jane Goodall's famous chimpanzee research site.`,color:`#795548`},{name:`Mikumi National Park`,image:Un,location:`Southern Tanzania`,bestTime:`Year-round`,wildlife:`Zebras, Giraffes`,description:`Excellent game viewing with easy access.`,color:`#2196F3`}],t=[{name:`Mount Kilimanjaro`,image:Gn,height:`5,895m`,difficulty:`Challenging`,duration:`6-8 days`,description:`Africa's highest peak and the world's tallest free-standing mountain.`,color:`#607D8B`},{name:`Mount Meru`,image:Kn,height:`4,566m`,difficulty:`Moderate`,duration:`4-5 days`,description:`Tanzania's second-highest peak with stunning views.`,color:`#8BC34A`},{name:`Mount Oldonyo Lengai`,image:qn,height:`2,962m`,difficulty:`Moderate`,duration:`1-2 days`,description:`The only active volcano in Tanzania.`,color:`#FF5722`}],n=[{name:`Stone Town`,image:Jn,type:`Cultural Heritage`,bestTime:`Year-round`,description:`Historic heart of Zanzibar City, a UNESCO World Heritage site.`,color:`#9E9E9E`},{name:`Mnemba Island`,image:Yn,type:`Private Island`,bestTime:`Year-round`,description:`Exclusive private island surrounded by pristine coral reefs.`,color:`#00BCD4`},{name:`Nungwi Beach`,image:Xn,type:`Beach Paradise`,bestTime:`Year-round`,description:`Zanzibar's most famous beach with white sands.`,color:`#FFC107`},{name:`Mafia Island`,image:Zn,type:`Marine Reserve`,bestTime:`Year-round`,description:`A marine paradise for diving and snorkeling.`,color:`#3F51B5`},{name:`Chumbe Island`,image:Qn,type:`Eco-Reserve`,bestTime:`Year-round`,description:`A private nature reserve with pristine coral reefs.`,color:`#4CAF50`},{name:`Chole Island`,image:$n,type:`Historic Island`,bestTime:`Year-round`,description:`Rich in history and culture, with ancient ruins.`,color:`#FF9800`}];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`style`,{children:[er,tr]}),(0,Z.jsxs)(`div`,{className:`dp-page`,children:[(0,Z.jsx)(Qt,{title:`Discover Tanzania`,subtitle:`From savannah to summit, from coast to coral`,description:`Explore breathtaking national parks, majestic mountains, and pristine beaches — each destination tells a story of wilderness and wonder.`,buttonText:`Start Your Journey`,buttonLink:`#explore`,imageUrl:qt.safari||`data:image/jpeg;base64,`}),(0,Z.jsxs)(`div`,{className:`dp-container`,children:[(0,Z.jsxs)(`div`,{className:`dp-section-header`,children:[(0,Z.jsx)(`div`,{className:`dp-section-icon`,style:{background:`var(--gold-pale)`},children:(0,Z.jsx)(`svg`,{width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`none`,stroke:`var(--gold)`,strokeWidth:`1.5`,children:(0,Z.jsx)(`path`,{d:`M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`})})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h2`,{className:`dp-section-title`,children:`National Parks`}),(0,Z.jsx)(`div`,{className:`dp-section-underline`})]})]}),(0,Z.jsx)(`div`,{className:`dp-grid`,children:e.map((e,t)=>(0,Z.jsxs)(`div`,{className:`dp-card dp-fade-in`,style:{animationDelay:`${t*50}ms`},children:[(0,Z.jsx)(`img`,{src:e.image,alt:e.name,className:`dp-card-img`}),(0,Z.jsx)(`div`,{className:`dp-card-overlay`}),(0,Z.jsxs)(`div`,{className:`dp-card-content`,children:[(0,Z.jsx)(`div`,{className:`dp-card-title`,children:e.name}),(0,Z.jsxs)(`div`,{className:`dp-card-chip`,children:[(0,Z.jsxs)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`white`,strokeWidth:`2`,children:[(0,Z.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]}),e.location]}),(0,Z.jsx)(`div`,{className:`dp-card-desc`,children:e.description}),(0,Z.jsxs)(`div`,{className:`dp-card-tags`,children:[(0,Z.jsx)(`span`,{className:`dp-tag`,children:e.bestTime}),(0,Z.jsx)(`span`,{className:`dp-tag`,children:e.wildlife})]})]})]},e.name))}),(0,Z.jsxs)(`div`,{className:`dp-section-header`,children:[(0,Z.jsx)(`div`,{className:`dp-section-icon`,style:{background:`var(--gold-pale)`},children:(0,Z.jsx)(`svg`,{width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`none`,stroke:`var(--gold)`,strokeWidth:`1.5`,children:(0,Z.jsx)(`path`,{d:`M16 3l-4 4-4-4-4 8 8 8 8-8-4-8z`})})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h2`,{className:`dp-section-title`,children:`Trekking & Hiking`}),(0,Z.jsx)(`div`,{className:`dp-section-underline`})]})]}),(0,Z.jsx)(`div`,{className:`dp-trek-grid`,children:t.map((e,t)=>(0,Z.jsxs)(`div`,{className:`dp-trek-card dp-fade-in`,style:{animationDelay:`${t*80}ms`},children:[(0,Z.jsx)(`img`,{src:e.image,alt:e.name,className:`dp-trek-img`}),(0,Z.jsx)(`div`,{className:`dp-trek-overlay`}),(0,Z.jsxs)(`div`,{className:`dp-trek-content`,children:[(0,Z.jsx)(`div`,{className:`dp-trek-title`,children:e.name}),(0,Z.jsxs)(`div`,{className:`dp-trek-stats`,children:[(0,Z.jsx)(`span`,{className:`dp-trek-stat`,children:e.height}),(0,Z.jsx)(`span`,{className:`dp-trek-stat`,children:e.difficulty}),(0,Z.jsx)(`span`,{className:`dp-trek-stat`,children:e.duration})]}),(0,Z.jsx)(`div`,{className:`dp-trek-desc`,children:e.description})]})]},e.name))}),(0,Z.jsxs)(`div`,{className:`dp-section-header`,children:[(0,Z.jsx)(`div`,{className:`dp-section-icon`,style:{background:`var(--gold-pale)`},children:(0,Z.jsx)(`svg`,{width:`36`,height:`36`,viewBox:`0 0 24 24`,fill:`none`,stroke:`var(--gold)`,strokeWidth:`1.5`,children:(0,Z.jsx)(`path`,{d:`M12 2v20M2 12h20`})})}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`h2`,{className:`dp-section-title`,children:`Explore Zanzibar`}),(0,Z.jsx)(`div`,{className:`dp-section-underline`})]})]}),(0,Z.jsx)(`div`,{className:`dp-zanzibar-grid`,children:n.map((e,t)=>(0,Z.jsxs)(`div`,{className:`dp-zanzibar-card dp-fade-in`,style:{animationDelay:`${t*60}ms`},children:[(0,Z.jsx)(`img`,{src:e.image,alt:e.name,className:`dp-zanzibar-img`}),(0,Z.jsx)(`div`,{className:`dp-zanzibar-default`,children:(0,Z.jsx)(`div`,{className:`dp-zanzibar-default-name`,children:e.name})}),(0,Z.jsxs)(`div`,{className:`dp-zanzibar-overlay`,children:[(0,Z.jsx)(`div`,{className:`dp-zanzibar-title`,children:e.name}),(0,Z.jsx)(`span`,{className:`dp-zanzibar-type`,children:e.type}),(0,Z.jsx)(`div`,{className:`dp-zanzibar-desc`,children:e.description}),(0,Z.jsxs)(`div`,{className:`dp-zanzibar-time`,children:[`Best time: `,e.bestTime]})]})]},e.name))}),(0,Z.jsx)(`div`,{className:`dp-stats`,children:(0,Z.jsxs)(`div`,{className:`dp-stats-grid`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dp-stat-number`,children:`16+`}),(0,Z.jsx)(`div`,{className:`dp-stat-label`,children:`National Parks`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dp-stat-number`,children:`3`}),(0,Z.jsx)(`div`,{className:`dp-stat-label`,children:`Majestic Mountains`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dp-stat-number`,children:`6+`}),(0,Z.jsx)(`div`,{className:`dp-stat-label`,children:`Zanzibar Islands`})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`div`,{className:`dp-stat-number`,children:`1000+`}),(0,Z.jsx)(`div`,{className:`dp-stat-label`,children:`Wildlife Species`})]})]})})]})]})]})},rr=`http://localhost:8000`,ir=()=>{let e=be(),[t,n]=(0,X.useState)(``),[i,a]=(0,X.useState)(``),[o,s]=(0,X.useState)(!1),[c,l]=(0,X.useState)(``),[u,d]=(0,X.useState)(!1);return(0,Z.jsx)(w,{sx:{minHeight:`100vh`,bgcolor:`#f5f5f0`,display:`flex`,alignItems:`center`,py:8},children:(0,Z.jsx)(y,{maxWidth:`sm`,children:(0,Z.jsxs)(z,{elevation:0,sx:{p:{xs:3,md:5},borderRadius:4},children:[(0,Z.jsxs)(w,{sx:{textAlign:`center`,mb:4},children:[(0,Z.jsx)(w,{sx:{width:80,height:80,borderRadius:`50%`,background:`linear-gradient(135deg, #c9a84c 0%, #b38f3a 100%)`,display:`flex`,alignItems:`center`,justifyContent:`center`,mx:`auto`,mb:2},children:(0,Z.jsx)(r,{sx:{fontSize:40,color:`white`}})}),(0,Z.jsx)(I,{variant:`h4`,fontWeight:700,sx:{mb:1},children:`Admin Login`}),(0,Z.jsx)(I,{variant:`body2`,color:`text.secondary`,children:`Enter your credentials to access the dashboard`})]}),c&&(0,Z.jsx)(ot,{severity:`error`,sx:{mb:3},children:c}),(0,Z.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),d(!0),l(``);try{let n=await x.post(`${rr}/api/token/`,{username:t,password:i});n.data.access&&(localStorage.setItem(`adminLoggedIn`,`true`),localStorage.setItem(`adminEmail`,t),localStorage.setItem(`access_token`,n.data.access),localStorage.setItem(`refresh_token`,n.data.refresh),x.defaults.headers.common.Authorization=`Bearer ${n.data.access}`,e(`/admin/dashboard`))}catch{l(`Invalid email or password. Please try again.`)}finally{d(!1)}},children:[(0,Z.jsx)(W,{fullWidth:!0,label:`Email Address`,type:`email`,value:t,onChange:e=>n(e.target.value),required:!0,disabled:u,InputProps:{startAdornment:(0,Z.jsx)(g,{position:`start`,children:(0,Z.jsx)(v,{sx:{color:`#c9a84c`}})})},sx:{mb:3}}),(0,Z.jsx)(W,{fullWidth:!0,label:`Password`,type:o?`text`:`password`,value:i,onChange:e=>a(e.target.value),required:!0,disabled:u,InputProps:{startAdornment:(0,Z.jsx)(g,{position:`start`,children:(0,Z.jsx)(Be,{sx:{color:`#c9a84c`}})}),endAdornment:(0,Z.jsx)(g,{position:`end`,children:(0,Z.jsx)(K,{onClick:()=>s(!o),edge:`end`,children:o?(0,Z.jsx)(ft,{}):(0,Z.jsx)(We,{})})})},sx:{mb:3}}),(0,Z.jsx)(A,{type:`submit`,fullWidth:!0,variant:`contained`,disabled:u,sx:{py:1.5,fontSize:`1rem`,fontWeight:600,bgcolor:`#c9a84c`,"&:hover":{bgcolor:`#b38f3a`}},children:u?`Logging in...`:`Login to Dashboard`})]})]})})})},$=`http://localhost:8000`,ar=()=>{let e=be(),[t,n]=(0,X.useState)([]),[r,i]=(0,X.useState)([]),[a,o]=(0,X.useState)([]),[c,l]=(0,X.useState)([]),[u,d]=(0,X.useState)(!0),[m,ee]=(0,X.useState)(``),[h,te]=(0,X.useState)(null),[ne,ie]=(0,X.useState)(null),[ae,se]=(0,X.useState)(null),[ce,le]=(0,X.useState)(!1),[ue,S]=(0,X.useState)(!1),[de,C]=(0,X.useState)(!1),[pe,he]=(0,X.useState)(!1),[ge,T]=(0,X.useState)(null),[E,ye]=(0,X.useState)(0),[D,xe]=(0,X.useState)({contacts:{total_submissions:0,pending_submissions:0,processed_submissions:0,last_7_days:0,response_rate:0},newsletter:{total:0,active:0,inactive:0},faqs:{total:0,active:0},inquiry_types:{total:0,active:0}}),[Ce,O]=(0,X.useState)(``),[k,Te]=(0,X.useState)({open:!1,message:``,severity:`success`}),[j,M]=(0,X.useState)({question:``,answer:``,category:`general`,order:0,is_active:!0}),[N,P]=(0,X.useState)({name:``,description:``,order:0,is_active:!0});(0,X.useEffect)(()=>{let e=localStorage.getItem(`access_token`);e&&(x.defaults.headers.common.Authorization=`Bearer ${e}`)},[]),(0,X.useEffect)(()=>{localStorage.getItem(`adminLoggedIn`)||e(`/admin/login`)},[e]);let F=async()=>{d(!0);try{let e=await x.get(`${$}/admin/contacts/`);e.data.success?(n(e.data.data),console.log(`Contacts loaded:`,e.data.data)):console.error(`Contacts API error:`,e.data);let t=await x.get(`${$}/admin/stats/`);t.data.success?(xe(t.data.stats),console.log(`Stats loaded:`,t.data.stats)):console.error(`Stats API error:`,t.data);let r=await x.get(`${$}/admin/subscribers/`);r.data.success?(i(r.data.data),console.log(`Subscribers loaded:`,r.data.data)):console.error(`Subscribers API error:`,r.data);let a=await x.get(`${$}/admin/faqs/`);a.data.success?(o(a.data.data),console.log(`FAQs loaded:`,a.data.data)):console.error(`FAQs API error:`,a.data);let s=await x.get(`${$}/admin/inquiry-types/`);s.data.success?(l(s.data.data),console.log(`Inquiry types loaded:`,s.data.data)):console.error(`Inquiry types API error:`,s.data)}catch(e){console.error(`Error loading data:`,e),e.response&&(console.error(`Response status:`,e.response.status),console.error(`Response data:`,e.response.data),e.response.status===401&&ke()),L(`Error loading data: `+(e.response?.data?.error||e.message),`error`)}finally{d(!1)}};(0,X.useEffect)(()=>{F()},[]);let ke=()=>{localStorage.removeItem(`adminLoggedIn`),localStorage.removeItem(`adminEmail`),localStorage.removeItem(`access_token`),localStorage.removeItem(`refresh_token`),delete x.defaults.headers.common.Authorization,e(`/admin/login`)},L=(e,t=`success`)=>{Te({open:!0,message:e,severity:t})},Ae=(e,t)=>{T(e.currentTarget),te(t),O(t.notes||``)},je=()=>{T(null)},Me=e=>{te(e),O(e.notes||``),le(!0),je()},Ne=async()=>{try{let e=await x.post(`${$}/admin/contacts/${h.id}/`,{notes:Ce});e.data.success?(L(`Marked as processed successfully`),F(),le(!1)):L(e.data.error||`Failed to mark as processed`,`error`)}catch(e){console.error(`Error marking as processed:`,e),L(`Error marking as processed`,`error`)}},Ie=e=>{window.location.href=`mailto:${e.email}?subject=Re: Your Inquiry - Nature Pulse Expeditions`,je()},Le=async()=>{try{let e=await x.delete(`${$}/admin/contacts/${h.id}/`);e.data.success?(L(`Deleted successfully`),F(),S(!1),je()):L(e.data.error||`Failed to delete`,`error`)}catch(e){console.error(`Error deleting:`,e),L(`Error deleting`,`error`)}},Re=async()=>{try{let e=await x.post(`${$}/admin/faqs/create/`,j);e.data.success?(L(`FAQ created successfully`),F(),C(!1),M({question:``,answer:``,category:`general`,order:0,is_active:!0})):L(e.data.error||`Failed to create FAQ`,`error`)}catch(e){console.error(`Error creating FAQ:`,e),L(`Error creating FAQ`,`error`)}},ze=async()=>{try{let e=await x.put(`${$}/admin/faqs/${ne.id}/`,j);e.data.success?(L(`FAQ updated successfully`),F(),C(!1),ie(null)):L(e.data.error||`Failed to update FAQ`,`error`)}catch(e){console.error(`Error updating FAQ:`,e),L(`Error updating FAQ`,`error`)}},Be=async e=>{try{let t=await x.delete(`${$}/admin/faqs/${e.id}/`);t.data.success?(L(`FAQ deleted successfully`),F()):L(t.data.error||`Failed to delete FAQ`,`error`)}catch(e){console.error(`Error deleting FAQ:`,e),L(`Error deleting FAQ`,`error`)}},Ve=async()=>{try{let e=await x.post(`${$}/admin/inquiry-types/create/`,N);e.data.success?(L(`Inquiry type created successfully`),F(),he(!1),P({name:``,description:``,order:0,is_active:!0})):L(e.data.error||`Failed to create inquiry type`,`error`)}catch(e){console.error(`Error creating inquiry type:`,e),L(`Error creating inquiry type`,`error`)}},V=async()=>{try{let e=await x.put(`${$}/admin/inquiry-types/${ae.id}/`,N);e.data.success?(L(`Inquiry type updated successfully`),F(),he(!1),se(null)):L(e.data.error||`Failed to update inquiry type`,`error`)}catch(e){console.error(`Error updating inquiry type:`,e),L(`Error updating inquiry type`,`error`)}},Ge=async e=>{try{let t=await x.delete(`${$}/admin/inquiry-types/${e.id}/`);t.data.success?(L(`Inquiry type deleted successfully`),F()):L(t.data.error||`Failed to delete inquiry type`,`error`)}catch(e){console.error(`Error deleting inquiry type:`,e),L(`Error deleting inquiry type`,`error`)}},Ke=e=>e?(0,Z.jsx)(G,{label:`Processed`,size:`small`,sx:{bgcolor:`#e8f5e9`,color:`#2e7d32`}}):(0,Z.jsx)(G,{label:`Pending`,size:`small`,sx:{bgcolor:`#fff3e0`,color:`#ed6c02`}}),U=t.filter(e=>e.full_name?.toLowerCase().includes(m.toLowerCase())||e.email?.toLowerCase().includes(m.toLowerCase())||e.message?.toLowerCase().includes(m.toLowerCase())),Je=a.filter(e=>e.question?.toLowerCase().includes(m.toLowerCase())||e.answer?.toLowerCase().includes(m.toLowerCase())),Ye=c.filter(e=>e.name?.toLowerCase().includes(m.toLowerCase())),Ze=r.filter(e=>e.email?.toLowerCase().includes(m.toLowerCase())||e.first_name?.toLowerCase().includes(m.toLowerCase())),Qe=[{title:`Contact Submissions`,value:D.contacts?.total_submissions||0,icon:(0,Z.jsx)(v,{sx:{fontSize:32}}),color:`#2196F3`,subValue:`${D.contacts?.response_rate||0}% response rate`},{title:`Newsletter Subscribers`,value:D.newsletter?.total||0,icon:(0,Z.jsx)(st,{sx:{fontSize:32}}),color:`#4CAF50`,subValue:`${D.newsletter?.active||0} active`},{title:`FAQs`,value:D.faqs?.total||0,icon:(0,Z.jsx)(De,{sx:{fontSize:32}}),color:`#FF9800`,subValue:`${D.faqs?.active||0} active`},{title:`Inquiry Types`,value:D.inquiry_types?.total||0,icon:(0,Z.jsx)(p,{sx:{fontSize:32}}),color:`#9C27B0`,subValue:`${D.inquiry_types?.active||0} active`}];return(0,Z.jsxs)(w,{sx:{bgcolor:`#f5f5f0`,minHeight:`100vh`},children:[(0,Z.jsx)(z,{sx:{p:2,position:`sticky`,top:0,zIndex:100},children:(0,Z.jsxs)(w,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,Z.jsxs)(w,{sx:{display:`flex`,alignItems:`center`,gap:2},children:[(0,Z.jsx)(_t,{sx:{bgcolor:`#c9a84c`},children:(0,Z.jsx)(Oe,{})}),(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`h6`,children:`Tours & Safaris Admin Dashboard`}),(0,Z.jsx)(I,{variant:`caption`,children:localStorage.getItem(`adminEmail`)})]})]}),(0,Z.jsxs)(w,{sx:{display:`flex`,gap:1},children:[(0,Z.jsx)(A,{variant:`outlined`,onClick:F,startIcon:(0,Z.jsx)(Pe,{}),children:`Refresh`}),(0,Z.jsx)(A,{variant:`outlined`,color:`error`,onClick:ke,startIcon:(0,Z.jsx)(Ue,{}),children:`Logout`})]})]})}),(0,Z.jsxs)(y,{maxWidth:`xl`,sx:{py:4},children:[(0,Z.jsx)(b,{container:!0,spacing:3,sx:{mb:4},children:Qe.map((e,t)=>(0,Z.jsx)(b,{item:!0,xs:12,sm:6,md:3,children:(0,Z.jsx)(Ee,{children:(0,Z.jsx)(oe,{children:(0,Z.jsxs)(w,{sx:{display:`flex`,justifyContent:`space-between`},children:[(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`body2`,color:`text.secondary`,children:e.title}),(0,Z.jsx)(I,{variant:`h3`,sx:{fontSize:`2rem`,fontWeight:700},children:e.value}),(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:e.subValue})]}),(0,Z.jsx)(w,{sx:{color:e.color},children:e.icon})]})})})},t))}),(0,Z.jsx)(z,{sx:{mb:3},children:(0,Z.jsxs)(ht,{value:E,onChange:(e,t)=>ye(t),children:[(0,Z.jsx)(H,{label:`Contact Submissions`,icon:(0,Z.jsx)(v,{}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`FAQs`,icon:(0,Z.jsx)(De,{}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`Inquiry Types`,icon:(0,Z.jsx)(p,{}),iconPosition:`start`}),(0,Z.jsx)(H,{label:`Newsletter Subscribers`,icon:(0,Z.jsx)(st,{}),iconPosition:`start`})]})}),(0,Z.jsx)(z,{sx:{p:2,mb:3},children:(0,Z.jsx)(W,{fullWidth:!0,placeholder:`Search...`,value:m,onChange:e=>ee(e.target.value),InputProps:{startAdornment:(0,Z.jsx)(g,{position:`start`,children:(0,Z.jsx)(Xe,{})})}})}),E===0&&(0,Z.jsxs)(z,{children:[(0,Z.jsxs)(w,{sx:{p:2,borderBottom:`1px solid #e0e0e0`,bgcolor:`#fafaf8`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`h6`,children:`Contact Submissions`}),(0,Z.jsx)(I,{variant:`caption`,children:`From your website contact form`})]}),(0,Z.jsx)(G,{label:`${U.length} total`})]}),u?(0,Z.jsx)(me,{}):(0,Z.jsx)(Fe,{children:(0,Z.jsxs)(tt,{children:[(0,Z.jsx)(xt,{children:(0,Z.jsxs)(R,{children:[(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Name`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Email`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Phone`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Message`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Date`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Status`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Actions`})})]})}),(0,Z.jsx)(lt,{children:U.length===0?(0,Z.jsx)(R,{children:(0,Z.jsx)(B,{colSpan:7,align:`center`,children:(0,Z.jsx)(I,{sx:{py:4,color:`text.secondary`},children:`No contact submissions found`})})}):U.map(e=>(0,Z.jsxs)(R,{sx:{bgcolor:e.is_processed?`inherit`:`#fff8e1`,"&:hover":{bgcolor:`#fafaf8`}},children:[(0,Z.jsx)(B,{children:(0,Z.jsx)(I,{fontWeight:600,children:e.full_name})}),(0,Z.jsx)(B,{children:e.email}),(0,Z.jsx)(B,{children:e.phone}),(0,Z.jsx)(B,{children:(0,Z.jsx)(I,{variant:`body2`,sx:{maxWidth:300},children:e.short_message})}),(0,Z.jsx)(B,{children:new Date(e.submitted_at).toLocaleDateString()}),(0,Z.jsx)(B,{children:Ke(e.is_processed)}),(0,Z.jsx)(B,{children:(0,Z.jsx)(K,{onClick:t=>Ae(t,e),children:(0,Z.jsx)($e,{})})})]},e.id))})]})})]}),E===1&&(0,Z.jsxs)(z,{children:[(0,Z.jsxs)(w,{sx:{p:2,borderBottom:`1px solid #e0e0e0`,bgcolor:`#fafaf8`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`h6`,children:`FAQs`}),(0,Z.jsx)(I,{variant:`caption`,children:`Frequently Asked Questions`})]}),(0,Z.jsx)(A,{variant:`contained`,startIcon:(0,Z.jsx)(qe,{}),onClick:()=>{ie(null),M({question:``,answer:``,category:`general`,order:0,is_active:!0}),C(!0)},children:`Add FAQ`})]}),u?(0,Z.jsx)(me,{}):(0,Z.jsx)(Fe,{children:(0,Z.jsxs)(tt,{children:[(0,Z.jsx)(xt,{children:(0,Z.jsxs)(R,{children:[(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Question`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Category`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Order`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Status`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Actions`})})]})}),(0,Z.jsx)(lt,{children:Je.length===0?(0,Z.jsx)(R,{children:(0,Z.jsx)(B,{colSpan:5,align:`center`,children:(0,Z.jsx)(I,{sx:{py:4,color:`text.secondary`},children:`No FAQs found`})})}):Je.map(e=>(0,Z.jsxs)(R,{children:[(0,Z.jsxs)(B,{children:[(0,Z.jsx)(I,{fontWeight:600,children:e.question}),(0,Z.jsxs)(I,{variant:`caption`,color:`text.secondary`,children:[e.answer?.substring(0,80),`...`]})]}),(0,Z.jsx)(B,{children:(0,Z.jsx)(G,{label:e.category_display||e.category,size:`small`})}),(0,Z.jsx)(B,{children:e.order}),(0,Z.jsx)(B,{children:(0,Z.jsx)(G,{label:e.is_active?`Active`:`Inactive`,size:`small`,sx:{bgcolor:e.is_active?`#e8f5e9`:`#ffebee`,color:e.is_active?`#2e7d32`:`#c62828`}})}),(0,Z.jsxs)(B,{children:[(0,Z.jsx)(K,{onClick:()=>{ie(e),M(e),C(!0)},children:(0,Z.jsx)(Dt,{})}),(0,Z.jsx)(K,{onClick:()=>Be(e),color:`error`,children:(0,Z.jsx)(ve,{})})]})]},e.id))})]})})]}),E===2&&(0,Z.jsxs)(z,{children:[(0,Z.jsxs)(w,{sx:{p:2,borderBottom:`1px solid #e0e0e0`,bgcolor:`#fafaf8`,display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,Z.jsxs)(w,{children:[(0,Z.jsx)(I,{variant:`h6`,children:`Inquiry Types`}),(0,Z.jsx)(I,{variant:`caption`,children:`Categories for contact form inquiries`})]}),(0,Z.jsx)(A,{variant:`contained`,startIcon:(0,Z.jsx)(qe,{}),onClick:()=>{se(null),P({name:``,description:``,order:0,is_active:!0}),he(!0)},children:`Add Inquiry Type`})]}),u?(0,Z.jsx)(me,{}):(0,Z.jsx)(Fe,{children:(0,Z.jsxs)(tt,{children:[(0,Z.jsx)(xt,{children:(0,Z.jsxs)(R,{children:[(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Name`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Description`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Order`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Status`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Actions`})})]})}),(0,Z.jsx)(lt,{children:Ye.length===0?(0,Z.jsx)(R,{children:(0,Z.jsx)(B,{colSpan:5,align:`center`,children:(0,Z.jsx)(I,{sx:{py:4,color:`text.secondary`},children:`No inquiry types found`})})}):Ye.map(e=>(0,Z.jsxs)(R,{children:[(0,Z.jsx)(B,{children:(0,Z.jsx)(I,{fontWeight:600,children:e.name})}),(0,Z.jsx)(B,{children:e.description||`-`}),(0,Z.jsx)(B,{children:e.order}),(0,Z.jsx)(B,{children:(0,Z.jsx)(G,{label:e.is_active?`Active`:`Inactive`,size:`small`,sx:{bgcolor:e.is_active?`#e8f5e9`:`#ffebee`,color:e.is_active?`#2e7d32`:`#c62828`}})}),(0,Z.jsxs)(B,{children:[(0,Z.jsx)(K,{onClick:()=>{se(e),P(e),he(!0)},children:(0,Z.jsx)(Dt,{})}),(0,Z.jsx)(K,{onClick:()=>Ge(e),color:`error`,children:(0,Z.jsx)(ve,{})})]})]},e.id))})]})})]}),E===3&&(0,Z.jsxs)(z,{children:[(0,Z.jsxs)(w,{sx:{p:2,borderBottom:`1px solid #e0e0e0`,bgcolor:`#fafaf8`},children:[(0,Z.jsx)(I,{variant:`h6`,children:`Newsletter Subscribers`}),(0,Z.jsx)(I,{variant:`caption`,children:`People who subscribed to updates`})]}),u?(0,Z.jsx)(me,{}):(0,Z.jsx)(Fe,{children:(0,Z.jsxs)(tt,{children:[(0,Z.jsx)(xt,{children:(0,Z.jsxs)(R,{children:[(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Email`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Name`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Subscribed Date`})}),(0,Z.jsx)(B,{children:(0,Z.jsx)(`strong`,{children:`Status`})})]})}),(0,Z.jsx)(lt,{children:Ze.length===0?(0,Z.jsx)(R,{children:(0,Z.jsx)(B,{colSpan:4,align:`center`,children:(0,Z.jsx)(I,{sx:{py:4,color:`text.secondary`},children:`No subscribers found`})})}):Ze.map(e=>(0,Z.jsxs)(R,{children:[(0,Z.jsx)(B,{children:e.email}),(0,Z.jsx)(B,{children:e.first_name||`-`}),(0,Z.jsx)(B,{children:new Date(e.subscribed_at).toLocaleDateString()}),(0,Z.jsx)(B,{children:(0,Z.jsx)(G,{label:e.is_active?`Active`:`Inactive`,size:`small`,sx:{bgcolor:e.is_active?`#e8f5e9`:`#ffebee`,color:e.is_active?`#2e7d32`:`#c62828`}})})]},e.id))})]})})]})]}),(0,Z.jsxs)(fe,{anchorEl:ge,open:!!ge,onClose:je,children:[(0,Z.jsxs)(f,{onClick:()=>Me(h),children:[(0,Z.jsx)(We,{sx:{mr:1}}),` View Details`]}),(0,Z.jsxs)(f,{onClick:()=>Ie(h),children:[(0,Z.jsx)(v,{sx:{mr:1}}),` Reply via Email`]}),h&&!h.is_processed&&(0,Z.jsxs)(f,{onClick:Ne,children:[(0,Z.jsx)(s,{sx:{mr:1}}),` Mark as Processed`]}),(0,Z.jsxs)(f,{onClick:()=>S(!0),sx:{color:`error.main`},children:[(0,Z.jsx)(ve,{sx:{mr:1}}),` Delete`]})]}),(0,Z.jsx)(_,{open:ce,onClose:()=>le(!1),maxWidth:`md`,fullWidth:!0,children:h&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(re,{children:(0,Z.jsxs)(w,{sx:{display:`flex`,justifyContent:`space-between`,alignItems:`center`},children:[(0,Z.jsx)(I,{variant:`h6`,children:`Inquiry Details`}),Ke(h.is_processed)]})}),(0,Z.jsx)(Se,{dividers:!0,children:(0,Z.jsxs)(b,{container:!0,spacing:2,children:[(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:`Full Name`}),(0,Z.jsx)(I,{variant:`body1`,fontWeight:600,children:h.full_name})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:`Email Address`}),(0,Z.jsx)(I,{variant:`body1`,fontWeight:600,children:h.email})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:`Phone Number`}),(0,Z.jsx)(I,{variant:`body1`,fontWeight:600,children:h.phone})]}),(0,Z.jsxs)(b,{item:!0,xs:12,sm:6,children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:`Submission Date`}),(0,Z.jsx)(I,{variant:`body1`,fontWeight:600,children:new Date(h.submitted_at).toLocaleString()})]}),(0,Z.jsxs)(b,{item:!0,xs:12,children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:`Message`}),(0,Z.jsx)(z,{sx:{p:2,bgcolor:`#fafaf8`,mt:1},children:(0,Z.jsx)(I,{variant:`body1`,sx:{whiteSpace:`pre-wrap`},children:h.message})})]}),(0,Z.jsxs)(b,{item:!0,xs:12,children:[(0,Z.jsx)(I,{variant:`caption`,color:`text.secondary`,children:`Staff Notes`}),(0,Z.jsx)(rt,{minRows:3,style:{width:`100%`,padding:`12px`,marginTop:`8px`,borderRadius:`8px`,border:`1px solid #e0e0e0`,fontFamily:`inherit`,fontSize:`14px`},placeholder:`Add internal notes...`,value:Ce,onChange:e=>O(e.target.value)})]})]})}),(0,Z.jsxs)(we,{children:[(0,Z.jsx)(A,{onClick:()=>le(!1),children:`Close`}),(0,Z.jsx)(A,{variant:`contained`,startIcon:(0,Z.jsx)(v,{}),onClick:()=>Ie(h),children:`Reply via Email`}),!h.is_processed&&(0,Z.jsx)(A,{variant:`contained`,color:`success`,startIcon:(0,Z.jsx)(s,{}),onClick:Ne,children:`Mark as Processed`})]})]})}),(0,Z.jsxs)(_,{open:de,onClose:()=>C(!1),maxWidth:`md`,fullWidth:!0,children:[(0,Z.jsx)(re,{children:ne?`Edit FAQ`:`Add New FAQ`}),(0,Z.jsx)(Se,{children:(0,Z.jsxs)(Y,{spacing:2,sx:{mt:1},children:[(0,Z.jsx)(W,{label:`Question`,fullWidth:!0,value:j.question,onChange:e=>M({...j,question:e.target.value})}),(0,Z.jsx)(W,{label:`Answer`,fullWidth:!0,multiline:!0,rows:4,value:j.answer,onChange:e=>M({...j,answer:e.target.value})}),(0,Z.jsxs)(W,{label:`Category`,fullWidth:!0,select:!0,SelectProps:{native:!0},value:j.category,onChange:e=>M({...j,category:e.target.value}),children:[(0,Z.jsx)(`option`,{value:`safari`,children:`Safari Packages`}),(0,Z.jsx)(`option`,{value:`trekking`,children:`Mountain Trekking`}),(0,Z.jsx)(`option`,{value:`booking`,children:`Booking & Payment`}),(0,Z.jsx)(`option`,{value:`transport`,children:`Transportation`}),(0,Z.jsx)(`option`,{value:`accommodation`,children:`Accommodation`}),(0,Z.jsx)(`option`,{value:`general`,children:`General Questions`})]}),(0,Z.jsx)(W,{label:`Display Order`,type:`number`,fullWidth:!0,value:j.order,onChange:e=>M({...j,order:parseInt(e.target.value)})}),(0,Z.jsx)(_e,{control:(0,Z.jsx)(He,{checked:j.is_active,onChange:e=>M({...j,is_active:e.target.checked})}),label:`Active`})]})}),(0,Z.jsxs)(we,{children:[(0,Z.jsx)(A,{onClick:()=>C(!1),children:`Cancel`}),(0,Z.jsx)(A,{variant:`contained`,onClick:ne?ze:Re,children:ne?`Update`:`Create`})]})]}),(0,Z.jsxs)(_,{open:pe,onClose:()=>he(!1),maxWidth:`md`,fullWidth:!0,children:[(0,Z.jsx)(re,{children:ae?`Edit Inquiry Type`:`Add New Inquiry Type`}),(0,Z.jsx)(Se,{children:(0,Z.jsxs)(Y,{spacing:2,sx:{mt:1},children:[(0,Z.jsx)(W,{label:`Name`,fullWidth:!0,value:N.name,onChange:e=>P({...N,name:e.target.value})}),(0,Z.jsx)(W,{label:`Description`,fullWidth:!0,multiline:!0,rows:3,value:N.description,onChange:e=>P({...N,description:e.target.value})}),(0,Z.jsx)(W,{label:`Display Order`,type:`number`,fullWidth:!0,value:N.order,onChange:e=>P({...N,order:parseInt(e.target.value)})}),(0,Z.jsx)(_e,{control:(0,Z.jsx)(He,{checked:N.is_active,onChange:e=>P({...N,is_active:e.target.checked})}),label:`Active`})]})}),(0,Z.jsxs)(we,{children:[(0,Z.jsx)(A,{onClick:()=>he(!1),children:`Cancel`}),(0,Z.jsx)(A,{variant:`contained`,onClick:ae?V:Ve,children:ae?`Update`:`Create`})]})]}),(0,Z.jsxs)(_,{open:ue,onClose:()=>S(!1),children:[(0,Z.jsx)(re,{children:`Confirm Delete`}),(0,Z.jsx)(Se,{children:(0,Z.jsx)(I,{children:`Are you sure you want to delete this inquiry? This action cannot be undone.`})}),(0,Z.jsxs)(we,{children:[(0,Z.jsx)(A,{onClick:()=>S(!1),children:`Cancel`}),(0,Z.jsx)(A,{onClick:Le,color:`error`,variant:`contained`,children:`Delete`})]})]}),(0,Z.jsx)(Et,{open:k.open,autoHideDuration:6e3,onClose:()=>Te({...k,open:!1}),anchorOrigin:{vertical:`bottom`,horizontal:`right`},children:(0,Z.jsx)(ot,{severity:k.severity,onClose:()=>Te({...k,open:!1}),children:k.message})})]})};function or(){return(0,Z.jsxs)(et,{theme:Pt,children:[(0,Z.jsx)(ct,{}),(0,Z.jsx)(Ae,{children:(0,Z.jsxs)(w,{sx:{display:`flex`,flexDirection:`column`,minHeight:`100vh`},children:[(0,Z.jsx)(Yt,{}),(0,Z.jsx)(w,{component:`main`,sx:{flex:1,pt:0},children:(0,Z.jsxs)(c,{children:[(0,Z.jsx)(T,{path:`/`,element:(0,Z.jsx)(an,{})}),(0,Z.jsx)(T,{path:`/trip/:id`,element:(0,Z.jsx)(Tn,{})}),(0,Z.jsx)(T,{path:`/package-rate`,element:(0,Z.jsx)(Rn,{})}),(0,Z.jsx)(T,{path:`/discover-tanzania`,element:(0,Z.jsx)(nr,{})}),(0,Z.jsx)(T,{path:`/tour-safaris`,element:(0,Z.jsx)(mn,{})}),(0,Z.jsx)(T,{path:`/contact`,element:(0,Z.jsx)(_n,{})}),(0,Z.jsx)(T,{path:`/about`,element:(0,Z.jsx)(An,{})}),(0,Z.jsx)(T,{path:`/why-choose-us`,element:(0,Z.jsx)(Pn,{})}),(0,Z.jsx)(T,{element:(0,Z.jsx)(Dn,{})}),(0,Z.jsx)(T,{path:`/admin/login`,element:(0,Z.jsx)(ir,{})}),`//`,(0,Z.jsx)(T,{path:`/admin/dashboard`,element:(0,Z.jsx)(ar,{})})]})}),(0,Z.jsx)(Zt,{}),(0,Z.jsx)(Dn,{})]})})]})}Nt.createRoot(document.getElementById(`root`)).render((0,Z.jsx)(X.StrictMode,{children:(0,Z.jsx)(or,{})}));