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
  View,
  Body,
  Text,
  ListItem,
  List
} from "native-base";

import styles from "./styles";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body><Title>Page name</Title></Body>
          <Right />
        </Header>

        <Content padder>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero culpa veniam debitis velit dicta corporis est reiciendis fugit! Quod reiciendis ea neque illum reprehenderit aspernatur. Ab quas aspernatur unde voluptatem, totam recusandae molestias placeat porro aliquam dolor aut architecto maxime, eligendi saepe labore natus hic voluptates deleniti dolorum ut? Adipisci.
        </Content>
      </Container>
    );
  }
}

export default Page;
