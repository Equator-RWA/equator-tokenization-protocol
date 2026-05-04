# Equator Tokenization Protocol

> An open-source suite for issuing and managing SEP-8 Regulated Assets (Real World Assets) on Soroban.

[![Equator Protocol CI](https://github.com/Equator-RWA/equator-tokenization-protocol/actions/workflows/ci.yml/badge.svg)](https://github.com/Equator-RWA/equator-tokenization-protocol/actions)
[![Built with Soroban](https://img.shields.io/badge/Built_with-Soroban-blue.svg)](https://soroban.stellar.org/)

## The Vision
Institutional adoption of blockchain requires strict compliance tooling. The **Equator Tokenization Protocol** provides a standard, open-source foundation for issuing Real World Assets (RWAs) on Stellar using the SEP-8 (Regulated Assets) standard. It allows issuers to freeze accounts, maintain KYC/KYB allowlists, and programmatically authorize transactions.

This project is currently in its "V1 Minimum Viable Scaffold" stage, designed for open-source community contributions via the Drips funding program.

## Architecture (Monorepo)
Managed via [Turborepo](https://turbo.build/repo/docs) with highly optimized CI/CD caching for Rust and Node modules.

*   `packages/contracts` (Rust): The on-chain asset contract implementing the SEP-8 authorization flag.
*   `packages/webhook-api` (Node.js/Fastify): A high-throughput receiver for third-party KYC provider webhooks.
*   `packages/admin-panel` (Next.js): A dashboard for Asset Issuers to view pending requests and sign on-chain authorizations.

## Quick Start

### Prerequisites
*   Node.js (v20+)
*   Rust (v1.85+)
*   Soroban CLI

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Equator-RWA/equator-tokenization-protocol.git](https://github.com/Equator-RWA/equator-tokenization-protocol.git)
   cd equator-tokenization-protocol
   ```
2. Install dependencies:
    ```bash
    npm install
    ```
2. Run the development server (API + Admin Panel):
    ```bash
    npm run dev
    ```
## Contributing
We invite the Stellar developer community to help us build this critical institutional infrastructure! Please see our CONTRIBUTING.md for guidelines and "Good First Issues".

## License
MIT