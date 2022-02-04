import {
  Button,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
} from "@material-ui/core";
import { categories } from "../../Constants/data";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  createblog: {
    width: "86%",
    color: "#123456",
    margin: 20,
    background: "#6495ED",
  },
  table: {
    border: "1px solid rgba(224,224,224,1)",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});
const Categories = () => {
  const classes = useStyle();
  return (
    <>
      <Link to="/create" className={classes.link}>
        <Button className={classes.createblog}>Create Blog</Button>
     </Link>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Link to={'/'} className={classes.link}>
              All Categories
              </Link>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow>
              <TableCell>
              <Link to={`/?categories=${category}`} className={classes.link}>
                {category}
                </Link>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
export default Categories;
