import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server
    // requests should be made to http://ingress-nginx-controller.ingress-nginx.....
    // 'http://SERVICENAME.NAMESPACE.svc.cluster.local'
    return axios.create({
      baseURL:
        // 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
        'http://www.buying-and-selling-tickets-app-prod.xyz/',
      headers: req.headers,
    });
  } else {
    // we are on the browser
    // requests can be made with a base url of ''
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
