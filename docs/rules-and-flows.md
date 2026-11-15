# Ora — Business rules and flows (Part 6)

## Users and roles

| Role | Who | Can do | Cannot do |
|---|---|---|---|
| **Client** | Anyone booking at a salon | See the salon's services, prices, staff and free times; book; cancel or reschedule their own booking; get reminders | See other clients; see the salon's calendar details; book without phone number |
| **Staff** | Stylist, nail tech, barber at a salon | See **their own** calendar; add a booking for a walk-in or phone client; mark a booking as done or no-show; block their own time (break, day off) | Change prices or services; see the salon's revenue; delete other staff's bookings; edit salon settings |
| **Owner** | Salon owner (the paying customer) | Everything staff can do, for **all** staff; manage services, prices, durations; add/remove staff; set opening hours and booking rules; set branding (logo, colours, photos); see reports; manage subscription | Access other salons' data |
| **Platform admin** | Ardiana (Ora) | Create salons; help with setup; suspend a salon that hasn't paid; see usage statistics | Read clients' personal data unless the owner asks for support |

---

## Flow 1: A salon joins Ora (onboarding)

1. Owner meets Ardiana (walk-in) or fills in the "Get Ora for your salon" form.
2. Platform admin creates the salon account and sends the owner a login link by email.
3. Owner (or Ardiana, during setup) adds: salon name, address, phone, opening hours.
4. Adds services: name, price, duration (e.g. "Gel nails, €15, 60 min").
5. Adds staff and which services each one does, plus their working hours.
6. Sets branding: logo, two colours, cover photo.
7. Ora creates the booking link (e.g. `ora-booking.com/studio-nails`) and a QR code.
8. Owner puts the link in the Instagram bio and the QR card at reception.
9. 14-day free trial starts. On day 12 the owner gets a reminder to pay.

## Flow 2: A client books

1. Client opens the salon's link (from Instagram bio, QR, or a shared message).
2. Chooses a **service**, sees price and duration.
3. Chooses a **staff member** or "anyone available".
4. Sees only **free time slots** (calculated from working hours, existing bookings and service duration) and picks one.
5. Enters name and phone number (email optional). No account or password needed.
6. Confirms. The slot is locked immediately so nobody else can take it.
7. Client sees a confirmation screen and receives a confirmation message (email/WhatsApp) with a cancel/reschedule link.
8. The staff member and owner see the booking in their calendar.
9. **24 hours before:** client gets a reminder. **2 hours before:** a second short reminder.
10. After the appointment, staff marks it **done** or **no-show**.

## Flow 3: A client cancels or reschedules

1. Client opens the link from their confirmation or reminder message.
2. Sees the booking with two buttons: **Reschedule** and **Cancel**.
3. **If more than 24 hours before the appointment:** the change is free and immediate.
   - Reschedule → picks a new free slot (same as Flow 2, steps 4–7) → old slot is freed.
   - Cancel → asks for confirmation → booking cancelled, slot freed.
4. **If less than 24 hours before:** online changes are blocked. The client sees the salon's phone number and a "Call the salon" button.
5. The owner and the staff member get a notification about the cancellation or change.

---

## Business rules (in plain words)

1. A booking can be **cancelled or moved for free until 24 hours** before the appointment. After that, the client must call the salon. (Each salon can change this to between 2 and 48 hours.)
2. A time slot can **never** be booked twice for the same staff member. The first confirmed booking wins.
3. Clients can book **at most 60 days ahead** and **at least 1 hour ahead** (salon can change both).
4. A booking always blocks the **full service duration plus a 10-minute buffer** (salon can set the buffer to 0–30 min).
5. A client who has **2 no-shows** at the same salon can no longer book online at that salon. They must call, and the owner can remove the block.
6. A client can have **at most 3 upcoming bookings** at the same salon at once, to stop fake or spam bookings.
7. **Only the owner** can change prices, services and staff. Staff can only manage their own calendar.
8. A phone number is **required** for every booking. One phone number = one client per salon.
9. Reminders are sent **24 hours and 2 hours** before. If the booking was made less than 2 hours before, no reminder is sent.
10. Prices shown online are the prices the client pays. **Payment happens in the salon** (cash or card); Ora does not take money from clients in v1.
11. If a salon's subscription is **unpaid for 14 days**, its booking page shows "Online booking is paused, call us" with the phone number. **Existing bookings are kept**, never deleted.
12. A salon owns its client list. It can **export it at any time**, and if it leaves Ora, its data is deleted within 30 days.
13. Clients' phone numbers are **used only for booking messages**, never for marketing, unless the client ticks a separate box.

---

## What version 1 will NOT do

- **No online payments or deposits.** Clients pay in the salon.
- **No marketplace.** There's no shared app where clients browse all salons. Each salon has only its own page.
- **No native mobile app** (iOS/Android). It's a mobile-friendly website. Owners can "Add to home screen".
- **No WhatsApp booking bot.** WhatsApp is used only for reminders (planned for v2).
- **No inventory, product sales, POS or accounting/fiscal receipts.**
- **No staff salaries or commission calculations.**
- **No loyalty points, gift cards or marketing campaigns.**
- **No multi-location chains** (one salon = one location in v1).
- **No reviews or ratings.**
- **No fully custom code per salon.** Customisation is through settings (logo, colours, photos, rules).
