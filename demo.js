const bitcoinWalletGenerator = require('./bitcoin-wallet-generator');

const seedPhrase = bitcoinWalletGenerator.generateSeedPhrase();

const bitcoinWallet = bitcoinWalletGenerator.createBitcoinWallet(seedPhrase);

console.log('Seed Phrase:', seedPhrase);
console.log('Bitcoin Address:', bitcoinWallet.address);
console.log('Bitcoin Private Key:', bitcoinWallet.privateKey);
