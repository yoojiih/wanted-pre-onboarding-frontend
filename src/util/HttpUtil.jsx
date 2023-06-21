import axios from "axios";
import Endpoints from "../config/EndpointConfig.json";

axios.defaults.baseURL = "https://www.pre-onboarding-selection-task.shop/";

class HttpUtil {
    /**
     * HTTP 통신을 호출하는 Method
     */
    static async call(endpointEnum, params) {
        const endpoint = Endpoints[endpointEnum];
        const formData = new FormData();
        let axiosResponse;
        let url = endpoint.uri;

        if (params) {
            if (endpoint.method === "GET") {
                // url += `?${queryString.stringify(params)}`;
            }
            Object.keys(params).forEach(key => {
                formData.append(key, params[key]);
            });
        }
        const headers = {
            "content-type": "application/json",
        };

        try {
            const axiosConfig = {
                method: endpoint.method,
                url,
                data: formData,
                responseType: "json",
                headers,
            };
            axiosResponse = await axios(axiosConfig);
        } catch (e) {
            alert(e.response.data.message);
            return false;
        }
        const response = axiosResponse.data;

        return response;
    }
}
export default HttpUtil;
