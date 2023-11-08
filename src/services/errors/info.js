export const generateUserErrorInfo = (user) => {
    return `One or more propierties were incompleted or not valid.
    List of required propierties:
    * first_name : needs to be a String, received ${user.first_name}
    * last_name  : needs to be a String, received ${user.last_name}
    * email      : needs to be a String, received ${user.email}`
}