/* eslint-disable no-console */
import axios from "axios";

interface Props {
  url: string;
  params?: any;
  data?: any;
  token?: string;
  cancelToken?: string;
  timeStamp?: number;
}

type GetProps = Omit<Props, "data">;

const queryParser = (params: any) => {
  let queryParams = "";
  for (const key in params) {
    if (!queryParams) {
      queryParams = queryParams.concat(`?${key}=${params[key]}`);
    } else {
      queryParams = queryParams.concat(`&${key}=${params[key]}`);
    }
  }
  return queryParams;
};

const timeoutStandard = 200000;

const defaultHeaders = {
  "Content-Type": "application/json",
  "x-timestamp": Date.now(),
};

const Axios = {
  Get: ({ url, params, token, timeStamp }: GetProps) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "GET",
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,

            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Post: ({ url, data, token, timeStamp }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            ...defaultHeaders,

            Authorization: `Bearer ${token}`,
          },
          timeout: timeoutStandard,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  PostFormData: ({ url, data, token, timeStamp }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {
          headers: {
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${token}`,
          },
          timeout: timeoutStandard,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Put: ({ url, params, data, token, timeStamp }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PUT",
          headers: {
            ...defaultHeaders,

            Authorization: `Bearer ${token}`,
          },
          timeout: timeoutStandard,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Patch: ({ url, params, data, token, timeStamp }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PATCH",
          headers: {
            ...defaultHeaders,

            Authorization: `Bearer ${token}`,
          },
          timeout: timeoutStandard,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  PatchFormData: ({ url, params, data, token, timeStamp }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "PATCH",
          headers: {
            ...defaultHeaders,
            "Content-Type": "multipart/form-data",

            Authorization: `Bearer ${token}`,
          },
          timeout: timeoutStandard,
          data,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
  Delete: ({ url, params, token, timeStamp }: Props) => {
    return new Promise((resolve, reject) => {
      axios
        .request({
          url: url + queryParser(params),
          method: "DELETE",
          timeout: timeoutStandard,
          headers: {
            ...defaultHeaders,

            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log("Request canceled", error);
          } else {
            reject(error);
          }
        });
    });
  },
};

export default Axios;
