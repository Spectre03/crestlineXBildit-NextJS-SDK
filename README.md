# Crestline Commerce — BILDIT VEE Web Integration (Next.js POC)

This repository contains the Next.js App Router storefront integration for the **Crestline Commerce** BILDIT Visual Experience Engine (VEE) Partner POC.

## Overview

The storefront is integrated with the BILDIT VEE Web SDK to support no-developer visual content scheduling. It includes:
* **SDK Integration:** Configured with `@bildit-platform/nextjs` (UI elements) and `@bildit-platform/nextjs-api` (Remote API data connector).
* **Live Editor Script Bridge:** Custom iframe bridge script in the root layout to handle handshakes (`IFRAME_READY` and `SCRIPT_INJECTED`) and inject the editor script dynamically.
* **Component Library Templates:** 4 luxury storefront components configured with JSDoc tags for the BILDIT in-browser template compiler.

---

## Getting Started

### 1. Environment Configuration

Create a `.env.local` file in the root directory:

```env
BILDIT_API_KEY=your-bildit-api-key-here
BILDIT_API_URL=https://your-sandbox-instance.web.app
```

### 2. Development Execution

Install the dependencies:

```bash
npm install
```

Run the development server on port **3001** (as configured in the BILDIT Host Configuration):

```bash
npm run dev -- -p 3001
```

Open [http://localhost:3001](http://localhost:3001) in your browser to view the storefront.

---

## Integration Details

### Slot Mappings

The homepage (`src/app/page.tsx`) contains the following four `<SlotPlaceholder>` locations:
1. `home-hero` (mapped to `CmsCinematicHero` template)
2. `home-marquee` (mapped to `CmsMarqueeTicker` template)
3. `home-split-banner` (mapped to `CmsSplitBanner` template)
4. `home-full-width-feature` (mapped to `CmsFullWidthFeature` template)

### Custom Templates

Registered components are located under `/src/components`:
* `CmsCinematicHero` - Cinematic showcase slider.
* `CmsMarqueeTicker` - Auto-scrolling marquee announcement ticker.
* `CmsSplitBanner` - Two-column promotional grid.
* `CmsFullWidthFeature` - Parallax full-width hero feature.
