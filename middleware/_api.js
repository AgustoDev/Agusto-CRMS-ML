import axios from "axios";
let endPoint;
if (process.client) {
  let endPoint = `${window.location.host}/api/v1`;
}
