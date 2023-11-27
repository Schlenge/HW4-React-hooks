import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import css from '../components/App.module.css';

import Feedback from './Feedback/Feedback';
import ImageFinder from './Image-finder/ImageFinder';
import Phonebook from './Phonebook/Phonebook';

export const App = () => {
  return (
    <div>
      <h1 className={css.Title}>HW 4 - React hooks</h1>
      <nav className={css.Navbar}>
        <ul>
          <li className={css.MenuItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={css.MenuItem}>
            <Link to="/Feedback">Feedback</Link>
          </li>
          <li className={css.MenuItem}>
            <Link to="/Phonebook">Phonebook</Link>
          </li>
          <li className={css.MenuItem}>
            <Link to="/ImageFinder">Image-Finder</Link>
          </li>
        </ul>
      </nav>
      <div className={css.Content}>
        <Routes>
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/ImageFinder" element={<ImageFinder />} />
          <Route path="/Phonebook" element={<Phonebook />} />
        </Routes>
      </div>
    </div>
  );
};
