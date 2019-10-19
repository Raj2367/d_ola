import web3 from './web3'
import PatientFactory from './build/PatientFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(PatientFactory.interface),
    '0x22521d5dbc9fA9df67B9253eC3a32A5997b18652'
);

export default instance;