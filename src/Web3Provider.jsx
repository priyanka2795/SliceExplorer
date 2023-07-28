import web3 from "web3";

var options = {
    reconnect: {
        auto: true,
        delay: 5000, // ms
        maxAttempts: 5,
        onTimeout: false
    }
};

const provider = new web3( new web3.providers.WebsocketProvider('wss://mainnet-slice-rpc.com/ws', options));
// const provider = new web3( new web3.providers.WebsocketProvider('wss://test-slice-rpc.com/ws', options));

export const Web3 = new web3(provider);