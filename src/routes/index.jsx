import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

// providers
import Layout from '../components/navigation/Layout';

// Routes
// import Marketplace from "../views/Marketplace";


export default function Routes() {
  return (
    <Router>
          <ToastContainer />
          <Route
            exact
            path={[
              '/'
            ]}
          >
            <Layout>
              <Suspense
                fallback={
                  <div className="flex items-center my-16 hidden">
                    <h1 className="w-full text-2xl">Loading...</h1>
                  </div>
                }
              >
              </Suspense>
            </Layout>
          </Route>
    </Router>
  );
}
