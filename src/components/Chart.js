import React from 'react';
import {makeStyles ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel,} from '@material-ui/core'
import {connect} from 'react-redux'

// Table header List
// ID will be used for List comparison
// ID MUST be same as the obj's keys
const headCells = [
    { id: "name", numeric: false,disablePadding: true,label: "Country"},
    { id: "TotalCases", numeric: true, disablePadding: false, label: "Total Cases" },
    { id: "NewCases", numeric: true, disablePadding: false, label: "NewCases" },
    { id: "TotalDeaths", numeric: true, disablePadding: false, label: "TotalDeaths" },
    { id: "NewDeaths", numeric: true, disablePadding: false, label: "NewDeaths" },    
    { id: "TotalRecovered", numeric: true, disablePadding: false, label: "TotalRecovered" },
    { id: "Serious", numeric: true, disablePadding: false, label: "Critical" }
];

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

    return (
        <TableHead>
            <TableRow>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
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

// Material-ui CSS styling sheet
const useStyles = makeStyles(theme => ({
    root: {
      width: "40%"
    },
    table: {
      minWidth: 750
    },
    container: {
        maxHeight: 440,
    }
}));

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
                    stickyHeader
                >
                    <EnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                    />
                    <TableBody>
                        {stableSort(props.data, getComparator(order, orderBy))
                            .map((row, index) => {
                                return (
                                    <TableRow
                                    hover
                                    key={row["name"]}
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
    )
}

const mapState = state => ({
    data: state.Data.trk
})

export default connect(mapState, null)(Chart);
