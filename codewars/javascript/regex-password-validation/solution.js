// This uses positive lookahead three times to make sure that the password has at least one
// number, one upper case character, and one lowercase character. These tests don't "count"
// as matches because they are lookahead. Then there is a phrase making sure that the password
// string is made up of at least a six-character-long alphanumeric string, and that it starts
// and ends with that string (important when there are leading or trailing non-alphanumeric characters).

function validate(password) {
  return /(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*)^[A-Za-z0-9]{6,}$/.test(
    password
  );
}
