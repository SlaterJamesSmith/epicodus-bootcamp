import React from 'react';
import VideoStrip from './VideoStrip';

const searchResults = [
  {
    videoId: 'ZNgAczbs1nk',
    videoTitle: 'RAD Summer Mix | Best of Synthwave And Retrowave Mix',
    channelTitle: 'ThePrimeThanatos',
    thumbnail: 'https://i.ytimg.com/vi/ZNgAczbs1nk/mqdefault.jpg',
    viewCount: '6470',
    description: '✖ Subscribe to ThePrimeCronus (Epic/Orchestral/Trailer Music): http://goo.gl/jrSyRt ✖ Subscribe to ThePrimeCronus II: http:/ ...'
  },
  {
    videoId: 'fzK79PgKITI',
    videoTitle: 'Back To The 80\'s | Best of Synthwave And Retro Electro Music Mix for 2 Hours | Vol. 9',
    channelTitle: 'ThePrimeThanatos',
    thumbnail: 'https://i.ytimg.com/vi/fzK79PgKITI/mqdefault.jpg',
    viewCount: '701079',
    description: '✖ Subscribe to ThePrimeCronus (Epic/Orchestral/Trailer Music): http://goo.gl/jrSyRt ✖ Subscribe to ThePrimeCronus II: http:/ ...'
  },
  {
    videoId: 'BiDlN-T2ewU',
    videoTitle: 'Best of FM Attack | Best of Synthwave And Retro Electro Music Mix',
    channelTitle: 'ThePrimeThanatos',
    thumbnail: 'https://i.ytimg.com/vi/BiDlN-T2ewU/mqdefault.jpg',
    viewCount: '270013',
    description: '✖ Subscribe to ThePrimeCronus (Epic/Orchestral/Trailer Music): http://goo.gl/jrSyRt ✖ Subscribe to ThePrimeCronus II: http:/ ...'
  },
  {
    videoId: 'mih-1mACh7k',
    videoTitle: 'Back To The 80\'s | Best of Synthwave And Retro Electro Music Mix for 2 Hours | Vol. 1',
    channelTitle: 'ThePrimeThanatos',
    thumbnail: 'https://i.ytimg.com/vi/mih-1mACh7k/mqdefault.jpg',
    viewCount: '980435',
    description: '✖ Follow Me on G-Plus: http://goo.gl/Zri9ic ✖ Subscribe to ThePrimeCronus (Epic/Orchestral/Trailer Music): http://goo.gl/jrS ...'
  },
  {
    videoId: 'SF58Lsvqg5E',
    videoTitle: 'Back To The 80\'s | Best of Synthwave And Retro Electro Music Mix for 2 Hours | Vol. 4',
    channelTitle: 'ThePrimeThanatos',
    thumbnail: 'https://i.ytimg.com/vi/SF58Lsvqg5E/mqdefault.jpg',
    viewCount: '10555673',
    description: '✖ Follow Me on G-Plus: http://goo.gl/Zri9ic ✖ Subscribe to ThePrimeCronus (Epic/Orchestral/Trailer Music): http://goo.gl/jrS ...'
  }
];

function Search() {
  return (
    <section>
      <style jsx>
        {`
          section {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px 0;
          }
        `}
      </style>
      {searchResults.map((video) =>
        <VideoStrip
          key={video.videoId}
          videoTitle={video.videoTitle}
          channelTitle={video.channelTitle}
          thumbnail={video.thumbnail}
          viewCount={video.viewCount}
          description={video.description}
        />
      )}
    </section>
  );
}

export default Search;
