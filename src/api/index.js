import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

async function fetchList(name) {
  try {
    return await axios.get(`${config.baseUrl}${name}/1.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchUserInfo(username) {
  try {
    return await axios.get(`${config.baseUrl}user/${username}.json`);
  } catch (error) {
    console.log(error);
  }
}

async function fetchAskItem(id) {
  try {
    return axios.get(`${config.baseUrl}item/${id}.json`);
  } catch (error) {
    console.log(error);
  }
}

export { fetchUserInfo, fetchAskItem, fetchList };
