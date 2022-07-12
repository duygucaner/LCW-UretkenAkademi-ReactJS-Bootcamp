import React, { Component } from "react";
import { Table } from "react-bootstrap";
import "./App.css";
import User from "./user";
import Usermail from "./usermail";
import Username from "./username";


function Main() {
  return (
    <div>
    <Table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><User/></td>
          <td><Usermail/></td>
          <td><Username/></td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
}

export default Main