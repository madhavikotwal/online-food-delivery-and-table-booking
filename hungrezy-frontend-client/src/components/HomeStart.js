import React from "react";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
//import { Link } from "react-router-dom";
import cover from "../images/food_upscaled.png";

const useStyles = makeStyles((theme) => ({
  presentation: {
    display: "flex",
    width: "90%",
    margin: "auto",
    minHeight: "80vh",
    alignItems: "center",
    // eslint-disable-next-line
    ["@media (max-width:1024px)"]: {
      flexDirection: "column",
    },
  },
  introduction: {
    flex: 1,
    paddingLeft: 60,
    height: "340px",
  },
  safeFood: {
    fontSize: 70,
    fontWeight: 400,
    
    
  },
  delivery: {
    color: "#7d5a5a",
    fontSize: 64,
    fontWeight: "bold",
    marginTop: -30,
    marginBottom: 20,
  },
  paragraph: {
    color:"#6a097d",
    width: 400,
    fontSize: 17,
   // fontWeight: "bold",
   // fontStyle: 'cursive',
   // fontFamily: 'Patrick Hand SC',
   fontFamily: "'Dancing Script', cursive",
  },
  cover: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    height: "72vh",
  },
  coverImg: {
    height: "100%",
  },
  ctaOrder: {
    fontSize: 20,
    backgroundColor: "#9fd8df",
    marginTop: 35,
  },
}));


const HomeStart = () => {
  const classes = useStyles();
  return (
    <section className={classes.presentation}>
      <div className={classes.introduction}>
        <Typography className={classes.safeFood} noWrap>
          We're Open!
        </Typography>
        <Typography className={classes.delivery} noWrap>
          Order Now
        </Typography>
        <Typography variant="body2" className={classes.paragraph}>
        Halt your work and eat..
        </Typography>
        {/* <Link to="login">
        <Button variant="outlined" className={classes.ctaOrder}>
          Reserve Table
        </Button>
        </Link> */}
        
      </div>
      <div className={classes.cover}>
        <img src={cover} alt="safe-delivery" className={classes.coverImg} />
      </div>
    </section>
  );
};

export default React.memo(HomeStart);
