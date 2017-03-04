import request from 'superagent'

const asyncCallsToApi = store => next => action => {
  next(action)
  switch (action.type) {
    case 'SUBMIT_FORM':
      request
        .post(action.endpoint)
        .type('form')
        .send({
          email: action.payload.email,
          subscriptions: action.payload.subscriptions,
          bundleType: action.payload.bundleType
         })
        .end(function(err, res){
          if (err || !res.ok) {
          //  handle error calling API
          } else {
            console.log(res.body);
            next({
               type: 'RECEIVED_URL',
               payload: {
                 url: res.body
               }
            })
          }
        }
      )
      break
    default:
      break
  }
}

export default asyncCallsToApi
