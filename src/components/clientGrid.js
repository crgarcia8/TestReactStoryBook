import React, { Component } from 'react';
import ReactTable from "react-table";
import {connect} from 'react-redux';
import {fetchClients} from '../actions';

class ClientGrid extends Component {
  render() {
    return (
      <div className="md ">
        <ReactTable
          data = {this.props.clients}
          columns={[
            {
              Header: "CLIENT NAME",
              accessor: "name"
            },
            {
              Header: "STATUS",
              accessor: "status"
            },
            {
              Header: 'CREATED DATE',
              accessor: "dateCreation"
            },
            {
              Header: 'LAST MODIFIED DATE',
              accessor: "dateModified"
            },
            {
              Header: '',
              accessor: "menu"
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
      clients: state.clients
  };
}

export default connect (mapStateToProps)(ClientGrid);