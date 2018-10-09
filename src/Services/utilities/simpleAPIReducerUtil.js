
export default function simpleAPIReducerUtil({actionTypes, isGetData = false, getDataType = {}, dataSelector = "data"}){
  const initialState = {
    inProgress: false,
    errorMessage: ""
  }
  if(isGetData) initialState.data = getDataType;
  return function(state = initialState, action) {
    const [requestType, successType, failureType] = actionTypes;

    switch(action.type) {

      case requestType:
        return({
          ...state, inProgress: true
        });
        break;

      case successType:
        let data = action.response.data;
        if(isGetData){
          if(dataSelector.indexOf(".") == -1){
            data = data[dataSelector];
          }
          else {
            let selectors = dataSelector.split(".");
            for(let i=0; i<selectors.length; i++){
              data = data[selectors[i]];
            }
          }
          return({
            ...state, inProgress: false, data
          });
        }
        else {
          return({
            ...state, inProgress: false
          });
        }
        break;

      case failureType:
        return({
          ...state, inProgress: false, errorMessage: action.response.data.message
        });
        break;

        default:
          return state;
    }

  }
}
