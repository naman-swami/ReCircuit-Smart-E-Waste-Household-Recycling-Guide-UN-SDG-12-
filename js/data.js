// ReCircuit — data.js
// UN SDG 12 (Responsible Consumption & Production) hackathon dataset
// E-waste sorting, mineral recovery, repair economics & drop-off network

const ITEMS = [
  // ============ CONSUMER TECH ============
  {
    id: 1, code: 'CT-01', name: 'Smartphone',
    aliases: ['mobile phone', 'cell phone', 'iphone', 'android phone', 'handset'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Lithium-ion battery can ignite if punctured; beryllium in connectors.',
    hazardClass: 'text-vermilion', icon: '📱',
    summary: 'The highest-value e-waste per kilogram — one tonne of phones holds more gold than one tonne of gold ore.',
    prepSteps: ['Back up data and sign out of all accounts ( iCloud, Google, WhatsApp ).', 'Remove SIM and SD cards.', 'If the battery is swollen, do NOT puncture — hand to a trained dismantler.', 'Drop at a CPCB-authorized / R2-certified recycler, never general trash.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Pd', 'Ta', 'Sn', 'W', 'REE'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste (Management) Rules 2022 — EPR producer take-back; US: no federal ban, state programs (e.g., CA Cell Phone Recycling Act).',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA — lithium batteries are universal/hazardous waste when discarded'
  },
  {
    id: 2, code: 'CT-02', name: 'Laptop',
    aliases: ['notebook', 'macbook', 'ultrabook', 'chromebook'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Li-ion battery fire risk; mercury in older CCFL backlights.',
    hazardClass: 'text-vermilion', icon: '💻',
    summary: 'Rich in gold-plated connectors and copper; refurbishing one laptop avoids ~300 kg of manufacturing CO2e.',
    prepSteps: ['Wipe the drive ( secure erase ) and deactivate device locks / BIOS passwords.', 'Remove the battery if it is user-serviceable and tape terminals.', 'Consider donating — a 5-year-old laptop is still usable after a RAM/SSD upgrade.', 'Use an R2 or e-Stewards certified recycler.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Pd', 'Ni', 'Sn', 'REE'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022 EPR; US: state e-waste laws ( 20+ states ), R2/e-Stewards certification.',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA universal waste rule for embedded lithium battery'
  },
  {
    id: 3, code: 'CT-03', name: 'Tablet',
    aliases: ['ipad', 'tab', 'slate'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Non-removable Li-ion pouch cells; cracked screens shed glass dust.',
    hazardClass: 'text-vermilion', icon: '📲',
    summary: 'A mid-size device whose glued-in battery demands professional disassembly.',
    prepSteps: ['Factory reset after backing up photos and notes.', 'Disable Find My / activation lock.', 'Keep screen glass intact if possible; bag if shattered.', 'Recycle via take-back program or authorized dismantler.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Sn', 'REE'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste statutes + R2 standard.',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA universal waste ( lithium battery )'
  },
  {
    id: 4, code: 'CT-04', name: 'Smartwatch',
    aliases: ['fitness tracker', 'wearable', 'smart band'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Tiny glued Li-po cell; nickel release on skin-contact casings.',
    hazardClass: 'text-amber-500', icon: '⌚',
    summary: 'Small but dense — wearables are the fastest-growing e-waste stream by unit count.',
    prepSteps: ['Unpair and factory reset to clear health data.', 'Do not attempt battery removal at home.', 'Bundle with phone take-back programs that accept wearables.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'W', 'Ta'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022; US: state universal waste battery rules.',
    cpcbCategory: 'Consumer electronics (Schedule I)',
    epaRule: 'RCRA universal waste rule'
  },
  {
    id: 5, code: 'CT-05', name: 'Wireless Earbuds',
    aliases: ['airpods', 'tws earbuds', 'bluetooth earphones', 'earbuds case'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Ultra-small Li-po cells that shredders cannot detect — fire risk in mixed waste.',
    hazardClass: 'text-vermilion', icon: '🎧',
    summary: 'Nearly unrepairable and nearly unrecyclable — the poster child for right-to-repair design reform.',
    prepSteps: ['Unpair and reset the buds and charging case.', 'Return to manufacturer take-back ( Apple, Samsung, boAt programs accept them ).', 'Never toss in curbside bins — cells ignite in compactor trucks.'],
    criticalMinerals: ['Au', 'Cu', 'Co', 'Li', 'Nd'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: universal waste battery handling.',
    cpcbCategory: 'Consumer electronics / wearables (Schedule I)',
    epaRule: 'RCRA universal waste rule ( embedded lithium )'
  },
  {
    id: 6, code: 'CT-06', name: 'Desktop PC',
    aliases: ['desktop computer', 'tower pc', 'workstation', 'cpu cabinet'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Lead-tin solder; CMOS lithium coin cell; CRT-era units carry leaded glass.',
    hazardClass: 'text-amber-500', icon: '🖥️',
    summary: 'The most repair-friendly device class — RAM, storage and PSU are modular by design.',
    prepSteps: ['Secure-wipe or physically remove the HDD/SSD.', 'Harvest reusable RAM, GPU and drives for refurbishment.', 'Remove the CMOS coin battery before disposal.', 'Deliver whole units to refurbishers first, recyclers second.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Pd', 'Sn', 'Pb', 'Fe', 'Al'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022 EPR; US: state e-waste laws, R2/e-Stewards.',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA — CRTs are hazardous waste; towers universal waste'
  },
  {
    id: 7, code: 'CT-07', name: 'Gaming Console',
    aliases: ['playstation', 'xbox', 'nintendo switch', 'game console'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Internal Li-ion / coin cells; brominated flame retardants in housing.',
    hazardClass: 'text-amber-500', icon: '🎮',
    summary: 'A mid-life console traded in instead of trashed keeps ~90 kg of embedded carbon in circulation.',
    prepSteps: ['Deactivate the console as primary and wipe saved payment data.', 'Remove and keep game discs and accessories for reuse.', 'Use manufacturer trade-in ( Sony / Microsoft / Nintendo take-back ) or certified recycler.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Sn', 'Zn'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste programs + manufacturer take-back.',
    cpcbCategory: 'Consumer electronics for entertainment (Schedule I)',
    epaRule: 'RCRA universal waste ( embedded battery )'
  },
  {
    id: 8, code: 'CT-08', name: 'External HDD / SSD',
    aliases: ['external hard drive', 'portable ssd', 'backup drive', 'pen drive case'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Rare-earth magnets in HDD actuators; encrypted data persists after deletion.',
    hazardClass: 'text-amber-500', icon: '💾',
    summary: 'Highest data-risk item in the bin — shredding certified recyclers destroy platters and recover aluminium.',
    prepSteps: ['Encrypt the drive BEFORE it dies, then wipe — encryption makes recovery impossible.', 'Physically destroy platters if no certified shredder is available.', 'Send to an NAID / R2 certified data-destruction recycler.'],
    criticalMinerals: ['Al', 'Cu', 'Au', 'Nd', 'Dy', 'Co'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022 + IT Act 2000 data rules; US: NIST SP 800-88 media sanitization guidance.',
    cpcbCategory: 'ICT equipment (Schedule I)',
    epaRule: 'RCRA universal waste; NIST 800-88 for data destruction'
  },

  // ============ BATTERIES & POWER ============
  {
    id: 9, code: 'BP-01', name: 'Disposable Vape',
    aliases: ['single-use vape', 'e-cigarette', 'puff bar', ' disposable e-cig'],
    category: 'Batteries & Power', stream: 'hazard',
    hazard: 'A live lithium cell + nicotine residue in one plastic tube — the #1 new fire risk in waste streams.',
    hazardClass: 'text-vermilion', icon: '🚬',
    summary: 'Over 1 million disposables are discarded globally every day, each carrying a reusable Li-ion cell.',
    prepSteps: ['NEVER put in household trash or curbside recycling — fires in trucks and MRFs are common.', 'Fully discharge is NOT required; do not attempt cell removal at home.', 'Take to a battery-specific collection point ( Call2Recycle / hazardous waste facility ).', 'Better: switch to a refillable mod and end the waste stream entirely.'],
    criticalMinerals: ['Li', 'Cu', 'Co', 'Ni', 'Al'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 ( battery embedded ) + COTPA 2003; US: EPA lithium battery guidance; UK: proposed disposable vape ban 2025.',
    cpcbCategory: 'Battery / hazardous component of consumer product',
    epaRule: 'RCRA hazardous waste — reactive lithium cell'
  },
  {
    id: 10, code: 'BP-02', name: 'Rechargeable Vape Mod',
    aliases: ['vape mod', 'refillable vape', 'pod system', 'vape pen'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Removable 18650 cells — high fire risk if terminals short against keys or foil.',
    hazardClass: 'text-vermilion', icon: '🔋',
    summary: 'Refillable devices cut device waste ~95%, but their 18650 cells must retire to battery recycling.',
    prepSteps: ['Remove the battery cell and tape both terminals with non-conductive tape.', 'Never carry loose cells in pockets.', 'Recycle the cell at a battery bin; recycle body as small e-waste.'],
    criticalMinerals: ['Li', 'Co', 'Ni', 'Cu', 'Mn'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: Mercury-Containing and Rechargeable Battery Act ( BATTERY Act ) 1996.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste — batteries ( 40 CFR 273 )'
  },
  {
    id: 11, code: 'BP-03', name: 'E-Bike Battery',
    aliases: ['ev battery pack', 'e-scooter battery', 'pedelec battery', 'lithium pack 48v'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Large-format Li-ion pack — thermal runaway can release toxic HF fumes and burn for hours.',
    hazardClass: 'text-vermilion', icon: '🛵',
    summary: 'One pack carries 1–2 kg of recoverable lithium, nickel and cobalt — urban mining at its best.',
    prepSteps: ['Discharge to ~30% before storage or transport.', 'Tape terminals; never transport a swollen or heat-damaged pack in a car cabin.', 'Return to the vehicle OEM or a licensed large-format battery recycler.', 'Store away from exits and flammables while awaiting drop-off.'],
    criticalMinerals: ['Li', 'Ni', 'Co', 'Mn', 'Cu', 'Al', 'graphite'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022 ( EPR 70% recovery targets ); US: DOT 49 CFR 173.185 transport rules + EPA universal waste.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — EV battery',
    epaRule: 'RCRA universal waste + DOT hazmat transport ( 49 CFR 173.185 )'
  },
  {
    id: 12, code: 'BP-04', name: 'Power Tool Battery',
    aliases: ['drill battery', '18v pack', 'tool battery pack', 'nicd pack'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Older NiCd packs contain toxic cadmium; newer Li-ion packs short-circuit easily.',
    hazardClass: 'text-vermilion', icon: '🔧',
    summary: 'Cadmium from one old NiCd pack can contaminate 6,000 m³ of soil — keep it out of landfills.',
    prepSteps: ['Identify chemistry: NiCd ( labeled Cd ) vs Li-ion.', 'Tape contacts; never store loose packs together.', 'Use brand take-back ( DeWalt, Bosch, Makita drop-offs ) or battery collection points.'],
    criticalMinerals: ['Li', 'Co', 'Ni', 'Cd', 'Cu', 'Fe'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: BATTERY Act 1996 + RBRC/Call2Recycle program.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste — NiCd is hazardous ( cadmium )'
  },
  {
    id: 13, code: 'BP-05', name: 'Li-Ion Power Bank',
    aliases: ['portable charger', 'powerbank', 'battery pack 10000mah', 'usb power bank'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Swollen pouch cells; banned from checked airline baggage for a reason.',
    hazardClass: 'text-amber-500', icon: '🔌',
    summary: 'A dead power bank is still ~30 g of cobalt and lithium — recycle, never bin.',
    prepSteps: ['Discharge fully by powering a bulb or fan until empty.', 'Tape the USB ports and terminals.', 'Deposit at a battery collection bin or retailer take-back.'],
    criticalMinerals: ['Li', 'Co', 'Cu', 'Ni', 'Al'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: BATTERY Act + IATA dangerous goods rules for transport.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste — batteries'
  },
  {
    id: 14, code: 'BP-06', name: 'Coin / Button Batteries',
    aliases: ['button cell', 'cr2032', 'lr44', 'watch battery', 'coin cell'],
    category: 'Batteries & Power', stream: 'hazard',
    hazard: 'Swallowed by children in seconds — burns esophagus; lithium cells ignite in trash.',
    hazardClass: 'text-vermilion', icon: '🪙',
    summary: 'The most commonly landfilled battery — and a leading cause of pediatric battery-ingestion injuries.',
    prepSteps: ['Tape both sides of every cell immediately after removal.', 'Store out of reach of children.', 'Take to any battery collection point or pharmacy take-back bin.'],
    criticalMinerals: ['Li', 'Mn', 'Zn', 'Ag', 'Hg'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: Reese\'s Law 2022 ( child-safe battery compartments ).',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste; Reese\'s Law ( CPSC )'
  },
  {
    id: 15, code: 'BP-07', name: 'AA / AAA Alkaline',
    aliases: ['aa battery', 'aaa battery', 'alkaline cell', 'dry cell'],
    category: 'Batteries & Power', stream: 'household',
    hazard: 'Modern alkalines are low-mercury, but zinc and potassium hydroxide leach in bulk.',
    hazardClass: 'text-emerald-500', icon: '🔋',
    summary: 'Legal in household trash in most US states, but recycling recovers zinc and steel with 10× less impact.',
    prepSteps: ['Check for corrosion — bag leaking cells separately.', 'Tape terminals to prevent shorting.', 'Use battery bins at retailers or municipal hazardous waste days.'],
    criticalMinerals: ['Zn', 'Mn', 'Steel', 'K'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022 ( primary cells included ); US: state-dependent — CA mandates recycling.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II ( primary )',
    epaRule: 'Non-hazardous in most states; universal waste in California'
  },
  {
    id: 16, code: 'BP-08', name: 'Sealed Lead-Acid UPS Battery',
    aliases: ['ups battery', 'sla battery', 'inverter battery', 'car battery 12v'],
    category: 'Batteries & Power', stream: 'hazard',
    hazard: 'Sulfuric acid electrolyte + lead plates — 99% recyclable but acutely toxic if dumped.',
    hazardClass: 'text-vermilion', icon: '⚡',
    summary: 'The most successfully recycled product on Earth (~99% in formal systems) — informal smelting, however, poisons whole neighborhoods.',
    prepSteps: ['Keep terminals upright; tape or cap them.', 'Never crack the casing — acid burns skin.', 'Return to battery dealer ( mandatory core exchange ) or authorized recycler.'],
    criticalMinerals: ['Pb', 'S', 'Sb', 'plastic ( PP )'],
    dataRisk: false,
    complianceLaw: 'India: Battery Waste Management Rules 2022 ( 90%+ recovery mandated ); US: RCRA hazardous waste + state lead-acid laws.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — lead-acid',
    epaRule: 'RCRA hazardous waste ( lead ) — universal waste option 40 CFR 273'
  },

  // ============ LIGHTING & SMALL APPLIANCES ============
  {
    id: 17, code: 'LS-01', name: 'CFL Bulbs & Tubes',
    aliases: ['cfl', 'fluorescent tube', 'energy saver bulb', 'compact fluorescent'],
    category: 'Lighting & Small Appliances', stream: 'hazard',
    hazard: 'Contains 1–5 mg of mercury vapor — broken in a truck or landfill, it volatilizes and bioaccumulates.',
    hazardClass: 'text-vermilion', icon: '💡',
    summary: 'One broken CFL indoors can push mercury above safe air limits — handle as hazardous waste, always.',
    prepSteps: ['Do NOT vacuum a broken CFL — air out the room 15 minutes, then wipe with damp cloth.', 'Store unbroken bulbs in their box or egg carton.', 'Deliver to hazardous waste collection or lamp-specific recycling.'],
    criticalMinerals: ['Hg', 'glass', 'phosphor ( REE )', 'Al', 'Cu'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 ( lamps in Schedule I ) + Mercury Rules; US: EPA universal waste lamps ( UWR ) — crushing banned in most states.',
    cpcbCategory: 'Schedule I — Lamps ( mercury-containing )',
    epaRule: 'RCRA Universal Waste — lamps ( 40 CFR 273.5 )'
  },
  {
    id: 18, code: 'LS-02', name: 'LED Bulbs',
    aliases: ['led light', 'led lamp', 'bulb led 9w', 'smart bulb'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Driver boards contain lead solder; very low toxicity compared to CFLs.',
    hazardClass: 'text-emerald-500', icon: '🔆',
    summary: 'Non-toxic but rarely recycled — the tiny driver board still holds gold and copper worth recovering.',
    prepSteps: ['No special handling needed — intact disposal is safe.', 'Bundle dead bulbs and take to e-waste collection rather than trash.', 'Choose repairable / replaceable-driver designs when buying.'],
    criticalMinerals: ['Au', 'Cu', 'Al', 'Sn', 'Ga', 'REE ( phosphor )'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: state e-waste laws vary — most accept with universal waste.',
    cpcbCategory: 'Schedule I — Lighting equipment',
    epaRule: 'Generally non-hazardous; universal waste in some states'
  },
  {
    id: 19, code: 'LS-03', name: 'Microwave Oven',
    aliases: ['microwave', 'oven microwave', 'kitchen microwave'],
    category: 'Lighting & Small Appliances', stream: 'appliance',
    hazard: 'Internal capacitor holds a lethal charge for days after unplugging; beryllium in magnetron.',
    hazardClass: 'text-vermilion', icon: '🍲',
    summary: 'A repairable appliance — 60% of "dead" microwaves need only a $5 fuse or door switch.',
    prepSteps: ['Unplug and wait 24+ hours before any handling beyond exterior.', 'Do NOT open the casing — the capacitor can kill.', 'Test with a repair shop before scrapping.', 'Recycle as large appliance / WEEE large household equipment.'],
    criticalMinerals: ['Cu', 'Fe', 'Al', 'Steel', 'Be ( magnetron )'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: state appliance recycling + R2 facilities.',
    cpcbCategory: 'Schedule I — Household large appliances ( cat 1/2 )',
    epaRule: 'RCRA solid waste; capacitor may be PCB-regulated in pre-1979 units'
  },
  {
    id: 20, code: 'LS-04', name: 'Hair Dryer',
    aliases: ['blow dryer', 'hairdryer', 'styling dryer'],
    category: 'Lighting & Small Appliances', stream: 'appliance',
    hazard: 'Mica-insulated heating element; low hazard but a motor + copper windings worth recovery.',
    hazardClass: 'text-emerald-500', icon: '💇',
    summary: 'Mostly copper, steel and plastic — a straightforward small-appliance recycling win.',
    prepSteps: ['Cut off the power cord only at a recycler ( cords are high-grade copper ).', 'Check if the heating element or switch is repairable first.', 'Drop at small-appliance / WEEE collection.'],
    criticalMinerals: ['Cu', 'Fe', 'Ni', 'Al'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: municipal small-appliance recycling.',
    cpcbCategory: 'Schedule I — Household appliances',
    epaRule: 'Non-hazardous solid waste; recycle via scrap metal stream'
  },
  {
    id: 21, code: 'LS-05', name: 'Electric Toothbrush',
    aliases: ['electric brush', 'sonicare', 'oral-b electric', 'powered toothbrush'],
    category: 'Lighting & Small Appliances', stream: 'battery',
    hazard: 'Sealed NiMH/Li-ion cell inside waterproof body — hard to remove, easy to landfill wrongly.',
    hazardClass: 'text-amber-500', icon: '🪥',
    summary: 'A waterproof design that defeats recycling — brands like Oral-B now run mail-back programs.',
    prepSteps: ['Use brand take-back or mail-back programs when available.', 'If dismantling, remove the internal cell and tape terminals.', 'Otherwise deposit whole unit at battery/e-waste bin — never trash.'],
    criticalMinerals: ['Li', 'NiMH ( Ni, MH ), Cu', 'Au ( board )'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022; US: BATTERY Act + brand mail-back ( Terracycle/Oral-B ).',
    cpcbCategory: 'Schedule I — Consumer equipment with embedded battery',
    epaRule: 'RCRA universal waste ( embedded rechargeable cell )'
  },
  {
    id: 22, code: 'LS-06', name: 'Drone / RC Toy',
    aliases: ['quadcopter', 'rc car', 'drone', 'remote control toy', 'rc plane'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Li-po pouch cells puncture easily; brushless motors contain strong neodymium magnets.',
    hazardClass: 'text-amber-500', icon: '🛸',
    summary: 'A compact bundle of rare-earth motors, Li-po cells and carbon fiber — valuable if sorted correctly.',
    prepSteps: ['Discharge Li-po fully, then discharge further with a resistor before storage.', 'Tape battery leads; store in a fireproof bag.', 'Remove motors — they are high-value NdFeB scrap.', 'Recycle body as small e-waste, cells at battery point.'],
    criticalMinerals: ['Li', 'Nd', 'Dy', 'Cu', 'Al', 'CFRP'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022 + DGCA drone rules; US: FAA registration + state e-waste laws.',
    cpcbCategory: 'Schedule I — Toys / recreational equipment with electronics',
    epaRule: 'RCRA universal waste ( Li-po battery )'
  },
  {
    id: 23, code: 'LS-07', name: 'Smart Speaker',
    aliases: ['alexa', 'echo dot', 'google home', 'smart speaker', 'voice assistant'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Always-on microphone and cloud-linked account data; internal PSU capacitors.',
    hazardClass: 'text-amber-500', icon: '🔊',
    summary: 'A privacy-sensitive device — deregister it before disposal or your account stays linked to a stranger\'s speaker.',
    prepSteps: ['Deregister the device from your Amazon/Google account and factory reset.', 'Cut power and remove any user-serviceable battery base.', 'Recycle via manufacturer trade-in or e-waste point.'],
    criticalMinerals: ['Au', 'Cu', 'Co', 'Li', 'Al', 'Sn'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022 + DPDP Act 2023 ( data ); US: state e-waste laws + CCPA data rules.',
    cpcbCategory: 'Schedule I — Consumer electronics',
    epaRule: 'RCRA universal waste ( embedded cell in battery models )'
  },
  {
    id: 24, code: 'LS-08', name: 'Solar Garden Light',
    aliases: ['solar light', 'garden solar lamp', 'solar stake light'],
    category: 'Lighting & Small Appliances', stream: 'battery',
    hazard: 'NiMH or small Li-ion cell + thin-film panel; panel glass breaks easily.',
    hazardClass: 'text-emerald-500', icon: '☀️',
    summary: 'Replace the rechargeable cell and most "dead" solar lights work again — a 5-minute circular-economy fix.',
    prepSteps: ['Open the battery compartment — usually a dead AAA NiMH cell, not the panel.', 'Replace cell to test before discarding.', 'Recycle spent cell at battery point; panel body as e-waste.'],
    criticalMinerals: ['NiMH ( Ni ), Si', 'Cu', 'glass', 'Al'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 + Battery Rules 2022; US: state universal waste battery rules.',
    cpcbCategory: 'Schedule I — Lighting + Schedule II battery',
    epaRule: 'RCRA universal waste ( rechargeable cell )'
  },
  {
    id: 25, code: 'LS-09', name: 'Wi-Fi Router',
    aliases: ['router', 'modem', 'wifi router', 'gateway', 'mesh node'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Stores your network credentials and MAC history; brominated plastics.',
    hazardClass: 'text-amber-500', icon: '📶',
    summary: 'Routers log every device that ever joined your network — reset before it leaves your hands.',
    prepSteps: ['Perform a full factory reset ( 30-second reset button hold ).', 'Return to ISP take-back if leased — it will be refurbished.', 'Recycle owned units as small e-waste; antennas are copper-rich.'],
    criticalMinerals: ['Au', 'Cu', 'Al', 'Sn', 'Fe'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste laws; ISP equipment return clauses.',
    cpcbCategory: 'Schedule I — ICT equipment',
    epaRule: 'RCRA solid waste; recycle via R2 facility'
  },
  {
    id: 26, code: 'LS-10', name: 'Printer & Cartridges',
    aliases: ['inkjet printer', 'laser printer', 'toner cartridge', 'ink cartridge', 'hp printer'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Toner dust is a respiratory irritant; residual ink is a mild aquatic toxin.',
    hazardClass: 'text-amber-500', icon: '🖨️',
    summary: 'Cartridges are the most successfully closed-looped e-waste — HP remanufactures over 1 billion units.',
    prepSteps: ['Remove cartridges — they go to separate manufacturer take-back ( HP Planet Partners, Canon ), not general e-waste.', 'Bag toner cartridges to contain dust.', 'Wipe printer memory via service menu ( some store network fax logs ).', 'Recycle printer body as small e-waste.'],
    criticalMinerals: ['Au', 'Cu', 'Fe', 'plastic ( ABS ), toner ( Fe/C polymer )'],
    dataRisk: true,
    complianceLaw: 'India: E-Waste Rules 2022 ( cartridges in Schedule I ); US: state e-waste laws + brand free mail-back.',
    cpcbCategory: 'Schedule I — IT peripherals / consumables',
    epaRule: 'RCRA solid waste; toner handled as irritant dust'
  },
  {
    id: 27, code: 'LS-11', name: 'TV / Monitor',
    aliases: ['television', 'led tv', 'lcd monitor', 'crt tv', 'smart tv'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'LCD backlight mercury ( pre-LED ); CRTs carry up to 4 kg of leaded glass.',
    hazardClass: 'text-vermilion', icon: '📺',
    summary: 'The heaviest household e-waste — a single CRT contains enough lead to classify the whole unit as hazardous waste.',
    prepSteps: ['Identify type: CRT ( deep, heavy ) = leaded glass; LCD = mercury lamps; LED = lower hazard.', 'Never crack a CRT implosion shield or LCD panel.', 'Use retailer haul-away when buying a replacement ( often free ).', 'Deliver to authorized dismantler — CRTs need dedicated glass-to-glass recycling.'],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Pb', 'Hg ( CCFL ), glass', 'Al', 'Sn'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: CRTs are federally hazardous waste — 25+ state landfill bans.',
    cpcbCategory: 'Schedule I — Monitoring / display equipment',
    epaRule: 'RCRA hazardous waste ( lead glass, mercury lamps )'
  },
  {
    id: 28, code: 'LS-12', name: 'Smoke Detector',
    aliases: ['smoke alarm', 'fire alarm', 'co detector', 'ionization smoke detector'],
    category: 'Lighting & Small Appliances', stream: 'hazard',
    hazard: 'Ionization types contain americium-241, a radioactive source — legal in homes, regulated in bulk disposal.',
    hazardClass: 'text-vermilion', icon: '🚨',
    summary: 'The only household item with a radioactive source — return to manufacturer, never landfill.',
    prepSteps: ['Check the back label: "AM-241" or radioactive symbol = ionization type.', 'Remove the 9V/AA battery and recycle it separately.', 'Mail back to the manufacturer ( most accept, per federal guidance ).', 'Limit: most states allow 1 unit in trash, but bulk ( landlords ) must return them.'],
    criticalMinerals: ['Am-241 ( radioactive ), Au', 'Cu', 'Al'],
    dataRisk: false,
    complianceLaw: 'India: AERB radiation source rules + E-Waste Rules 2022; US: NRC 10 CFR 32.26 manufacturer return-back requirement.',
    cpcbCategory: 'Hazardous — radioactive consumer device ( AERB )',
    epaRule: 'NRC-regulated source; USPS return permitted in limited quantity'
  },
  {
    id: 29, code: 'LS-13', name: 'Digital Medical Device',
    aliases: ['glucometer', 'bp monitor', 'pulse oximeter', 'digital thermometer', 'nebulizer'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Mercury in older thermometers and sphygmomanometers; bio-residue on probes.',
    hazardClass: 'text-vermilion', icon: '🩺',
    summary: 'Mercury fever thermometers are banned in many countries — a broken one is a household hazmat event.',
    prepSteps: ['Identify mercury devices ( silver liquid ) — handle as hazardous waste, never vacuum.', 'Wipe probes with disinfectant before disposal.', 'Remove button cells and tape them.', 'Return via pharmacy or medical-equipment take-back programs.'],
    criticalMinerals: ['Hg ( legacy ), Li', 'Au', 'Cu', 'ABS plastic'],
    dataRisk: true,
    complianceLaw: 'India: Mercury-free device mandate ( 2017 ) + Bio-Medical Waste Rules 2016; US: EPA mercury roadmap + state bans.',
    cpcbCategory: 'Schedule I — medical devices ( non-infectious fraction )',
    epaRule: 'RCRA hazardous waste ( mercury ); universal waste in some states'
  },
  {
    id: 30, code: 'LS-14', name: 'Chargers & Cables',
    aliases: ['usb cable', 'phone charger', 'lightning cable', 'power adapter', 'type-c cable', 'wall wart'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Counterfeit chargers lack fuses; copper cords are the single most valuable scrap per gram.',
    hazardClass: 'text-emerald-500', icon: '🧵',
    summary: 'A kg of cables is ~40% copper — the easiest, highest-yield e-waste to recycle.',
    prepSteps: ['Test before tossing — most "broken" chargers are just dirty connectors.', 'Bundle cables together; recyclers pay by weight for copper scrap.', 'Drop at any e-waste bin or scrap dealer; adapters go with small e-waste.', 'Keep one working USB-C charger — the 2022 EU common-charger law ends cable clutter.'],
    criticalMinerals: ['Cu', 'Au ( connectors ), Al', 'PVC', 'Fe'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: state e-waste laws + EU USB-C Directive 2022/2380 ( for EU sales ).',
    cpcbCategory: 'Schedule I — Cables / accessories',
    epaRule: 'RCRA solid waste; high-value copper scrap stream'
  },

  // ============ WISH-CYCLING TRAPS ============
  {
    id: 31, code: 'WC-01', name: 'Greasy Pizza Box',
    aliases: ['pizza box', 'oily cardboard', 'food-soiled box'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'No chemical hazard — the hazard is to the recycling process itself.',
    hazardClass: 'text-amber-500', icon: '🍕',
    summary: 'Grease ruins paper fiber pulping — one oily box can contaminate a whole bale of clean cardboard.',
    prepSteps: ['Tear off clean lid sections — those ARE recyclable.', 'Compost the greasy bottom ( it is a carbon-rich brown ).', 'Trash only if composting is unavailable.'],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: SWM Rules 2016 ( wet/dry segregation ); US: local MRF acceptance rules — contamination fees apply.',
    cpcbCategory: 'Not e-waste — Solid Waste Management Rules 2016',
    epaRule: 'Not regulated — local ordinance contamination standards'
  },
  {
    id: 32, code: 'WC-02', name: 'Rigid Plastic Bottles #1/#2',
    aliases: ['pet bottle', 'water bottle', 'hdpe bottle', 'milk jug', 'soda bottle'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'None — but only if empty, dry and capped correctly ( local rules vary on caps ).',
    hazardClass: 'text-emerald-500', icon: '🥤',
    summary: 'The RIGHT thing to recycle — PET and HDPE have real markets; just empty them first.',
    prepSteps: ['Empty and quick-rinse ( no need to wash obsessively ).', 'Crush to save bin space; reattach cap if your MRF accepts.', 'Labels can stay on — modern optical sorters handle them.'],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: PWM Rules 2022 EPR ( plastic credits ); US: state bottle bills ( 10 states, 5–10¢ deposit ).',
    cpcbCategory: 'Plastic Waste Management Rules 2022 — Category 1 ( rigid )',
    epaRule: 'Not federally regulated; state bottle-deposit laws'
  },
  {
    id: 33, code: 'WC-03', name: 'Aluminum Cans',
    aliases: ['aluminium can', 'soda can', 'beer can', 'al can scrap'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'None — the infinite recyclable.',
    hazardClass: 'text-emerald-500', icon: '🥫',
    summary: 'Recycling one can saves 95% of the energy of making a new one — enough to power a TV for 3 hours.',
    prepSteps: ['Empty and give a quick rinse.', 'Crush lengthwise ( not sideways — sorters read shapes ).', 'Never mix with foil or aerosol cans unless your program allows.'],
    criticalMinerals: ['Al'],
    dataRisk: false,
    complianceLaw: 'India: NMET recycling targets + SWM Rules; US: state bottle bills + Aluminum Association recycling standards.',
    cpcbCategory: 'Metal scrap — SWM Rules 2016 dry stream',
    epaRule: 'Not regulated; commodity scrap ( ISRI specs )'
  },
  {
    id: 34, code: 'WC-04', name: 'Styrofoam EPS',
    aliases: ['styrofoam', 'eps foam', 'polystyrene', 'packing peanuts', 'foam packaging'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Breaks into microplastics that persist for centuries; flame retardant HBCD in older building foam.',
    hazardClass: 'text-amber-500', icon: '🧊',
    summary: '99% air, 1% problem — almost no curbside program takes it, and it shreds into unrecyclable confetti at the MRF.',
    prepSteps: ['Check for a #6 foam drop-off or densifier program ( some retailers accept ).', 'Reuse as packaging or planter drainage.', 'Trash it if no program exists — do NOT curbside it.'],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: PWM Rules 2022 ( multi-layered plastic phase-out ); US: local bans ( NY, MD, CA cities ) + EPA HBCD action.',
    cpcbCategory: 'Plastic Waste Management Rules 2022 — non-recyclable fraction',
    epaRule: 'Not federally regulated; HBCD treated under TSCA'
  },
  {
    id: 35, code: 'WC-05', name: 'Plastic Grocery Film',
    aliases: ['plastic bag', 'grocery bag', 'plastic wrap', 'ldpe film', 'bread bag'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Tangles MRF sorting machinery — the #1 cause of recycling-plant shutdowns.',
    hazardClass: 'text-amber-500', icon: '🛍️',
    summary: 'Recyclable ONLY at store drop-offs — never curbside, where it wraps around sorting rotors.',
    prepSteps: ['Collect clean, dry, stretchy film ( bags, wrap, bubble mailers sans paper ).', 'Take to supermarket film-collection bins ( How2Recycle label ).', 'Better: refuse the bag — India banned single-use film in 2022.'],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: single-use plastic ban ( 2022 ) + PWM Rules EPR; US: store take-back under state plastic recycling laws.',
    cpcbCategory: 'Plastic Waste Management Rules 2022 — banned single-use category',
    epaRule: 'Not federally regulated; state/store take-back programs'
  },
  {
    id: 36, code: 'WC-06', name: 'Thermal Receipts',
    aliases: ['receipt paper', 'thermal paper', 'bpa receipt', 'pos receipt'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Coated with Bisphenol-A ( or BPS ) — absorbs through skin, contaminates recycled paper pulp.',
    hazardClass: 'text-amber-500', icon: '🧾',
    summary: 'BPA receipts are the reason some recycled paper towels test positive for endocrine disruptors — refuse or trash them.',
    prepSteps: ['Refuse the receipt at checkout ( digital option ) — the best move.', 'Trash, do NOT recycle — BPA contaminates paper pulp.', 'Wash hands after handling if pregnant or handling children\'s food.'],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: BIS standards moving to phenol-free paper; US: several states ban BPA receipts ( CT, IL, VT, WA ).',
    cpcbCategory: 'Solid waste — chemical-contaminated paper',
    epaRule: 'TSCA — BPA on the chemicals of concern list'
  }
];

// ============ MINERAL RECOVERY METRICS ============
// Ore intensity: Gold ≈ 333 t ore per kg Au ( 333 kg per gram ); Copper ≈ 200 kg ore per kg Cu.
const MINERAL_METRICS = {
  smartphone: {
    massKg: 0.20, goldG: 0.034, silverG: 0.28, copperG: 15, cobaltG: 6, palladiumG: 0.015,
    virginOreMiningKg: 15.3, virginCarbonKg: 25, recycledCarbonKg: 4, avoidedCarbonKg: 21,
    embodiedManufacturingCo2: 85
  },
  laptop: {
    massKg: 2.2, goldG: 0.10, silverG: 1.2, copperG: 300, cobaltG: 40, palladiumG: 0.05,
    virginOreMiningKg: 95, virginCarbonKg: 120, recycledCarbonKg: 18, avoidedCarbonKg: 102,
    embodiedManufacturingCo2: 300
  },
  tablet: {
    massKg: 0.60, goldG: 0.05, silverG: 0.50, copperG: 60, cobaltG: 15, palladiumG: 0.02,
    virginOreMiningKg: 30, virginCarbonKg: 55, recycledCarbonKg: 8, avoidedCarbonKg: 47,
    embodiedManufacturingCo2: 150
  },
  tv: {
    massKg: 12.0, goldG: 0.60, silverG: 6.0, copperG: 1000, cobaltG: 0, palladiumG: 0.30,
    virginOreMiningKg: 400, virginCarbonKg: 500, recycledCarbonKg: 75, avoidedCarbonKg: 425,
    embodiedManufacturingCo2: 700
  },
  smartwatch: {
    massKg: 0.05, goldG: 0.008, silverG: 0.05, copperG: 5, cobaltG: 2, palladiumG: 0.003,
    virginOreMiningKg: 4.0, virginCarbonKg: 8, recycledCarbonKg: 1.5, avoidedCarbonKg: 6.5,
    embodiedManufacturingCo2: 35
  },
  powerbank: {
    massKg: 0.25, goldG: 0.002, silverG: 0.02, copperG: 20, cobaltG: 25, palladiumG: 0.001,
    virginOreMiningKg: 5.0, virginCarbonKg: 12, recycledCarbonKg: 2, avoidedCarbonKg: 10,
    embodiedManufacturingCo2: 20
  },
  powertool: {
    massKg: 1.8, goldG: 0.01, silverG: 0.10, copperG: 120, cobaltG: 30, palladiumG: 0.005,
    virginOreMiningKg: 28, virginCarbonKg: 60, recycledCarbonKg: 10, avoidedCarbonKg: 50,
    embodiedManufacturingCo2: 90
  },
  cable: {
    massKg: 0.08, goldG: 0.001, silverG: 0.01, copperG: 30, cobaltG: 0, palladiumG: 0,
    virginOreMiningKg: 6.5, virginCarbonKg: 10, recycledCarbonKg: 1.5, avoidedCarbonKg: 8.5,
    embodiedManufacturingCo2: 5
  }
};

// ============ REPAIR VS. REPLACE METRICS ============
const REPAIR_METRICS = {
  smartphone_battery: {
    label: 'Smartphone battery replacement',
    baselineLifespanYears: 2.5, extendedLifespanYears: 4.5,
    mfgEmissionsKg: 85, repairEmissionsKg: 3
  },
  smartphone_screen: {
    label: 'Smartphone screen replacement',
    baselineLifespanYears: 2.5, extendedLifespanYears: 4.0,
    mfgEmissionsKg: 85, repairEmissionsKg: 12
  },
  laptop_battery: {
    label: 'Laptop battery replacement',
    baselineLifespanYears: 4, extendedLifespanYears: 7,
    mfgEmissionsKg: 300, repairEmissionsKg: 8
  },
  laptop_ram_ssd: {
    label: 'Laptop RAM/SSD upgrade',
    baselineLifespanYears: 5, extendedLifespanYears: 9,
    mfgEmissionsKg: 300, repairEmissionsKg: 25
  },
  tablet_battery: {
    label: 'Tablet battery replacement',
    baselineLifespanYears: 3, extendedLifespanYears: 6,
    mfgEmissionsKg: 150, repairEmissionsKg: 10
  },
  tv_backlight: {
    label: 'TV LED backlight repair',
    baselineLifespanYears: 6, extendedLifespanYears: 11,
    mfgEmissionsKg: 700, repairEmissionsKg: 30
  },
  powertool_battery: {
    label: 'Power tool battery rebuild',
    baselineLifespanYears: 4, extendedLifespanYears: 8,
    mfgEmissionsKg: 90, repairEmissionsKg: 6
  }
};

// ============ VERIFIED DROP-OFF NETWORK ============
const DROPOFF_CENTERS = [
  // India — CPCB authorized
  { id: 1, name: 'Namo E-Waste Management ( CPCB Authorized )', city: 'Delhi NCR / Greater Noida', country: 'India',
    type: 'Authorized Dismantler & Recycler', address: 'Plot 8, Ecotech-III, Greater Noida, UP 201306',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'CPCB EPR Registration + ISO 14001', phone: '+91 98110 55555' },
  { id: 2, name: 'Eco Recycling Ltd ( Ecoreco ) — Collection Centre', city: 'Mumbai', country: 'India',
    type: 'CPCB Authorized Recycler', address: 'Plot 27, MIDC, Andheri East, Mumbai 400093',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'CPCB Authorized + R2 ( US partner audits )', phone: '+91 22 6123 4567' },
  { id: 3, name: 'Saahas Zero Waste — E-Waste Collection Hub', city: 'Bengaluru', country: 'India',
    type: 'E-waste Clinic & Collection Point', address: '560099 Koramangala 4th Block, Bengaluru',
    accepts: ['ewaste', 'battery'], certification: 'KSPCB / CPCB Authorized', phone: '+91 80 4168 2289' },
  { id: 4, name: 'Attero Recycling — Consumer Drop-off', city: 'Pune / Roorkee', country: 'India',
    type: 'Authorized Dismantler + Lithium Recycler', address: 'Survey 35, Chakan, Pune 410501',
    accepts: ['ewaste', 'battery', 'hazard'], certification: 'CPCB Authorized + UN e-waste program partner', phone: '+91 120 433 8000' },
  // USA
  { id: 5, name: 'Best Buy Electronics Recycling Kiosk', city: 'San Francisco, CA', country: 'USA',
    type: 'Retail Take-back', address: '1717 17th St ( or any Bay Area Best Buy )',
    accepts: ['ewaste', 'appliance', 'battery'], certification: 'EPA-recognized retail collection; 3-item/day limit', phone: '+1 888 237 8289' },
  { id: 6, name: 'Call2Recycle Battery Drop-off ( NYC Libraries & Retail )', city: 'New York, NY', country: 'USA',
    type: 'Battery Collection Network', address: 'Multiple sites — call2recycle.org/locator',
    accepts: ['battery', 'hazard'], certification: 'EPA-supported, BATTERY Act compliant network', phone: '+1 877 723 1297' },
  { id: 7, name: 'EcoTech Services — e-Stewards Recycler', city: 'Austin, TX', country: 'USA',
    type: 'Certified ITAD Recycler', address: '10431 Menchaca Rd, Austin, TX 78748',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'e-Stewards + R2v3 Certified', phone: '+1 512 291 8000' },
  { id: 8, name: 'InterConnection Chicago — R2 Certified Refurbisher', city: 'Chicago, IL', country: 'USA',
    type: 'Refurbisher + Recycler', address: '3254 W 31st St, Chicago, IL 60623',
    accepts: ['ewaste', 'battery'], certification: 'R2v3 Certified, Microsoft Registered Refurbisher', phone: '+1 206 633 1517' },
  // Global / EU
  { id: 9, name: 'Recycle Your Electricals — Currys WEEE Take-back', city: 'London', country: 'UK',
    type: 'Retailer WEEE Collection', address: 'Any Currys store ( e.g., Tottenham Court Rd )',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'UK WEEE Regulations 2013 compliant', phone: '+44 344 561 1234' },
  {    id: 10, name: 'Elektroaltgeräte-Sammelstelle ( Berlin WEEE Point )', city: 'Berlin', country: 'Germany',
    type: 'Municipal WEEE Collection', address: 'BSR Recyclinghof, Gradestraße 92, 12347 Berlin',
    accepts: ['ewaste', 'battery', 'appliance', 'hazard'], certification: 'EU WEEE Directive 2012/19/EU + ElektroG', phone: '+49 30 7592 4900' },
  { id: 11, name: 'Sony / Municipal Small Appliance Recycling ( 小型家電回収 )', city: 'Tokyo', country: 'Japan',
    type: 'Municipal + Manufacturer Collection', address: 'Minato-ku Clean Center & Sony Store Ginza',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'Japan Home Appliance Recycling Act ( HAR ) + Small Appliance Recycling Act', phone: '+81 3 5434 2000' },
  { id: 12, name: 'EPRA Ontario Drop-off Depot', city: 'Toronto', country: 'Canada',
    type: 'Provincial E-Waste Program', address: 'Multiple depots — recycleelectronics.ca locator',
    accepts: ['ewaste', 'appliance'], certification: 'Ontario WEEE Regulation ( EPR framework, RPRA )', phone: '+1 416 226 2399' }
];

// ============ SDG 12 SCENARIO QUIZ ============
const QUIZ_QUESTIONS = [
  {
    id: 1, scenario: 'Your 3-year-old phone dies. A shop offers ₹2,000 trade-in, or you can replace the battery for ₹1,800 at a repair café. Which choice best serves SDG 12 ( Responsible Consumption & Production )?',
    options: [
      'Trade in immediately — new phones are more energy-efficient',
      'Replace the battery and keep the phone — extending life avoids ~85 kg of manufacturing CO2e',
      'Keep the dead phone in a drawer as a backup forever',
      'Sell it for parts informally to a local scrap dealer'
    ],
    correctIndex: 1,
    explanation: '80% of a phone\'s lifetime carbon is emitted during manufacturing (~85 kg CO2e). A ₹1,800 battery keeps that embodied carbon in service for ~2 more years — the single highest-leverage circular action a consumer can take. Trade-in is still good ( refurbishment ), but only after the device is genuinely at end-of-life.',
    sdgContext: 'SDG 12.2 — sustainable management and efficient use of natural resources; SDG 12.5 — substantially reduce waste through prevention, reduction and reuse.'
  },
  {
    id: 2, scenario: 'You find a drawer of old coin batteries ( CR2032 ), a swollen power bank, and two disposable vapes. Which disposal route is correct?',
    options: [
      'All three go in the regular trash — they are small',
      'Coin cells in trash, power bank and vapes at the electronics store',
      'All three go to a battery-specific collection point ( Call2Recycle / hazardous waste ), terminals taped',
      'Tape them together and drop in the curbside recycling bin'
    ],
    correctIndex: 2,
    explanation: 'Every one of these contains a live lithium cell. In compactor trucks and MRF shredders they short-circuit and ignite — battery fires now cause most recycling-facility shutdowns. Taping terminals prevents shorting; battery collection points route cells to specialized handlers.',
    sdgContext: 'SDG 12.4 — environmentally sound management of chemicals and all wastes throughout their life cycle, to minimize adverse impacts on human health and the environment.'
  },
  {
    id: 3, scenario: 'Your city\'s recycling bin says "paper only." You have a cardboard pizza box — the lid is clean, the bottom is soaked in grease. What do you do?',
    options: [
      'Recycle the whole box — cardboard is cardboard',
      'Trash the whole box to be safe',
      'Recycle the clean lid, compost the greasy bottom',
      'Rinse the greasy bottom with dish soap, then recycle it all'
    ],
    correctIndex: 2,
    explanation: 'Grease is the enemy of paper pulping — oil repels water-based slurry and ruins fiber bonding. One greasy box can downgrade an entire bale. The clean lid is valuable fiber; the greasy base is excellent compost carbon. This is "wish-cycling" awareness: recycling the wrong thing is worse than trashing it.',
    sdgContext: 'SDG 12.5 — reduce waste generation through prevention, reduction, recycling and reuse; correct sorting is the consumer-side half of SDG 12.'
  },
  {
    id: 4, scenario: 'A neighbour is throwing out an old CRT television. Where should it go, and why does it matter legally?',
    options: [
      'Curbside bulk trash — the city will handle it',
      'A certified e-waste recycler — CRTs contain up to 4 kg of leaded glass and are classified hazardous waste',
      'The glass recycling bin since it is mostly glass',
      'Sell it to a kabadiwala / scrap dealer for the copper'
    ],
    correctIndex: 1,
    explanation: 'CRT funnels are 20–30% lead oxide — they are federally hazardous waste in the US and require dedicated glass-to-glass processing in India under E-Waste Rules 2022. Informal dismantling exposes workers and soil to lead; certified dismantlers ( CPCB / R2 / e-Stewards ) manage the glass in closed loops.',
    sdgContext: 'SDG 12.4 — sound management of chemicals and wastes; SDG 12.6 — encourage companies to adopt sustainable practices and integrate sustainability information in their reporting.'
  },
  {
    id: 5, scenario: 'You are upgrading your laptop. Before recycling it, what is the correct data-security sequence?',
    options: [
      'Delete your files and empty the recycle bin — that is enough',
      'Do nothing — recyclers wipe everything automatically',
      'Encrypt the drive first ( ideally before it dies ), then perform a secure wipe or remove/destroy the drive, then recycle',
      'Format the drive using quick format'
    ],
    correctIndex: 2,
    explanation: 'Deleted files remain recoverable; quick format only clears the index. Best practice per NIST SP 800-88: full-disk encryption makes all residual data unreadable, then a secure erase or physical drive removal/shredding finishes the job. Certified recyclers ( R2, NAID ) offer verified destruction — but you should never rely on an unknown handler.',
    sdgContext: 'SDG 12 — responsible consumption includes responsible data stewardship; trust in recycling systems is a precondition for high collection rates.'
  },
  {
    id: 6, scenario: 'India generates ~1.6 million tonnes of e-waste a year, but only ~20% is formally recycled. As a ReCircuit user, which combination of actions creates the most SDG 12 impact?',
    options: [
      'Buy new "eco" gadgets and recycle the old ones',
      'Repair first, buy refurbished second, and route true end-of-life items to CPCB-authorized recyclers',
      'Store everything safely at home so nothing is wasted',
      'Drop e-waste at any scrap dealer — recycling is recycling'
    ],
    correctIndex: 1,
    explanation: 'The waste hierarchy is prevention > reuse > recycle. Repairing avoids ~85–300 kg CO2e per device; refurbished markets formalize reuse; and authorized dismantlers recover gold, cobalt and copper safely — one tonne of phones yields ~340 g of gold versus ~5 g per tonne of mined ore. Informal channels lose metals to low-recovery processes and expose workers to toxins.',
    sdgContext: 'SDG 12.5 — substantially reduce waste through prevention, reduction, recycling and reuse; SDG 12.2 — sustainable use of natural resources; SDG 8.8 — protect labour rights and safe working environments ( linked ).'
  }
];

// Exports for module environments ( optional — file also works as a plain script tag )
if ( typeof module !== 'undefined' && module.exports ) {
  module.exports = { ITEMS, MINERAL_METRICS, REPAIR_METRICS, DROPOFF_CENTERS, QUIZ_QUESTIONS };
}