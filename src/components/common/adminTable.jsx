import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class AdminTable extends Component {
  render() {
    return (
      <Table bordered striped hover condensed>
        <TableHeader columns={this.props.columns} />
        <TableBody data={this.props.admins} columns={this.props.columns} />
      </Table>
    );
  }
}

export default AdminTable;
