import React from "react";
import "./RestaurantCard.css";
import Card from "@material-ui/core/Card";
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom";
import "../../assets/font-awesome-4.7.0/css/font-awesome.min.css";

const RestaurantCard = function ({
  index,
  classes,
  resId,
  history,
  resName,
  resURL,
  resFoodCategories,
  resCustRating,
  resNumberCustRated,
  avgPrice
}) {
  // const image = props.image;
  //const index = props.index;
  //const classes = props.classes;

  return (
    <div
      className="cardContainer"
      onClick={() => {
        let detailsPageUrl = "/restaurant/" + resId;
        return history.push(detailsPageUrl);
      }}
      key={index}
    >
      <Card
        style={{ width: "95%", height: "95%" }}
        className={classes.resCard}
        key={index}
      >
        <CardMedia
          component="img"
          alt={resName}
          height="160"
          image={resURL}
        />
        <CardContent style={{ minHeight: "170px" }}>
          <Typography gutterBottom variant="h4" component="h2">
            {resName}
          </Typography>
          <div>
            <br />
            <Typography
              style={{ height: "18px", display: "block" }}
              variant="h6"
            >
              {resFoodCategories}
            </Typography>
          </div>
          <br />
          <br />
        </CardContent>
        <div className="rating-main-contnr">
          <div className="rating-bg-color">
            <span>
              <i className="fa fa-star"></i>
            </span>
            <span>
              {" "}
              {resCustRating} ({resNumberCustRated})
            </span>
          </div>
          <div className="avg-price">
            <span>
              <i className="fa fa-inr"></i>
              <span style={{ fontSize: "100%", fontWeight: "bold" }}>
                {avgPrice} for two{" "}
              </span>
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default withRouter(RestaurantCard);
