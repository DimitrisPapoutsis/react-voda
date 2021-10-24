import React from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import { Switch, Route, useRouteMatch, NavLink, Redirect} from "react-router-dom";

function Home(props) {
  let { path, url } = useRouteMatch();
  console.log("route url path:" + path);
  return (
    <div className="page home">
      <h1 className="page-title">{props.description}</h1>
      <div className="page-comp">
        <div className="sections">
          <ul className="sections-menu">

            {/* Navigation Section */}
            <li className="sections-menu-item">
              <NavLink className="sections-menu-link" to={`${url}/section1`}>
                Section 1
              </NavLink>
            </li>

            <li className="sections-menu-item">
              <NavLink className="sections-menu-link" to={`${url}/section2`}>
                Section 2
              </NavLink>

            </li>
          </ul>

          {/* Switch Section */}
          <Switch>
            <Route exact path={`${path}/section1`}>
              <Section1 images={props.imageGallery} />
            </Route>
            <Route exact path={`${path}/section2`}>
              <Section2
                title={props.titleServices}
                graphText={props.graphText}
                stats={props.stats}
                formText={props.formText}
                formLabels={props.formLabels}
                buttonText={props.buttonText}
              />
            </Route>
            <Redirect to={`${path}/section1`} />
          </Switch>

        </div>
      </div>
    </div>
  );
}
export default Home;
