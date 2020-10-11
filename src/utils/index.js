const contractAddress = 'TFbF7QQkSoGsoHxT1XHxpRwp44qz3jL54t'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;