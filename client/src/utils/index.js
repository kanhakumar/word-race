import axios from "axios";
const EMAIL = "email";
const USER_ID = "user_id";

const Api = "http://localhost:4000/api/";

export const signIn = async (email) => {
  const response = await axios.post(Api + "user/getUser", {
    email,
  });
  if (response.data.success) {
    window.localStorage.setItem(EMAIL, email);
    window.localStorage.setItem(USER_ID, response.data.user._id);
  }
  return response;
};

export const signUp = async (email, name) => {
  const response = await axios.post(Api + "/user/addUser", {
    email,
    name,
  });
  if (response.data.success) {
    window.localStorage.setItem(EMAIL, email);
    window.localStorage.setItem(USER_ID, response.data.addedUser._id);
  }
  return response;
};

export const saveGame = async (score, level, multiplier) => {
  let user_id = window.localStorage.getItem(USER_ID);
  const response = await axios.post(Api + "game/saveGame", {
    user_id,
    score,
    level,
    multiplier,
  });
  return response;
};

export const updateUserData = async (score, level) => {
  let email = window.localStorage.getItem(EMAIL);
  const response = await axios.put(Api + "user/updateUserData", {
    email,
    score,
    level,
  });
  return response;
};

export const fetchLeaderBoardData = async () => {
  const response = await axios.get(Api + "game/leaderboard");
  if (response.data.success) {
    let leaderboard = response.data.leaderboard;
    return leaderboard.reverse();
  }
};
