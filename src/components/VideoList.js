import React from "react";
import { Grid} from "@material-ui/core";

import VideoItem from "./Videoitem";


const VideoList = ({videos, onClick}) =>{
    const listOfvideos = videos.map(
        (video,id) => <VideoItem key={id} video ={video} onClick={onClick}/>
    )
    return (
        <Grid container spacing={10}>
          {listOfvideos}
        </Grid>
      )
    
    
} 

export default VideoList;