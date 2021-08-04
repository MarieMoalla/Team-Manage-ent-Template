import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";

const userDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3"> 

    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>

      <h4 className="mb-0">{userDetails.name}</h4>
      <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
      
      <Button pill outline size="sm" className="mb-2">
        <i className="material-icons mr-1">person_add</i> Follow
      
      </Button>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
          <Progress
            className="progress-sm"
            value={userDetails.performanceReportValue}
          >
            <span className="progress-value">
              {userDetails.performanceReportValue}%
            </span>
          </Progress>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);


userDetails.propTypes = {
  
  userDetails: PropTypes.object
};

userDetails.defaultProps = {
  userDetails: {
    name: "Mariem Moalla",
    avatar: require("C:/Users/marie/Desktop/my-app/src/my-app/images/image.jpg"),
    jobTitle: "Web Developer",
    performanceReportTitle: "Hard Working",
    performanceReportValue: 70,
    metaTitle: "Description",
    metaValue:
      "Im a third-year student at the University of Manouba Im highly motivated and enthusiastic, always willing to learn new things.I gain the most satisfaction at work when I'm challenged, also when I have the opportunity to learn, develop, and meet the organization's goals and customer's expectations.Currently interested in web development, learning more about various technologies and frameworks, I am aiming to become a competitive full stack web developer and in learning artificial intelligence and machine learning."
  }
};

export default userDetails;