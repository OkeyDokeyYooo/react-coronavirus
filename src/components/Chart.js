import React from 'react';
// import {Table, Col, Container} from 'reactstrap'
import {makeStyles ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel,} from '@material-ui/core'


const headCells = [
    { id: "country", numeric: false,disablePadding: true,label: "Country"},
    { id: "totalCases", numeric: true, disablePadding: false, label: "Total Cases" },
    { id: "newCases", numeric: true, disablePadding: false, label: "NewCases" },
    { id: "totalDeaths", numeric: true, disablePadding: false, label: "TotalDeaths" },
    { id: "newDeaths", numeric: true, disablePadding: false, label: "NewDeaths" },    
    { id: "totalRecoverd", numeric: true, disablePadding: false, label: "TotalRecovered" },
    { id: "critical", numeric: true, disablePadding: false, label: "Critical" }
];


function EnhacnedTableHead(props) {
    const {
        classes,
        order,
        orderBy,
        onRequestSort
    } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        // align={headCell.numeric ? "right" : "left"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}
  
function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}


const useStyles = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    table: {
      minWidth: 750
    },
}));


function Chart (props) { 
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("country");
    const [selected, setSelected] = React.useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
      };


    const isSelected = name => selected.indexOf(name) !== -1;

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
    }

    return (
        <div className={classes.root}>
            <TableContainer>
                <Table
                    className={classes.table}
                >
                    <EnhacnedTableHead
                        classes={classes}
                        numSelected={selected.length}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {stableSort(props.data, getComparator(order, orderBy))
                            .slice().map((row, index) => {
                                console.log(row)
                                return (
                                    <TableRow
                                    hover
                                    onClick={event => handleClick(event, row["name"])}
                                    key={row["name"]}
                                    // selected={isItemSelected}
                                    >
                                        <TableCell> {row["name"]}</TableCell>
                                        <TableCell> {row["TotalCases"]}</TableCell>
                                        <TableCell> {row["NewCases"]}</TableCell>
                                        <TableCell> {row["TotalDeaths"]}</TableCell>
                                        <TableCell> {row["NewDeaths"]}</TableCell>
                                        <TableCell> {row["TotalRecovered"]}</TableCell>
                                        <TableCell> {row["Serious"]}</TableCell>
                                    </TableRow>
                                )
                            })}                       

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
        //     <Col xs="6" style={tableStyle}>
        //     <Table>
        //         <thead>
        //             <tr>
        //                 <th>Country</th>
        //                 <th>Total Cases</th>
        //                 <th>NewCases</th>
        //                 <th>TotalDeaths</th>
        //                 <th>NewDeaths</th>
        //                 <th>TotalRecovered</th>
        //                 <th>Critical</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {this.props.data.map((Detail) => {
        //                 return (
        //                     <tr>
        //                         <td> {Detail["name"]}</td>
        //                         <td> {Detail["TotalCases"]}</td>
        //                         <td> {Detail["NewCases"]}</td>
        //                         <td> {Detail["TotalDeaths"]}</td>
        //                         <td> {Detail["NewDeaths"]}</td>
        //                         <td> {Detail["TotalRecovered"]}</td>
        //                         <td> {Detail["Serious"]}</td>
        //                     </tr>
        //                 )})}
        //         </tbody>
        //     </Table>
        // </Col>
    )
}

export default Chart;

                        {/* {stableSort(props.data, getComparator(order, orderBy)
                            .map((row, index) => {
                                const isItemSelected = isSelected(row["name"])
                                
                                return (
                                    <TableRow
                                        hover
                                        onClick={event => handleClick(event, row["name"])}
                                        key={row["name"]}
                                        selected={isItemSelected}
                                    >
                                        <TableCell> {row["name"]}</TableCell>
                                        <TableCell> {row["TotalCases"]}</TableCell>
                                        <TableCell> {row["NewCases"]}</TableCell>
                                        <TableCell> {row["TotalDeaths"]}</TableCell>
                                        <TableCell> {row["NewDeaths"]}</TableCell>
                                        <TableCell> {row["TotalRecovered"]}</TableCell>
                                        <TableCell> {row["Serious"]}</TableCell>
                                    </TableRow>
                                )
                            })
                        )} */}