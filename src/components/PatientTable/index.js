import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// STYLED
import styled from "styled-components";

// MATERIAL UI
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import ContactMailIcon from "@material-ui/icons/ContactMail";

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    margin: "auto",
    width: "75%",
    border: "3px solid #1b3c70",
    padding: "10px",
  },
});

let id = 0;
function createData(name, dob, mrt, email) {
  id += 1;
  return { id, name, dob, mrt, email };
}

const rows = [
  createData(
    "Annika Archibald",
    "12/04/1975",
    "02/05/2021",
    "aarchibald@gmail.com"
  ),
  createData(
    "Rosaline Zechariah",
    "27/05/1979",
    "21/04/2021",
    "rzechariah@gmail.com"
  ),
  createData("Julius Lee", "02/02/1969", "29/04/2021", "jlee@gmail.com"),
  createData(
    "Archer Haywood",
    "16/09/1963",
    "01/05/2021",
    "ahaywood@gmail.com"
  ),
  createData("Eloise Velma", "21/07/1991", "25/04/2021", "evelma@gmail.com"),
];

const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#1b3c70",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const TableDiv = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

function PatientTable(props) {
  const { classes } = props;
  return (
    <TableDiv>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>
              <p>Patient Name</p>
            </CustomTableCell>
            <CustomTableCell align="right">
              <p>D.O.B</p>
            </CustomTableCell>
            <CustomTableCell align="right">
              <p>Most Recent Test</p>
            </CustomTableCell>
            <CustomTableCell align="right">
              <p>Email</p>
            </CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              onClick={() => {
                console.log("Clicked!");
              }}
              hover={true}
              component={Link}
              to="/feedback/returning-client"
            >
              <CustomTableCell component="th" scope="row">
                <p>{row.name}</p>
              </CustomTableCell>
              <CustomTableCell align="right"><p>{row.dob}</p></CustomTableCell>
              <CustomTableCell align="right"><p>{row.mrt}</p></CustomTableCell>
              <CustomTableCell align="right"><p>{row.email}</p></CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableDiv>
  );
}

PatientTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PatientTable);
