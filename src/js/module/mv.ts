import 'typed-query-selector';

export default window.onload = () => {
  const mv = document.getElementById('js_mv');
  mv?.classList.add('is_display');

  const textElements = document.querySelectorAll('span.js_mv_text');
  const textElementsArr = Array.from(textElements);
  let setText: Promise<void>;

  textElementsArr.map((el, index) => {
    const text = el.textContent;
    const char = text?.split('');
    let newText = '';
    char?.forEach((target, i) => {
      const sec = i / 10;
      newText += `<span class="is_display" style="animation-delay:${sec}s;">${target}</span>`;
      return newText;
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

  async function setting() {
    await setText;
    setTimeout(() => {
      const textLineArea = document.querySelector('.js_mv_textLine');
      textLineArea?.classList.add('is_display');
    }, 2000);
  }
  return setting();
};
