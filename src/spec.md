# Specification

## Summary
**Goal:** Replace the broken passcode gate with link-only access using a secret URL token validated by the backend, and remove all password UI.

**Planned changes:**
- Remove the passcode/password access flow from the frontend so the app never shows a passcode entry screen and no longer uses `AccessGateScreen` / `usePasscodeGate`.
- Remove or stop using the backend `authenticatePasscode` API associated with passcode entry.
- Add link-only access: require a secret token in the URL (e.g., query parameter) and validate it via the backend before rendering any prank/proposal/victory scenes.
- Add a minimal blocked-access UI state that appears when the token is missing/invalid, with clear English text and no token disclosure.
- Update `frontend/DEPLOYMENT.md` to document link-token setup/change in the backend, how to form the shareable URL with token, and the limitation that anyone with the link can access.

**User-visible outcome:** Visitors can only access the Valentine scene flow by opening the correct tokenized link; otherwise they see an “invalid link” blocking screen, with no passcode prompt anywhere.
