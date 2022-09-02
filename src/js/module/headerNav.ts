import 'typed-query-selector';

/**
 * ドロワーの開閉制御
 * @param btn ドロワー開閉用のボタン
 * @param target 表示させたいメニューコンテンツ要素
 */
const drawerToggle = (btn: HTMLButtonElement, target: HTMLElement) => {
  /** メニューコンテンツ表示時の各属性値設定 */
  const openContents = () => {
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('area-label', 'メニューを閉じる');
    target.setAttribute('aria-hidden', 'false');
  };

  /** メニューコンテンツ非表示時の各属性値設定 */
  const closeContents = () => {
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('area-label', 'メニューを開く');
    target.setAttribute('aria-hidden', 'true');
  };

  /** ドロワー開閉ボタンクリック時の挙動 */
  btn.addEventListener('click', () => {
    const btnState = btn.getAttribute('aria-expanded');
    if (btnState === 'false') {
      openContents();
    } else {
      closeContents();
    }
  });

  /** ドロワーメニュー外クリック時の挙動 */
  document.addEventListener('click', e => {
    if (e.target instanceof HTMLElement && !e.target.closest('.js_drawerNav')) {
      closeContents();
    }
  });

  /** ドロワーメニューリンククリック時の挙動 */
  const anchorLinks = target.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.from(anchorLinks);
  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement!.getBoundingClientRect().top;
      const headerHeight: number = document.querySelector('header')!.clientHeight;

      window.scrollTo({
        top: targetOffsetTop - headerHeight,
        behavior: 'smooth',
      });
      closeContents();
    });
  });
};

/** ヘッダー */
const headerNav = () => {
  const toggleBtn = document.querySelector('button.js_drawerNav_btn');
  const drawerNav = document.querySelector('div.js_drawerNav');

  if (toggleBtn != null && drawerNav != null) {
    drawerToggle(toggleBtn, drawerNav);
  }
};

export default headerNav;
