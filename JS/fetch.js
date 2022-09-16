import axios from "axios";
import fetch from "node-fetch";

axios.get("http://serv03.sidequest.pe/api/gatos").then((res) => {
  console.log("Axios", res.data);
});

fetch("http://serv03.sidequest.pe/api/gatos")
  .then((res) => res.json())
  .then((data) => console.log("Fetch", data));
