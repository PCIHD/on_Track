import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup =  (dispatch) => {
  return async ({email, password}) => {
    //make api request for signup
    try {

      const response = await trackerApi.post('/signup' , {email,password});
      console.log(response.data);
    } catch (err){
    console.log(err.message);
    }
  };
};
const signin = (dispatch) => {
  return ({email, password}) => {
    //make api request for signin
  };
};

const signout = (dispatch) => {
  return () => {
    //make api request for signout
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup},
  {isSignedIn: false},
);
