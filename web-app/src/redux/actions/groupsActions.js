import socket from "../io";
import { GROUPS_LOADED } from "../actionTypes";

// When the App loads ..
// dispatch a function to wait for IO response from the server to update the Group Data

/**
 * Getting the Groups Data From the server and pass it to the Action GROUPS_LOADED >> to update the Satae
 * @returns {Function}
 */
export const requestingGroupsData = () => {
   return dispatch => {
      socket.on("groupsData", data => {
         dispatch(groupDataHasBeenReceived(data));
      });
   };
};

export const groupDataHasBeenReceived = data => {
   return {
      type: GROUPS_LOADED,
      payload: data
   };
};

// Create a Group

// Delete a Group
