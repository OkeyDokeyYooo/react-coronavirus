import React from 'react';
import {makeStyles ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel} from '@material-ui/core'

// Table header List
// ID will be used for List comparison
// ID MUST be same as the obj's keys
const headCells = [
    { id: "name", numeric: false,disablePadding: true,label: "Country"},
    { id: "TotalCases", numeric: true, disablePadding: false, label: "TotalCases" },
    { id: "NewCases", numeric: true, disablePadding: false, label: "NewCases" },
    { id: "TotalDeaths", numeric: true, disablePadding: false, label: "TotalDeaths" },
    { id: "NewDeaths", numeric: true, disablePadding: false, label: "NewDeaths" },    
    { id: "TotalRecovered", numeric: true, disablePadding: false, label: "TotalRecovered" },
    // { id: "Serious", numeric: true, disablePadding: false, label: "Critical" }
];

// Material-ui CSS styling sheet
const useStyles = makeStyles(theme => ({
    root: {
      width: "95%",
      position: "center"
    },
    table: {
      maxWidth: "95%",
      textAlign: "center"
    },
    container: {
        height: 500,
        margin: 0
    },
    narrowCell: {
		'width': '5%',
    },
    title: {
        fontWeight: 500,
        width: "50px"
    },
    data: {
        // textAlign: "center",
        width: "50px"
    },
    header: {
        textAlign: "center",
        width: "50px",
    }
}));

// Creating the Table Header which has sorted label 
function EnhancedTableHead(props) {
    const {
        order,
        orderBy,
        onRequestSort
    } = props;

    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };
    const classes = useStyles();
    return (
        
        <TableHead>
            <TableRow className={classes.header}>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        className={classes.header}
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

function numberWithCommas(x) {
    return x == null ? null : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}



function Chart (props) { 
    const classes = useStyles();
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("Country");

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
      };

    return (
        <div className={classes.root}>
            <TableContainer className={classes.container}>
                <Table
                    className={classes.table}
                    size="small"
                    style={{ width: "auto", tableLayout: "auto" }}
                    border={.5}
                    stickyHeader
                    // padding='none'
                >
                    <EnhancedTableHead
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        style={{ width: "auto", tableLayout: "auto" }}
                        className={classes.header}
                    />
                    <TableBody style={{ width: "auto", tableLayout: "auto" }}>
                        {stableSort(props.data, getComparator(order, orderBy))
                            .map((row, index) => {
                                return (
                                    row['TotalCases'] &&
                                    <TableRow
                                    hover
                                    key={row["name"]}
                                    style={{ width: "auto", tableLayout: "auto" }}
                                    >
                                        <TableCell className={classes.data}> {row["name"]}</TableCell>
                                        <TableCell className={classes.data}> {numberWithCommas(row["TotalCases"])}</TableCell>
                                        <TableCell className={classes.data}> {numberWithCommas(row["NewCases"])}</TableCell>
                                        <TableCell className={classes.data}> {numberWithCommas(row["TotalDeaths"])}</TableCell>
                                        <TableCell className={classes.data}> {numberWithCommas(row["NewDeaths"])}</TableCell>
                                        <TableCell className={classes.data}> {numberWithCommas(row["TotalRecovered"])}</TableCell>
                                        {/* <TableCell className={classes.data}> {numberWithCommas(row["Serious"])}</TableCell> */}
                                    </TableRow>
                                )
                            })}                       
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Chart;