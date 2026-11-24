# ReCircuit — Smart E-Waste & Household Recycling Guide (UN SDG 12)

> **Know where every device, battery, and tricky household item belongs — in seconds.**

ReCircuit is a zero-backend, client-side interactive web application and offline-first Progressive Web App (PWA) aligned with **UN Sustainable Development Goal 12 (Responsible Consumption and Production)**:
- **Target 12.4:** Environmentally sound management of hazardous wastes and toxic chemicals throughout their life cycle.
- **Target 12.5:** Substantially reduce waste generation through prevention, reduction, repair, reuse, and recycling by 2030.

---

## 🌍 The Real-World Crisis

Global e-waste is rising five times faster than documented recycling:
- **62 million tonnes (Mt)** of e-waste was generated globally in 2022 (7.8 kg per capita), rising to **65 Mt in 2023** and projected to reach **82 Mt by 2030** ([UN Global E-waste Monitor 2024](https://ewastemonitor.info/the-global-e-waste-monitor-2024/), [UN DESA SDG 12](https://sdgs.un.org/goals/goal12)).
- Only **22.3%** (~13.8 Mt) was formally collected and documented as recycled in 2022 ([WHO](https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste))).
- **US $91 billion** worth of embedded metals (including $19B copper, $15B gold, and $16B iron) sat inside 2022 e-waste, yet less than **1%** of rare earth element demand is met by recycling ([UNITAR / GEM 2024](https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling)).
- Improperly discarded lithium-ion batteries cause over **240 documented thermal runaway fires annually in waste trucks and sorting facilities** ([US EPA](https://www.epa.gov/recycle/used-lithium-ion-batteries)).

Most green hackathon apps are static brochures or carbon quizzes. **ReCircuit** turns SDG 12 into a fast, everyday decision tool that prevents battery fires, stops wish-cycling, and reveals the true urban mining value in our drawers.

---

## ⚡ Key Features

1. **Smart Disposal Lookup (20+ Curated Items & Tricky Recyclables)**
   - Instant search, category filters, and 4 primary streams: `Certified E-Waste`, `Battery / HHW`, `Curbside Recycling`, `Municipal Trash`.
   - Actionable modal cards with hazard ratings, step-by-step safe preparation, SDG 12.5 repair-first tips, recoverable metals, and primary source links.
2. **Region-Aware Regulatory Guidance**
   - Live toggle between **Global (UN / WEEE)**, **India ([CPCB E-Waste Management Rules, 2022](https://eprewaste.cpcb.gov.in/))**, and **USA ([US EPA R2 / e-Stewards](https://www.epa.gov/recycle/electronics-donation-and-recycling))**.
3. **15-Second Disposal Triage Wizard & Red Box Protocol**
   - Branching diagnostic tool for unlisted items, with emergency protocols for swollen, damaged, or overheating lithium-ion batteries.
4. **Pre-Disposal Data Sanitization & Battery Safety Checklist**
   - Step-by-step interactive checklists grounded in [CISA](https://www.cisa.gov/news-events/news/proper-disposal-electronic-devices), NIST SP 800-88, and [US EPA](https://www.epa.gov/recycle/used-household-batteries) guidance for Phones, Laptops, Consoles, and Batteries.
5. **My Drop-Off Box & SDG 12 Impact Dashboard**
   - Build a sorted household drop-off manifest with `localStorage` persistence, a one-click **"Load Sample Junk Drawer"** demo mode, copy plan, and print support.
   - Interactive **Chart.js** visualizations displaying personal stream splits alongside the 2022–2030 Global E-Waste Gap.
6. **Wish-Cycling & E-Waste Myth-Buster Quiz**
   - 8 rapid-fire questions with instant, cited explanations dispelling common recycling myths (e.g., pizza boxes, thermal receipt paper, alkaline batteries).

---

## 📐 Scientific & Mathematical Formulations

### 1. Urban Mine Mineral Recovery & Ore Displacement
$$\text{Ore}_{\text{avoided}} = \sum_{k} M_k \cdot \text{OreGradeFactor}_k$$
Recycling discarded circuit boards yields gold at ~300 ppm — **100× richer than natural gold ore** (~1 to 5 ppm in natural rock).

### 2. Right-to-Repair Lifespan Extension Carbon Model (SDG 12.5)
$$\Delta \text{C}_{\text{repair}} = E_{\text{mfg}} \cdot \left(1 - \frac{L_{\text{baseline}}}{L_{\text{extended}}}\right) - E_{\text{repair}}$$
Over 80% of a smartphone's lifetime carbon footprint is in manufacturing ($E_{\text{mfg}} \approx 85\text{ kg CO}_2\text{e}$). Extending a smartphone's lifespan from 2.5 to 3.5 years via a battery swap ($E_{\text{repair}} \approx 10\text{ kg CO}_2\text{e}$) saves **14.3 kg CO₂e** — 4× more than recycling it early.

---

## 🚀 Quick Start & 60-Second Deployment

ReCircuit is a zero-build, single-file web application (`index.html`) using Tailwind CSS, Chart.js, and Lucide Icons via CDN.

### Run Locally
1. Double-click `index.html` to open it in any modern browser.

### Deploy Free (GitHub Pages)
1. Push this repository to GitHub.
2. Go to **Settings → Pages → Deploy from branch (`main`, `/root`)**.
3. Your app is live globally in 60 seconds.

---

## 📚 Verified Data Sources

- [UN Global E-waste Monitor 2024](https://ewastemonitor.info/the-global-e-waste-monitor-2024/) & [UNITAR Press Summary](https://unitar.org/about/news-stories/press/global-e-waste-monitor-2024-electronic-waste-rising-five-times-faster-documented-e-waste-recycling)
- [UN DESA Sustainable Development Goal 12](https://sdgs.un.org/goals/goal12)
- [World Health Organization (WHO) — E-Waste Fact Sheet](https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste))
- [US EPA — Used Lithium-Ion Batteries](https://www.epa.gov/recycle/used-lithium-ion-batteries) & [Electronics Donation and Recycling](https://www.epa.gov/recycle/electronics-donation-and-recycling)
- [CISA — Proper Disposal of Electronic Devices](https://www.cisa.gov/news-events/news/proper-disposal-electronic-devices)
- [India Central Pollution Control Board (CPCB) E-Waste Management Rules, 2022](https://eprewaste.cpcb.gov.in/)

## License

MIT License — see `LICENSE` for details.
