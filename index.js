module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};

// First we create a function that takes in multiple arrays of usernames as arguments.
// The rest parameter syntax allows an arbitrary number of arrays to be passed in.
function combineUsers(...users) {
  const mergedArray = users.flat();
  const now = new Date();
  const mergeDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;

  return {
    users: mergedArray,
    merge_date: mergeDate,
  };
}
console.log(combineUsers(["Jim3","Pam5","Dwight77"],["Michael6","Eleanor22","Chidi202"],["Jack_jack","Julia_Oreo", "Bill_bore"]));
 