import playwright from 'playwright';
import fs from 'fs';

(async () => {
  const browser = await playwright.chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://www.melon.com/chart/index.htm');

  // 노래 정보 추출
  const songs = await page.evaluate(() => {
    const songElements = document.querySelectorAll('.lst50, .lst100');

    const songData = [];

    for (const element of songElements) {
      const rank = element.querySelector('.rank').innerText.trim();
      const title = element
        .querySelector('.ellipsis.rank01 > span > a')
        .innerText.trim();
      const artist = element
        .querySelector('.ellipsis.rank02 > a')
        .innerText.trim();
      const album = element
        .querySelector('.ellipsis.rank03 > a')
        .innerText.trim();

      songData.push({ rank, title, artist, album });
    }

    return songData;
  });

  // JSON 문자열로 변환
  const jsonData = JSON.stringify(songs, null, 2);

  // 파일로 저장
  fs.writeFileSync('melon.json', jsonData);

  // 브라우저 종료
  await browser.close();

})();
