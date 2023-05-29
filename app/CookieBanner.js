import style from './CookieBanner.module.scss';

export function CookieBanner() {
  return (
    <div className={`${style.cookieBanner} ${style.closed}`}>
      <div>This is the Cookie Police. Please accept terms and conditions</div>
      <button>Accept</button>
    </div>
  );
}
