// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://josh.restful.training/api/blog",

    // use your own key
    params: {
        key: "723e94bb8acf89e7dcae7f49a2de8d771023200a",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});