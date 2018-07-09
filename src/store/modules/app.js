/*
 * @Author: tarn.tianrun 
 * @Date: 2018-02-07 16:26:54 
 * @Last Modified by: tarn.tianrun
 * @Last Modified time: 2018-05-23 15:06:26
 */

const app = {
  state: {
    currentActiveForProfile: 0,
    currentActiveName: ''
  },
  mutations: {
    setCurrentActiveForProfile(state, active) {
      state.currentActiveForProfile = active
    },
    setcurrentActiveName(state, active) {
      state.currentActiveName = active
    },
  }
};
export default app;
