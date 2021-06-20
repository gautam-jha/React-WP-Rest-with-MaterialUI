import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import { default as Navigator } from './Core/Navigator';
import { ROUTES } from './Routes/index';

import { Loading } from './Component';
import {AppProvider} from './Layout';
import Layout from "./Layout/Layout";


function App(props) {
  const [initialized,setInitialized] = useState(false)
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState({});

  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [responseInterceptor, setResponseInterceptor] = useState(null);

  /**
     * Authenticate the user.
     *
     * @param {string} tokenString
     *
     * @return {undefined}
     */
    const authenticate = async tokenString => {
      const token = tokenString;

      if (token === {}) {
          return;
      }

      storeToken(token);

      await fetchUser();
  };

  /**
   * Sign out user.
   *
   * @return {undefined}
   */
  const signOut = async () => {
      setLoading(true);

      try {
          await axios.post(process.env.API_URL + 'api/v1/auth/signout');

          removeToken();

          setLoading(false);
          setAuthenticated(false);
          setUser({});
      } catch (error) {
        removeToken();

        setLoading(false);
        setAuthenticated(false);
        setUser({});
          //
      }
  };
   /**
     * Store the authentication object as string into a persistent storage.
     *
     * @param {object} token
     *
     * @return {undefined}
     */
    const storeToken = token => {
      // We will set a default Authorization header, this will
      // eliminate the need to include the Authorization header
      // for almost every AJAX requests.
      window.axios.defaults.headers.common['Authorization'] = `Bearer ${
          token
      }`;
      //Request.headers.

      setToken(token);

      // Store it locally for the authentication token to persist.
      window.localStorage.setItem('token', JSON.stringify(token));
  };

  /**
   * Remove token data stored in persistent storage.
   *
   * @return {undefined}
   */
  const removeToken = () => {
      localStorage.removeItem('token');
  };

  /**
   * Fetch the authenticated user.
   *
   * @return {any}
   */
  const fetchUser = async () => {
      setLoading(true);

      try {
          const response = await axios.post(process.env.API_URL + 'api/details');
          setUser(response.data);
          setUsername(response.data.name)
          setAuthenticated(true);
          setLoading(false);

          return response.data;
      } catch (error) {
          //
      }
  };

    /**
     * Sign out user completely.
     *
     * @return {undefined}
     */
    const handleSignOut = () => {
      signOut();
  };
  const getToken = () =>{
    const tokenString = window.localStorage.getItem('token');

    if (!tokenString) {
        return {};
    }

    const token = JSON.parse(tokenString);

    setToken(token);

    return token;

  }

    /**
     * Remove the response interceptor.
     *
     * @param {any} interceptor
     *
     * @param {undefined}
     */
    const removeResponseInterceptor = interceptor => {
      axios.interceptors.response.eject(interceptor);
  };

  /**
   * Record API responses & do something.
   *
   * @param {any} interceptor
   *
   * @param {undefined}
   */
  const addResponseInterceptor = () => {
      const responseInterceptor = axios.interceptors.response.use(
          response => {
              return response;
          },

          error => {
              // In occasions of Unauthorized requests (401),
              // Remove the stored tokens.
              if (error.response.status === 401) {
                  removeToken();
              }

              return Promise.reject(error);
          },
      );

      setResponseInterceptor(responseInterceptor);
  };


  useEffect(() => {
    if (initialized) {
      return;
  }

  //monitor();

  addResponseInterceptor();

  //night();

  const token = getToken();

  if (Object.keys(token).length > 0) {
      authenticate(token);
  } else {
      setLoading(false);
  }

  if (responseInterceptor !== null) {
      removeResponseInterceptor(responseInterceptor);
  }

  setInitialized(true);
}, [initialized]);

  const pageProps = {
    //props
    routes: ROUTES,
    //state
    loading,
    authenticated,
    user,
    token,
    username,
  
     // Methods
     //handleNightModeToggled,
     authenticate,
     handleSignOut,
  
  };


  return (
    <AppProvider {...pageProps}>
    {loading ? (
      <Loading />
  ) : (
      <Router>
        <Layout loading={loading}>
          <Navigator />
        </Layout>
      </Router>
  )}
    </AppProvider>
  );
}

export default App;
