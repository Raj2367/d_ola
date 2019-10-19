pragma solidity ^0.4.17;

contract PatientFactory 
{
    address[] public deployedPatients;
    
    function createPatient() public {
            address newPatient = new Patient(msg.sender);
            deployedPatients.push(newPatient);
    }
    
    function getDeployedPatients() public view returns (address[]) {
        return deployedPatients;
    }
}

contract Patient {
    
    struct Request {
        string comment;
    }
    
    address public manager;
    Request[] public requests;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function Patient(address creator) public {
        manager = creator;
    }
    
    function createRequest(string comment) public {
         Request memory newRequest = Request({
            comment: comment
         });       
         requests.push(newRequest);
    }

    function getRequestsCount() public view returns(uint) {
        return requests.length;
    }

}