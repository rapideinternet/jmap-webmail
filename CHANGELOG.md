# Changelog

## 1.2.0 (2026-03-16)

### Features

- **Sandboxed email rendering**: Rich HTML emails (newsletters, tables) now render in a sandboxed iframe for CSS isolation — prevents email styles from bleeding into the app UI
- **API retry with backoff**: JMAP requests now automatically retry on transient failures (503, 429, network errors) with exponential backoff
- **Mobile action bar**: Bottom toolbar with Reply, Reply All, Archive, Delete, and More actions when viewing emails on mobile
- **Long-press context menu**: Long-press on email list items triggers the context menu on touch devices, with haptic feedback
- **Tag counts in sidebar**: Collapsible Tags section shows color-coded tags with email counts
- **Empty folder**: One-click empty for Junk and Trash folders with confirmation and batch deletion progress
- **Extra-compact density**: New density option that hides avatars and previews for maximum information density (44px touch targets on mobile)
- **Security tooltips**: SPF, DKIM, and DMARC indicators now show plain-language explanations on hover
- **Resizable sidebars**: Drag the sidebar edge to resize (180-400px), with keyboard and touch support, persisted in settings
- **Sender info panel**: Click a sender's name to see their contact info, add to contacts, or search all their emails
- **OAuth-only mode**: New `OAUTH_ONLY` env var hides the username/password form and only shows SSO login (#32)
- **OAuth retry**: Added retry button when OAuth discovery fails, preventing dead-end login pages

### Improvements

- Mobile/tablet layout transitions are now CSS-first — no more blink on orientation change
- More Actions dropdown works on touch devices (was hover-only)
- Touch-friendly context menu submenus (tap-to-expand instead of hover)
- Wide HTML emails are horizontally scrollable in iframe view

## 1.1.4 (2026-03-16)

### Fixes

- **Mobile**: Bottom navigation bar now stays visible when viewing an email, so users can switch between Mail/Calendar/Contacts (#30)
- **Move to folder**: Dialog now shows hierarchical folder structure instead of a flat list (#29)

## 1.1.3 (2026-03-16)

### Fixes

- **Calendar**: Fix crash when opening calendar with events that have no duration field (e.g. all-day events from certain clients) (#31)
- **Sieve filters**: Fix "Invalid property or value" error when saving filters — use `onSuccessActivateScript` per RFC 9661 instead of setting `isActive` directly (#21)
- **Security**: Update dompurify 3.3.1→3.3.3 (XSS fix), undici 7.22.0→7.24.4 (WebSocket crash, CRLF injection, HTTP smuggling), flatted 3.3.3→3.4.1 (DoS fix)

## 1.1.2 (2026-03-02)

### Fixes

- **Context menu**: Fix "Move to folder" submenu closing when scrolling the folder list or moving the mouse to the submenu (#19)
- **Move to folder**: Fix emails not actually moving on the server — JMAP response errors were silently ignored and shared account IDs were not resolved correctly
- **Dependencies**: Update tailwindcss, lucide-react, @tanstack/react-virtual, @typescript-eslint/*, globals, @types/node

## 1.1.1 (2026-02-28)

### Fixes

- **Email viewer**: Show/hide details toggle now stays in place when expanded instead of jumping to the bottom of the details section (#18)
- **Email viewer**: Details toggle text is now properly translated (was hardcoded in English)
- **Instrumentation**: Resolve Edge Runtime warnings by splitting Node.js-only code into a separate module
- **Security**: Patch minimatch ReDoS vulnerability (CVE-2026-27903) — upgrade 9.0.6→9.0.9 and 3.1.3→3.1.5

## 1.1.0 (2026-02-28)

- Server-side version update check on startup (logs when a newer release is available)

## 1.0.2 (2026-02-27)

- Fix 4 CVEs in production Docker image (removed npm, upgraded Alpine packages)

## 1.0.1 (2026-02-26)

- Remove stale references, clean up README

## 1.0.0 (2026-02-25)

- Initial public release
