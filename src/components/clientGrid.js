import React, { Component } from 'react';
import ReactTable from "react-table";
import {connect} from 'react-redux';
import {fetchClients} from '../actions';

class ClientGrid extends Component {
  render() {
    return (
      <div className="row">
        <div class="clientGrid small">
          <ReactTable
            data = {this.props.clients}
            columns={[
              {
                Header: "CLIENT NAME",
                accessor: "name",
                minWidth: 200,
                style:{}
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
                accessor: "menu",
                width: 25
              }
            ]}
            defaultPageSize={10}
            className="-highlight"
            noDataText="Create your first client"
            showPageSizeOptions="false"
          />
        </div>
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