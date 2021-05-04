import React, { Component } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import "./Home.css";
import Header from "../../common/header/Header.js";
import moviesData from "../../common/header/moviesData.js";
import  { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);


class Home extends Component {
  render() {
    return (
      <div>
    <>
    <Header />
    </>
        <div className="UM">
          <span>Upcoming Movies</span>
        </div>
        <div>
          <GridList cols={5} className="Mapfunc">
            {moviesData.map((tile) => (
              <GridListTile key={tile.poster_url} className="a">
                <img
                  src={tile.poster_url}
                  alt={tile.title}
                  className="movie-poster"
                />
                <GridListTileBar title={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <div className="flex-container">
          <div className="left">
            <GridList cellHeight={350} cols={4} className="gridListMain">
              {moviesData.map((movie) => (
                <GridListTile
                  onClick={() => this.movieClickHandler(movie.id)}
                  className="released-movie-grid-item"
                  key={"grid" + movie.id}
                >
                  <img
                    src={movie.poster_url}
                    className="movie-poster2"
                    alt={movie.title}
                  />
                  <GridListTileBar
                    title={movie.title}
                    subtitle={
                      <span>
                        Release Date:{" "}
                        {new Date(movie.release_date).toDateString()}
                      </span>
                    }
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
