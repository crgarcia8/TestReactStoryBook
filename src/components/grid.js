import React from 'react';
import ReactTable from "react-table";
// import 'react-table/react-table.css'


const Grid = (props) => (

<ReactTable
          data=
            {[
                {
                    firstName: 'Raúl',
                    lastName: 'Martínez',
                    age: 20,
                    status: 'Single',
                    visits: '7',
                }
            ]}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: d => d.lastName
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },
                {
                  Header: "Status",
                  accessor: "status"
                }
              ]
            },
            {
              Header: 'Stats',
              columns: [
                {
                  Header: "Visits",
                  accessor: "visits"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    )

    export default Grid;