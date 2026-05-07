// ============================================================
// SPOT FINDER — Temple Data & Logic (Divya Darshan)
// Fully isolated, no dependencies on existing codebase
// ============================================================

const TEMPLES = [
  {id:'tirupati',name:'Sri Venkateswara Swamy',city:'Tirupati',state:'Andhra Pradesh',
   distance:'2.1 km',crowd:'high',wait:'~120 min',popular:true,open:true,nearby:true,
   desc:'One of the most visited holy places in the world, dedicated to Lord Venkateswara.',
   img:'https://lh3.googleusercontent.com/aida-public/AB6AXuBFy1LK-NBxv-XyHVeD6XUl8bbyKEIBP1uvfY9Jj_u_YKA6WImXg6kAVxXc1_3b5aMn9_ZVazkCoVmx1Y_g5cRFJnXUN7ph-qxo7wG1UW7xFoDKOmeBaor0hzIGU6sbCtyZBKJDZ3jCL3v4wvwzyXmywoKvmXLIVXDC_q-ryxC7v1LCJiBGuUT9Mj_kL-1aJ_RDd60LnUnCJpmU7dexBHO4GHoiSou-fO_GfL7W8_Sc_3XjwrBeZodWGyl4XfOrGYTqTMT2DRVaasQ',
   facilities:{parking:'Alipiri Parking Complex — 500 spots',food:'Annadanam Hall (Free Meals)',restroom:'Available at all gates',medical:'TTD Hospital, 0.5 km',accommodation:'TTD Cottages & Choultries'}},
  {id:'krishna',name:'Sri Krishna Temple',city:'Udupi',state:'Karnataka',
   distance:'5.4 km',crowd:'low',wait:'~15 min',popular:true,open:true,nearby:true,
   desc:'Famous 13th-century temple known for its unique window darshan of Lord Krishna.',
   img:'https://lh3.googleusercontent.com/aida-public/AB6AXuArvAEJIieua1W2W6OBsTh4PiLznSFV8J6d_UIoYr7HnxQZvYTX9hoQ1mE8jScWP6gKyw4QscLi_kI52kQLO5fuLWuq3QZC1darXSY_MvJsrE3ur_kKblla1MxCKVDVb4X-npYEeiw6noFibc4TvnAXSCD6iNpuCUoLEh_LIw21xl3kjUTVf6JS38zA0Ql8ILg65OTpznD6jIe3sGmtxEKGx_UUjtmNG7TqXldoXgDTjeZA_Ego4my4ra5HORFljM_tFMngz0an1Js',
   facilities:{parking:'Temple Parking — 200 spots',food:'Udupi Restaurants nearby',restroom:'Inside temple complex',medical:'Udupi Govt Hospital, 1.2 km',accommodation:'Dharmashalas available'}},
  {id:'manjunatha',name:'Sri Manjunatha Swamy',city:'Dharmasthala',state:'Karnataka',
   distance:'12.3 km',crowd:'medium',wait:'~45 min',popular:true,open:true,nearby:false,
   desc:'Ancient Shiva temple famous for its Dharma and free meals for all visitors.',
   img:'https://lh3.googleusercontent.com/aida-public/AB6AXuAOL6rkTmYHAQ9Skas9l2qB79M6aFpfCBLfd7113IPS_qxjV72CZWz04Ejrav73iIyftTCyWYmu5gdMWItmqKsfWSZ9skvunxZO5ekC2xqjWkpLLpeQkHL9mwfTBPDdSZxGoFOHPSpUngPWW57sVsKKKmaK1o0ECmGrOlV_MA9ojaF4Su-FHoiH7SUwvC2BMdLXBhlB3FgAVPwyUS9uAnshGV_bw7tICWQFfFqcrRfthChXBxQVQ3jV5bZdMB2WGDIFCXBmOj-9GbM',
   facilities:{parking:'Main Parking — 800 spots',food:'Annadanam (Free Meals for all)',restroom:'Multiple blocks available',medical:'Manjushree Hospital, 0.3 km',accommodation:'Free Dharmashalas'}},
  {id:'kedarnath',name:'Kedarnath Temple',city:'Kedarnath',state:'Uttarakhand',
   distance:'850 km',crowd:'high',wait:'~4 hrs',popular:true,open:true,nearby:false,
   desc:'One of the 12 Jyotirlingas, nestled in the majestic Himalayan ranges at 3,583m.',
   img:'../updated_dashboard_with_expanded_temples_and_feedback/assets/kedarnath_temple_1775477793792.png',
   facilities:{parking:'Gaurikund Base — 300 spots',food:'Langar & local dhabas',restroom:'At base camp & temple',medical:'ITBP Medical Post',accommodation:'Govt lodges & tents'}},
  {id:'kashi',name:'Sri Kashi Vishwanath',city:'Varanasi',state:'Uttar Pradesh',
   distance:'1,200 km',crowd:'medium',wait:'~90 min',popular:true,open:true,nearby:false,
   desc:'One of the most famous Hindu temples dedicated to Lord Shiva on the Ganges bank.',
   img:'../updated_dashboard_with_expanded_temples_and_feedback/assets/kashi_vishwanath_1775477816762.png',
   facilities:{parking:'Corridor Complex Parking',food:'Temple prasad counters',restroom:'Inside new corridor',medical:'BHU Hospital, 2 km',accommodation:'Hotels & Dharmashalas'}},
  {id:'somnath',name:'Somnath Temple',city:'Somnath',state:'Gujarat',
   distance:'1,400 km',crowd:'low',wait:'~20 min',popular:false,open:true,nearby:false,
   desc:'First among the twelve Jyotirlinga shrines, rebuilt in Chalukya style of architecture.',
   img:'../updated_dashboard_with_expanded_temples_and_feedback/assets/somnath_temple_1775477852544.png',
   facilities:{parking:'Temple Trust Parking — 400 spots',food:'Prasad counter & cafeteria',restroom:'Available at main gate',medical:'Somnath Civil Hospital',accommodation:'Somnath Trust Guest House'}},
  {id:'jagannath',name:'Shree Jagannatha',city:'Puri',state:'Odisha',
   distance:'1,600 km',crowd:'medium',wait:'~60 min',popular:true,open:true,nearby:false,
   desc:'Famous for the annual Rath Yatra, one of the Char Dham pilgrimage sites.',
   img:'../updated_dashboard_with_expanded_temples_and_feedback/assets/jagannath_puri_1775477878442.png',
   facilities:{parking:'Grand Road Parking',food:'Mahaprasad at Ananda Bazaar',restroom:'Inside temple complex',medical:'District HQ Hospital',accommodation:'Niladri Bhakta Niwas'}},
  {id:'golden',name:'Golden Temple (Sripuram)',city:'Vellore',state:'Tamil Nadu',
   distance:'180 km',crowd:'low',wait:'~25 min',popular:false,open:true,nearby:false,
   desc:'Stunning gold-plated temple dedicated to Goddess Lakshmi, a modern architectural marvel.',
   img:'../updated_dashboard_with_expanded_temples_and_feedback/assets/golden_temple_vellore_1775477748793.png',
   facilities:{parking:'Sripuram Parking — 600 spots',food:'Vegetarian canteen inside',restroom:'Multiple restroom blocks',medical:'CMC Vellore, 8 km',accommodation:'Nearby hotels in Vellore'}},
  {id:'meenakshi',name:'Meenakshi Amman Temple',city:'Madurai',state:'Tamil Nadu',
   distance:'460 km',crowd:'medium',wait:'~50 min',popular:true,open:false,nearby:false,
   desc:'Ancient temple with stunning Dravidian architecture and 14 colorful gopurams.',
   img:'../updated_dashboard_with_expanded_temples_and_feedback/assets/meenakshi_amman_1775477771280.png',
   facilities:{parking:'North & South gate parking',food:'Temple prasad & street food',restroom:'Inside temple compound',medical:'Govt Rajaji Hospital, 1 km',accommodation:'Madurai hotels & lodges'}},
  {id:'kukke',name:'Kukke Subramanya',city:'Subramanya',state:'Karnataka',
   distance:'28 km',crowd:'low',wait:'~30 min',popular:false,open:true,nearby:true,
   desc:'Sacred temple of Lord Subramanya, famous for Sarpa Dosha Nivarana rituals.',
   img:'https://lh3.googleusercontent.com/aida-public/AB6AXuAOyo5N-9QsZ4C4VWoV3WcMhxgVXDOFaufABGvwXp1Q5wpIwcIukZzRoKLt2z-DY9Zq4tzf3St9kndypuhwjFsqmKgYqb2lAuWhWTnyR_UqIyIjFhTrpRln4i9LTcGzIH0vLW72CWrEOsWqnty_F8M7BaDREHFC5Z1N1blMqsbomoZaXEPu_NY3Yx1_Oep_PxC80_X0pWYCu0ZTrkzAJVIlWsBzGtcrDNa6DOQdnmiLAsRcgwOvwvaS3jPr2jiWBZX8FCL3jHuXrmw',
   facilities:{parking:'Temple parking — 150 spots',food:'Local eateries',restroom:'At temple entrance',medical:'PHC Subramanya',accommodation:'Temple Dharmashalas'}}
];

// ============================================================
// STATE
// ============================================================
let activeFilter = 'all';
let searchQuery = '';

// ============================================================
// CROWD BADGE HELPERS
// ============================================================
function crowdColor(level) {
  if (level === 'high') return {bg:'bg-red-500/15',text:'text-red-400',dot:'bg-red-400',border:'border-red-500/30'};
  if (level === 'low') return {bg:'bg-emerald-500/15',text:'text-emerald-400',dot:'bg-emerald-400',border:'border-emerald-500/30'};
  return {bg:'bg-amber-500/15',text:'text-amber-400',dot:'bg-amber-400',border:'border-amber-500/30'};
}

function crowdBadge(level) {
  const c = crowdColor(level);
  return `<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${c.bg} ${c.text} border ${c.border}">
    <span class="w-1.5 h-1.5 rounded-full ${c.dot} pulse-dot"></span>${level}</span>`;
}

// ============================================================
// FACILITY ICONS
// ============================================================
const FACILITY_ICONS = {
  parking:'local_parking', food:'restaurant', restroom:'wc',
  medical:'medical_services', accommodation:'hotel'
};
const FACILITY_LABELS = {
  parking:'Parking', food:'Food', restroom:'Restrooms',
  medical:'Medical', accommodation:'Stay'
};

// ============================================================
// RENDER TEMPLE CARDS
// ============================================================
function renderGrid(temples) {
  const grid = document.getElementById('templeGrid');
  const noRes = document.getElementById('noResults');
  document.getElementById('resultCount').textContent = temples.length;

  if (!temples.length) {
    grid.innerHTML = '';
    noRes.classList.remove('hidden');
    return;
  }
  noRes.classList.add('hidden');

  grid.innerHTML = temples.map((t, i) => `
    <div class="bg-dd-card border border-dd-border rounded-2xl overflow-hidden card-hover cursor-pointer fade-in"
         style="animation-delay:${i * 60}ms" onclick="openDetail('${t.id}')">
      <div class="relative h-44 overflow-hidden">
        <img src="${t.img}" alt="${t.name}" class="w-full h-full object-cover transition-transform duration-700 hover:scale-110"/>
        <div class="absolute inset-0 bg-gradient-to-t from-dd-card via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3">${crowdBadge(t.crowd)}</div>
        <div class="absolute top-3 right-3 bg-dd-card/80 backdrop-blur-sm border border-dd-border px-2 py-1 rounded-lg">
          <span class="text-[10px] font-bold text-dd-muted flex items-center gap-1">
            <span class="material-symbols-outlined text-[12px]">schedule</span>${t.wait}</span>
        </div>
        ${t.open ? '' : '<div class="absolute bottom-3 left-3 bg-red-500/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">CLOSED</div>'}
      </div>
      <div class="p-4">
        <h3 class="font-bold text-sm text-dd-text mb-1 truncate">${t.name}</h3>
        <p class="text-[11px] text-dd-muted flex items-center gap-1 mb-2">
          <span class="material-symbols-outlined text-[13px]">location_on</span>${t.city}, ${t.state}</p>
        <p class="text-xs text-dd-muted/70 line-clamp-2 mb-3">${t.desc}</p>
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold text-dd-orange flex items-center gap-1">
            <span class="material-symbols-outlined text-[14px]">directions_walk</span>${t.distance}</span>
          <div class="flex gap-1">
            ${Object.keys(t.facilities).slice(0,3).map(k =>
              `<span class="w-6 h-6 rounded-md bg-dd-border/50 flex items-center justify-center" title="${FACILITY_LABELS[k]}">
                <span class="material-symbols-outlined text-[13px] text-dd-muted">${FACILITY_ICONS[k]}</span></span>`
            ).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// FILTERS
// ============================================================
function getFiltered() {
  let list = [...TEMPLES];
  const q = searchQuery.toLowerCase().trim();
  if (q) list = list.filter(t =>
    t.name.toLowerCase().includes(q) ||
    t.city.toLowerCase().includes(q) ||
    t.state.toLowerCase().includes(q)
  );
  if (activeFilter === 'nearby') list = list.filter(t => t.nearby);
  if (activeFilter === 'low') list = list.filter(t => t.crowd === 'low');
  if (activeFilter === 'popular') list = list.filter(t => t.popular);
  if (activeFilter === 'open') list = list.filter(t => t.open);
  return list;
}

function setFilter(f, btn) {
  activeFilter = f;
  document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(getFiltered());
}

function filterTemples() {
  searchQuery = document.getElementById('searchInput').value;
  renderGrid(getFiltered());
}

// ============================================================
// DETAIL MODAL
// ============================================================
function openDetail(id) {
  const t = TEMPLES.find(x => x.id === id);
  if (!t) return;
  const c = crowdColor(t.crowd);
  const modal = document.getElementById('detailModal');
  const content = document.getElementById('detailContent');

  content.innerHTML = `
    <div class="relative h-56 sm:h-64 overflow-hidden">
      <img src="${t.img}" alt="${t.name}" class="w-full h-full object-cover"/>
      <div class="absolute inset-0 bg-gradient-to-t from-dd-card via-dd-card/30 to-transparent"></div>
      <button onclick="closeDetail()" class="absolute top-4 right-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors">
        <span class="material-symbols-outlined text-white text-[18px]">close</span>
      </button>
      <div class="absolute bottom-4 left-5 right-5">
        <div class="flex items-end justify-between gap-3">
          <div>
            <h2 class="text-2xl font-extrabold text-white mb-1">${t.name}</h2>
            <p class="text-white/70 text-sm flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px]">location_on</span>${t.city}, ${t.state}</p>
          </div>
          ${crowdBadge(t.crowd)}
        </div>
      </div>
    </div>

    <div class="p-5 sm:p-6 space-y-5">
      <!-- Stats Row -->
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-dd-bg rounded-xl p-3 text-center border border-dd-border">
          <span class="material-symbols-outlined text-dd-orange text-xl mb-1 block">directions_walk</span>
          <p class="text-xs font-bold text-dd-text">${t.distance}</p>
          <p class="text-[10px] text-dd-muted">Distance</p>
        </div>
        <div class="bg-dd-bg rounded-xl p-3 text-center border border-dd-border">
          <span class="material-symbols-outlined text-dd-orange text-xl mb-1 block">schedule</span>
          <p class="text-xs font-bold text-dd-text">${t.wait}</p>
          <p class="text-[10px] text-dd-muted">Wait Time</p>
        </div>
        <div class="bg-dd-bg rounded-xl p-3 text-center border border-dd-border">
          <span class="material-symbols-outlined text-xl mb-1 block ${t.open ? 'text-emerald-400' : 'text-red-400'}">${t.open ? 'check_circle' : 'cancel'}</span>
          <p class="text-xs font-bold text-dd-text">${t.open ? 'Open' : 'Closed'}</p>
          <p class="text-[10px] text-dd-muted">Status</p>
        </div>
      </div>

      <!-- Description -->
      <div>
        <p class="text-xs font-bold text-dd-muted uppercase tracking-widest mb-2">About</p>
        <p class="text-sm text-dd-text/80 leading-relaxed">${t.desc}</p>
      </div>

      <!-- Facilities -->
      <div>
        <p class="text-xs font-bold text-dd-muted uppercase tracking-widest mb-3">Nearby Facilities</p>
        <div class="space-y-2">
          ${Object.entries(t.facilities).map(([k,v]) => `
            <div class="facility-chip flex items-center gap-3 p-3 rounded-xl bg-dd-bg border border-dd-border">
              <span class="w-8 h-8 rounded-lg bg-dd-orange/10 flex items-center justify-center shrink-0">
                <span class="material-symbols-outlined text-dd-orange text-[18px]">${FACILITY_ICONS[k]}</span>
              </span>
              <div class="min-w-0">
                <p class="text-xs font-bold text-dd-text">${FACILITY_LABELS[k]}</p>
                <p class="text-[11px] text-dd-muted truncate">${v}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Map Preview -->
      <div class="rounded-xl overflow-hidden border border-dd-border bg-dd-bg relative h-32 flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-br from-dd-orange/5 to-transparent"></div>
        <div class="text-center relative z-10">
          <span class="material-symbols-outlined text-dd-orange text-3xl mb-1 block filled">pin_drop</span>
          <p class="text-[10px] text-dd-muted font-bold">Map Preview</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3">
        <button onclick="alert('Navigation feature coming soon!')" class="flex-1 bg-dd-orange hover:bg-dd-orange/90 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-dd-orange/20 transition-all flex items-center justify-center gap-2 active:scale-[.98]">
          <span class="material-symbols-outlined text-[18px]">navigation</span>Navigate
        </button>
        <button onclick="closeDetail()" class="flex-1 bg-dd-border/50 hover:bg-dd-border text-dd-text py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-[18px]">close</span>Close
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeDetail() {
  document.getElementById('detailModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// Close on Escape
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDetail(); });

// ============================================================
// INIT
// ============================================================
renderGrid(TEMPLES);
</script>
