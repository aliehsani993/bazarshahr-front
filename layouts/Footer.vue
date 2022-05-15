<template>
  <div class="primary-footer flex w-full border-t">
    <div class="container m-auto">
      <div class="grid gap-12 grid-cols-4 px-2 pt-4 md:pt-8">
        <div class="col-span-2 mt-5">
          <img alt="footer logo" class="primary-footer__logo" src="/img/footer-logo.svg">
          <p class="primary-footer__about">
            در نرم‌افزار بازارشهر می‌توانید با خیال راحت و به‌آسانی تمام آنچه دوست دارید را جستجو کنید
            تمام فروشگاه‌های سطح شهر به‌راحتی و بدون دانش فنی خاص می‌توانند فروشگاه اینترنتی خود را
            راه‌اندازی و محصولات خود را ثبت کنند
            فروشگاه‌های بازارشهر می‌توانند برای محصولات خود تخفیف در نظر بگیرند و کاربران با خریدهای تخفیف
            خورده از خرید خود لذت ببرند
          </p>
          <div class="primary-footer__download flex px-3">
            <a class="mb-2" href="https://cafebazaar.ir/app/com.bazarshahr.customer.app">
              <img src="/img/download-cafebazar.jpg" class="rounded" alt="کافه بازار">
            </a>
            <a class="mb-2" href="https://play.google.com/store/apps/details?id=com.bazarshahr.customer.app">
              <img src="/img/download-play.jpg" class="rounded" alt="گوگل پلی">
            </a>
            <a class="mb-2" href="https://blog.bazarshahr.com/wp-content/uploads/Bazarshahr-Customer.apk">
              <img src="/img/download-customer-website.png" class="rounded" alt="دانلود اپلیکیشن">
            </a>
          </div>
        </div>
        <div class="col-span-1">
          <ul class="menu">
            <li class="mt-4 menu-title font-bold">خرید مشتریان</li>
            <li class="mt-4 text-sm">پاسخ به پرسش‌های متداول</li>
            <li class="mt-4 text-sm">رویه‌های بازگرداندن کالا</li>
            <li class="mt-4 text-sm">شرایط استفاده</li>
            <li class="mt-4 text-sm">حریم خصوصی</li>
            <li class="mt-4 text-sm">گزارش باگ</li>
          </ul>
          <div class="flex mt-4">
            <img alt="enamad" src="/img/enamad.jpg">
            <img alt="samandehi" class="ms-4" src="/img/samandehi.jpg">
          </div>
        </div>
        <div class="col-span-1">
          <ul class="menu">
            <li class="mt-4 menu-title font-bold">راهنمای خرید از بازارشهر</li>
            <li class="mt-4 text-sm">نحوه ثبت سفارش</li>
            <li class="mt-4 text-sm">رویه ارسال سفارش</li>
            <li class="mt-4 text-sm">شیوه‌های پرداخت</li>
          </ul>

          <ul class="menu mt-4">
            <li class="mt-4 menu-title font-bold">با بازارشهر</li>
            <li class="mt-4 text-sm">تماس بازارشهر</li>
            <li class="mt-4 text-sm">درباره بازارشهر</li>
          </ul>

          <div class="flex mt-8">
            <a href="#"><img alt="aparat" src="/img/social/aparat.svg"></a>
            <a href="#"><img alt="instagram" class="ms-4" src="/img/social/instagram.svg"></a>
            <a href="#"><img alt="whatsapp" class="ms-4" src="/img/social/whatsapp.svg"></a>
            <a href="#"><img alt="twitter" class="ms-4" src="/img/social/twitter.svg"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="primary-footer__copyright pb-4 border-t mt-4">
      <p class="text-center primary-footer__copyright-text">
        کلیه حقوق برای بازارشهر محفوظ است و هرگونه کپی‌برداری ممنوع می باشد.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
.primary-footer {
  padding: 0;

  &__logo {
  }

  &__about {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  &__download {
    padding: 0 0.5rem;
    & a {
      margin-left: .5rem;

      & img {
        width: 10rem;
        height: auto;
      }
    }
  }

  &__copyright {

    &-text {
      margin: 1rem 0 0 0;
      padding: 0;
    }

    &::before {
      display: block;
      content: '';
      height: 1px;
      margin: 0 1rem;
    }
  }
}

</style>
