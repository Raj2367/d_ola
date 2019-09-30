pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;
    function createCampaign() public {
            address newCampaign = new Campaign(msg.sender);
            deployedCampaigns.push(newCampaign);
    }
    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string cName;
        string pickupLocation;
        string dropLocation;
        uint cost;
    }
    mapping(address => bool) voters;
    address public manager;
    Request[] public requests;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    function Campaign(address creator) public{
        manager = creator;
    }
    function createRequest(string cName, string pickupLocation, string dropLocation) public restricted {
         Request memory newRequest = Request({
            cName: cName,
            pickupLocation: pickupLocation,
            dropLocation: dropLocation,
            cost: 0
        });
         requests.push(newRequest);
    }
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        require(!voters[msg.sender]);
        voters[msg.sender] = true;
        request.cost++;
    }
    function getRequestsCount() public view returns(uint) {
        return requests.length;
    }

}