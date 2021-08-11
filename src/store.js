import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { eventImageReducer, eventListReducer } from "./reducers/EventReducers";
import { expertiseDetailsReducer, expertiseListReducer } from "./reducers/ExpertiseReducers";
import { generalListReducer } from "./reducers/GeneralReducers";
import { hubDetailsReducer, hubImageReducer, hubListReducer, hubListTypeReducer } from "./reducers/HubReducers";
import { partenaireListReducer } from "./reducers/PartenaireReducers";
import { postListCategoriesReducer, postListReducer } from "./reducers/PostReducers";
import {
  programListReducer,
  programDetailsReducer,
  programListTypeOfDonilabReducer,
  programListTypeWithPartnersReducer,
} from "./reducers/ProgramReducers";


const reducer = combineReducers({
  generalList: generalListReducer,
  partenaireList: partenaireListReducer,
  programList: programListReducer,
  programByDonilab: programListTypeOfDonilabReducer,
  programWithPartners: programListTypeWithPartnersReducer,
  programDetails: programDetailsReducer,
  postList: postListReducer,
  postListCategories: postListCategoriesReducer,
  expertiseList: expertiseListReducer,
  expertiseDetails: expertiseDetailsReducer,
  hubList: hubListReducer,
  hubListType: hubListTypeReducer,
  hubDetails: hubDetailsReducer,
  hubImage: hubImageReducer,
  eventList: eventListReducer,
  eventImage: eventImageReducer,

});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;