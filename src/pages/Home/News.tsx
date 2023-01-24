import React, {FC} from 'react';
import {NewsOption, useNews} from "../../hooks/useNews";
import Article from "./Article";
import {Alert, AlertTitle, CircularProgress, Grid, Typography} from "@mui/material";


export interface NewsProps {
  options: NewsOption
}

const News: FC<NewsProps> = ({options}) => {
  const {ordered, isLoading, error, data} = useNews(options)

  if (ordered?.length === 0) {
    return (
      <Alert severity="info">
        <AlertTitle>Info</AlertTitle>
        Search something different — <strong>news not found!</strong>
      </Alert>
    );
  }


  return (
    <>
      {isLoading && <CircularProgress/>}
      {error && <Typography variant="subtitle1" sx={{fontStyle: "italic", color: "red"}}>
        {error}
      </Typography>}
      <Typography variant="subtitle1" sx={{
        fontWeight: "600",
        borderBottom: 1,

      }}>
        Results: {" "}
        {ordered?.length}
      </Typography>
      <Grid container spacing={3} my={1}>
        {
          ordered?.map((post) => {
            return (
              <Article key={post.id} data={post} index={post.id} string={options.search}/>
            );
          })
        }
      </Grid>
    </>
  )

};

export default News;
