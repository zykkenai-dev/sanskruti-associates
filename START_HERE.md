# Sanskruti Associates — downloadable project

This folder contains the updated website source, local image assets, content files and configuration. Open the whole `sanskruti-associates` folder in VS Code, Cursor or OpenCode.

## Run it locally (Windows, Linux or macOS)

Install Node.js 22.13 or newer. In a terminal opened inside this folder, run:

```bash
npx --yes pnpm@11.25.0 install --frozen-lockfile
npx --yes pnpm@11.25.0 dev
```

Open **http://localhost:5173**. Keep the terminal open while editing.

The first install needs internet access. The Google font may need internet on the first build. The hero photograph and other images are included in this folder.

## Check and build

```bash
npx --yes pnpm@11.25.0 exec tsc --noEmit
npx --yes pnpm@11.25.0 build
```

This project uses the Next.js App Router API with the Vinext / Cloudflare runtime used by ChatGPT Sites. The build output is generated locally; `node_modules`, build output and machine-specific caches are intentionally excluded from the ZIP. No credentials are required for the demo enquiry, EMI or visit-request tools.

## What changed

- Bold Manrope headings and larger body/interface text replace the serif display font.
- The hero uses a real, licensed Kharadi EON / World Trade Center photograph.
- A new animated welcome loader has a brand reveal, progress indicator and skip control.
- Phone hero content flows naturally, with large buttons, legible fields and single-column forms.

## Where to edit

| Item | File or directory |
| --- | --- |
| Main page and sections | `components/Home.tsx` |
| New loader | `components/IntroLoader.tsx` |
| Fonts and metadata | `app/layout.tsx` |
| Colours, typography and mobile styles | `app/globals.css` |
| Business contact details | `content/business.ts` |
| Property references | `content/listings.ts` |
| Owner information still needed | `content/placeholders.ts` |
| Images | `public/images/` |
| Enquiry, visit request and assistant | `components/tools/ModalTools.tsx` |
| EMI calculator | `components/tools/Emi.tsx` |

## Image credit

The Kharadi hero photo is by Akshit 77, photographed in 2018, under CC BY-SA 4.0. The required credit is displayed on the website and recorded in `LICENSE_ASSETS.md`. Keep those credits when using the photo. Other property photos are illustrative stock and do not show confirmed live listings.

## Demo behaviour

WhatsApp actions prepare messages; the visitor chooses whether to send them. Booking slots are tentative requests. The assistant is scripted and is not connected to a live AI backend. Read `README.md` for the remaining owner confirmations and integration details.
