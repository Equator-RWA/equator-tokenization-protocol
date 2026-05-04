import Fastify from 'fastify';

const fastify = Fastify({ logger: true });

// V1 Scaffold: Mock KYC Webhook Receiver
fastify.post('/webhooks/kyc-approval', async (request, reply) => {
    const { userId, stellarAddress, status } = request.body as any;

    fastify.log.info(`Received KYC update for ${stellarAddress}: ${status}`);

    if (status === 'APPROVED') {
        // MOCK EXECUTION:
        // In a real environment, this API would hold the Issuer's private key (securely)
        // and submit a Soroban transaction to the contract to authorize this address.

        // GOOD FIRST ISSUE TODO:
        // 1. Integrate @stellar/stellar-sdk.
        // 2. Safely load the Issuer's secret key from environment variables.
        // 3. Construct and submit the transaction calling `authorize_address(stellarAddress)` 
        //    on the EquatorRegulatedAsset smart contract.

        return { success: true, message: 'Address queued for on-chain authorization.' };
    }

    return { success: false, message: 'Status not approved.' };
});

const start = async () => {
    try {
        await fastify.listen({ port: 3001 });
        console.log('Equator Webhook API listening on http://localhost:3001');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();