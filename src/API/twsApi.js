const axios = require("axios");

export const fetchSubtopics = async (topic, nSubtopics) => {
  console.log("API key ", process.env.REACT_APP_TWS_KEY);
  try {
    const result = await axios({
      method: "get",
      url: `https://tws-node-server.herokuapp.com/subtopics?nResults=${nSubtopics}&topic=${topic}`,
      headers: { twsKey: process.env.REACT_APP_TWS_KEY }
    });
    return result.data; //result.data is an array of strings, the subtopics
  } catch (err) {
    console.error(err);
  }
};

export const fetchArticleIds = async (query, nArticles) => {
  try {
    const result = await axios({
      method: "get",
      url: `https://tws-node-server.herokuapp.com/articleIds?nResults=${nArticles}&query=${query}`,
      headers: { twsKey: process.env.REACT_APP_TWS_KEY }
    });
    return result.data; //result.data is an array of ints, the articleId s
  } catch (err) {
    console.error(err);
  }
};

export const fetchArticlesById = async id => {
  try {
    const result = await axios({
      method: "post",
      url: `https://tws-node-server.herokuapp.com/articlesById?id1=${id}`,
      headers: { twsKey: process.env.REACT_APP_TWS_KEY }
    });
    return result.data; //result.data is an array of objects, each object is an article
  } catch (err) {
    console.error(err);
  }
};
