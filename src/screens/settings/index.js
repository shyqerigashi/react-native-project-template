import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  List
} from "native-base";

import styles from "./styles";

class Settings extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
        pages: []
    };
  }

  componentDidMount(){
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
              return (
                <ListItem
                  button
                  onPress={() => }
                >
                  <Left>
                    <Text>
                      Page Name
                    </Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" style={{ color: "#999" }} />
                  </Right>
                </ListItem>
              )
          </List>
        </Content>
      </Container>
    );
  }
}

export default Settings;
