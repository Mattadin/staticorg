import React from 'react';
import { Navigate, Link, useParams } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_USER } from '../utils/queries';

const Home = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};

  if (Auth.loggedIn()) {
    return <Navigate to="/dashboard" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  };


  return (
    <main id= "heroImage" className="hero-container">
      <div className="enter__container">
        <p>
          <Link to="/login">
            <button id="enter__button" className="hero__center" alt="Enter button">ENTER HERE PLEASE AND THANK YOU</button>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Home;
