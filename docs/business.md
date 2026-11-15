# Ora — Business (Parts 1–4)

> **Working name:** Ora (Albanian for "the hour"). See `brand-book.md` for the name checks.
> **One-sentence pitch:** Ora gives every beauty salon its own branded online booking page, so clients book in 30 seconds and get a WhatsApp reminder, without the owner answering DMs all day.

Interviews are in progress: outreach to 13 salons was sent on 15 Nov 2026, and replies will be added here as they arrive.

---

## 1. The problem

**One sentence:**
Owners of small beauty salons (hair, nails, lashes, barbers) in Kosovo and North Macedonia take every booking by phone, Instagram DM or Viber/WhatsApp, often while working on a client. That costs them **1–2 hours a day** answering messages, plus **lost money from no-shows and double bookings** that nobody reminded or tracked.

> The "1–2 hours a day" and the no-show cost are **hypotheses**. Confirm or correct them in the interviews below, then rewrite the sentence with the real numbers people give you.

### Interviews (minimum 2, aim for 5)

Ask these questions and write the answers **in their exact words** (in Albanian or Macedonian is fine, then add a translation):

1. "How do clients book with you today? Show me." (Look at their phone/notebook.)
2. "How many messages about appointments do you get per day?"
3. "When did a client last not show up? What did it cost you?"
4. "What is the most annoying part of bookings?"
5. "Have you ever tried an app or paid for something to fix this? Why did you stop?"
6. "If this was solved, what would it be worth to you per month?"

### Outreach so far

| Date | What I did | Result |
|---|---|---|
| 15 Nov 2026 | Sent a WhatsApp message with the 3 questions to **13 beauty studios** (hair, nails, beauty) | Waiting for replies. Answers will be added below as they arrive |

### Salon owners (the people who pay)

| # | Who (role, business type, city) | Date | What they said, in their words | What I learned |
|---|---|---|---|---|
| 1 | Pending: reply from outreach | | | |
| 2 | Pending: reply from outreach | | | |

### Clients (the people who book)

Salon clients feel the other side of the same problem: waiting for a reply to a DM, or calling while the salon is busy.

| # | Who (age, city, which salon type) | Date | What they said, in their words | What I learned |
|---|---|---|---|---|
| 1 | Planned: next week | | | |
| 2 | Planned: next week | | | |

---

## 2. The big picture

**In one sentence a stranger understands:**
Ora is a booking page for beauty salons: clients pick a service, a stylist and a time from their phone, and both sides get a reminder.

| | |
|---|---|
| **Who uses it** | Salon clients (book, cancel), salon staff (see their day), salon owner (manages everything) |
| **Who pays** | The salon owner, with a monthly subscription. Clients never pay Ora. |
| **Why now** | (1) Instagram is now the main shop window for salons, so a "book now" link in the bio is the natural next step. (2) Fresha, the best-known free tool, removed its free-forever plan in early 2025 and now charges a subscription plus a 20% commission on new marketplace clients. (3) Booking apps already work in the region (Cutlio in Croatia and Serbia), but no one serves Albanian-speaking salons in their own language with local, in-person setup. |

### Three other ways to solve the same problem

| Option | How it works | Why I did NOT choose it (for v1) |
|---|---|---|
| **A. Human receptionist service** | I (or freelancers) answer the salon's DMs and calls and keep the calendar | Doesn't scale: every new salon needs more people-hours. Margins are tiny. |
| **B. WhatsApp booking bot** | Client writes to the salon's WhatsApp and a bot offers free slots | Great fit for the region, but the WhatsApp Business API needs Meta approval, templates and per-message costs. **Planned for v2**, built on top of Ora's calendar. |
| **C. Marketplace app** (like SrediMe) | One big app where clients discover all salons | Needs thousands of clients AND hundreds of salons at the same time (chicken-and-egg). Salons don't want to be listed next to competitors. |
| **D. Physical: printed QR card + paper reminder cards** | QR at reception and appointment cards | Cheap, but doesn't fix DMs, double bookings or no-shows. Becomes part of Ora's onboarding kit instead. |

**What I chose:** a **branded web booking page per salon** (the salon's logo, colours and photos, its own link like `ora-booking.com/salon-name` or its own domain), plus **automatic reminders**. It's a website, not an app download. Clients open it from the Instagram bio and book. One product serves every salon, and each salon still feels it has "its own system".

> **Why one product and not a custom system per salon:** building separate code for each salon is an agency, not a product. Every bug fix would be needed 10 times. Instead, every salon gets the same engine, and the **design is set through settings** (logo, colours, cover photo, services, staff, rules). Real custom work (own domain, extra design) is a paid add-on.

---

## 3. The market

### Competitors

Prices were checked online in Nov 2026. Re-check each link before you hand in, because prices change.

| Competitor | Price | What it does well | Where it fails for my customer | Link |
|---|---|---|---|---|
| **Fresha** (UK, global) | US$14.95–19.95/month; 20% commission on new clients from its marketplace; 2–3% card fees | Very complete: calendar, POS, reminders, marketplace | Commission on new clients, pushes the Fresha brand rather than the salon's, no local in-person support | https://www.fresha.com/for-business/pricing |
| **Booksy** (Poland/US, global) | US$29.99/month + $20 per extra staff (US); €44 + €5 per staff in Ireland | Strong client app and marketplace, reminders included | Expensive for a small Balkan salon; designed for Western prices | https://biz.booksy.com/en-us/pricing |
| **SimplyBook.me** (global) | Free plan up to 50 bookings/month; paid plans about €8–50/month | Very flexible, has a free plan, widget for websites | Complicated setup, SMS costs extra, white-label branding only on the top plan | https://simplybook.me/pricing |
| **Cutlio** (Croatia, regional) | Not public (demo on request) | Builds a **branded app for each salon**, already active in Serbia, Croatia and North Macedonia (e.g. "Hairdo" app in Macedonian) | Clients must **download an app** for every salon; no visible Albanian-language offer | https://apps.apple.com/us/app/barbers-atelje/id6532602795 |
| **SrediMe** (Serbia, marketplace) | Free for clients; salon pricing not public | Big directory of salons with reviews | Not in Kosovo or North Macedonia; marketplace, not the salon's own brand | https://apps.apple.com/app/id1338099934 |
| **Do nothing:** phone, Instagram DM, Viber, paper notebook | €0 | Free, familiar, personal | Hours on the phone, double bookings, no reminders → no-shows, no client history | — |

**Also watch:** *Rezervime SH.P.K.* was registered in Tirana in Feb 2026 to offer online booking for salons, barbers and clinics. It's a new Albanian-language competitor to monitor.

**More competitors found with Claude Research (local and regional):**

| Competitor | Type | Why it matters for Ora | Link |
|---|---|---|---|
| **Glowsel** (Albania) | Marketplace app for booking beauty services, in Albanian | Closest Albanian-language competitor. But it's a marketplace: clients compare salons by price and ratings, the opposite of Ora's "your own brand" page | https://apps.apple.com/ca/app/glowsel/id6744941893 |
| **Salonkee** (Luxembourg, international) | Booking platform with salon profiles | Already lists at least one salon in Prishtina, so international tools are starting to reach Kosovo | https://salonkee.com/salon/lesthetique-prishtine?lang=en |
| **Single-salon apps** (e.g. Adi Barber, Kosovo) | One custom app for one barber shop | Shows salons want their own branded system, but building a custom app per salon is expensive. Ora gives the same feeling at a monthly price | https://apps.apple.com/us/app/id6479582905 |
| **Lime Booking** (Slovenia, regional) | Salon software with automatic SMS reminders | Regional player focused on reminders; no visible presence in Kosovo or North Macedonia | https://lime-booking.com/en/?p=1957 |

### How many possible customers? (Kosovo + North Macedonia)

| Step | Number | Source / reasoning |
|---|---|---|
| Active hairdressing & beauty businesses in **Kosovo** | **≈ 5,400** | Kosovo business register (ARBK) data: 8,818 registered under activity 96.02 "Hairdressing and beauty treatment", 5,414 active (61%) |
| Businesses per 1,000 people in Kosovo | ≈ 3.4 | 5,414 ÷ ~1.6 million people |
| Estimate for **North Macedonia** | **≈ 5,000** | ~1.84 million people × 3.4 per 1,000 ≈ 6,250, lowered to ~5,000 to be careful because registration habits differ. **This is an estimate**; the exact number can be requested from Makstat (stat.gov.mk), activity 96.02 |
| **Total market (TAM)** | **≈ 10,000 salons** | |
| **Reachable (SAM):** in cities, active on Instagram, 2+ chairs | **≈ 3,000** | Assumption: about 30% of all salons. Check this by counting salons on Instagram in one city |
| **My year-1 goal** | **40 salons** | ≈ 1.3% of the reachable market → 40 × €20 average ≈ **€800/month** |

Later markets using the same product: dental and private clinics, physiotherapy, driving schools, and the Albanian diaspora's salons in Switzerland and Germany.

### Why a customer would choose Ora (one sentence)

**Ora is the only booking system that speaks Albanian and Macedonian, puts the salon's own brand in front of clients instead of a marketplace, takes no commission, and is set up in person by someone local in one afternoon.**

---

## 4. Business model and price

### Lean Canvas (one page)

| **Problem** | **Solution** | **Unique value proposition** | **Unfair advantage** | **Customer segments** |
|---|---|---|---|---|
| 1. Bookings eat hours in DMs/calls<br>2. No-shows lose money<br>3. Double bookings and a messy notebook | Branded booking page per salon<br>Automatic reminders<br>Simple owner/staff calendar | "Your salon, booked." Your brand, your clients, no commission, set up in your language | Local, speaks Albanian + Macedonian, in-person setup, knows the culture (Viber/WhatsApp, cash payments) | **Early adopters:** young salon owners (nails, lashes, barbers) in Skopje, Tetovo, Prishtina who already take bookings via Instagram |
| **Existing alternatives:** phone, DM, notebook, Fresha, Booksy | **Key metrics:** salons paying; bookings per salon per week; % booked online; no-show rate | **High-level concept:** "Shopify for salon bookings, made for the Balkans" | **Channels:** walk-in visits, Instagram DMs, referrals, TikTok demos | |
| **Cost structure:** hosting, database, domain, email, WhatsApp/SMS messages, my time | | **Revenue streams:** monthly subscription; one-off setup fee; paid add-ons (own domain, extra SMS) | | |

### Price and why

| Plan | Price | What's included |
|---|---|---|
| **Start** | **€15 / month** | Branded booking page (logo, colours, photos), up to 2 staff, unlimited bookings, email + WhatsApp reminders |
| **Salon** | **€29 / month** | Up to 8 staff, a simple salon website page (for salons with no website), own domain support, monthly report |
| **Setup** | **€49 one-off** | I set up services, staff, photos and a printed QR card for reception. **Free for the first 10 "founding salons"**, who also keep their price for 12 months |

**Why monthly:** salons have steady monthly income, and the value (fewer DMs, fewer no-shows) repeats every month. **Why this price:** about half of Booksy, close to Fresha's base price but with **no commission**. If Ora prevents just 1–2 no-shows a month, it pays for itself. This price is a **hypothesis**: it will be checked against the salon owners' answers to question 6 when the outreach replies arrive.

### Monthly costs (estimates, verify before launch)

| Cost | First months (0–10 salons) | Note |
|---|---|---|
| Hosting (Cloudflare Pages / Netlify) | €0 | Free tier is enough at the start |
| Database + login (e.g. Supabase) | €0 → ~€25 | Free tier first; paid plan when there are many salons |
| Domain (ora-booking.com) | ~€1 | $12.08/year on Namecheap ÷ 12 |
| Business email (e.g. Zoho Mail free, or Google Workspace) | €0–7 | hello@ora-booking.com |
| Booking emails (e.g. Resend) | €0 | Free tier covers thousands of emails/month |
| WhatsApp / SMS reminders | Variable | **Paid per message.** Check current prices for +383 and +389 on Meta's WhatsApp pricing page and an SMS provider. Rule: each plan includes a monthly reminder quota, and extra SMS are a paid add-on |
| AI | €0 | v1 needs no AI features |
| **Total** | **≈ €2–35 / month** | First paying salon covers the fixed costs |

### How my first 10 customers will find me

1. **Walk-in visits** (main channel): 5 salons per week in Skopje (Čair, Centar, Aerodrom), Tetovo and Prishtina. Show a live demo on my phone with **their** name and logo already loaded.
2. **Instagram DMs** to salons whose bio says "DM për termin / пишете за термин". Use a short message plus a 20-second screen-recording of the demo.
3. **My own network:** my hairdresser, nail tech and barber, and friends' and family's salons.
4. **Referrals:** a salon that brings another salon gets 1 month free.
5. **Facebook groups** for beauticians and hairdressers (Albanian and Macedonian).
6. **TikTok and Instagram content** (after the first salon goes live): before/after of a salon's chaotic DMs vs. its Ora page.

### Go-to-market order (what to do first)

1. **This weekend:** interviews + these documents (no code, as the brief says).
2. Claim the name: domain, Instagram handle, business email.
3. Build the booking page with **one real pilot salon** (free).
4. Simple landing page + Instagram with the pilot as proof.
5. Walk-in sales to the next 9 "founding salons".
6. TikTok when there's a real product and a real salon to film.
