'use client';
import './CPFontStyles.scss';
import { useState } from 'react';
import style from './CookieBanner.module.scss';

export function CookieBanner() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  return (
    <div
      className={`${style.cookieBanner} ${areCookiesAccepted && style.closed}`}
    >
      <h1 className="cyberpunk">We are following you with cookies</h1>
      <h2>
        Some are required for the site features to work properly, others are
        optional. others are optional and provide us with technical and content
        and content-related feedback to make the site more enjoyable for you.
        more pleasant for you. To better reach you - for example, when we want
        to tell you something interesting via social media channels -, we may
        also share parts of our cookies with our partners. partners. However,
        each of these optional cookies requires your consent. You can find all
        the details about our use of cookies below menu "Settings", where you
        can, if desired, also change all settings regarding cookies. all
        settings around the topic of cookies. If you are satisfied with your
        choice please click on "OK". Translated with www.DeepL.com/Translator
        (free version)
      </h2>
      <button onClick={() => setAreCookiesAccepted(true)}>Accept</button>
    </div>
  );
}
