import axios from "axios";

const baseURL = "https://api.hnpwa.com/v0";

async function fetchNewsList() {
  try {
    return await axios.get(`${baseURL}/news/1.json`);
  } catch (error) {
    console.log(error);
  }
}
async function fetchJobsList() {
  try {
    return await axios.get(`${baseURL}/jobs/1.json`);
  } catch (error) {
    console.log(error);
  }
}
async function fetchAskList() {
  try {
    return await axios.get(`${baseURL}/ask/1.json`);
  } catch (error) {
    console.log(error);
  }
}
async function fetchUserInfo(id) {
  try {
    return axios.get(`${baseURL}/user/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}
async function fetchAskItem(id) {
  try {
    return axios.get(`${baseURL}/item/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchAskItem,
};
