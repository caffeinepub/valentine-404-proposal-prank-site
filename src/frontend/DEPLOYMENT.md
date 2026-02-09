# Valentine's Day Proposal Prank - Deployment Guide

This is a romantic, interactive Valentine's Day proposal website that runs entirely client-side (no backend required).

## Local Development

1. **Install dependencies:**
   ```bash
   cd frontend
   pnpm install
   ```

2. **Start the development server:**
   ```bash
   pnpm start
   ```
   
   The app will be available at `http://localhost:3000`

## Deploy to Internet Computer

1. **Make sure you have dfx installed:**
   ```bash
   dfx --version
   ```
   If not installed, follow the [DFINITY SDK installation guide](https://internetcomputer.org/docs/current/developer-docs/setup/install/).

2. **Start the local Internet Computer replica (for testing):**
   ```bash
   dfx start --background
   ```

3. **Deploy the canisters:**
   ```bash
   dfx deploy
   ```

4. **Get your shareable URL:**
   After deployment, dfx will output the canister URLs. Look for the frontend canister URL, which will look like:
   ```
   Frontend canister via browser:
     frontend: http://127.0.0.1:4943/?canisterId=<CANISTER_ID>
   ```

5. **For production deployment (live on IC mainnet):**
   ```bash
   dfx deploy --network ic
   ```
   
   After deployment, your shareable URL will be:
   ```
   https://<CANISTER_ID>.ic0.app
   ```
   or
   ```
   https://<CANISTER_ID>.raw.ic0.app
   ```

## Customization Tips

### Add Background Music
Edit `frontend/src/components/valentine/MusicToggle.tsx` and replace the empty audio source with your music file:
