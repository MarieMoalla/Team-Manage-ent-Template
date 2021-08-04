import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

const userAccountDetails = ({ title }) => (
    <Card small className="mb-4">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>

      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form>
               <Row form>
                  {/* First Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="FirstName">First Name</label>
                    
                    <FormInput
                      id="FirstName"
                      value="Mariem"
                    />
                  </Col>

                  {/* Last Name */}
                  <Col md="6" className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <FormInput
                      id="LastName"
                      value="Moalla"
                    />
                  </Col>
                  </Row>
                  <Row form>

                  {/* Email */}
                  <Col md="6" className="form-group">
                    <label htmlFor="Email">Email</label>
                    <FormInput
                      type="email"
                      id="Email"
                      value="mariemmmoalla@gmail.com"
                      autoComplete="email"
                    />
                  </Col>
                  {/* Password */}
                  <Col md="6" className="form-group">
                    <label htmlFor="Password">Password</label>
                    <FormInput
                      type="password"
                      id="Password"
                      autoComplete="current-password"
                    />
                  </Col>
                </Row>
                <FormGroup>
                  <label htmlFor="Address">Address</label>
                  <FormInput
                    id="Address"
                    placeholder="Address"
                    value="9 Rue Maarouf EL Rassafi, Tunis, Bardo ."
                  />
                </FormGroup>
                <Row form>
                  {/* City */}
                  <Col md="6" className="form-group">
                    <label htmlFor="City">City</label>
                    <FormInput
                      id="City"
                      placeholder="City"
                    />
                  </Col>
                  {/* State */}
                  <Col md="4" className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <FormInput id="Phone"/>
                  </Col>
                  {/* Zip Code */}
                  <Col md="2" className="form-group">
                    <label htmlFor="ZipCode">Zip</label>
                    <FormInput
                      id="ZipCode"
                    />
                  </Col>
                </Row>
                <Row form>
                  {/* Description */}
                  <Col md="12" className="form-group">
                    <label htmlFor="Description">Description</label>
                    <FormTextarea id="Description" rows="5" />
                  </Col>
                </Row>
                <Button theme="accent">Update Account</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );

  userAccountDetails.propTypes = {
 
    title: PropTypes.string
  };
  
  userAccountDetails.defaultProps = {
    title: "Account Details"
  };
  
  export default userAccountDetails;