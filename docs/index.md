---
title: اهلا
layout: home
description: موسوعة خاصة ب سرفر Our Server

hero:
  name: "OSW"
  text: "Our Server's Wiki"
  tagline: موسوعة قرصنة
  image:
    src: /logo.webp
    alt: Our Server's Icon
  actions:
    - theme: brand
      text: تصفح الموسوعة من هنا
      link: /beginners-guide
    - theme: alt
      text: تحديثات
      link: /updates     
    - theme: alt
      text: ساعدنا
      link: /Help-us

features:
  - icon: 🎥
    title: افلام / مسلسلات / انمي
    details: اتفرج حمل تورنت تقدر تتفرج ع افلامك او مسلسلاتك المفضلة !
    link: /Movies-TV-Anime
  - icon: ⚔
    title: العاب / محاكاة
    details: حمل و العب كل العابك المفضلة او شغل العاب قديمة علي محاكات !
    link: /Games&Emmulation
  - icon: 🥁
    title: موسيقة / بودكاست / راديو
    details: اسمع حمل تورنت اغاني بودكاستات و اكتر !
    link: /Music-Podcasts-Radio
  - icon: 📔
    title: كتب / كوميكس / مانجا
    details: بتحب القراء او اوتاكواو بتحب الكوميكس هتلاقي الادب الي بتفلو مجانا !
    link: /Books-Comics-Manga

---

<div dir="rtl">
  <!-- Include the relevant content here, e.g., hero section, features -->
  <!-- Example: -->
  <section class="hero">
    <h1>OSW</h1>
    <p>Our Server's Wiki</p>
    <p>موسوعة قرصنة</p>
    <img src="/logo.webp" alt="Our Server's Icon">
    <div class="actions">
      <a href="/beginners-guide">تصفح الموسوعة من هنا</a>
      <a href="/updates">تحديثات</a>
      <a href="/Help-us">ساعدنا</a>
    </div>
  </section>

  <section class="features">
    <div class="feature">
      <span class="icon">🎥</span>
      <h2>افلام / مسلسلات / انمي</h2>
      <p>اتفرج حمل تورنت تقدر تتفرج ع افلامك او مسلسلاتك المفضلة !</p>
      <a href="/Movies-TV-Anime">More</a>
    </div>
    <div class="feature">
      <span class="icon">⚔</span>
      <h2>العاب / محاكاة</h2>
      <p>حمل و العب كل العابك المفضلة او شغل العاب قديمة علي محاكات !</p>
      <a href="/Games&Emmulation">More</a>
    </div>
    <div class="feature">
      <span class="icon">🥁</span>
      <h2>موسيقة / بودكاست / راديو</h2>
      <p>اسمع حمل تورنت اغاني بودكاستات و اكتر !</p>
      <a href="/Music-Podcasts-Radio">More</a>
    </div>
    <div class="feature">
      <span class="icon">📔</span>
      <h2>كتب / كوميكس / مانجا</h2>
      <p>بتحب القراء او اوتاكواو بتحب الكوميكس هتلاقي الادب الي بتفلو مجانا !</p>
      <a href="/Books-Comics-Manga">More</a>
    </div>
  </section>
</div>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}

body {
  direction: rtl;
  text-align: right;
}
</style>