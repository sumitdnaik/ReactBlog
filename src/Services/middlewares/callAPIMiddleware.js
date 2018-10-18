export default function callAPIMiddleware({ dispatch, getState }) {
  return next => action => {
    const {
      types,
      callAPI,
      onSuccess = () => {},
      onError = () => {},
      conditionedDispatch = false,
      payload = {}
    } = action;
    if (!types) {
      // Normal action: pass it on
      return next(action);
    }

    if (
      !Array.isArray(types) ||
      types.length !== 3 ||
      !types.every(type => typeof type === 'string')
    ) {
      throw new Error('Expected an array of three string types.')
    }

    if (typeof callAPI !== 'function') {
      throw new Error('Expected callAPI to be a function.')
    }
    // if (!shouldCallAPI(getState())) {
    //   return;
    // }
    const [requestType, successType, failureType] = types;

    function dispatchSuccess(response){
      return dispatch(
        {
          type: successType,
          response,
          payload
        }
      );
    }

    function dispatchFailure(response){
      return dispatch(
        {
          type: failureType,
          response,
          payload
        }
      );
    }

    dispatch(
      {
        type: requestType,
        payload
      }
    );
    return callAPI().then(
      response => {
        if(conditionedDispatch) {
          if(onSuccess(response)){
            dispatchSuccess(response);
          }
          else {
            dispatchFailure(response);
          }
        }
        else {
          if(response.data.status){
            dispatchSuccess(response);
            onSuccess(response);
          } else {
            dispatchFailure(response);
          }
        }
      },
      error => {
        dispatchFailure(error);
        onError(error);
      }
    )
  }
}
