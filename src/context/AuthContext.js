import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) =>{
  return ({email,password}) =>{
    //make api request for signup
  };
};
const signin = (dispatch) =>{
  return ({email,password}) =>{
    //make api request for signin
  };
};

const signout = (dispatch) =>{
  return () =>{
    //make api request for signout
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
    {signin,signout,signup},
    {isSignedIn: false});
