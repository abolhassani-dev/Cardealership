/* ═════════ آیکن‌ها ═════════ */
const I={
grid:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><rect x="3" y="3" width="7.5" height="7.5" rx="1.8"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.8"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.8"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.8"/></svg>',
search:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>',
car:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M6.5 17V9.5L8 6h8l1.5 3.5V17M6.5 10.5h11"/><circle cx="8.5" cy="17" r="1.4"/><circle cx="15.5" cy="17" r="1.4"/></svg>',
folder:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2.5h8a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"/></svg>',
plus:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
users:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5"/><path d="M16.5 6.2a3.2 3.2 0 0 1 0 6M18 18.6c0-2-1-3.4-2.5-4.2"/></svg>',
chart:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M4 19V5M4 19h16M8 19v-6M12.5 19V9M17 19v-4"/></svg>',
bell:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M18 15v-4a6 6 0 1 0-12 0v4l-1.5 2.5h15L18 15zM10 20a2.5 2.5 0 0 0 4 0"/></svg>',
clock:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/></svg>',
check:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12.5 5.5 5.5L20 7"/></svg>',
x:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
camera:'<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M3 8.5A2 2 0 0 1 5 6.5h2l1.2-2h7.6L17 6.5h2a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5z"/><circle cx="12" cy="13" r="3.3"/></svg>',
doc:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5z"/><path d="M14 3v5h5"/></svg>',
bank:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10h18M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 18h18M12 3l9 5H3l9-5z"/></svg>',
lock:'<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="4.5" y="10" width="15" height="10.5" rx="2.5"/><path d="M8 10V7.5a4 4 0 0 1 8 0V10"/></svg>',
shield:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3l8 3v6c0 4.6-3.2 8.4-8 9.5C7.2 20.4 4 16.6 4 12V6l8-3z"/><path d="m9 12 2 2 4-4"/></svg>',
gear:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/><path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6M18.7 18.7l-1.6-1.6M6.9 6.9 5.3 5.3"/></svg>',
wallet:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M3 7.5A2.5 2.5 0 0 1 5.5 5H18a2 2 0 0 1 2 2v1.5M3 7.5V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5M3 7.5h15.5a2.5 2.5 0 0 1 2.5 2.5v2H17a2 2 0 1 1 0-4"/></svg>',
alert:'<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.9 18a2 2 0 0 0 1.7 3h16.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>',
up:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
down:'<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M18 13l-6 6-6-6"/></svg>',
back:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>',
edit:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.5 19.5 8.5M4 20l4.5-.9L20 7.6a2 2 0 0 0 0-2.8l-.8-.8a2 2 0 0 0-2.8 0L4.9 15.5 4 20z"/></svg>',
trash:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M9.5 7V5h5v2M6 7l1 13h10l1-13M10.5 11v5M13.5 11v5"/></svg>',
phone:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M5 4h4l1.5 4-2 1.5a12 12 0 0 0 6 6L16 13l4 1.5V19a1.5 1.5 0 0 1-1.7 1.5A16.5 16.5 0 0 1 3.5 5.7 1.5 1.5 0 0 1 5 4z"/></svg>',
building:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M4 21V6l7-3 7 3v15M4 21h16M9 21v-4h4v4M8 9h.01M12 9h.01M8 13h.01M12 13h.01M16 9h.01M16 13h.01"/></svg>',
truck:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 16V7a1 1 0 0 1 1-1h10v10M14 9h3.6l2.9 3.2V16M3 16h1.5M9 16h4M20.5 16H22"/><circle cx="6.8" cy="17.5" r="1.7"/><circle cx="16" cy="17.5" r="1.7"/></svg>',
list:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
history:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1M3 4v4.5h4.5M12 7.5V12l3 2"/></svg>'
};
const fa=s=>String(s).replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const money=n=>fa(Number(n).toLocaleString('en-US').replace(/,/g,'٬'));
const uid=(()=>{let n=1200;return()=>++n})();

/* ═════════ ارجاع به تصمیم‌های جلسه ═════════ */
const REFS={
 lock:['قفل فقط با بیعانه','در جلسه تصمیم گرفتید: «بدون بیعانه امکان قفل نداره» و «ملاک اول بیعانه». پس رزرو زبانی فقط نوبت می‌دهد و مالکیت با اولین بیعانهٔ نشسته است.'],
 deposit:['بیعانه ۱۰٪','پاسخ شما به پرسش مبلغ بیعانه: «۱۰ درصد مبلغ کل». روش پرداخت هم فقط ساتنا (واریز آنی) در ساعت بانکی تعیین شد.'],
 satna:['فقط ساتنا','برای بستن فاصله خطرناک بین «اوکی مشتری» و «نشستن پول»، انتخاب کردید: «ساتنا شرط شود و فقط در ساعت بانکی قفل انجام شود».'],
 hidden:['هویت همیشه پنهان','هویت خریدار و فروشنده در هیچ مرحله‌ای برای یکدیگر آشکار نمی‌شود؛ همه هماهنگی‌ها از دفتر مرکزی انجام می‌شود.'],
 settle:['تسویه ۲۴ ساعته','مهلت‌ها: پرداخت اولیه تا ۲ ساعت، تسویه کامل تا ۲۴ ساعت. بدون کامنت و پرداخت، فسخ خودکار و بازگشت بیعانه بدون کسر.'],
 move:['اول تسویه، بعد حرکت','تصمیم شما: «ماشین اول تسویه بعد ارسال». تا تسویه کامل نشود خودرو از پارکینگ فروشنده خارج نمی‌شود.'],
 commit:['ثبت = تعهد فروش','«ثبت موجودی در شبکه امکان رد کردن نداره». خودرویی که ثبت می‌شود باید آماده واگذاری و بدون مشتری قبلی باشد.'],
 comm:['کمیسیون ۱٪ + ۱٪','پاسخ شما: «عرف از هر طرف ۱ درصد» — و چون به نوع خودرو و وضعیت بازار بستگی دارد، در تنظیمات قابل تغییر است.'],
 fixed:['قیمت مقطوع','پاسخ شما درباره تخفیف: «مقطوع». قیمت ثبت‌شده کم نمی‌شود.'],
 hours:['ساعت کاری ۹ تا ۱۸','«۹ صبح تا ۱۸ قابل انجامه ولی ساعت ۱۸ به بعد فقط بررسی میشه انجام نمیشه» — با یک استثنا: خرید قطعی، فوراً به دفتر مرکزی اطلاع داده می‌شود.'],
 wrong:['موجودی غلط','سه بار «گفتید هست، نبود» یعنی تعلیق نمایندگی. مهلت ثبت فروش حضوری هم حداکثر ۱ ساعت است.'],
 supplier:['انتخاب تأمین‌کننده','«اولویت اول ارزان‌ترین، اولویت دوم نزدیک‌ترین» — و تصمیم نهایی با دفتر مرکزی است.'],
 nocust:['بدون تماس با مشتری','شبکه با مشتری نهایی کاری ندارد؛ قرارداد، سند، پلاک و تحویل با خود نمایندگی است.'],
 photos:['حداقل ۵ عکس','«حداقل ۵ تا — ۴ تا از بیرون خودرو، یکی از داخل» + اعلام اجباری هر ایراد ظاهری.'],
 havaleh:['حواله','«مهم‌ترین فعالیت این روزها فروختن حواله‌ست؛ از خود ماشین راحت‌تر فروش می‌رود». انتقال حواله هزینه‌ای ندارد و مدارکش: سخا، شناسنامه، کارت ملی، گواهی امضا.'],
 insurance:['بیمه حمل اجباری','پاسخ شما: بیمه حمل «اجباری» است؛ خودروبر از طرف خریدار و مسئولیت مسیر هم با اوست چون کارشناسی در محل انجام می‌شود.'],
 force:['الزام + پاداش','«الزام مدیریت مجموعه و وابسته کردن پاداش کارکنان به نتایج سیستم» — بخشنامه تنها کافی نیست.'],
 pilot:['هدف دوره آزمایشی','برآورد واقع‌بینانه شما: «۳ ماه اول شاید ۱۰ معامله کلاً انجام شود».']
};

/* ═════════ توست ═════════ */
function toast(msg,kind='ok'){
  let box=document.querySelector('.toasts');
  if(!box){box=document.createElement('div');box.className='toasts';document.body.appendChild(box)}
  const t=document.createElement('div');t.className='toast '+kind;
  t.innerHTML=`<span class="ic">${kind==='dan'?I.alert:kind==='warn'?I.clock:I.check}</span><span>${msg}</span>`;
  box.appendChild(t);
  setTimeout(()=>{t.style.transition='.3s';t.style.opacity='0';t.style.transform='translateY(8px)';setTimeout(()=>t.remove(),320)},3200);
}
/* ═════════ مودال ═════════ */
let __onSave=null;
function modal({title,body,save,saveText='ثبت',wide=false,danger=false}){
  closeModal();
  const m=document.createElement('div');m.className='mask';m.id='mask';
  m.innerHTML=`<div class="modal${wide?' wide':''}" role="dialog" aria-modal="true">
    <div class="mh"><h3>${title}</h3><button class="xbtn" data-close>${I.x}</button></div>
    <div class="mb">${body}</div>
    ${save?`<div class="mf"><button class="btn ${danger?'':'accent'}" id="mSave" ${danger?'style="background:var(--dan)"':''}>${saveText}</button>
      <button class="btn ghost" data-close>انصراف</button></div>`:
      `<div class="mf"><button class="btn ghost" data-close>بستن</button></div>`}
  </div>`;
  document.body.appendChild(m);
  __onSave=save||null;
  m.addEventListener('click',e=>{if(e.target===m||e.target.closest('[data-close]'))closeModal()});
  const s=m.querySelector('#mSave');
  if(s)s.addEventListener('click',()=>{const r=__onSave&&__onSave(m);if(r!==false)closeModal()});
  const f=m.querySelector('input,select,textarea');if(f)setTimeout(()=>f.focus(),60);
}
function closeModal(){document.getElementById('mask')?.remove();__onSave=null}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function val(m,name){return m.querySelector(`[name="${name}"]`)?.value ?? ''}

/* ═════════ اجزای ساخت ═════════ */
function spark(points,color,fill){
  const w=240,h=38,mx=Math.max(...points),mn=Math.min(...points),rg=(mx-mn)||1;
  const pts=points.map((p,i)=>[i*(w/(points.length-1)),h-4-((p-mn)/rg)*(h-12)]);
  const d=pts.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join(' ');
  return `<svg class="spark" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none" aria-hidden="true"><path d="${d} L${w} ${h} L0 ${h} Z" fill="${fill}"/><path d="${d}" fill="none" stroke="${color}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function bars(data,color){
  const mx=Math.max(...data.map(d=>d[1]))||1;
  return `<div style="display:flex;align-items:flex-end;gap:9px;height:120px;padding-top:8px">${data.map(([l,v])=>
    `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px">
      <div class="num xs b" style="color:${color}">${fa(v)}</div>
      <div style="width:100%;background:${color};opacity:.85;border-radius:6px 6px 0 0;height:${Math.max(6,(v/mx)*74)}px"></div>
      <div class="mini">${l}</div>
    </div>`).join('')}</div>`;
}
function ref(k){const r=REFS[k];return r?`<button class="refb" data-ref="${k}" title="${r[0]}">؟</button>`:''}
function topbar(title,crumb,opt={}){
  return `<div class="topbar">
    <div><h2>${title}</h2>${crumb?`<div class="crumb">${crumb}</div>`:''}</div>
    ${opt.search===false?'<span style="margin-inline-start:auto"></span>':`<div class="tsearch">${I.search}<span>${opt.searchText||'جست‌وجوی سریع…'}</span><kbd>Ctrl K</kbd></div>`}
    ${opt.actions||''}
    <button class="iconbtn" data-act="notif">${I.bell}${opt.alert?'<span class="dot"></span>':''}</button>
  </div>`;
}
function sidebar(cfg,active){
  return `<aside class="side">
    <div class="brand"><div class="mk">${I.car}</div><div><b>${cfg.brand}</b><span>${cfg.panel}</span></div></div>
    ${cfg.groups.map(g=>`${g.label?`<div class="navlbl">${g.label}</div>`:''}${g.items.map(([k,t,ic,b,hot])=>
      `<button class="nav" data-goto="${k}" ${k===active?'aria-current="true"':''}>${ic}<span>${t}</span>${b?`<span class="badge${hot?' hot':''} num">${b}</span>`:''}</button>`).join('')}`).join('')}
    <div class="foot"><div class="avatar">${cfg.user[0]}</div>
      <div style="line-height:1.5;min-width:0"><div style="font-size:12.5px;font-weight:700">${cfg.user[1]}</div>
      <div style="font-size:10.5px;color:rgba(255,255,255,.55);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${cfg.user[2]}</div></div></div>
  </aside>`;
}

/* ═════════ تایمر ═════════ */
let __tick=null;
function startTimers(){
  clearInterval(__tick);
  const els=[...document.querySelectorAll('[data-timer]')];
  if(!els.length)return;
  let secs=els.map(el=>parseInt(el.dataset.timer,10)*60);
  const paint=()=>els.forEach((el,i)=>{
    const s=Math.max(0,secs[i]),h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;
    el.textContent=fa(h>0?`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`:`${String(m).padStart(2,'0')}:${String(x).padStart(2,'0')}`);
  });
  paint();__tick=setInterval(()=>{secs=secs.map(s=>Math.max(0,s-1));paint();},1000);
}

/* ═════════ روتر ═════════ */
let CUR=null,__S=null,__ORDER=null,__SIDE=null;
function render(){
  const app=document.getElementById('app'),tabsEl=document.getElementById('tabs');
  const s=__S[CUR];
  const cfg=typeof __SIDE==='function'?__SIDE(s):__SIDE;
  app.innerHTML=`<main class="main">${s.body()}</main>${sidebar(cfg,s.nav||CUR)}`;
  app.querySelector('.content')?.classList.add('fade');
  const w=document.getElementById('whyText'),r=document.getElementById('whyRef');
  if(w)w.textContent=s.why||'';if(r)r.textContent=s.ref||'';
  tabsEl.innerHTML=__ORDER.map((k,i)=>
    `<button class="tab" data-goto="${k}" ${k===CUR?'aria-current="true"':''}><span class="n num">${fa(i+1)}</span>${__S[k].label}</button>`).join('');
  startTimers();
}
function go(k,scroll=true){
  if(!__S[k])return;CUR=k;render();
  if(scroll){const box=document.querySelector('.browser')||document.querySelector('.phone');
    if(box){const y=box.getBoundingClientRect().top+scrollY-80;if(y<scrollY)scrollTo({top:y,behavior:'smooth'})}}
}
function mountRouter(S,ORDER,SIDE,startKey,actions){
  __S=S;__ORDER=ORDER;__SIDE=SIDE;
  document.addEventListener('click',e=>{
    const g=e.target.closest('[data-goto]');
    if(g){go(g.dataset.goto);return}
    const rf=e.target.closest('[data-ref]');
    if(rf){const r=REFS[rf.dataset.ref];if(r)modal({title:'مبنای این قاعده — '+r[0],body:`<p style="margin:0;font-size:13.5px;line-height:2">${r[1]}</p>
      <div class="note lock" style="margin-top:4px">${I.doc}<div>این متن از پاسخ‌های خودتان در پرسشنامه و جلسه تصمیم‌گیری استخراج شده است.</div></div>`});return}
    const t=e.target.closest('.tgl');
    if(t&&!t.dataset.act){t.setAttribute('aria-pressed',t.getAttribute('aria-pressed')==='true'?'false':'true');return}
    const sg=e.target.closest('.seg button');
    if(sg&&!sg.dataset.act){sg.parentElement.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected','false'));sg.setAttribute('aria-selected','true');}
    const c=e.target.closest('.chip[aria-pressed]');
    if(c&&!c.dataset.act){c.parentElement.querySelectorAll('.chip[aria-pressed]').forEach(x=>x.setAttribute('aria-pressed','false'));c.setAttribute('aria-pressed','true');}
    const a=e.target.closest('[data-act]');
    if(a){
      const fn=actions&&actions[a.dataset.act];
      if(fn)fn(a.dataset,a);
      else if(a.dataset.act==='notif')modal({title:'اعلان‌ها',body:notifBody()});
      else toast('این بخش در ماکاپ نمایشی است','warn');
    }
  });
  go(startKey,false);
}
function notifBody(){
  return `<div style="display:flex;flex-direction:column;gap:10px">
   <div class="card" style="display:flex;gap:11px;align-items:flex-start"><span style="color:var(--warn)">${I.clock}</span>
     <div><div class="b sm">مهلت بیعانه رو به پایان است</div><div class="xs muted">پرونده #۱۰۲۱ — حواله آریزو ۶</div></div></div>
   <div class="card" style="display:flex;gap:11px;align-items:flex-start"><span style="color:var(--ok)">${I.check}</span>
     <div><div class="b sm">بیعانه پرونده #۱۰۲۴ تأیید شد</div><div class="xs muted">امروز ۱۱:۱۰ — قیمت قفل شد</div></div></div>
   <div class="card" style="display:flex;gap:11px;align-items:flex-start"><span style="color:var(--accent)">${I.truck}</span>
     <div><div class="b sm">خودروی پرونده #۱۰۱۹ تحویل شد</div><div class="xs muted">دیروز ۱۶:۴۰</div></div></div>
  </div>`;
}
