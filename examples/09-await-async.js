function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Adam" });
    }, 5000);
  });
}

async function fetchUserData() { // in order to use "await" in method you have to put async
  let respone = await getUser(); // if it is promise you have to "await" given time to get a response

  console.log(respone);
}

fetchUserData();
