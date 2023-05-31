import style from './CookieBanner.module.scss';

export function CookieBanner() {
  return (
    <div className={style.cookieBanner}>
      <div>
        <h1>Our website uses cookies</h1>
        <h2>
          Einige werden benötigt, damit die Seiten-Features ordentlich
          funktionieren, andere sind optional und versorgen uns mit technischem
          und Inhalts-bezogenem Feedback, um die Bedienung der Seite für dich
          angenehmer zu gestalten. Um dich besser zu erreichen – zum Beispiel
          wenn wir dir über Social-Media-Kanäle etwas Interessantes mitteilen
          wollen –, geben wir gegebenenfalls auch Teile unserer Cookies an
          unsere Partner weiter. Jeder dieser optionalen Cookies erfordert
          allerdings deine Zustimmung. Alle Details zu unserer Nutzung von
          Cookies findest du unten im Menü „Einstellungen“, wo du, falls
          gewünscht, auch alle Einstellungen rund um das Thema Cookies ändern
          kannst. Wenn du dann mit deiner Wahl zufrieden bist, klicke bitte auf
          „OK“.
        </h2>
      </div>
      <button>Accept</button>
    </div>
  );
}
