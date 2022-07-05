import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import { eventImageReducer, eventListReducer } from "./reducers/EventReducers";
import { expertiseDetailsReducer, expertiseListReducer } from "./reducers/ExpertiseReducers";
import { dexpertiseDetailsReducer, dexpertiseListReducer } from "./reducers/DexpertiseReducers";
import { generalListReducer } from "./reducers/GeneralReducers";
import { hubDetailsReducer, hubImageReducer, hubListFRReducer, hubListReducer, hubListTypeReducer } from "./reducers/HubReducers";
import { partenaireListReducer } from "./reducers/PartenaireReducers";
import { postListCategoriesReducer, postListReducer } from "./reducers/PostReducers";
import {
  programListReducer,
  programDetailsReducer,
  programListTypeOfDonilabReducer,
  programListTypeWithPartnersReducer,
} from "./reducers/ProgramReducers";
import { frexpertiseListReducer } from "./reducers/FrexpertiseReducers";


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
  dexpertiseList: dexpertiseListReducer,
  dexpertiseDetails: dexpertiseDetailsReducer,
  frexpertiseList: frexpertiseListReducer,
  hubList: hubListReducer,
  hubListFr: hubListFRReducer,
  hubListType: hubListTypeReducer,
  hubDetails: hubDetailsReducer,
  hubImage: hubImageReducer,
  eventList: eventListReducer,
  eventImage: eventImageReducer,

});
const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
      const composeEnhancer = composeWithDevTools|| compose;
      return composeEnhancer(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};


const store = createStore(
  reducer,
  bindMiddleware([thunk])

);

export default store;

