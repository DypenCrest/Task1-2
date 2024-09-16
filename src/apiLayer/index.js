export const fetchUserData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    alert(error, "error");
  }
};
