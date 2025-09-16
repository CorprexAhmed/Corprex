## Frontend CSS Consolidation Progress

### Overview
- All site styles are consolidated into a single global stylesheet: `corprex-react/src/styles.css`.
- Page-level CSS files and imports have been removed. Global tokens and utilities enforce consistency.

### Completed
- Globalization
  - [x] Consolidated all page CSS into `src/styles.css` (deleted per-page CSS files and imports)
  - [x] Ensured a single font import and single `@keyframes spin`
  - [x] Corrected `:root` variables (added shared brand tokens: `--accent-green`, `--n8n-red`, `--make-purple`)
- Namespacing & Scope
  - [x] Contact overlay and spinner namespaced (`contact-*`) to avoid collisions
  - [x] Scheduler buttons scoped under `.scheduler-main` to prevent global `.btn-primary` overrides
  - [x] Unified `.cta-section` to a single definition
  - [x] Normalized n8n guide styles (`hero-badge n8n`, `highlight n8n`)
- Utilities
  - [x] Added hover utilities: `.u-lift`, `.u-border-accent`, `.u-shadow-soft`, `.u-shadow-soft-lg`
  - [x] Applied utilities to `intro-card`, `featured-article`, and `article-card`
- Hygiene
  - [x] Lints clean (no stylelint configured yet; project lints pass)

### In Progress / Next Up
- Apply utilities broadly (replace repeated :hover rules with utilities)
  - [ ] `visual-feature`, `template-card`, `node-type-card`, `problem-card`, `benefit-card`, `use-case-card`
- Button system
  - [ ] Introduce a unified button API: `.btn`, `.btn--primary`, `.btn--secondary`, optional `.btn--inverted`, sizes (`--sm`, `--lg`)
  - [ ] Replace ad-hoc button rules across pages
- Grid utilities (reduce repeated grid definitions)
  - [ ] Create `.grid-2`, `.grid-3`, `.grid-auto`, `.gap-sm`, `.gap-md`, `.gap-lg`
  - [ ] Replace local `display: grid` + `grid-template-columns` where appropriate
- Hero variants (unify paddings/structure)
  - [ ] Define `.hero--compact`, `.hero--center`, and shared `.hero-text` scale
  - [ ] Replace page-specific hero tweaks with modifiers
- Tokenize spacing/typography/radii/transitions
  - [ ] Add spacing scale: `--space-1 .. --space-8`
  - [ ] Add radii: `--radius-4 .. --radius-24`
  - [ ] Add transition durations: `--ease-fast`, `--ease-normal`
  - [ ] Extend color tokens (success/warning/danger/info)
- Breakpoints
  - [ ] Standardize breakpoint tokens (`--bp-sm: 480px; --bp-md: 768px; --bp-lg: 1024px; --bp-xl: 1400px`) and use them in media queries
- Dead CSS removal & size checks
  - [ ] Audit for unused selectors after utility migration
  - [ ] Verify CSS bundle size; rely on Vite minification
- Tooling
  - [ ] Add stylelint + recommended config and a `lint:css` script
  - [ ] Add pre-commit hook to run CSS linting
- Docs
  - [ ] Document CSS conventions (tokens, utilities, modifiers) in `README.md`

### Decisions & Conventions
- Tokens
  - Use `:root` CSS variables for colors, spacing, typography, radii, transitions
- Utilities
  - `.u-*` classes for composable behaviors (e.g., lift, shadow, border accent)
- Modifiers
  - BEM-inspired modifiers `.block--modifier`; state classes as `.is-*`
- Scoping
  - Prefer contextual scoping (e.g., `.scheduler-main .btn-primary`) to avoid global collisions
- Breakpoints
  - Use named tokens; avoid scattering literal pixel values

### Risk & Notes
- `.btn-primary` is used site-wide; further refactor to a `.btn` system will simplify maintenance and prevent surprises.
- Broad utility application reduces cascade complexity but may require minor JSX updates (className additions).

### Checklist Snapshot
- [x] Consolidate CSS into one file
- [x] Fix tokens and global variables
- [x] Namespace collision-prone components (Contact, Scheduler)
- [x] Unify CTA
- [x] Add and apply initial utilities
- [ ] Migrate remaining hover patterns to utilities
- [ ] Introduce unified button API
- [ ] Add grid utilities and refactor grids
- [ ] Standardize hero variants
- [ ] Add spacing/radii/transition tokens
- [ ] Standardize breakpoints via tokens
- [ ] Add stylelint and pre-commit hooks
- [ ] Document conventions in README

### How to Continue
1) Implement button API and update usages
2) Add grid utilities and convert target sections
3) Add breakpoint tokens and replace media query literals
4) Roll out utility classes to the remaining components
5) Add stylelint config and pre-commit hooks
6) Update `README.md` with the conventions above
