/* ═════════ داده و تنظیمات مشترک ═════════ */
const CFG={depositPct:10,commBuyer:1,commSeller:1,settleHours:24,firstPayHours:2,holdMinutes:60,openHour:9,closeHour:18,wrongLimit:3};

const MODELS=['تیگو ۸ پرو — IE','تیگو ۸ پرو — Excellence','تیگو ۷ پرو','آریزو ۶ — Excellence','آریزو ۶ GT','آریزو ۸','اکستریم VX','اکستریم TXL','ام‌وی‌ام X۵۵ پرو','ام‌وی‌ام X۳۳'];
const COLORS=['مشکی','سفید','خاکستری','نقره‌ای','آبی'];
const BRANCHES=[
 {id:'vnk',name:'شعبه ونک — تهران',city:'تهران',deals:4,fails:0,wrong:0,fresh:100,settle:100,active:true},
 {id:'qom',name:'نمایندگی قم — مرکزی',city:'قم',deals:2,fails:1,wrong:0,fresh:95,settle:100,active:true},
 {id:'tbz',name:'نمایندگی تبریز',city:'تبریز',deals:1,fails:0,wrong:0,fresh:88,settle:80,active:true},
 {id:'shz',name:'شعبه شیراز',city:'شیراز',deals:0,fails:2,wrong:2,fresh:60,settle:0,active:true},
 {id:'krj',name:'نمایندگی کرج',city:'کرج',deals:3,fails:0,wrong:0,fresh:97,settle:100,active:true},
 {id:'yzd',name:'نمایندگی یزد',city:'یزد',deals:2,fails:0,wrong:1,fresh:82,settle:100,active:true}
];
/* موجودی — هر رکورد متعلق به یک شعبه */
let INV=[
 {id:'TG-۴۵۲۱',br:'qom',model:'تیگو ۸ پرو — IE',color:'مشکی',year:'۱۴۰۳',vin:'NAT•••۴۵۲۱',price:1550000000,type:'خودرو',body:'سالم — بدون رنگ',docs:'کامل',days:8,st:'net'},
 {id:'TG-۴۵۸۸',br:'krj',model:'تیگو ۸ پرو — Excellence',color:'مشکی',year:'۱۴۰۳',vin:'NAT•••۴۵۸۸',price:1685000000,type:'خودرو',body:'سالم',docs:'کامل',days:5,st:'net'},
 {id:'HV-۱۰۹۲',br:'krj',model:'تیگو ۸ پرو — حواله',color:'—',year:'۱۴۰۳',vin:'—',price:1410000000,type:'حواله',body:'—',docs:'قرارداد شرکت',days:4,st:'net'},
 {id:'AZ-۹۸۸۱',br:'vnk',model:'آریزو ۸',color:'سفید',year:'۱۴۰۳',vin:'NAT•••۹۸۸۱',price:1920000000,type:'خودرو',body:'سالم',docs:'کامل',days:6,st:'net'},
 {id:'EX-۴۴۰۲',br:'vnk',model:'اکستریم TXL',color:'خاکستری',year:'۱۴۰۳',vin:'NAT•••۴۴۰۲',price:1150000000,type:'خودرو',body:'خش سطحی سپر عقب',docs:'کامل',days:12,st:'net'},
 {id:'X۵-۷۷۱۰',br:'vnk',model:'ام‌وی‌ام X۵۵ پرو',color:'مشکی',year:'۱۴۰۳',vin:'NAT•••۷۷۱۰',price:960000000,type:'خودرو',body:'سالم',docs:'کامل',days:34,st:'net'},
 {id:'TG-۲۲۹۰',br:'vnk',model:'تیگو ۷ پرو',color:'سفید',year:'۱۴۰۳',vin:'NAT•••۲۲۹۰',price:1330000000,type:'خودرو',body:'سالم',docs:'کامل',days:9,st:'lock'},
 {id:'HV-۲۲۱۱',br:'vnk',model:'آریزو ۶ — حواله',color:'—',year:'۱۴۰۳',vin:'—',price:1180000000,type:'حواله',body:'—',docs:'قرارداد شرکت',days:4,st:'net'},
 {id:'AZ-۶۶۰۱',br:'tbz',model:'آریزو ۶ GT',color:'نقره‌ای',year:'۱۴۰۳',vin:'NAT•••۶۶۰۱',price:1490000000,type:'خودرو',body:'سالم',docs:'کامل',days:21,st:'net'},
 {id:'EX-۳۳۱۰',br:'shz',model:'اکستریم VX',color:'سفید',year:'۱۴۰۳',vin:'NAT•••۳۳۱۰',price:1010000000,type:'خودرو',body:'سالم',docs:'کامل',days:15,st:'net'}
];
/* پرونده‌های معامله */
let CASES=[
 {id:1024,item:'TG-۴۵۲۱',model:'تیگو ۸ پرو — IE',color:'مشکی',buyer:'vnk',seller:'qom',cust:'آقای رضایی',price:1550000000,sell:1580000000,
  stage:3,paid:155000000,mins:1439,created:'امروز ۱۰:۴۰',note:''},
 {id:1021,item:'HV-۲۲۱۱',model:'آریزو ۶ — حواله',color:'—',buyer:'yzd',seller:'vnk',cust:'خانم موسوی',price:1180000000,sell:1210000000,
  stage:1,paid:0,mins:42,created:'امروز ۰۹:۵۵',note:''},
 {id:1019,item:'EX-۳۳۱۰',model:'اکستریم VX',color:'سفید',buyer:'yzd',seller:'tbz',cust:'آقای کاظمی',price:1010000000,sell:1040000000,
  stage:5,paid:1010000000,mins:0,created:'۲۹ تیر',note:''},
 {id:998,item:'—',model:'اکستریم VX — سفید',color:'سفید',buyer:'vnk',seller:'krj',cust:'آقای کاظمی',price:985000000,sell:1010000000,
  stage:6,paid:985000000,mins:0,created:'۲۶ تیر',note:''}
];
/* درخواست‌های در انتظار تخصیص (دفتر مرکزی) */
let REQS=[
 {id:5301,model:'تیگو ۸ پرو — IE',color:'مشکی',buyer:'vnk',cust:'آقای رضایی',mins:58,cands:['TG-۴۵۲۱','TG-۴۵۸۸','AZ-۶۶۰۱']},
 {id:5302,model:'ام‌وی‌ام X۵۵ پرو',color:'مشکی',buyer:'krj',cust:'آقای نادری',mins:34,cands:['X۵-۷۷۱۰']},
 {id:5303,model:'آریزو ۸',color:'سفید',buyer:'shz',cust:'خانم احمدی',mins:12,cands:['AZ-۹۸۸۱']}
];
/* فیش‌های در انتظار تأیید */
let PAYS=[
 {id:9001,case:1024,amount:155000000,kind:'بیعانه',branch:'vnk',time:'امروز ۱۱:۰۵',st:'wait'},
 {id:9002,case:1019,amount:1010000000,kind:'تسویه کامل',branch:'yzd',time:'امروز ۰۹:۲۰',st:'wait'}
];
let LOG=[
 ['۱۱:۱۰','بیعانه پرونده #۱۰۲۴ تأیید شد — قیمت قفل شد','عرفان'],
 ['۱۰:۴۰','درخواست جدید ثبت شد — تیگو ۸ مشکی','شعبه ونک'],
 ['۰۹:۵۵','درخواست حواله آریزو ۶ ثبت شد','نمایندگی یزد'],
 ['۰۹:۱۲','موجودی شعبه ونک به‌روزرسانی شد','شعبه ونک'],
 ['دیروز ۱۶:۴۰','پرونده #۱۰۱۹ به مرحله حمل رفت','عرفان']
];
const brName=id=>(BRANCHES.find(b=>b.id===id)||{}).name||'—';
const STAGES=['ثبت درخواست','رزرو زبانی','قفل با بیعانه','تسویه کامل','کارشناسی و بارگیری','در راه','تحویل و بستن پرونده'];
const stagePill=s=>s>=6?'<span class="pill gray">تحویل شد</span>':
  s>=5?'<span class="pill info"><span class="sd"></span>در راه</span>':
  s>=4?'<span class="pill info"><span class="sd"></span>آماده حمل</span>':
  s>=3?'<span class="pill ok"><span class="sd"></span>در حال تسویه</span>':
  s>=2?'<span class="pill ok"><span class="sd"></span>قفل‌شده</span>':
  '<span class="pill warn"><span class="sd"></span>منتظر بیعانه</span>';
const depositOf=p=>Math.round(p*CFG.depositPct/100);
