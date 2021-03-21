require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note often million hover private bottom total'; 
let testAccounts = [
"0x4f0da8b722484b142304ce414d89e5fff6654304be4be5f7a52e611a9ffd1afb",
"0xfb4e4d8ccd77d3435f50ad306536e17c12ef26ca54861a7d71d730ca399b3bbb",
"0x223a85f503d915c114e90123b2007524113dced73c0d08ff887a848bc336a97f",
"0x0c33b7ab03567d3da966c13c77826229fa53f122cbbb6f9d85b13bb26e167a98",
"0x13db766a12901153dfd75f18d4cde5ad590ceafd98341c147e2249ac0c807d97",
"0x425f65ea34c3960a9764b5f08e169dd21f102efc87e29c734cbc185a97ebf6b6",
"0x356c5055b945995b9cb4592206aff0837f88ad266f0e521255f0e6b3e76d8675",
"0x29ef742d772a1096a12c74c9e1b20370f37f18e4b169e671bdb3e19ce6f448f8",
"0x4c82feb5cc960c1cc997d42bcd9feb6673c01f7c96264a9487a9be81b8fd82c3",
"0x71a49a01f88fc7aadcf90efcfda33ba7a9dd519dcf18e795de1d6289adcd4d9b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
