import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

export default class Username extends Component {
    state = {
        user: [],
      };
    
      componentDidMount() {
        const url = "https://jsonplaceholder.typicode.com/users";
        axios.get(`${url}`).then((res) => {
          const user = res.data;
          this.setState({
            user: user,
          });
        });
      }
    
      render() {
        return this.state.user.map((user) => (
          <div className="app">
          <Table>
              <tbody className="table">
                <tr>{user.name}</tr>
              </tbody>
          </Table>
          </div>
        ));
      }
}