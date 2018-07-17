export const fetchYouTubeVideoIds = (query) => {
  return new Promise(resolve => {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.exports.apiKey}&type=video&q=${query}&relevanceLanguage=en_US&maxResults=10&part=id`)
      .then(response => response.json())
      .then(response => {
        // Returns array of video objects with YouTube video ID stored in id.videoId.
        resolve(response.items);
      });
  });
};

export const fetchYouTubeVideo = (videoId) => {
  return new Promise(resolve => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.exports.apiKey}&id=${videoId}&part=contentDetails,snippet,statistics`)
      .then(response => response.json())
      .then(response => {
        let videoData = response.items[0];
        let newVideoEntry = {
          [videoData.id]: {
            videoId: videoData.id,
            videoTitle: videoData.snippet.localized.title,
            videoDescription: videoData.snippet.localized.description.slice(0, 125) + ' ...',
            channelId: videoData.snippet.channelId,
            channelTitle: videoData.snippet.channelTitle,
            videoThumbnail: videoData.snippet.thumbnails.medium.url,
            duration: videoData.contentDetails.duration,
            publishTime: videoData.snippet.publishedAt,
            viewCount: videoData.statistics.viewCount,
            likeCount: videoData.statistics.likeCount,
            dislikeCount: videoData.statistics.dislikeCount
          }
        };
        // Returns single video object with associated details.
        resolve(newVideoEntry);
      });
  });
};
