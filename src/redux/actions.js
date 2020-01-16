export const addService = (service) => {
  return {
      type: 'ADD_SERVICE',
      value: service
  }
}

export const removeUserService = (index) => {
  return {
      type: 'REMOVE_userService',
      value: index
  }
}

export const deleteUserService = (index) => {
 return {
     type:'DELETE_UserService',
     value:index
 }
}