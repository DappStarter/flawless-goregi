require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remain unknown include clinic surge genre'; 
let testAccounts = [
"0xe42ce82001cc183636c395e158e2d8aa68ae1ac8b0fe86465353c337f5ed560c",
"0x890491584b4f6da3dc5bad002e2b526d74506ca42f6d8ef4f3822502147cf84d",
"0x84c2d8b5f88b94b2e2792d8d73e01aa47747750634893c5c07a5ee6c65f6a3b5",
"0xe36eb1d0daed9e62deaef3d6f82ab5ac0c19220ecf53ed9a1165c5c1a06b59e7",
"0xda7c7b00ae7afafb69b4c3e17ac635f22832ced1b8ff2846bffd9d59615e8140",
"0xd916376aaab0f7b06ac6a5e44e09b5455eb642a2f474a20e7ba7775729178d36",
"0xa9d2a7e3e65fd6576c726c1e6238f5714b11fccba22dae073abc1f25fa439dc5",
"0x97b734e6859eff3a7ed3d3c9c3a2549f8121066c4c0c210b62579cd8de526a94",
"0x87943dc7e38e8ffcff8b333e4592db5998842964dba49ddcb3603a0ebbcade43",
"0xc8bcbb3f84e28f791397e780ba84f4f9bfd05edb10f0d26ea7e4aa71e57af7cb"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

