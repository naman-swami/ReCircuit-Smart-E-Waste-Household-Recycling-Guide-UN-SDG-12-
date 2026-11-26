// ReCircuit v2 — js/data.js
// UN SDG 12 (Responsible Consumption & Production) verified dataset
// 36 items, mineral recovery metrics, repair models, 12 verified hubs & 6 scenario quiz

const ITEMS = [
  // ============ CONSUMER TECH (8) ============
  {
    id: 1, code: 'CT-01', name: 'Smartphone',
    aliases: ['mobile phone', 'cell phone', 'iphone', 'android phone', 'handset'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Li-ion battery puncture fire risk; beryllium in connectors.',
    hazardLevel: 'critical', icon: 'smartphone',
    summary: 'Highest-value e-waste per kilogram — one tonne of phones holds far more gold than one tonne of mined gold ore.',
    prepSteps: [
      'Back up data and sign out of all accounts (iCloud, Google, WhatsApp).',
      'Physically remove SIM and microSD cards.',
      'If the battery is swollen, do NOT puncture — hand to a trained dismantler.',
      'Drop at a CPCB-authorized / R2-certified recycler, never general trash.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Pd', 'Ta', 'Sn', 'W', 'REE'],
    dataRisk: true,
    mineralKey: 'smartphone',
    complianceLaw: 'India: E-Waste (Management) Rules 2022 EPR producer take-back; US: state programs (e.g., CA Cell Phone Recycling Act).',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA — lithium batteries are universal/hazardous waste when discarded'
  },
  {
    id: 2, code: 'CT-02', name: 'Laptop Computer',
    aliases: ['notebook', 'macbook', 'ultrabook', 'chromebook'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Li-ion battery fire risk; mercury in older CCFL backlights.',
    hazardLevel: 'critical', icon: 'laptop',
    summary: 'Rich in gold-plated connectors and copper; refurbishing one laptop avoids ~300 kg of manufacturing CO2e.',
    prepSteps: [
      'Secure-erase the drive and deactivate device locks / BIOS passwords.',
      'Remove the battery if user-serviceable and tape terminals.',
      'Consider upgrading RAM/SSD or donating before recycling.',
      'Use a CPCB-authorized, R2, or e-Stewards certified recycler.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Pd', 'Ni', 'Sn', 'REE'],
    dataRisk: true,
    mineralKey: 'laptop',
    complianceLaw: 'India: E-Waste Rules 2022 EPR; US: state e-waste laws (20+ states), R2/e-Stewards certification.',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA universal waste rule for embedded lithium battery'
  },
  {
    id: 3, code: 'CT-03', name: 'Tablet / iPad',
    aliases: ['ipad', 'tab', 'slate'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Non-removable Li-ion pouch cells; cracked screens shed glass dust.',
    hazardLevel: 'critical', icon: 'tablet',
    summary: 'A mid-size device whose glued-in lithium pouch battery demands professional disassembly.',
    prepSteps: [
      'Factory reset after backing up photos and notes.',
      'Disable Find My / activation lock.',
      'Keep screen glass intact if possible; bag securely if shattered.',
      'Recycle via take-back program or authorized dismantler.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Sn', 'REE'],
    dataRisk: true,
    mineralKey: 'tablet',
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste statutes + R2 standard.',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA universal waste (lithium battery)'
  },
  {
    id: 4, code: 'CT-04', name: 'Smartwatch / Tracker',
    aliases: ['fitness tracker', 'wearable', 'smart band', 'apple watch'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Tiny glued Li-po cell; nickel release on skin-contact casings.',
    hazardLevel: 'caution', icon: 'watch',
    summary: 'Small but dense — wearables are among the fastest-growing e-waste streams by unit count.',
    prepSteps: [
      'Unpair and factory reset to clear health and payment data.',
      'Do not attempt battery removal at home.',
      'Bundle with phone take-back programs that accept wearables.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'W', 'Ta'],
    dataRisk: true,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: E-Waste Rules 2022; US: state universal waste battery rules.',
    cpcbCategory: 'Consumer electronics (Schedule I)',
    epaRule: 'RCRA universal waste rule'
  },
  {
    id: 5, code: 'CT-05', name: 'Wireless Earbuds',
    aliases: ['airpods', 'tws earbuds', 'bluetooth earphones', 'earbuds case'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Ultra-small Li-po cells that shredders cannot detect — fire risk in mixed waste.',
    hazardLevel: 'critical', icon: 'headphones',
    summary: 'Nearly unrepairable and widely mis-sorted — tiny lithium cells ignite easily in compactor trucks.',
    prepSteps: [
      'Unpair and reset the buds and charging case.',
      'Keep buds inside the charging case so contacts stay insulated.',
      'Return to manufacturer take-back or certified e-waste / battery bin — never curbside trash.'
    ],
    criticalMinerals: ['Au', 'Cu', 'Co', 'Li', 'Nd'],
    dataRisk: false,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: universal waste battery handling.',
    cpcbCategory: 'Consumer electronics / wearables (Schedule I)',
    epaRule: 'RCRA universal waste rule (embedded lithium)'
  },
  {
    id: 6, code: 'CT-06', name: 'Desktop PC Tower',
    aliases: ['desktop computer', 'tower pc', 'workstation', 'cpu cabinet'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Lead-tin solder; CMOS lithium coin cell; older units carry leaded solder.',
    hazardLevel: 'caution', icon: 'hard-drive',
    summary: 'The most repair-friendly device class — RAM, storage, and PSU are modular by design.',
    prepSteps: [
      'Secure-wipe or physically remove the HDD/SSD.',
      'Harvest reusable RAM, GPU, and drives for refurbishment.',
      'Remove the CMOS coin battery and tape both sides before disposal.',
      'Deliver whole units to refurbishers first, recyclers second.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Pd', 'Sn', 'Pb', 'Fe', 'Al'],
    dataRisk: true,
    mineralKey: 'laptop',
    complianceLaw: 'India: E-Waste Rules 2022 EPR; US: state e-waste laws, R2/e-Stewards.',
    cpcbCategory: 'ICT equipment (Schedule I, Item 1)',
    epaRule: 'RCRA — CRTs are hazardous waste; towers universal waste'
  },
  {
    id: 7, code: 'CT-07', name: 'Gaming Console',
    aliases: ['playstation', 'xbox', 'nintendo switch', 'game console'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Internal Li-ion / coin cells; brominated flame retardants in housing.',
    hazardLevel: 'caution', icon: 'gamepad-2',
    summary: 'Trading in or refurbishing a mid-life console keeps significant embodied carbon in active circulation.',
    prepSteps: [
      'Deactivate the console as primary and wipe saved payment data.',
      'Remove game discs and keep working controllers/cables for reuse.',
      'Use manufacturer trade-in or a certified e-waste recycler.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Co', 'Li', 'Sn', 'Zn'],
    dataRisk: true,
    mineralKey: 'laptop',
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste programs + manufacturer take-back.',
    cpcbCategory: 'Consumer electronics for entertainment (Schedule I)',
    epaRule: 'RCRA universal waste (embedded battery)'
  },
  {
    id: 8, code: 'CT-08', name: 'External HDD / SSD',
    aliases: ['external hard drive', 'portable ssd', 'backup drive', 'pen drive'],
    category: 'Consumer Tech', stream: 'ewaste',
    hazard: 'Rare-earth magnets in HDD actuators; unencrypted data persists after deletion.',
    hazardLevel: 'caution', icon: 'database',
    summary: 'Highest data-risk item in the bin — certified recyclers shred platters and recover aluminum and neodymium.',
    prepSteps: [
      'Encrypt the drive BEFORE wiping — full-disk encryption makes residual data unreadable.',
      'Follow NIST SP 800-88 sanitization or physically destroy platters if dead.',
      'Send to an NAID / R2 / CPCB-certified data-destruction recycler.'
    ],
    criticalMinerals: ['Al', 'Cu', 'Au', 'Nd', 'Dy', 'Co'],
    dataRisk: true,
    mineralKey: 'laptop',
    complianceLaw: 'India: E-Waste Rules 2022 + IT Act 2000 data rules; US: NIST SP 800-88 media sanitization.',
    cpcbCategory: 'ICT equipment (Schedule I)',
    epaRule: 'RCRA universal waste; NIST 800-88 for data destruction'
  },

  // ============ BATTERIES & POWER (8) ============
  {
    id: 9, code: 'BP-01', name: 'Disposable Vape',
    aliases: ['single-use vape', 'e-cigarette', 'puff bar', 'disposable e-cig'],
    category: 'Batteries & Power', stream: 'hazard',
    hazard: 'Live lithium cell + nicotine residue in one plastic tube — top new fire risk in waste trucks.',
    hazardLevel: 'critical', icon: 'flame',
    summary: 'Each single-use vape contains a rechargeable lithium cell that ignites when crushed in garbage compactors.',
    prepSteps: [
      'NEVER put in household trash or curbside recycling — compactor fires are frequent.',
      'Do not attempt to pry open or remove the cell at home.',
      'Take to a battery-specific collection point or household hazardous waste (HHW) depot.'
    ],
    criticalMinerals: ['Li', 'Cu', 'Co', 'Ni', 'Al'],
    dataRisk: false,
    mineralKey: 'powerbank',
    complianceLaw: 'India: E-Waste Rules 2022 (embedded battery) + PECA 2019; US: EPA lithium battery guidance.',
    cpcbCategory: 'Battery / hazardous component of consumer product',
    epaRule: 'RCRA hazardous waste — reactive lithium cell'
  },
  {
    id: 10, code: 'BP-02', name: 'Rechargeable Vape Mod',
    aliases: ['vape mod', 'refillable vape', 'pod system', '18650 battery'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Removable 18650 cells — high fire risk if terminals short against metal or foil.',
    hazardLevel: 'critical', icon: 'battery-charging',
    summary: 'Removable 18650 lithium cells must always be terminal-taped and routed to dedicated battery recycling.',
    prepSteps: [
      'Remove the battery cell and tape both terminals with non-conductive electrical tape.',
      'Never carry loose 18650 cells in pockets or metal tins.',
      'Recycle the cell at a battery bin; recycle the electronics body as small e-waste.'
    ],
    criticalMinerals: ['Li', 'Co', 'Ni', 'Cu', 'Mn'],
    dataRisk: false,
    mineralKey: 'powerbank',
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: BATTERY Act 1996.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste — batteries (40 CFR 273)'
  },
  {
    id: 11, code: 'BP-03', name: 'E-Bike / E-Scooter Battery',
    aliases: ['ev battery pack', 'e-scooter battery', 'pedelec battery', 'lithium pack 48v'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Large-format Li-ion pack — thermal runaway releases toxic HF fumes and burns intensely.',
    hazardLevel: 'critical', icon: 'zap',
    summary: 'One pack carries 1–2 kg of recoverable lithium, nickel, and cobalt — high-value urban mining.',
    prepSteps: [
      'Discharge to ~30% before storage or transport.',
      'Tape terminals; never transport a swollen or heat-damaged pack inside a car cabin.',
      'Return to the vehicle OEM or a licensed large-format battery recycler.',
      'Store away from exits and flammables while awaiting drop-off.'
    ],
    criticalMinerals: ['Li', 'Ni', 'Co', 'Mn', 'Cu', 'Al', 'Graphite'],
    dataRisk: false,
    mineralKey: 'powertool',
    complianceLaw: 'India: Battery Waste Management Rules 2022 (EPR recovery targets); US: DOT 49 CFR 173.185 + EPA universal waste.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — EV battery',
    epaRule: 'RCRA universal waste + DOT hazmat transport (49 CFR 173.185)'
  },
  {
    id: 12, code: 'BP-04', name: 'Power Tool Battery Pack',
    aliases: ['drill battery', '18v pack', 'tool battery pack', 'nicd pack'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Older NiCd packs contain toxic cadmium; newer Li-ion packs short-circuit easily.',
    hazardLevel: 'critical', icon: 'wrench',
    summary: 'Cadmium from legacy NiCd packs leaches into groundwater — always use dedicated battery take-back.',
    prepSteps: [
      'Identify chemistry: NiCd (labeled Cd) vs. Li-ion.',
      'Tape contacts; never store loose packs together in a metal box.',
      'Use brand take-back (DeWalt, Bosch, Makita drop-offs) or Call2Recycle / CPCB points.'
    ],
    criticalMinerals: ['Li', 'Co', 'Ni', 'Cd', 'Cu', 'Fe'],
    dataRisk: false,
    mineralKey: 'powertool',
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: BATTERY Act 1996 + Call2Recycle.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste — NiCd is hazardous (cadmium)'
  },
  {
    id: 13, code: 'BP-05', name: 'Li-Ion Power Bank',
    aliases: ['portable charger', 'powerbank', 'battery pack 10000mah', 'usb power bank', 'swollen'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Swollen pouch cells ignite if crushed; banned from checked airline luggage.',
    hazardLevel: 'critical', icon: 'battery-warning',
    summary: 'A dead power bank still holds valuable cobalt and lithium — never place in trash or curbside recycling.',
    prepSteps: [
      'Tape exposed USB ports and terminals with non-conductive tape.',
      'Place each power bank in its own separate clear plastic bag.',
      'If swollen or warm, use the Red Box dry-sand protocol immediately.',
      'Deposit at a battery collection bin or certified HHW drop-off.'
    ],
    criticalMinerals: ['Li', 'Co', 'Cu', 'Ni', 'Al'],
    dataRisk: false,
    mineralKey: 'powerbank',
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: EPA Used Lithium-Ion Batteries guidance.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste — batteries'
  },
  {
    id: 14, code: 'BP-06', name: 'Coin / Button Batteries',
    aliases: ['button cell', 'cr2032', 'lr44', 'watch battery', 'coin cell'],
    category: 'Batteries & Power', stream: 'hazard',
    hazard: 'Severe pediatric swallowing hazard; lithium coin cells spark in trash.',
    hazardLevel: 'critical', icon: 'disc',
    summary: 'Tiny coin batteries short-circuit against other metals and cause severe internal burns if swallowed by children.',
    prepSteps: [
      'Tape both sides of every cell with non-conductive electrical tape immediately.',
      'Store strictly out of reach of children in a sealed non-metallic jar.',
      'Take to a battery collection point, participating retailer, or HHW facility.'
    ],
    criticalMinerals: ['Li', 'Mn', 'Zn', 'Ag'],
    dataRisk: false,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: Reese\'s Law 2022 + EPA battery guidance.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II',
    epaRule: 'RCRA universal waste; Reese\'s Law (CPSC)'
  },
  {
    id: 15, code: 'BP-07', name: 'AA / AAA Alkaline Cells',
    aliases: ['aa battery', 'aaa battery', 'alkaline cell', 'dry cell', '9v'],
    category: 'Batteries & Power', stream: 'battery',
    hazard: 'Zinc and potassium hydroxide leakage; 9V terminals can short-circuit.',
    hazardLevel: 'low', icon: 'battery',
    summary: 'Collecting single-use alkaline cells separately recovers zinc and steel — switching to NiMH cuts waste.',
    prepSteps: [
      'Bag any corroded or leaking cells separately.',
      'Tape 9V terminals with non-conductive tape.',
      'Drop at retail battery kiosks or municipal hazardous waste days.'
    ],
    criticalMinerals: ['Zn', 'Mn', 'Steel'],
    dataRisk: false,
    mineralKey: 'powerbank',
    complianceLaw: 'India: Battery Waste Management Rules 2022; US: state-dependent (CA mandates recycling).',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Schedule II (primary)',
    epaRule: 'Universal waste in California; recommended recycling nationwide'
  },
  {
    id: 16, code: 'BP-08', name: 'Sealed Lead-Acid UPS Battery',
    aliases: ['ups battery', 'sla battery', 'inverter battery', 'car battery 12v'],
    category: 'Batteries & Power', stream: 'hazard',
    hazard: 'Sulfuric acid electrolyte + lead plates — acutely toxic if informally smelted.',
    hazardLevel: 'critical', icon: 'shield-alert',
    summary: 'Highly recyclable (~99%) in formal closed-loop systems, but toxic when dumped or dismantled informally.',
    prepSteps: [
      'Keep battery upright and tape or cap terminals.',
      'Never crack the casing — sulfuric acid burns skin and eyes.',
      'Return to an authorized battery dealer (core exchange) or CPCB/EPA recycler.'
    ],
    criticalMinerals: ['Pb', 'Sb', 'PP Plastic'],
    dataRisk: false,
    mineralKey: 'powertool',
    complianceLaw: 'India: Battery Waste Management Rules 2022 (90%+ recovery target); US: RCRA hazardous waste.',
    cpcbCategory: 'Battery Waste Management Rules 2022 — Lead-Acid',
    epaRule: 'RCRA hazardous waste (lead) — universal waste 40 CFR 273'
  },

  // ============ LIGHTING & SMALL APPLIANCES (14) ============
  {
    id: 17, code: 'LS-01', name: 'CFL Bulbs & Fluorescent Tubes',
    aliases: ['cfl', 'fluorescent tube', 'energy saver bulb', 'compact fluorescent', 'mercury'],
    category: 'Lighting & Small Appliances', stream: 'hazard',
    hazard: 'Contains mercury vapor — neurotoxin that volatilizes if broken in trash.',
    hazardLevel: 'critical', icon: 'lightbulb',
    summary: 'Handle intact fluorescent lamps as hazardous waste; never toss in curbside glass recycling.',
    prepSteps: [
      'If broken, ventilate the room for 15 minutes and sweep onto stiff paper — NEVER vacuum.',
      'Store unbroken bulbs in padded cardboard sleeves.',
      'Deliver to a hardware store lamp-recycling bin or HHW collection point.'
    ],
    criticalMinerals: ['Hg (captured)', 'Glass', 'Phosphor REE', 'Al', 'Cu'],
    dataRisk: false,
    complianceLaw: 'India: E-Waste Rules 2022 (Schedule I lamps); US: EPA Universal Waste Lamps (40 CFR 273.5).',
    cpcbCategory: 'Schedule I — Mercury-containing lamps',
    epaRule: 'RCRA Universal Waste — lamps (40 CFR 273.5)'
  },
  {
    id: 18, code: 'LS-02', name: 'LED Light Bulbs',
    aliases: ['led light', 'led lamp', 'bulb led 9w', 'smart bulb'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Driver circuit boards contain solder and electronics; contaminates glass recycling.',
    hazardLevel: 'low', icon: 'sun',
    summary: 'Mercury-free, but the internal driver board and aluminum heat sink belong in e-waste recycling.',
    prepSteps: [
      'Allow bulb to cool completely before unscrewing.',
      'Keep out of curbside glass recycling bins.',
      'Bundle dead LED bulbs and drop at certified e-waste or lighting retail bins.'
    ],
    criticalMinerals: ['Au', 'Cu', 'Al', 'Sn', 'Ga', 'REE'],
    dataRisk: false,
    mineralKey: 'cable',
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: accepted at e-waste / universal waste drop-offs.',
    cpcbCategory: 'Schedule I — Lighting equipment',
    epaRule: 'Non-hazardous electronics; recycle via e-waste stream'
  },
  {
    id: 19, code: 'LS-03', name: 'Microwave Oven',
    aliases: ['microwave', 'oven microwave', 'kitchen microwave'],
    category: 'Lighting & Small Appliances', stream: 'appliance',
    hazard: 'Internal high-voltage capacitor holds lethal charge after unplugging; beryllium in magnetron.',
    hazardLevel: 'critical', icon: 'microwave',
    summary: 'Small appliances make up 33% (20.4 Mt) of global e-waste, yet only 12% are formally recycled.',
    prepSteps: [
      'Unplug and do NOT open the casing — internal capacitors can hold a lethal charge.',
      'Check if a blown fuse or door switch can be fixed by a technician first.',
      'Tape the door shut and deliver to a certified e-waste / appliance recycler.'
    ],
    criticalMinerals: ['Cu', 'Fe', 'Al', 'Steel'],
    dataRisk: false,
    mineralKey: 'powertool',
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: state appliance recycling + R2 facilities.',
    cpcbCategory: 'Schedule I — Household appliances',
    epaRule: 'Recycle via certified scrap/WEEE stream'
  },
  {
    id: 20, code: 'LS-04', name: 'Hair Dryer & Styling Tools',
    aliases: ['blow dryer', 'hairdryer', 'styling dryer', 'iron', 'kettle'],
    category: 'Lighting & Small Appliances', stream: 'appliance',
    hazard: 'Internal motor windings & heating elements; never curbside.',
    hazardLevel: 'low', icon: 'wind',
    summary: 'Rich in copper motor windings and steel — straightforward small-appliance recycling win.',
    prepSteps: [
      'Unplug and let cool completely.',
      'Coil the power cord neatly without cutting it off.',
      'Drop at small-appliance / certified e-waste collection.'
    ],
    criticalMinerals: ['Cu', 'Fe', 'Ni', 'Al'],
    dataRisk: false,
    mineralKey: 'cable',
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: municipal small-appliance recycling.',
    cpcbCategory: 'Schedule I — Small household appliances',
    epaRule: 'Recycle via certified e-waste / scrap metal stream'
  },
  {
    id: 21, code: 'LS-05', name: 'Electric Toothbrush',
    aliases: ['electric brush', 'sonicare', 'oral-b electric', 'powered toothbrush'],
    category: 'Lighting & Small Appliances', stream: 'battery',
    hazard: 'Sealed NiMH/Li-ion cell inside waterproof body — fire risk if compacted.',
    hazardLevel: 'caution', icon: 'sparkles',
    summary: 'Waterproof handles trap rechargeable batteries inside — route to battery/e-waste bins or brand take-back.',
    prepSteps: [
      'Remove the brush head before disposal.',
      'Use brand take-back or mail-back programs where available.',
      'Deposit whole handle at a battery / e-waste bin — never household trash.'
    ],
    criticalMinerals: ['Li', 'Ni', 'Cu', 'Au'],
    dataRisk: false,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: E-Waste Rules 2022; US: BATTERY Act + brand take-back programs.',
    cpcbCategory: 'Schedule I — Consumer equipment with embedded battery',
    epaRule: 'RCRA universal waste (embedded rechargeable cell)'
  },
  {
    id: 22, code: 'LS-06', name: 'Drone / RC Toy',
    aliases: ['quadcopter', 'rc car', 'drone', 'remote control toy', 'rc plane'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Li-po pouch cells puncture easily; brushless motors contain neodymium magnets.',
    hazardLevel: 'caution', icon: 'navigation',
    summary: 'Compact bundle of rare-earth motors, Li-po cells, and cameras — separate the battery before drop-off.',
    prepSteps: [
      'Remove microSD cards with flight footage.',
      'Detach Li-po battery packs, tape leads, and bag individually.',
      'Recycle cells at a battery point and the drone body as small e-waste.'
    ],
    criticalMinerals: ['Li', 'Nd', 'Dy', 'Cu', 'Al'],
    dataRisk: true,
    mineralKey: 'powerbank',
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste laws + universal waste battery rules.',
    cpcbCategory: 'Schedule I — Recreational electronics',
    epaRule: 'RCRA universal waste (Li-po battery)'
  },
  {
    id: 23, code: 'LS-07', name: 'Smart Speaker / Hub',
    aliases: ['alexa', 'echo dot', 'google home', 'smart speaker', 'voice assistant'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Cloud-linked account credentials; internal circuit board metals.',
    hazardLevel: 'caution', icon: 'speaker',
    summary: 'Deregister smart speakers from your cloud account before donating or recycling.',
    prepSteps: [
      'Deregister the device in your Amazon/Google/Apple Home app and factory reset.',
      'Bundle the matching power adapter.',
      'Donate if working or recycle via manufacturer trade-in / certified e-waste point.'
    ],
    criticalMinerals: ['Au', 'Cu', 'Co', 'Li', 'Al', 'Sn'],
    dataRisk: true,
    mineralKey: 'tablet',
    complianceLaw: 'India: E-Waste Rules 2022 + DPDP Act 2023; US: state e-waste laws.',
    cpcbCategory: 'Schedule I — Consumer electronics',
    epaRule: 'RCRA universal waste (for battery-powered models)'
  },
  {
    id: 24, code: 'LS-08', name: 'Solar Garden Light',
    aliases: ['solar light', 'garden solar lamp', 'solar stake light'],
    category: 'Lighting & Small Appliances', stream: 'battery',
    hazard: 'Embedded NiMH or Li-ion cell + thin-film solar panel glass.',
    hazardLevel: 'low', icon: 'sun-medium',
    summary: 'Swapping the internal AA/AAA rechargeable cell revives most dead solar lights in 2 minutes.',
    prepSteps: [
      'Open the battery compartment and test a fresh rechargeable NiMH cell first.',
      'If truly dead, remove and tape the spent rechargeable cell for battery drop-off.',
      'Recycle the solar panel body as small e-waste.'
    ],
    criticalMinerals: ['Ni', 'Si', 'Cu', 'Glass', 'Al'],
    dataRisk: false,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: E-Waste Rules 2022 + Battery Rules 2022; US: state universal waste battery rules.',
    cpcbCategory: 'Schedule I Lighting + Schedule II Battery',
    epaRule: 'RCRA universal waste (rechargeable cell)'
  },
  {
    id: 25, code: 'LS-09', name: 'Wi-Fi Router / Modem',
    aliases: ['router', 'modem', 'wifi router', 'gateway', 'mesh node'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Stores Wi-Fi credentials and network logs; flame-retardant plastics.',
    hazardLevel: 'caution', icon: 'wifi',
    summary: 'Always hardware-reset routers before returning to your ISP or dropping at an e-waste center.',
    prepSteps: [
      'Hold the physical pinhole reset button for 15–30 seconds while powered on.',
      'Return leased units to your ISP for refurbishment.',
      'Drop owned units with power bricks at a certified e-waste recycler.'
    ],
    criticalMinerals: ['Au', 'Cu', 'Al', 'Sn', 'Fe'],
    dataRisk: true,
    mineralKey: 'tablet',
    complianceLaw: 'India: E-Waste Rules 2022; US: state e-waste laws + CISA device disposal.',
    cpcbCategory: 'Schedule I — ICT equipment',
    epaRule: 'Recycle via R2 / e-Stewards facility'
  },
  {
    id: 26, code: 'LS-10', name: 'Printer & Ink Cartridges',
    aliases: ['inkjet printer', 'laser printer', 'toner cartridge', 'ink cartridge', 'hp printer'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Toner dust is a respiratory irritant; multifunction units store scan memory.',
    hazardLevel: 'caution', icon: 'printer',
    summary: 'Remove and seal ink/toner cartridges for closed-loop brand take-back; recycle the printer body separately.',
    prepSteps: [
      'Remove cartridges and seal them in a zip-top bag to contain toner/ink.',
      'Return cartridges to office-supply or manufacturer recycling programs.',
      'Remove SD cards and run a factory reset on multifunction printers.',
      'Deliver printer body to a certified e-waste recycler.'
    ],
    criticalMinerals: ['Au', 'Cu', 'Fe', 'ABS Plastic'],
    dataRisk: true,
    mineralKey: 'laptop',
    complianceLaw: 'India: E-Waste Rules 2022 (cartridges in Schedule I); US: state e-waste laws + brand mail-back.',
    cpcbCategory: 'Schedule I — IT peripherals & consumables',
    epaRule: 'RCRA solid waste; toner handled as irritant dust'
  },
  {
    id: 27, code: 'LS-11', name: 'TV / LCD or CRT Monitor',
    aliases: ['television', 'led tv', 'lcd monitor', 'crt tv', 'smart tv'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Legacy LCD mercury backlights; CRTs hold up to 4 kg of leaded glass.',
    hazardLevel: 'critical', icon: 'monitor',
    summary: 'Heaviest household e-waste — never dismantle or crack screen glass at home.',
    prepSteps: [
      'Sign out of Smart TV apps and perform a factory reset.',
      'Never break CRT glass or open LCD panels.',
      'Use retailer haul-away or deliver to a CPCB / R2 / e-Stewards certified dismantler.'
    ],
    criticalMinerals: ['Au', 'Ag', 'Cu', 'Pb', 'Hg (legacy)', 'Al', 'Sn'],
    dataRisk: false,
    mineralKey: 'tv',
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: CRTs are federally hazardous waste.',
    cpcbCategory: 'Schedule I — Monitoring / display equipment',
    epaRule: 'RCRA hazardous waste (lead glass, mercury lamps)'
  },
  {
    id: 28, code: 'LS-12', name: 'Smoke Detector',
    aliases: ['smoke alarm', 'fire alarm', 'co detector', 'ionization smoke detector'],
    category: 'Lighting & Small Appliances', stream: 'hazard',
    hazard: 'Ionization models contain a tiny americium-241 radioactive source.',
    hazardLevel: 'critical', icon: 'bell-ring',
    summary: 'Check the back label for "Am-241" — ionization alarms should be returned to the manufacturer or HHW.',
    prepSteps: [
      'Inspect back label: "Am-241" or trefoil symbol = ionization type.',
      'Remove the 9V/AA battery, tape terminals, and recycle separately.',
      'Mail back to the manufacturer or drop at a municipal HHW collection event.'
    ],
    criticalMinerals: ['Am-241 (regulated)', 'Au', 'Cu', 'Al'],
    dataRisk: false,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: AERB radiation rules + E-Waste Rules 2022; US: NRC 10 CFR 32.26 manufacturer return.',
    cpcbCategory: 'Hazardous — regulated consumer device (AERB)',
    epaRule: 'NRC-regulated source; return to manufacturer or HHW'
  },
  {
    id: 29, code: 'LS-13', name: 'Digital Medical Device',
    aliases: ['glucometer', 'bp monitor', 'pulse oximeter', 'digital thermometer', 'nebulizer'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Mercury in legacy glass thermometers; bio-residue on test ports.',
    hazardLevel: 'critical', icon: 'activity',
    summary: 'Sanitize probes, remove button cells, and never vacuum a broken mercury thermometer.',
    prepSteps: [
      'Identify legacy silver-liquid mercury thermometers — treat as HHW immediately.',
      'Disinfect exterior probes/cuffs before handling.',
      'Remove button cells, tape both sides, and recycle via battery bin.',
      'Route electronic body to pharmacy or certified e-waste take-back.'
    ],
    criticalMinerals: ['Hg (legacy)', 'Li', 'Au', 'Cu'],
    dataRisk: true,
    mineralKey: 'smartwatch',
    complianceLaw: 'India: Mercury-free mandate + Bio-Medical / E-Waste Rules; US: EPA mercury rules.',
    cpcbCategory: 'Schedule I — Non-infectious medical electronics',
    epaRule: 'RCRA hazardous waste (mercury); e-waste for digital units'
  },
  {
    id: 30, code: 'LS-14', name: 'Chargers & USB Cables',
    aliases: ['usb cable', 'phone charger', 'lightning cable', 'power adapter', 'type-c cable', 'cables'],
    category: 'Lighting & Small Appliances', stream: 'ewaste',
    hazard: 'Tangles municipal sorting belts; high-purity copper lost if landfilled.',
    hazardLevel: 'low', icon: 'cable',
    summary: 'Up to 40% copper by weight — one of the easiest, highest-yield e-waste streams to recycle.',
    prepSteps: [
      'Never put cords or power bricks in curbside recycling bins.',
      'Coil cables neatly and secure with a twist-tie.',
      'Keep spare working USB-C adapters; drop dead cords at certified e-waste bins.'
    ],
    criticalMinerals: ['Cu', 'Au (pins)', 'Al', 'Fe'],
    dataRisk: false,
    mineralKey: 'cable',
    complianceLaw: 'India: E-Waste Rules 2022 Schedule I; US: state e-waste + EU USB-C Directive 2022/2380.',
    cpcbCategory: 'Schedule I — Cables & accessories',
    epaRule: 'High-value copper scrap / certified e-waste stream'
  },

  // ============ WISH-CYCLING TRAPS (6) ============
  {
    id: 31, code: 'WC-01', name: 'Greasy Pizza Box',
    aliases: ['pizza box', 'oily cardboard', 'food-soiled box'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Oil ruins recycled paper pulp — contaminates entire cardboard bales.',
    hazardLevel: 'caution', icon: 'package-x',
    summary: 'Split the box: recycle the clean top lid, compost or trash the grease-soaked bottom.',
    prepSteps: [
      'Remove leftover food, wax paper liners, and plastic spacers.',
      'Tear off clean, grease-free lid sections for curbside paper recycling.',
      'Compost the greasy bottom half (or place in municipal trash).'
    ],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: SWM Rules 2016 (wet/dry segregation); US: local MRF contamination standards.',
    cpcbCategory: 'Solid Waste Management Rules 2016 (not e-waste)',
    epaRule: 'Local municipal recycling acceptance standards'
  },
  {
    id: 32, code: 'WC-02', name: 'Rigid Plastic Bottles (#1 / #2)',
    aliases: ['pet bottle', 'water bottle', 'hdpe bottle', 'milk jug', 'soda bottle'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Low hazard — liquid residue causes odor and sorting rejections.',
    hazardLevel: 'low', icon: 'cup-soda',
    summary: 'Empty, rinsed #1 PET and #2 HDPE bottles have strong recycling markets when placed loose in bins.',
    prepSteps: [
      'Empty completely and give a quick rinse.',
      'Screw caps back on so small lids do not fall through sorting screens.',
      'Place loose in curbside recycling — never tied inside a plastic grocery bag.'
    ],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: PWM Rules 2022 EPR (Category 1 rigid); US: state bottle deposit laws.',
    cpcbCategory: 'Plastic Waste Management Rules 2022 — Category 1',
    epaRule: 'Curbside recyclable rigid plastic stream'
  },
  {
    id: 33, code: 'WC-03', name: 'Aluminum Beverage Cans',
    aliases: ['aluminium can', 'soda can', 'beer can', 'al can scrap'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'None — infinitely recyclable closed-loop metal.',
    hazardLevel: 'low', icon: 'cylinder',
    summary: 'Recycling one aluminum can saves ~95% of the energy required to smelt primary aluminum.',
    prepSteps: [
      'Empty and give a quick rinse.',
      'Leave uncrushed if your local facility uses optical/eddy-current sorting.',
      'Place loose in your municipal recycling bin.'
    ],
    criticalMinerals: ['Al'],
    dataRisk: false,
    complianceLaw: 'India: SWM Rules 2016 dry recyclable stream; US: state bottle bills & municipal curbside.',
    cpcbCategory: 'Metal scrap — SWM Rules 2016 dry stream',
    epaRule: 'High-value curbside commodity scrap'
  },
  {
    id: 34, code: 'WC-04', name: 'Styrofoam / EPS Foam',
    aliases: ['styrofoam', 'eps foam', 'polystyrene', 'packing peanuts', 'foam packaging'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Shreds into microplastic beads that contaminate curbside recycling streams.',
    hazardLevel: 'caution', icon: 'box',
    summary: '99% air, 1% problem — almost no curbside bin accepts EPS foam. Keep it out of recycling.',
    prepSteps: [
      'Do NOT put foam blocks or takeout clamshells in curbside recycling.',
      'Reuse clean packing blocks or check local shipping stores for peanut reuse.',
      'Bag securely before placing in municipal trash so beads cannot blow into waterways.'
    ],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: PWM Rules 2022 (single-use EPS restrictions); US: municipal foam bans.',
    cpcbCategory: 'Plastic Waste Management Rules 2022 — non-recyclable',
    epaRule: 'Keep out of curbside recycling; specialized densifier drop-off only'
  },
  {
    id: 35, code: 'WC-05', name: 'Plastic Grocery Film & Bags',
    aliases: ['plastic bag', 'grocery bag', 'plastic wrap', 'ldpe film', 'bread bag'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Wraps around sorting rotors — #1 cause of recycling plant shutdowns.',
    hazardLevel: 'caution', icon: 'shopping-bag',
    summary: 'Never place soft plastic bags in curbside bins; return clean, dry film only to store drop-off bins.',
    prepSteps: [
      'Never bag curbside recyclables inside tied plastic grocery bags.',
      'Collect clean, dry stretchy film for supermarket film-collection bins.',
      'Carry reusable cloth totes to eliminate film bags at the source.'
    ],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: Single-Use Plastic Ban (2022) + PWM Rules EPR; US: retail film take-back.',
    cpcbCategory: 'Plastic Waste Management Rules 2022 — restricted film',
    epaRule: 'Retail film drop-off only; never curbside'
  },
  {
    id: 36, code: 'WC-06', name: 'Thermal Paper Receipts',
    aliases: ['receipt paper', 'thermal paper', 'bpa receipt', 'pos receipt'],
    category: 'Wish-cycling Traps', stream: 'household',
    hazard: 'Coated with BPA/BPS developers — contaminates recycled paper pulp.',
    hazardLevel: 'caution', icon: 'receipt',
    summary: 'Shiny thermal receipts contaminate recycled paper batches — refuse digital-first or place in trash.',
    prepSteps: [
      'Opt for digital or no receipt at checkout whenever possible.',
      'Place shiny thermal receipts in municipal trash, NOT paper recycling.',
      'Wash hands after handling thermal receipts before eating.'
    ],
    criticalMinerals: [],
    dataRisk: false,
    complianceLaw: 'India: BIS phenol-free paper transition; US: state BPA receipt bans (CT, IL, VT, WA).',
    cpcbCategory: 'Solid waste — chemically coated paper',
    epaRule: 'TSCA — BPA chemical of concern; keep out of paper recycling'
  }
];

// ============ MINERAL RECOVERY METRICS ============
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

// ============ REPAIR VS. REPLACE METRICS (All 7 models mapped cleanly) ============
const REPAIR_METRICS = {
  smartphone_battery: {
    label: 'Smartphone Battery Replacement',
    baselineLifespanYears: 2.5, extendedLifespanYears: 4.5,
    mfgEmissionsKg: 85, repairEmissionsKg: 3,
    moneySaved: '$350 – $650 USD',
    moneyNote: 'Choosing a ~$45 battery swap over a $500+ replacement phone.'
  },
  smartphone_screen: {
    label: 'Smartphone Screen Replacement',
    baselineLifespanYears: 2.5, extendedLifespanYears: 4.0,
    mfgEmissionsKg: 85, repairEmissionsKg: 12,
    moneySaved: '$300 – $550 USD',
    moneyNote: 'Replacing a cracked OLED panel instead of retiring the entire handset.'
  },
  laptop_battery: {
    label: 'Laptop Battery Swap',
    baselineLifespanYears: 4.0, extendedLifespanYears: 7.0,
    mfgEmissionsKg: 300, repairEmissionsKg: 8,
    moneySaved: '$600 – $1,200 USD',
    moneyNote: 'Swapping a degraded $70 battery pack instead of buying a new laptop.'
  },
  laptop_ram_ssd: {
    label: 'Laptop RAM / SSD Upgrade',
    baselineLifespanYears: 5.0, extendedLifespanYears: 9.0,
    mfgEmissionsKg: 300, repairEmissionsKg: 25,
    moneySaved: '$550 – $1,100 USD',
    moneyNote: 'Reviving a sluggish laptop with an NVMe SSD & extra RAM.'
  },
  tablet_battery: {
    label: 'Tablet Battery / Screen Repair',
    baselineLifespanYears: 3.0, extendedLifespanYears: 6.0,
    mfgEmissionsKg: 150, repairEmissionsKg: 10,
    moneySaved: '$250 – $500 USD',
    moneyNote: 'Extending tablet life by 3 years rather than replacing the slate.'
  },
  tv_backlight: {
    label: 'TV LED Backlight Repair',
    baselineLifespanYears: 6.0, extendedLifespanYears: 11.0,
    mfgEmissionsKg: 700, repairEmissionsKg: 30,
    moneySaved: '$300 – $750 USD',
    moneyNote: 'Replacing $40 LED strips avoids 700 kg of display manufacturing CO2e.'
  },
  powertool_battery: {
    label: 'Power Tool Battery Rebuild',
    baselineLifespanYears: 4.0, extendedLifespanYears: 8.0,
    mfgEmissionsKg: 90, repairEmissionsKg: 6,
    moneySaved: '$120 – $280 USD',
    moneyNote: 'Rebuilding or swapping tool packs keeps brushless motors in service.'
  }
};

// ============ VERIFIED DROP-OFF NETWORK (12 HUBS) ============
const DROPOFF_CENTERS = [
  { id: 1, name: 'Namo E-Waste Management (CPCB Authorized)', city: 'Delhi NCR / Greater Noida', country: 'India',
    type: 'Authorized Dismantler & Recycler', address: 'Plot 8, Ecotech-III, Greater Noida, UP 201306',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'CPCB EPR Registration + ISO 14001', phone: '+91 98110 55555' },
  { id: 2, name: 'Eco Recycling Ltd (Ecoreco) — Collection Centre', city: 'Mumbai', country: 'India',
    type: 'CPCB Authorized Recycler', address: 'Plot 27, MIDC, Andheri East, Mumbai 400093',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'CPCB Authorized + R2 Partner Audited', phone: '+91 22 6123 4567' },
  { id: 3, name: 'Saahas Zero Waste — E-Waste Hub', city: 'Bengaluru', country: 'India',
    type: 'E-Waste Clinic & Collection Point', address: 'Koramangala 4th Block, Bengaluru 560099',
    accepts: ['ewaste', 'battery'], certification: 'KSPCB / CPCB Authorized', phone: '+91 80 4168 2289' },
  { id: 4, name: 'Attero Recycling — Consumer Drop-Off', city: 'Pune / Roorkee', country: 'India',
    type: 'Dismantler + Lithium Recycler', address: 'Survey 35, Chakan, Pune 410501',
    accepts: ['ewaste', 'battery', 'hazard'], certification: 'CPCB Authorized + UN Partner', phone: '+91 120 433 8000' },
  { id: 5, name: 'Best Buy Electronics Recycling Kiosk', city: 'San Francisco, CA', country: 'USA',
    type: 'Retail Take-Back', address: '1717 17th St (or any US Best Buy store)',
    accepts: ['ewaste', 'appliance', 'battery'], certification: 'EPA-Recognized Retail Collection', phone: '+1 888 237 8289' },
  { id: 6, name: 'Call2Recycle Battery Drop-Off Network', city: 'New York, NY', country: 'USA',
    type: 'Battery Collection Network', address: 'NYC Libraries & Retail — call2recycle.org/locator',
    accepts: ['battery', 'hazard'], certification: 'EPA-Supported, BATTERY Act Compliant', phone: '+1 877 723 1297' },
  { id: 7, name: 'EcoTech Services — e-Stewards Recycler', city: 'Austin, TX', country: 'USA',
    type: 'Certified ITAD Recycler', address: '10431 Menchaca Rd, Austin, TX 78748',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'e-Stewards + R2v3 Certified', phone: '+1 512 291 8000' },
  { id: 8, name: 'InterConnection — R2 Certified Refurbisher', city: 'Chicago, IL', country: 'USA',
    type: 'Refurbisher + Recycler', address: '3254 W 31st St, Chicago, IL 60623',
    accepts: ['ewaste', 'battery'], certification: 'R2v3 Certified Refurbisher', phone: '+1 206 633 1517' },
  { id: 9, name: 'Currys WEEE Electricals Take-Back', city: 'London', country: 'UK',
    type: 'Retailer WEEE Collection', address: 'Any UK Currys store (e.g., Tottenham Court Rd)',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'UK WEEE Regulations 2013 Compliant', phone: '+44 344 561 1234' },
  { id: 10, name: 'BSR Recyclinghof — Berlin WEEE Point', city: 'Berlin', country: 'Germany',
    type: 'Municipal WEEE Collection', address: 'Gradestraße 92, 12347 Berlin',
    accepts: ['ewaste', 'battery', 'appliance', 'hazard'], certification: 'EU WEEE Directive 2012/19/EU + ElektroG', phone: '+49 30 7592 4900' },
  { id: 11, name: 'Minato-ku Small Appliance Collection', city: 'Tokyo', country: 'Japan',
    type: 'Municipal + OEM Collection', address: 'Minato-ku Clean Center & Sony Store Ginza',
    accepts: ['ewaste', 'battery', 'appliance'], certification: 'Japan Small Appliance Recycling Act', phone: '+81 3 5434 2000' },
  { id: 12, name: 'EPRA Ontario Certified Depot', city: 'Toronto', country: 'Canada',
    type: 'Provincial E-Waste Program', address: 'Multiple depots — recycleelectronics.ca',
    accepts: ['ewaste', 'appliance'], certification: 'Ontario WEEE / RPRA EPR Framework', phone: '+1 416 226 2399' }
];

// ============ SDG 12 SCENARIO QUIZ ============
const QUIZ_QUESTIONS = [
  {
    id: 1,
    scenario: 'Your 3-year-old phone battery drains quickly. A shop offers ₹2,000 trade-in, or you can replace the battery for ₹1,800 at a repair shop. Which choice best serves UN SDG 12?',
    options: [
      'Trade in immediately — new phones are slightly more energy-efficient',
      'Replace the battery and keep the phone — extending life avoids ~85 kg of manufacturing CO2e',
      'Keep the dead phone in a drawer as a backup forever',
      'Sell it informally to an unregulated scrap dealer'
    ],
    correctIndex: 1,
    explanation: 'Over 80% of a smartphone\'s lifetime carbon (~85 kg CO2e) is emitted during manufacturing. A battery swap keeps that embodied carbon in service for ~2 extra years — the highest-leverage circular action under SDG 12.5.',
    sdgContext: 'SDG 12.2 (resource efficiency) & SDG 12.5 (waste prevention and reuse).'
  },
  {
    id: 2,
    scenario: 'You find old coin batteries (CR2032), a swollen power bank, and two disposable vapes in a drawer. Which disposal route is safe?',
    options: [
      'All three go in regular household trash — they are small',
      'Coin cells in trash; power bank and vapes in curbside recycling',
      'All three go to a battery/HHW collection point with terminals taped (isolate swollen pack)',
      'Tape them together and place in the blue recycling bin'
    ],
    correctIndex: 2,
    explanation: 'All three contain live lithium cells that short-circuit and ignite in compactor trucks and MRF shredders. Taping terminals prevents sparks, and battery/HHW points route cells safely.',
    sdgContext: 'SDG 12.4 — environmentally sound management of hazardous wastes.'
  },
  {
    id: 3,
    scenario: 'You have a cardboard pizza box: the top lid is clean, while the bottom is soaked with cheese and oil. What should you do?',
    options: [
      'Put the entire box in paper recycling — cardboard is cardboard',
      'Trash the entire box to be safe',
      'Tear off and recycle the clean lid; compost or trash the greasy bottom',
      'Wash the greasy cardboard with dish soap, then recycle'
    ],
    correctIndex: 2,
    explanation: 'Grease ruins recycled paper fiber bonding and can contaminate an entire bale. Separating the clean lid recovers good cardboard while stopping wish-cycling.',
    sdgContext: 'SDG 12.5 — clean source segregation prevents recycling contamination.'
  },
  {
    id: 4,
    scenario: 'A neighbor is discarding an old CRT television. Where should it go and why?',
    options: [
      'Curbside bulk trash — municipal trucks will handle it',
      'A certified e-waste recycler — CRT glass contains up to 4 kg of lead and is hazardous waste',
      'Curbside glass recycling because the screen is glass',
      'Informal scrap dismantling for the copper yoke'
    ],
    correctIndex: 1,
    explanation: 'CRT funnels contain leaded glass classified as hazardous waste. Informal breaking exposes workers and soil to lead; CPCB / R2 / e-Stewards dismantlers process it in closed loops.',
    sdgContext: 'SDG 12.4 — preventing toxic heavy-metal release to air, water, and soil.'
  },
  {
    id: 5,
    scenario: 'Before recycling or donating an old laptop, what is the correct data-security sequence?',
    options: [
      'Delete personal files and empty the Recycle Bin',
      'Do nothing — recyclers automatically wipe every drive',
      'Encrypt the drive, run a full OS clean wipe (NIST SP 800-88) or remove/destroy the drive, then recycle',
      'Run a quick format only'
    ],
    correctIndex: 2,
    explanation: 'Deleted files and quick formats remain recoverable. Full-disk encryption paired with a secure wipe or physical media destruction (per CISA / NIST SP 800-88) protects your identity.',
    sdgContext: 'Trustworthy data sanitization removes a top barrier to formal e-waste collection.'
  },
  {
    id: 6,
    scenario: 'Only 22.3% of global e-waste (62 Mt in 2022) is formally recycled. Which household strategy delivers the greatest SDG 12 impact?',
    options: [
      'Buy new gadgets yearly and recycle old ones early',
      'Repair first, donate/buy refurbished second, and route end-of-life items to certified recyclers',
      'Hoard all broken electronics in drawers indefinitely',
      'Hand e-waste to informal open-burning scrap handlers'
    ],
    correctIndex: 1,
    explanation: 'The circular waste hierarchy prioritizes prevention > repair/reuse > certified urban mining. Formal recycling recovers gold, copper, and cobalt safely without exposing informal workers to toxins.',
    sdgContext: 'SDG 12.5 (reduce, reuse, recycle) & WHO informal recycling health protection.'
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ITEMS, MINERAL_METRICS, REPAIR_METRICS, DROPOFF_CENTERS, QUIZ_QUESTIONS };
}
