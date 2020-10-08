const contractAddress = 'TSEM235dPYrE6YC8ova1zCQcDFCV8uaMbH'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;