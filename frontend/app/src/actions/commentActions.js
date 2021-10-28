import axios from "axios";
import API_URL from "../constants/APIConfig";
import { ADD_COMMENT, GET_COMMENTS } from "../constants/commentActionType";

export const addComment = (comment) => {
  console.log("comment: " + JSON.stringify(comment));
  return (dispatch, getState) => {
    axios
      .post(API_URL + "comments", comment, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("auth"),
        },
      })
      .then((comment) => {
        dispatch({
          type: ADD_COMMENT,
          comment,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

// export const getComments = () => {
//   return (dispatch) => {
//     axios
//       .get(API_URL + "comments", {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("auth"),
//         },
//       })
//       .then((comments) => {
//         dispatch({
//           type: GET_COMMENTS,
//           comments,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   };
// };
