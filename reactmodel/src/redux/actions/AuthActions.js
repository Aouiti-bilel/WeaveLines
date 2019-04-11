import axios from "axios";
import { GET_PROFILE, GET_ERRORS } from "./types";

export const oauthGoogle = data => dispatch => {
  axios
    .post(`http://localhost:5000/api/contacts/access?q=${data}`)
    .then(res => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
