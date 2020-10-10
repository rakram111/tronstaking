const contractAddress = 'TGADvag1FLFHp7xrwM4UX8QwZYWLroDZ96'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;