const contractAddress = 'TBttcvHsKoUt19HhRTx8XarCv2NGq7rTFV'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;