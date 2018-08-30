import React, { Component } from 'react';
import ReactTable from "react-table";
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class ClientGrid extends Component {
  render() {
    return (
      <div>
      <div className="row">
        <span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>
      </div>
      <div className="row">
        <div className="clientGrid small">
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
                width: 25,

                Cell: row => (
                  <div>
                    <Link className="customLink" to={`/clientDetail`}>
                      ...
                      </Link>
                  </div>
                )

              }
            ]}
            defaultPageSize={10}
            className="-highlight"
            noDataText="Create your first client"
            showPageSizeOptions={false}
            sortable={true}
            nextText=">"
            previousText="<"
          />
        </div>
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