import axios from "axios";

const baseURL = "https://api.hnpwa.com/v0";

async function fetchList(name) {
  try {
    return await axios.get(`${baseURL}/${name}/1.json`);
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

export { fetchList, fetchUserInfo, fetchAskItem };
