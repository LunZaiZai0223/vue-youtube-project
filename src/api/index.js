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
    }
  }
};

const getApiUrl = (baseUrl, { params }) => {
  const parsed = Object.entries(params).map((arr) => arr.join('=')).join('&');
  return baseUrl + parsed;
};

const fetchVideoDataById = ({ id }) => {
  const config = getSearchVideoByIdConfig(id);
  const apiUrl = getApiUrl(baseUrl, config);
  return fetch(apiUrl).then((response) => response.json());
};

export { getSearchAllConfig, getApiUrl, baseUrl, getSearchVideoByIdConfig, fetchVideoDataById }
