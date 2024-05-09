import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { MovieT } from "../../types/interfaces"; 
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Avatar } from "@mui/material";

const styles = {
    root: {  
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};


const MovieHeader: React.FC<MovieT> = (props) => {

    const favorites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const isFavorite = favorites.some((movie: { id: number; }) => movie.id === props.id);
  
  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>
       {   isFavorite && (
            <Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
          ) 
        }

      <Typography variant="h4" component="h3">
        {props.title}{"   "}
        <a href={props.homepage}>
          <HomeIcon color="primary"  fontSize="large"/>
        </a>
        <br />
        <span>{`${props.tagline}`} </span>
      </Typography>
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;