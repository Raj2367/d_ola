import React, { Component } from 'react';
import { Card, Button, Input, Form ,Grid} from 'semantic-ui-react';
import Campaign from '../ethereum/patientFactory';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePush = this.handlePush.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  
  static async getInitialProps(props) {

    const patientsIds = await factory.methods.getDeployedIds().call();
    const addresses = await factory.methods.getDeployedPatientsAddress().call();
   
    return { patientsIds, addresses };
}

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {

  console.log(this.props.patientsIds);
  console.log(this.props.addresses);

  const id = this.state.value;
  this.handlePush(id);

}

async handlePush(item) {

  if( this.handleCheck(item) == false ) {

    const account = await web3.eth.getAccounts();

    console.log(account[0]);

    // try {
          
    //     const newPat = await factory.methods
    //     .createPatient(this.state.value)
    //     .send({
    //         from: account[0]
    //     });
          
    //       const campaigns = await factory.methods.getDeployedPatientsAddress().call();

    //       const address = campaigns[campaigns.length - 1];

    //       console.log(newPat);
    //       console.log(address);
    // } catch (err) {
    //   console.log(err);
    // }

  } else {
    console.log('Exists');
  }
}

handleCheck(val) {
  return this.props.patientsIds.some(item => val === item);
 }

    render() {

      return (
      <Layout>
        <Grid>
          <Grid.Column width={6}>
          <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Enter your Aadhar number</label>
                  <Input type="text" value={this.state.value} onChange={this.handleChange} />
                </Form.Field>
                <Input type="submit" value="Submit" />
            </Form>
            </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignIndex;