export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "c68274098amsh8f6a7e078572801p1ad3a8jsn7dbd80b6a209",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "c68274098amsh8f6a7e078572801p1ad3a8jsn7dbd80b6a209",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
