// 兩個
//   1. 搜尋全部的
//      - 第一次不用 pageToken
//   2. 使用者點擊 -> 只要一個 
//      - 不用 regionCode / pageToken

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/videos?';
const myKey = 'AIzaSyBZ7Mm1v1QEyUaYnPET_koH0uC10x3XWwo';

const getSearchAllConfig = (isFirstLoad = true, nextPageToken) => {
  if (isFirstLoad) {
    return {
      method: 'Get',
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 12,
        regionCode: 'TW',
        key: myKey
      }
    }
  }

  return {
    method: 'Get',
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 12,
      regionCode: 'TW',
      key: myKey,
      pageToken: nextPageToken,
    }
  }
};

const getApiUrl = (baseUrl, { params }) => {
  const parsed = Object.entries(params).map((arr) => arr.join('=')).join('&');
  return baseUrl + parsed;
};

const fetchVideosData = ({ isFirstLoad, nextPageToken }) => {
  const config = getSearchAllConfig(isFirstLoad, nextPageToken);
  console.log(config);
  const apiUrl = getApiUrl(baseUrl, config);
  console.log(apiUrl);
  return fetch(apiUrl).then((response) => response.json());
}

export { fetchVideosData }

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&pageToken=%20&regionCode=TW&key=[YOUR_API_KEY]
