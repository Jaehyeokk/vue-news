import axios from "axios";

const config = {
  baseUrl: "https://api.hnpwa.com/v0/",
};

function fetchList(name) {
  return axios.get(`${config.baseUrl}${name}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchAskItem(id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export { fetchUserInfo, fetchAskItem, fetchList };
