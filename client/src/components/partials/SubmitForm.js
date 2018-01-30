import React, { Component } from 'react';
import axios from 'axios';
import { Header, Form, Button, Segment, Dropdown, Grid, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addLead } from '../../actions/leads';
import { flash } from '../../actions/flash';
import { setFlash } from '../../actions/flash';
import { styles } from '../../css/inlineStyles.js';
import { titleOptions, phoneTypeOptions, stateOptions } from './FormOptions.js';
import { withRouter } from 'react-router-dom';

class SubmitForm extends Component {
  state = { title: '', firstName: '', lastName: '', phone: '', phoneType: '', email: '', state: '', city: '', insuranceCompany: '' }

  handleSubmit = event => {
    event.preventDefault();
    const { title, firstName, lastName, phone, phoneType, email, state, city, insuranceCompany } = this.state;
    const { dispatch, history } = this.props;
    debugger;

    // TODO: better error checking
    if (firstName === '') {
      console.log('Please complete all fields');
    } else {
      axios.post('/api/leads', this.state)
      .then(function (res) {
        // window.location = res.data.redirect;
        // history.push(`./${res.data.id}`);
        // history.push(`./leads/${res.data.id}`);
        // window.location = '/success';
        // this.props.history.push('/success');
        history.push('/success');
      })
      .catch( err => {
        console.log('Failed to add contact');
      });
    }
  }

  handleChange = event => {
    // use e to grab the id off the element also the value and set state
    // const { id, value } = event.target;
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
    console.log(this.state);
  }
  handleOptionChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    const options = event.target.options;
    this.setState({ [id]: value });
    console.log(event.target);
    console.log(event.target.value);
    console.log(event.target.options);
    console.log(this.state);
  }

  render() {
    const { title, firstName, lastName, phone, phoneType, email, state, city, insuranceCompany } = this.state;

    return (
      <Container fluid style={styles.lightGrayBg}>
        <Container>
          <br />
          <Header as='h1' textAlign='center' style={styles.whiteText}>Tell me more!</Header>
          <Form onSubmit={this.handleSubmit}>
            <Grid>
              <Grid.Row>
                <Grid.Column width={2} style={styles.whiteText}>
                  <Dropdown
                    id='title'
                    placeholder='Title'
                    fluid
                    selection
                    required
                    search
                    options={titleOptions}
                    onChange={this.handleOptionChange}
                  >

                  </Dropdown>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Form.Field>
                    <input
                      id='firstName'
                      placeholder='First Name'
                      required
                      value={firstName}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Form.Field>
                    <input
                      id='lastName'
                      placeholder='Last Name'
                      required
                      value={lastName}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={7}>
                  <Form.Field>
                    <input
                      id='email'
                      placeholder='Email'
                      required
                      value={email}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Form.Field>
                    <input
                      id='phone'
                      placeholder='Phone'
                      required
                      value={phone}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={4}>
                  <Dropdown
                    id='phoneType'
                    placeholder='Phone Type'
                    fluid
                    selection
                    required
                    options={phoneTypeOptions}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column width={2}>
                  <Dropdown
                    id='state'
                    placeholder='State'
                    fluid
                    selection
                    required
                    options={stateOptions}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
                <Grid.Column width={7}>
                  <Form.Field>
                    <input
                      id='city'
                      placeholder='City of your property'
                      required
                      value={city}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Form.Field>
                    <input
                      id='insuranceCompany'
                      placeholder='Insurance Company'
                      required
                      value={insuranceCompany}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Segment basic textAlign='center'>
              <Button type='submit'>Submit</Button>
              <br /><br />
            </Segment>
          </Form>
        </Container>
      </Container>
    );
  }
}

// export default connect()(SubmitForm);
// export default SubmitForm;
export default withRouter(SubmitForm);
