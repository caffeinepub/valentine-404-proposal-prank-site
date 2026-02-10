# Valentine's Day Proposal Prank - Deployment Guide

This is a romantic, interactive Valentine's Day proposal website with link-only access control.

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

## Link-Only Access Configuration

### How Link-Only Access Works

This app uses a secret token in the URL to control access. Only users with the complete link (including the token) can view the romantic surprise. The token is validated by the backend canister, so it's not exposed in the frontend code.

### Setting/Changing the Secret Token

1. **Edit the backend secret token:**
   Open `backend/main.mo` and locate this line:
   ```motoko
   let internalSecret = "my_secret_value";
   ```

2. **Change it to your desired secret token:**
   ```motoko
   let internalSecret = "YourUniqueSecretToken123";
   ```
   
   💡 **Tip:** Use a long, random string that's hard to guess. You can generate one using:
   ```bash
   openssl rand -base64 32
   ```

3. **Redeploy the backend:**
   ```bash
   dfx deploy backend
   ```

### Creating the Shareable Link

After setting your secret token and deploying, create the shareable link by adding the token as a query parameter:

**Format:**
