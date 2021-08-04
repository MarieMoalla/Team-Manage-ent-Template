import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/userProfile/pageTitle";
import UserDetails from "../components/userProfile/userDetails";
import UserAccountDetails from "../components/userProfile/userAccountDetails";


const userProfile = () => (
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
          {/*definition of variables of a componenet can be declared iside a tag*/}
        <PageTitle title="User Profile" subtitle="Overview" md="12" className="ml-sm-auto mr-sm-auto" />
      </Row>
      <Row>
        <Col lg="4">
        <UserDetails />
        </Col>
        <Col lg="8">
          <UserAccountDetails />
        </Col>
      </Row>
    </Container>
  );
  
  export default userProfile;