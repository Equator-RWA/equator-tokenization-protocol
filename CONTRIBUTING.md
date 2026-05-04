# Contributing to Equator RWA

Welcome! Thank you for your interest in building open-source compliance infrastructure on Stellar.

## How to Contribute
1.  **Find an Issue:** Look for issues tagged `good first issue`, `rust`, `api`, or `frontend`.
2.  **Fork and Branch:** Create a feature branch (`git checkout -b feat/your-feature`).
3.  **Code:** Implement your solution.
4.  **Test:** Ensure your changes build via our strict CI pipeline using `npm run build` from the root.
5.  **Submit a PR:** Open a Pull Request for review!

## Key Areas Needing Contribution
*   **Smart Contracts (`packages/contracts`):** Implementing the actual authorization mapping and `is_authorized` checks for the SEP-8 implementation.
*   **Webhook API (`packages/webhook-api`):** Adding `@stellar/stellar-sdk` to allow the API to securely sign and submit `authorize` transactions to the network upon receiving a KYC webhook.
*   **Admin Panel (`packages/admin-panel`):** Wiring up the Freighter wallet to allow human Issuers to manually override or approve pending user authorizations.