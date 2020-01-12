export const addService = (service) => {
  return {
      type: 'ADD_SERVICE',
      value: service
  }
}

// export const fetchMakes = () => {
//   return (dispatch) => {
//       fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json')
//           .then(res => res.json())
//           .then(response => {
//               const action = {
//                   type: 'FETCH_MAKES',
//                   value: response.Results.slice(0,162)
//               }
//               dispatch(action)
//           })
//   }
// }