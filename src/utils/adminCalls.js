export function fetchAdmins() {
  return fetch(
    "https://druvaone-mock-apis.herokuapp.com/api/console/admin?input=%7B%22request%22%3A%7B%22method%22%3A%22ListAdmins%22%7D%7D"
  ).then(response => response.json());
}
