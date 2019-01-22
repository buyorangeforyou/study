/**
 * 设置用户登陆状态
 * @param {*} state 
 * @param {*} status true or false
 */
export const setUserLoginState = (state, status) => {
  state.isLogin = status;
};
