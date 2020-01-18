//const url = 

export const addService = (userServices) => {
  return {
      type: 'ADD_SERVICE',
      value: userServices 
  }
}



// export const deleteUserService = (index) => {
//  return {
//      type:'DELETE_UserService',
//      value:index
//  }
// }
// export const fetch = () => {
//   return (dispatch) => {
//       fetch('')
//           .then(res => res.json())
//           .then(response => {
//               const action = {
//                   type: 'FETCH_NEWSERV',
//                   value: response.Results.slice(0,10)
//               }
//               dispatch(action)
//           })
//   }
// }