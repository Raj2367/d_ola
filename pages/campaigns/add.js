import React, { Component } from 'react';
import { Form, Button, Message, Label, Input, Grid, Image,Dimmer, Loader, Card } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';
import Layout from '../../components/Layout';
import { Map,InfoWindow,Marker, GoogleApiWrapper } from 'google-maps-react';
import CurrentLocation from './CurrentLocation';

class RequestNew extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496}]
        }
      }
    
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
    static async getInitialProps(props) {
        const { address } = props.query;
        const campaign = Campaign(address);
        //const requestCount = await campaign.methods.getRequestsCount().call();

        // const requests = await Promise.all(
        //     Array(parseInt(requestCount))
        //         .fill()
        //         .map((element, index) => {
        //             return campaign.methods.requests(index).call();
        //         })
        // );

        return { requests, address };
    }
    
    state = {
        cName: '',
        pickupLocation: '',
        dropLocation: '',
        flag: false,
        loading: false,
        flag2: false,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    onFinalize = async event => {
        event.preventDefault();

        this.setState({flag2: true});

        window.open(`/campaigns/${this.props.address}/vote`,"_blank");
    }

    onShowResult = async event => {
        event.preventDefault();
        window.open(`/campaigns/${this.props.address}/results`,"_blank");
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { cName, pickupLocation, dropLocation } = this.state;

        this.setState({loading: true});

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(cName, pickupLocation , dropLocation).send({
                from: accounts[0]
            });

            this.setState({ cName: '', dropLocation: '', pickupLocation: '' });

            Router.pushRoute(`/campaigns/${this.props.address}/dashboard`);
        } catch (err) {
            console.log(err.message);
        }
        this.setState({flag: true});
        this.setState({loading: false});
    }

    // renderRows() {

    //     const items = this.props.requests.map((request, index) => {
    //         return {
    //             image: request.dropLocation,
    //             header: request.pickupLocation,
    //             meta: request.cName
    //         }
    //     });
    //     return <Card.Group itemsPerRow={3} items={items} style={{ marginRight: '30px' }} />;
    // }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={11}>
                        {/* {this.renderRows()} */}
                        {/* <Map
                            google={this.props.google}
                            zoom={8}
                            style={{
                                width: '90%',
                                height: '100%',
                              }}
                            initialCenter={{ lat: 47.444, lng: -122.176}}
                        >
                        {this.displayMarkers()}
                        </Map> */}
                        <CurrentLocation
                                centerAroundCurrentLocation
                                google={this.props.google}       
                        >
                            <Marker onClick={this.onMarkerClick} name={'current location'} />
                            <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                            >
                            <div>
                                {/* <h4>{this.state.selectedPlace.name}</h4> */}
                                <h6>current location</h6>
                            </div>
                            </InfoWindow>
                        </CurrentLocation>
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <h3>Book Cab</h3>
                        <Form disabled={this.state.flag2} onSubmit={this.onSubmit} >
                            <Form.Field>
                                <label>Name of the Customer</label>
                                <Input
                                    value={this.state.cName}
                                    onChange={event => this.setState({ name: event.target.value })}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Enter pickup location</label>
                                <Input
                                    value={this.state.pickupLocation}
                                    onChange={event => this.setState({ pickupLocation: event.target.value })}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Enter drop location</label>
                                <Input
                                    value={this.state.dropLocation}
                                    onChange={event => this.setState({ dropLocation: event.target.value })}
                                />
                            </Form.Field>

                            <Button primary disabled={this.state.flag2} >Check for the nearest cabs</Button>
                        </Form>
                        <Form onSubmit={this.onFinalize}>
                            <Button inverted color='blue' style={{ marginTop: '25px' }} disabled={!this.state.flag} >Start Election!</Button>
                        </Form>
                        <Form onSubmit={this.onShowResult}>
                            <Button inverted color='blue' style={{ marginTop: '25px' }} disabled={!this.state.flag} >Show Result</Button>
                        </Form>

                    </Grid.Column>
                </Grid>

                <Dimmer active={this.state.loading} inverted>
                    <Loader size='large'>Searching for cabs</Loader>
                </Dimmer>
            </Layout>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDCVpYzEWOzQQxpQGw8fEanrHfoSIKnjGQ'
  })(RequestNew);