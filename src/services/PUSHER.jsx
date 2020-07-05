import Echo from 'laravel-echo';
const options = {
  broadcaster: 'pusher',
  key: 'ABCD',
  secret: "EFGJ",
  cluster: 'mt1',
  forceTLS: false,
  //authEndpoint is your apiUrl + /broadcasting/auth
  authEndpoint: 'https://kn2jxedj.myhook.io/api', 
  // As I'm using JWT tokens, I need to manually set up the headers.
  auth: {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  },
};

const echo = new Echo(options);
echo.private(`App.User.${userId}`).notification((data) => {
    console.log(data);
});