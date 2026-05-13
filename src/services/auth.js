const baseurl = "http://localhost:3000";

export function register(newUser) {
  return fetch(`${baseurl}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  }).then((res) => res.json());
}

export async function login(email, password) {
  const res = await fetch(
    `${baseurl}/users?email=${email}&password=${password}`
  );

  const data = await res.json();

  if (data.length > 0) {
    return data[0];
  }

  throw new Error("Invalid email or password");
}