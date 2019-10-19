import web3 from './web3';
import PatientFactory from './build/PatientFactory.json';

export default (address) => {
    return new web3.eth.Contract(
        JSON.parse(PatientFactory.interface),
        address
    );
}