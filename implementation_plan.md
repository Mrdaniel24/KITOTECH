# Mpango wa Kufanya Tovuti ya Kitotech Kuwa ya Kifaa cha Mkononi (Mobile Responsive)

Huu ni mpango wa kina wa kurekebisha tovuti yote ya **Kitotech Design System** ili iweze kuonyesha muonekano mzuri na unaofaa kwenye simu za mkononi na tablet (mobile responsiveness), badala ya kuwa na muundo wa kompyuta (desktop-only) pekee.

## Mapendekezo ya Uboreshaji (Proposed Changes)

Marekebisho makuu yatafanyika kwenye faili za **CSS** na **React JSX** zifuatazo ili kuongeza media queries na tabia za kuitikia vifaa tofauti:

---

### 1. Navigeshoni (Navigation & Mobile Menu)

Sasa hivi navbar haina menu ya simu (hamburger menu), na viungo (links) na vitufe vya CTA vinajipanga kwa mstari mrefu, jambo linalofanya viharibike kwenye skrini ndogo.

#### [MODIFY] [Nav.jsx](file:///c:/project/Kitotech%20Design%20System/Nav.jsx)
- Tutaongeza state ya React ya `isOpen` (kufungua/kufunga menu ya simu).
- Tutaongeza kitufe cha hamburger (`.menu-toggle`) chenye micro-animations nzuri za kufungua/kufunga.
- Tutaongeza madirisha na class za `.mobile-open` pale menu inapofunguliwa.

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- Tutaongeza media queries za `@media (max-width: 960px)` na `@media (max-width: 640px)`.
- Kwenye simu, tutaficha viungo vya kawaida vya usawa na kuonyesha kitufe cha hamburger.
- Menu ya simu itakapofunguka, itaonyesha jopo maridadi la kuteleza chini (slide-down panel) lenye rangi za giza za kuvutia, uhuishaji mwororo (smooth animation), glassmorphism (`backdrop-filter: blur`), na viungo vikiwa vimepangwa kwa wima na nafasi ya kutosha.
- Tutapunguza saizi ya Announcement Bar (`.announce`) kwenye simu ili kuzuia maandishi kurefuka kupita kiasi.

---

### 2. Mpangilio Mkuu na Vizuizi (Containers & Page Heros)

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- **Containers**: Tutapunguza padding za pande zote za `.container` kutoka `32px` hadi `16px` kwenye simu ili kuongeza nafasi ya maudhui.
- **Page Hero**: Kwenye kurasa za ndani (about, solutions, products, n.k.), `.page-hero` itarekebishwa ili `min-height` ipungue na saizi ya fonti clamp zionekane vizuri. Pia diagonal wedge (`::before`) itaondolewa au kurekebishwa ili isifunike maandishi kwenye skrini nyembamba.
- **CTA Strip**: `.cta-strip-inner` itabadilishwa kuwa `flex-direction: column` kwenye simu ili maandishi na vitufe vijipange kwa wima na kuvutia.
- **Hikvision Banner (`.hik-banner`)**: Tutaifanya iwe na mpangilio wa safu wima na kuficha mstari wa mgawanyiko (`.hik-divider`) kwenye simu.

---

### 3. Footer na Gridi (Footer & Content Grids)

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- **Footer**: Gridi ya footer (`.footer .cols`) itabadilishwa kutoka nguzo 4 (`1.3fr 1fr 1fr 1fr`) hadi nguzo 2 kwenye tablet, na nguzo 1 ya wima kwenye simu za mkononi. Hii itazuia maandishi kuingiliana.
- **Contact Page Grid (`.contact-grid`)**: Sasa hivi fomu na maelezo ya mawasiliano vimekaa pembeni mwa kila mmoja. Kwenye skrini za chini ya `960px`, tutavifanya vijipange wima (safu 1) ili kila kimoja kichukue upana mzima.

---

### 4. Floaters na Jopo la AI Chat

#### [MODIFY] [styles.css](file:///c:/project/Kitotech%20Design%20System/styles.css)
- Kwenye simu ndogo, `.ai-panel` (jopo la mazungumzo ya AI) itarekebishwa upana wake kuwa `calc(100vw - 32px)` na urefu wake uwe mdogo zaidi ili usipite mipaka ya skrini na iwe rahisi kuitumia.

---

## Mpango wa Uthibitishaji (Verification Plan)

Tutahakikisha kuwa kila ukurasa unaonekana vizuri kwenye kompyuta na simu.

### Uthibitishaji wa Mwongozo (Manual Verification)
1. Kufungua `index.html`, `about.html`, `products.html`, `solutions.html`, na `contact.html` kwenye kivinjari.
2. Kupunguza upana wa kivinjari ili kuiga skrini za Simu (mf. iPhone, Samsung) na Tablet.
3. Kujaribu kubonyeza kitufe cha hamburger cha menu ya simu ili kuona ikiwa inafunguka na kufungana kwa usahihi.
4. Kuhakikisha kuwa hakuna maandishi yoyote yanayofunikwa, kuingiliana, au kuvuja nje ya skrini (no horizontal scrollbars).
