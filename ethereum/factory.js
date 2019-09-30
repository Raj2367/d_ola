import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x7e8c605847187d3a66fa8c7ee73a96f723cceebc'
);

export default instance;