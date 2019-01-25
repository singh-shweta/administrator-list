import React from "react";
import { PageHeader, Grid, Row, Col, Button } from "react-bootstrap";

const CounterBar = props => {
  return (
    <Grid>
      <Row>
        <Col sm={10} md={10}>
          <PageHeader>
            <h5>{props.count} Administrators</h5>
          </PageHeader>
        </Col>
        <Col>
          <Button bsStyle="primary" bsSize="large" onClick={props.addNewAdmin}>
            Add Admin
          </Button>
        </Col>
      </Row>
    </Grid>
  );
};

export default CounterBar;
