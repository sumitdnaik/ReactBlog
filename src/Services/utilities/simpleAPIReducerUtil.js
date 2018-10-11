
export default function simpleAPIReducerUtil({actionTypes, isGetData = false, getDataType = {}, dataSelector = ""}){
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
          if(dataSelector.length > 0 && dataSelector.indexOf(".") == -1){
            data = data[dataSelector];
          }
          else if(dataSelector.length > 0) {
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
      console.log(action.response);
        return({
          ...state, inProgress: false, errorMessage: action.response.data.message
        });
        break;

        default:
          return state;
    }

  }
}
