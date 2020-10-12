const contractAddress = 'TKUN8u8tBLDvfiL8qZjcFZABHvdavoT85n'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;