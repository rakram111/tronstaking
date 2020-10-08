const contractAddress = 'TNUXfvA37EbWHp81S9iqQ4UkHvNNVfM6Ae'

const utils = {
    tronWeb: false,
    contract: false,

    async setTronWeb(tronWeb) {
        this.tronWeb = tronWeb;
        this.contract = await tronWeb.contract().at(contractAddress)
    },

};

export default utils;