import 'typed-query-selector';

/** MV表示 */
const mvDisplay = () => {
  const mv = document.getElementById('js_mv');
  mv?.classList.add('is_display');
};

/** MVコンテンツ表示 */
const mvContentsDisplay = () => {
  const textElementsArr = Array.from(document.querySelectorAll('span.js_mv_text'));
  let setText: Promise<void>;

  /** 一文字ずつ表示用クラスとアニメーション遅延時間を設定 */
  textElementsArr.map((el, index) => {
    const text = el.textContent;
    const char = text?.split('');
    let newText = '';
    char?.forEach((target, i) => {
      const sec = i / 10;
      newText += `<span class="is_display" style="animation-delay:${sec}s;">${target}</span>`;
    });

    const newEl = el;
    newEl.textContent = '';
    setText = new Promise(resolve => {
      setTimeout(() => {
        resolve(newEl.insertAdjacentHTML('beforeend', newText));
      }, 1000 * (index + 1));
    });
    return setText;
  });

  /** 作成したテキストと下線をセット */
  async function setting() {
    await setText;
    setTimeout(() => {
      const textLineArea = document.querySelector('.js_mv_textLine');
      textLineArea?.classList.add('is_display');
    }, 2000);
  }
  return setting();
};

const mv = () => {
  mvDisplay();
  mvContentsDisplay();
};

export default mv;
