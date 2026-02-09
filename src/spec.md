# Specification

## Summary
**Goal:** Build a single-page, mobile-first Valentine’s Day proposal prank experience that starts as a glitchy 404, transitions into a proposal prompt, and ends with a celebratory YES victory screen.

**Planned changes:**
- Implement one-page, client-side scene/state switching for three scenes (404 prank → proposal → victory) with smooth transitions and no routing/URL changes.
- Create the fake 404 prank scene with exact required texts, a prominent glitch-animated “404”, progressive cracked-heart animation, dark romantic gradient background, and subtle floating heart particles.
- Add a “glitch-fix” transition that triggers automatically after ~10–15 seconds or immediately on any click/tap/mousemove, including flash/glitch overlay, shake, and fade-out before revealing the proposal.
- Build the proposal scene with the exact heading text and two large mobile-friendly buttons: YES (green, white text, includes heart emoji) and NO (red, white text).
- Implement NO evasive behavior for desktop + mobile with escalating interaction states and exact label changes; if clicked, show the exact denial message and reset NO state.
- Implement YES flow to replace the page with a victory scene featuring a confetti burst, ongoing raining hearts, and a romantic message sourced from a single editable constant (shipping a non-explicit default).
- Apply consistent romantic/cute styling across all scenes using Google Fonts (Dancing Script for headings, Poppins for body) and pink/red/white/gold accents, with a coherent theme direction.
- Add a small persistent music toggle for looping background music with a clearly commented placeholder for the audio URL/path if none is bundled.
- Add an optional victory-screen image area for an original “cute hugging characters” illustration (or hide it when not provided).
- Ensure the project builds cleanly and include minimal in-project instructions for deploying to the Internet Computer to obtain a shareable canister URL.

**User-visible outcome:** A shareable, mobile-friendly prank proposal site that starts with a glitchy 404 “Love Not Found 💔”, reveals a “Will you be my Valentine” prompt with a comedic evasive NO button, and celebrates a YES with confetti, raining hearts, optional cute illustration, and toggleable background music.
