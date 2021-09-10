import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map((v) => {
        return <VideoItem  onVideoSelect={onVideoSelect} title={v.title} key={v.etag} video={v}/>;
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;
