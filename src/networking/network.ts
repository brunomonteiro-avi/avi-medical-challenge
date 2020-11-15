import axios, { AxiosRequestConfig } from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://94.237.101.207:8080/api/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

async function makeNetworkCall(
    config: AxiosRequestConfig,
) {
    
    return AxiosInstance.request(config);
}

export { makeNetworkCall };
