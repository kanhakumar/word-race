import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(109, 51, 47)",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(rank, score, games, avgScore, maxLevel) {
  return { rank, score, games, avgScore, maxLevel };
}

const rows = [
  createData(1, 1000, 159, 6.0, 24),
  createData(2, 995, 237, 9.0, 37),
  createData(3, 990, 262, 16.0, 24),
  createData(4, 900, 305, 3.7, 67),
  createData(5, 860, 356, 16.0, 49),
  createData(6, 860, 356, 16.0, 49),
  createData(7, 860, 356, 16.0, 49),
  createData(8, 860, 356, 16.0, 49),
  createData(9, 860, 356, 16.0, 49),
  createData(10, 860, 356, 16.0, 49),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function LeaderBoardPage() {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Rank</StyledTableCell>
              <StyledTableCell align="center">Score</StyledTableCell>
              <StyledTableCell align="center">
                No. of games Played
              </StyledTableCell>
              <StyledTableCell align="center">Average Score</StyledTableCell>
              <StyledTableCell align="center">Maximum Level</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.rank}>
                <StyledTableCell component="th" scope="row">
                  {row.rank}
                </StyledTableCell>
                <StyledTableCell align="center">{row.score}</StyledTableCell>
                <StyledTableCell align="center">{row.games}</StyledTableCell>
                <StyledTableCell align="center">{row.avgScore}</StyledTableCell>
                <StyledTableCell align="center">{row.maxLevel}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="back-button">
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "1.2em", marginBottom: "1.2em" }}
        >
          Get back to game
        </Button>
      </div>
    </>
  );
}
