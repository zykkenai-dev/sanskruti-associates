# Sanskruti Associates · Zykken demo

Updated property advisory presentation site built from the supplied brief and research dossier. The source uses the Next.js App Router API, TypeScript, Tailwind tokens and the Sites-compatible Vinext runtime. Deployment: ChatGPT Sites, owner-private by default.

## Content and accuracy
- Central content files live in `content/`. Missing owner data is registered in `content/placeholders.ts`.
- The 12 entries are historical project references or clearly identified service examples, not live inventory.
- The ₹1 crore Arcadia value is a historical source price. Unit specifications, availability, title and amenities must be confirmed.
- Only the supplied 4.6 / 69 Justdial rating and the “Quick service” listing highlight are represented. No testimonial has been invented.
- Photographs are illustrative stock, with source notes in `public/images/asset-sources.json`. The updated hero uses an attributed 2018 Kharadi photograph by Akshit 77 (CC BY-SA 4.0). Other listing and category imagery remains illustrative.
- The RERA number is labelled self-published and unverified. Founder biography, languages and media are not fabricated.
- Introductory copy and navigation have English, Marathi and Hindi variants. The remaining catalogue and tools are English, with a multilingual scripted chat demo.
- The site is noindex during demo review. Final domain and production business policies are pending.

## Functional demos
- Search/filter by locality, type, purpose, confirmed price, and known BHK. Unknown price/BHK units are excluded by numeric filters.
- Local favourites, swipe galleries, detail dialogs and property-specific WhatsApp messages.
- Enquiry wizard with validated contact fields and local browser storage. No CRM or external lead database is connected.
- Fourteen-day IST visit requests, validation against past times, tentative Google Calendar link and escaped ICS download. Hours and unavailable slots are illustrative. Appointments and pickup require advisor confirmation.
- EMI calculation and yearly amortization, principal/interest chart; illustrative finance terms.
- Scripted assistant with English/Hindi/Marathi greetings and WhatsApp handoff. No live LLM, WhatsApp Business API or automation.
- Leaflet/CARTO map loads only on request; locality chips remain functional if tiles fail. Office map is click-to-load.
- Responsive sticky mobile actions, modal keyboard focus trap, reduced-motion handling, GSAP/Lenis and an improved session-only skippable brand loader.
- Bold Manrope headings and larger interface text. Phone hero content uses natural flow; forms use 16px inputs and large touch targets.

## October design update

The original serif typography has been replaced by bold Manrope. The hero now shows the actual Kharadi EON / WTC area. A suitable freely reusable Kharadi drone clip was not verified, so no paid or watermarked footage was embedded. See `LICENSE_ASSETS.md` for the photograph license.

## Validation
TypeScript and production build pass. Calculation checks cover the ₹50 lakh, 8.5%, 20-year example (₹43,391.16/month), amortization principal/balance, IST-to-UTC calendar output, ICS escaping and tentative status, data filters, favourites and encoded WhatsApp messages. Browser visual QA and Lighthouse measurements were unavailable in the execution environment; performance targets are not claimed as measured.
