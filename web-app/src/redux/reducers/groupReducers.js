import { GROUPS_LOADED } from "../actionTypes";
import initialStatus from "../initialState";

export default function groupReducers(state = initialStatus, action) {
   switch (action.type) {
      case GROUPS_LOADED:
         return Object.assign({}, state, {
            groupsData: action.payload
         });
      default:
         return state;
   }
}
