import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">


    {/*import logo of searsh*/}
    <InputGroupAddon type="prepend">
        <InputGroupText>
        
        <span class="material-icons">
      room
</span>
        </InputGroupText>
    </InputGroupAddon>


      {/*search text*/}
      <FormInput
        className="navbar-search"
        placeholder="Search..."
      />
    </InputGroup>
  </Form>
);