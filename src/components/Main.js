import React, { Component } from "react";
import Header from "./Header";
import Home from "./Home";
import Page2 from "./Page2";
import { Switch, Route, Redirect } from "react-router-dom";
import { customUrl } from "../urlApi/customUrl";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menu: [],
      slider: [],
      descriptionHome: "",
      imageGallery: [],
      titleServices: "",
      graphText: [],
      stats: [],
      fotmText: [],
      formLabels: [],
      buttonText: "",
      descriptionPage: "",
      tiles: [],
      isLoadingMenu: false,
      isLoadingSlider: false,
      isLoadingHome: false,
      isLoadingPage: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoadingMenu: true,
      isLoadingSlider: true,
      isLoadingHome: true,
      isLoadingPage: true
    });

    fetch(customUrl + "menu")
      .then(response => response.json())
      .then(data => this.setState({ menu: data, isLoadingMenu: false }))
      .catch(error => this.setState({ error, isLoadingMenu: false }));

    fetch(customUrl + "slider")
      .then(response => response.json())
      .then(data => this.setState({ slider: data, isLoadingSlider: false }))
      .catch(error => this.setState({ error, isLoadingSlider: false }));

    fetch(customUrl + "home")
      .then(response => response.json())
      .then(data =>
        this.setState({
          descriptionHome: data[0].description,
          imageGallery: data[0].sections[0].images,
          titleServices: data[0].sections[1].title,
          graphText: data[0].sections[1].graphText,
          stats: data[0].sections[1].stats,
          formText: data[0].sections[1].formText,
          formLabels: data[0].sections[1].formLabels,
          buttonText: data[0].sections[1].buttonText,
          isLoadingHome: false
        })
      )
      .catch(error => this.setState({ error, isLoadingHome: false }));

    fetch(customUrl + "page")
      .then(response => response.json())
      .then(data =>
        this.setState({
          descriptionPage: data[0].description,
          tiles: data[0].tiles,
          isLoadingPage: false
        })
      )
      .catch(error => this.setState({ error, isLoadingPage: false }));
  }

  render() {
    const {
      menu,
      slider,
      descriptionPage,
      descriptionHome,
      imageGallery,
      tiles,
      titleServices,
      graphText,
      stats,
      formText,
      formLabels,
      buttonText
    } = this.state;

    return (
      <div className="App">
        <Header menu={menu} slider={slider} />
        <Switch>
          <Route path="/home">
            <Home
              description={descriptionHome}
              imageGallery={imageGallery}
              titleServices={titleServices}
              graphText={graphText}
              stats={stats}
              formText={formText}
              formLabels={formLabels}
              buttonText={buttonText}
            />
          </Route>
          <Route exact path="/page2">
            <Page2 description={descriptionPage} tiles={tiles} />
          </Route>
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default Main;
