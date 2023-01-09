import { makeStyles } from "@material-ui/core/styles";
export { default as Table } from "@material-ui/core/Table";
export { default as TableBody } from "@material-ui/core/TableBody";
export { default as TableCell } from "@material-ui/core/TableCell";
export { default as TableContainer } from "@material-ui/core/TableContainer";
export { default as TableHead } from "@material-ui/core/TableHead";
export { default as TableRow } from "@material-ui/core/TableRow";
export { default as Paper } from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    width: 300,
  },
});

export { useStyles };
