// 兩個
//   1. 搜尋全部的
//      - 第一次不用 pageToken
//   2. 使用者點擊 -> 只要一個 
//      - 不用 regionCode / pageToken

const baseUrl = 'https://youtube.googleapis.com/youtube/v3/videos?';
const myKey = process.env.VUE_APP_MY_API_KEY;

const getSearchAllConfig = (isFirstLoading = true, nextPageToken, maxResults = 12) => {
  if (isFirstLoading) {
    return {
      method: 'Get',
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults,
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
      maxResults,
      regionCode: 'TW',
      key: myKey,
      pageToken: nextPageToken,
    }
  }
};

const getSearchVideoByIdConfig = (id) => {
  return {
    methods: 'Get',
    params: {
      part: 'snippet',
      id,
      regionCode: 'TW',
      key: myKey
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=nhnrfTb8xzA&regionCode=TW&key=[YOUR_API_KEY]
    }
  }
};

const getApiUrl = (baseUrl, { params }) => {
  const parsed = Object.entries(params).map((arr) => arr.join('=')).join('&');
  return baseUrl + parsed;
};

const fetchVideosData = ({ isFirstLoading, nextPageToken }) => {
  const config = getSearchAllConfig(isFirstLoading, nextPageToken);
  const apiUrl = getApiUrl(baseUrl, config);
  return fetch(apiUrl).then((response) => response.json());
};

const fetchVideoDataById = ({ id }) => {
  const config = getSearchVideoByIdConfig(id);
  const apiUrl = getApiUrl(baseUrl, config);
  return fetch(apiUrl).then((response) => response.json());
};

export { fetchVideosData, getSearchAllConfig, getApiUrl, baseUrl, getSearchVideoByIdConfig, fetchVideoDataById }

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=9&pageToken=%20&regionCode=TW&key=[YOUR_API_KEY]
