const bitcoin = require('bitcoinjs-lib');
const seedPhraseGenerator = require('seed-phrase-generator');

function generateSeedPhrase() {
    return seedPhraseGenerator.generateSeedPhrase();
}

function createBitcoinWallet(seedPhrase) {
    const seed = Buffer.from(seedPhrase, 'hex');

    const root = bitcoin.bip32.fromSeed(seed);
    const node = root.derivePath("m/44'/0'/0'/0/0");
    const privateKey = node.toWIF();

    const publicKey = bitcoin.ECPair.fromPrivateKey(node.privateKey).publicKey.toString('hex');

    const { address } = bitcoin.payments.p2pkh({ pubkey: Buffer.from(publicKey, 'hex') });

    return {
        address: address,
        privateKey: privateKey
    };
}

module.exports = {
    generateSeedPhrase: generateSeedPhrase,
    createBitcoinWallet: createBitcoinWallet
};
