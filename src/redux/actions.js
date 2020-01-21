//const url = 


export const addService = (userServices) => {
  return {
      type: 'ADD_SERVICE',
      value: userServices 
  }
}

export const onSubmit = (newServs) => {
  return {
      type:'SUBMI_NEWUSER',
      value:newServs
  }
 }

export const searchUserId = (user) => {
 return {
     type:'SEARCH_USER',
     value:user
 }
}
export const fetch = () => {
  return (dispatch) => {
      fetch('')
          .then(res => res.json())
          .then(response => {
              const action = {
                  type: 'FETCH_NEWSERV',
                  value: response.Results.slice(0,10)
              }
              dispatch(action)
          })
  }
}