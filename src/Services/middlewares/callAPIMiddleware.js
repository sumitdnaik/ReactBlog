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
        Object.assign({}, payload, {
          response,
          type: successType
        })
      );
    }

    function dispatchFailure(response){
      return dispatch(
        Object.assign({}, payload, {
          response,
          type: failureType
        })
      );
    }

    dispatch(
      Object.assign({}, payload, {
        type: requestType
      })
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
            onSuccess(response);
            dispatchSuccess(response);
          } else {
            dispatchFailure(response);
          }
        }
      },
      error => {
        onError(error);
        dispatchFailure(error);
      }
    )
  }
}
