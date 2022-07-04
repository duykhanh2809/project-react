import { accountActions } from "./account-slice";

export const fetchDataUser = (userId) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCUQAzV-KnsNTwjd9wRzXeUE9lPD0P4cVc",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: userId,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    const { displayName, email } = data.users[0];
    dispatch(
      accountActions.updateUserData({
        displayName,
        email,
      })
    );
    localStorage.setItem(
      "user",
      JSON.stringify({
        displayName,
        email,
        isLoggedIn: true,
      })
    );
  };
};
