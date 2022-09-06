/**
 * スクロール発火アニメーション（IntersectionObserver）
 */

/** IO オプション設定 */
const options: object = {
  root: null,
  rootMargin: '0px',
  threshold: [0.1],
};

/** 表示用クラス付与 */
const targets = Array.from(document.querySelectorAll('.js_anime'));
const defaultIo = () => {
  const cb = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is_display');
      } else {
        entry.target.classList.remove('is_display');
      }
    });
  };
  const observer = new IntersectionObserver(cb, options);
  targets.forEach(target => observer.observe(target));
};

/** リスト表示用クラス付与（時間差） */
const targetLists = Array.from(document.querySelectorAll('.js_anime__list'));
const targetListsChildren = targetLists.map(target => Array.from(target.children));
const listIo = () => {
  const cb = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        const delay = index * 400;
        setTimeout(() => {
          entry.target.classList.add('is_display');
        }, delay);
      } else {
        entry.target.classList.remove('is_display');
      }
    });
  };
  const observer = new IntersectionObserver(cb, options);
  targetListsChildren.forEach(children => children.forEach(child => observer.observe(child)));
};

export { defaultIo, listIo };
