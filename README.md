# Gloocan · eldercare web demo

UI-only Next.js app for Gloocan, a service for booking verified caregivers for elderly parents. It has all 108 web screens from the design: finding and booking care, live visits, care plans, messages, payments, safety and account settings. There is no backend. Data is static and the interactive bits (chips, toggles, tabs, radios) only keep local UI state.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Open `/screens` for a list of every screen. `/` is the public landing page and `/search`, `/visits`, `/care-plan` and `/account` are good entry points.

## Layout

- `src/app/<route>/page.tsx`: one route per screen, with its page title.
- `src/screens/<Name>.tsx`: the screen markup, ported from the design file of the same name. A stateful screen declares a small `Logic` class (`state` plus `renderVals()`) and runs it with `useLogic` from `src/lib/logic.ts`.
- `src/components/`: shared chrome. `AppHeader` is the signed-in top bar (it folds into a menu below 960px), `AccountNav` is the account side menu (it becomes a scrolling row on phones) and `SiteHeader` is the public header.
- `src/lib/screens.ts`: the screen list used by `/screens`.
- `public/images/`: avatar images.

Styles are inline, as in the design. Responsive rules live in CSS modules and `src/app/globals.css`. Fonts (Figtree, plus Noto Sans Sinhala and Tamil for the language screen) load through `next/font`.
