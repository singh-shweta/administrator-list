import React, { Component } from "react";
import { Table } from "react-bootstrap";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class AdminTable extends Component {
  columns = [
    {
      id: "adminName",
      label: "Name",
      content: item => <i>{item.adminName}</i>
    },
    {
      id: "email",
      label: "Email"
    },
    {
      id: "role",
      label: "Role"
    },
    {
      id: "lastLogin",
      label: "Last Login"
    }
  ];

  render() {
    return (
      <Table bordered striped hover condensed>
        <TableHeader columns={this.columns} />
        <TableBody data={this.props.admins} columns={this.columns} />
      </Table>
    );
  }
}

export default AdminTable;
