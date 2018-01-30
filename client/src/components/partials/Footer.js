import React from 'react';
import { Segment, Image, Container, Grid, Icon, List } from 'semantic-ui-react';
import { styles } from '../../css/inlineStyles';
import '../../css/styles.js';
import LogoMed from '../../images/ims-logo-med.png';

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Grid padded stackable>
          <Grid.Row />
          <Grid.Row>
            <Grid.Column width={11}>
              <Image size='medium' src={LogoMed} />
            </Grid.Column>
            <Grid.Column width={5}>
              <List>
                <List.Item style={styles.lightGrayText} >
                  <List.Icon name='map pin' />
                  <List.Content>
                    251 Bagley Street<br />
                    Mare Island, CA 94592<br />
                  </List.Content>
                </List.Item>
                <List.Item
                  icon='phone'
                  style={styles.lightGrayText}
                  content='707-935-2500'
                />
                <List.Item style={styles.lightGrayText}>
                  <List.Icon name='mail outline' />
                  <List.Content>
                    info@intermodalstructures.com
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={11}>
              <Segment basic style={styles.lightGrayText}>
                High Performance Buildings Anywhere<br />&nbsp;<br />
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default Footer;
