import React, { Component } from 'react';
import { Header, Grid, Container, Segment, Image, List, Item, Divider, Card } from 'semantic-ui-react';
import ImgHeader from '../images/home.jpg';
import LogoMed from '../images/ims-logo-med.png';
import Fire from '../images/home-with-fire-06.jpg';
import FloorPlan from '../images/floor-plan-rendering.jpg';
import Kitchen from '../images/kitchen-rendering.jpg';
import {
  HeroHeader,
  HeroHeaderTextContainerLeft,
  HeroHeaderTextContainerRight,
  HeroHeaderH1,
  HeroHeaderH1UpperLeft,
  HeroHeaderH1LowerRight,
} from '../css/styles';
import SubmitForm from './partials/SubmitForm';
import Footer from './partials/Footer';
import { styles } from '../css/inlineStyles.js';

class Home extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <HeroHeader bgImage={Fire}>
            <HeroHeaderTextContainerLeft>
              <HeroHeaderH1>
                When Disaster Strikes...
              </HeroHeaderH1>
            </HeroHeaderTextContainerLeft>
            <HeroHeaderTextContainerRight>
              <HeroHeaderH1>
                ...you still have options.
              </HeroHeaderH1>
            </HeroHeaderTextContainerRight>
          </HeroHeader>
        </Container>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={1}>
              </Grid.Column>
              <Grid.Column width={14}>
                <Header as='h3' align='center'>
                  If your home has been destroyed in the recent fires, you are probably facing options like living in a hotel, B&B, or rental apartment — or with friends or family — for months or years to come.
                </Header>
                <Header as='h3'>&nbsp;</Header>
                <Header as='h2' align='center'>
                  What if there's a better option?
                </Header>
              </Grid.Column>
              <Grid.Column width={1}>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/* <Grid.Column width={6}>
                <Divider hidden>
                  <Image src={LogoMed} style={styles.logo}/>
                </Divider>
              </Grid.Column> */}
              <Grid.Column width={16}>
                <Divider />
                <Header as='h3'>
                  Introducing Intermodal Structures
                </Header>
                We may be able to provide you the option to live in a quality, newly-fabricated, modern home <em>on your own property</em>, and remain within the community you love while your new home is being built after the fire.
                <Divider />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h2' align='center'>
                  imsTRU Homes are top-quality, modern Transitional Residential Units
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Image.Group size='large'>
                  <Image src={Kitchen} centered />
                  <Image src={FloorPlan} centered />
                </Image.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as='h4' align='center'>
                  Representative of the quality of the TRU interior
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={16}>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container>
          <Grid columns='equal' padded>
            <Grid.Row>
              <Grid.Column align='center'>
                <Card.Group itemsPerRow={3}>
                  <Card>
                    <Card.Header as='h2' style={styles.h2CardHeaderBlue}>
                      About<br />Intermodal Structures
                    </Card.Header>
                    <Card.Content style={styles.cardContentNoTopLine}>
                      <List bulleted style={styles.listLeft}>
                        <List.Item>
                          We quickly manufacture and deliver steel-frame buildings anywhere in the world
                        </List.Item>
                        <List.Item>
                          These homes are highly customizable. And, thanks to modern materials design, interior and exterior surfaces can be finished with a wide variety of options.
                        </List.Item>
                        <List.Item>
                          We utilize world-class offsite manufacturing processes to ensure the highest quality and a quick assembly on location.
                        </List.Item>
                      </List>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Header as='h2' style={styles.h2CardHeaderOrange}>
                      Benefits<br />of imsTRU Homes
                    </Card.Header>
                    <Card.Content>
                      <List bulleted style={styles.listLeft}>
                        <List.Item>
                          imsTRU Homes are located on your land.
                        </List.Item>
                        <List.Item>
                          Installation within 4 to 5 months. On-site time can be as short as a few days!
                        </List.Item>
                        <List.Item>
                          It's easy to hook up to existing utilities.
                        </List.Item>
                        <List.Item>
                          No foundation required for a single-story configuration.
                        </List.Item>
                        <List.Item>
                          Class A interior improvements.
                        </List.Item>
                        <List.Item>
                          Three separate floor plans, each with an 8’ X 40’ covered deck.
                        </List.Item>
                        <List.Item>
                          Strong construction and super-fast on-site assembly.
                        </List.Item>
                      </List>
                    </Card.Content>
                  </Card>
                  <Card>
                    <Card.Header as='h2' style={styles.h2CardHeaderGreen}>
                      Benefits For<br />Your Family
                    </Card.Header>
                    <Card.Content>
                      <List bulleted style={styles.listLeft}>
                        <List.Item>You all remain in your community as your permanent home is being built.</List.Item>
                        <List.Item>Commutes to work don't have to change.</List.Item>
                        <List.Item>kKds don't have to relocate schools.</List.Item>
                      </List>
                    </Card.Content>
                  </Card>
                </Card.Group>
                <Segment basic></Segment>
                <Segment basic align='left'>
                  <p>Intermodal structures are currently working with major insurance companies to be able to provide you with the option to live on your own property while your home is being rebuilt, at no cost to you. Relaxation of set-back requirements since the California fires enables creative placement of imsTRU Homes, and we expect this approval to come through shortly.</p>
                  {/* Net Zero - self-generates all the electricity the home requires.<br /> */}
                  <p>If you are interested in hearing more about this option, just fill out the form below and we will let you know as soon imsTRU Homes are approved for your area, and we can help you with starting the process of getting your imsTRU Home placed on your property as quickly as possible.</p>
                  <p><br /></p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Container fluid>
          <Grid>
            {/* <Grid.Row>
              <Grid.Column width={16}>
                <Segment basic>
                  &nbsp;
                </Segment>
              </Grid.Column>
            </Grid.Row> */}
            <Grid.Row>
              <Grid.Column width={16}>
                <SubmitForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Home;
