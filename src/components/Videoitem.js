import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";


const VideoItem =({video, onClick})=>{
    return(
        <Grid item xs={12} onClick={(e) => onClick(e, video)}>
        <Paper style={{ display: "flex", alignItems: "center",cursor:"pointer" }} >
          <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
          <Typography variant="subtitle1">
            <b>{video.snippet.title}</b>
          </Typography>
        </Paper>
      </Grid>
    )
}

export default VideoItem;