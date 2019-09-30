import React, { Component } from 'react';
import { Form, Button, Input, Message, Dimmer, Loader } from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
import { Carousel, Container, Row, Col} from 'react-bootstrap';

const divStyle = {
    width: `600px`,
}

const imgStyle = {
    height: `400px`
}

class CampaignNew extends Component {

    state = {
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();
        
        const account = await web3.eth.getAccounts();
        console.log(account[0]);
        
        this.setState({ loading: true, errorMessage: '' });
        

        try {
            const add = await factory.methods
                .createCampaign()
                .send({
                    from: account[0]
                });

            const campaigns = await factory.methods.getDeployedCampaigns().call();

            const address = campaigns[campaigns.length - 1];

            Router.pushRoute(`/campaigns/${address}/dashboard`);

        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ loading: false });
        }
    };

    render() {
        
        return (
            <Layout>
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div>
                                <br/><br/><br/><br/><br/>
                                <h3 textalign='center'>Book a Cab</h3>
                                <br/>
                                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >

                                    <Button style={{ marginTop: '10px' }} primary> Create a Request </Button>
                                    <Message error header="Something Went Wrong." content={this.state.errorMessage} />

                                </Form>
                                <Dimmer active={this.state.loading} inverted>
                                    <Loader size='large'>Deploying booking request on Blockchain.</Loader>
                                </Dimmer>

                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={divStyle}>
                                <Carousel interval={3000} fade={true} controls={false}>
                                    <Carousel.Item>
                                        <img style={imgStyle}
                                            className="d-block w-100"
                                            src="https://www.mishawakataxiservice.com/uploads/8/9/6/2/89626275/6487161_1_orig.jpg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img style={imgStyle}
                                            className="d-block w-100"
                                            src="https://d3l69s690g8302.cloudfront.net/wp-content/uploads/2015/02/20120322/Taxi-624x312.jpg"
                                            alt="second slide"
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img style={imgStyle}
                                            className="d-block w-100"
                                            src="https://media.cntraveller.in/wp-content/uploads/2018/08/GoaMiles1-866x487.jpg"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default CampaignNew;
