# Todo — Memory Timeline / Absence Tracker

## 1. هدف پروژه

این پروژه یک اپلیکیشن موبایل مدرن و احساسی است که زمان را نه فقط به‌صورت عددی، بلکه به‌صورت روایتی، احساسی و شخصی تجربه می‌کند. هدف این است که کاربر هر بار که اپ را باز می‌کند، احساس کند زمان از چند زاویه عبور کرده است: زمانی، احساسی، فصلی، نجومی و شخصی.

## 2. وضعیت فعلی

- پایه‌ی پروژه با Expo + React Native + TypeScript راه‌اندازی شده است.
- یک نسخه‌ی اولیه و شبیه‌سازی‌شده از طراحی اصلی در صفحه‌ی اصلی ساخته شده است.
- تمرکز اولیه روی تجربه‌ی کاربری، زیبایی بصری و انتقال احساسی داده شده است.

## 3. اولویت‌های اصلی

1. تبدیل prototype به محصول قابل‌استفاده
2. پیاده‌سازی داده‌های محلی و پایدار
3. ساخت تجربه‌ی اصلی: تایم‌لاین، ژورنال، counters و analytics
4. افزودن امنیت و پشتیبان‌گیری
5. آماده‌سازی برای نسخه‌ی اولیه (MVP)

## 4. برنامه‌ی اجرایی (مرحله به مرحله)

### فاز A — تثبیت پایه و معماری

- [ ] بررسی و نهایی‌کردن معماری پروژه
- [ ] انتخاب ابزارهای داده و ذخیره‌سازی
- [ ] تعریف ساختار پوشه‌ها و کامپوننت‌ها
- [ ] تعریف system design برای theme، spacing، typography و motion
- [ ] ایجاد base services برای زمان، تاریخ و تنظیمات کاربر
- [ ] تعریف قرارداد داده برای entities اصلی

### فاز B — طراحی سیستم و تجربه کاربری

- [ ] تکمیل طراحی سیستم (color palette، typography، motion، spacing)
- [ ] ایجاد components قابل استفاده مجدد:
  - [ ] Card
  - [ ] SectionHeader
  - [ ] TimelineItem
  - [ ] MetricTile
  - [ ] EmptyState
  - [ ] Chip
- [ ] اضافه‌کردن حالت‌های loading، empty و error
- [ ] طراحی نسخه‌ی dark mode و light mode
- [ ] تنظیم accessibility و reduced motion

### فاز C — پیاده‌سازی هسته‌ی محصول

- [ ] ساخت صفحه‌ی Home با تایمر اصلی
- [ ] اضافه‌کردن Time Perspectives cards
- [ ] پیاده‌سازی Without… counters
- [ ] ساخت بخش What Happened While Away
- [ ] ساخت Seasonal Timeline
- [ ] افزودن Monthly Progress
- [ ] اضافه‌کردن Missed Events
- [ ] پیاده‌سازی Emotional Statistics
- [ ] پیاده‌سازی Astronomical Statistics

### فاز D — ژورنال و حافظه

- [ ] ساخت Memory Journal
- [ ] افزودن امکان ثبت متن، mood، weather، location و tags
- [ ] اجازه‌ی افزودن عکس، ویدیو و voice note
- [ ] نمایش ورودی‌ها روی تایم‌لاین
- [ ] اتصال هر ورودی به روز خاص
- [ ] پیاده‌سازی جست‌وجوی حافظه‌ها

### فاز E — داده‌های شخصی و زمان

- [ ] ساخت Last Memory Dashboard
- [ ] اضافه‌کردن Last Meeting / Last Call / Last Message / Last Voice Note
- [ ] ساخت Location Memory با نقشه
- [ ] پیاده‌سازی Countdown Features
- [ ] افکت‌های milestone و unlock animation
- [ ] ساخت Daily Reflection generator

### فاز F — امنیت و ذخیره‌سازی

- [ ] اضافه‌کردن ذخیره‌سازی محلی و پایدار
- [ ] پیاده‌سازی encrypted storage برای اطلاعات حساس
- [ ] اضافه‌کردن Face ID / Fingerprint / Passcode (در صورت پشتیبانی پلتفرم)
- [ ] ساخت Secure Memory Vault
- [ ] طراحی حالت offline-first
- [ ] پیاده‌سازی backup و restore

### فاز G — همگام‌سازی و ابری

- [ ] انتخاب سرویس ابری (پیشنهاد: Supabase یا Firebase)
- [ ] پیاده‌سازی authentication
- [ ] همگام‌سازی داده‌ها بین دستگاه‌ها
- [ ] مدیریت conflicts و نسخه‌گذاری داده
- [ ] پشتیبانی از sync در حالت آفلاین

### فاز H — تست و کیفیت

- [ ] نوشتن unit tests برای منطق زمان و محاسبات
- [ ] نوشتن integration tests برای flows اصلی
- [ ] تست روی Android و iOS
- [ ] تست accessibility
- [ ] تست عملکرد و روانی UI
- [ ] تست روی حالت‌های مختلف شبکه و داده

### فاز I — انتشار و بهبود مداوم

- [ ] آماده‌سازی نسخه‌ی اولیه برای تست اولیه
- [ ] جمع‌آوری بازخورد کاربران
- [ ] تحلیل رفتار و نرخ استفاده
- [ ] انتشار نسخه‌ی beta
- [ ] برنامه‌ریزی برای نسخه‌ی 1.0

## 5. جزئیات فنی پیشنهادی

### Frontend

- React Native + Expo
- TypeScript
- React Navigation
- Reanimated + Gesture Handler
- Expo Router یا React Navigation

### State Management

- Zustand یا Redux Toolkit
- Query layer برای داده‌های ابری

### Data Storage

- SQLite برای داده‌های محلی
- SecureStore برای secrets و تنظیمات حساس
- File system برای media

### Sync & Backend

- Supabase برای auth + DB + storage + sync
- یا Firebase برای سریع‌العمل‌کرد در MVP

### Analytics & Monitoring

- Sentry
- PostHog یا Firebase Analytics
- Crashlytics

## 6. پیشنهادهای بهبود پروژه

### تجربه‌ی کاربری

- اضافه‌کردن onboarding خیلی ظریف و احساسی
- ساخت حالت‌های مختلف برای فواصل زمانی (مثلاً 1 ماه، 1 سال، 5 سال)
- شخصی‌سازی متن‌های reflectives بر اساس نوع رابطه و سبک کاربر
- افزودن حالت‌های calming و ambient برای کاهش حس غم‌انگیز بودن UI

### طراحی

- استفاده از motion system با animation‌های نرم و آرام
- اضافه‌کردن seasonal themes و dynamic backgrounds
- ساخت components با depth و glassmorphism ملایم
- استفاده از typography premium و spacing منظم

### محصول

- اضافه‌کردن widgets برای iOS و Android
- ساخت notifications با تنظیمات شخصی
- افزودن smart suggestions برای memory entries
- اضافه‌کردن AI-generated reflections و summaries
- طراحی dashboard برای روند احساسی کاربر

### فنی

- اجرای offline-first به‌صورت کامل
- بهینه‌سازی برای عملکرد روی دستگاه‌های ضعیف‌تر
- ساخت backup/restore قوی
- پیاده‌سازی background sync
- اضافه‌کردن test coverage بالا

## 7. معیارهای موفقیت

- کاربر بتواند در کمتر از 3 دقیقه، یک memory یا entry ثبت کند
- تجربه‌ی UI روان و بدون lag باشد
- داده‌ها در حالت آفلاین به‌طور کامل کار کنند
- کاربر بتواند بدون راهنمایی، بخش‌های اصلی را درک کند
- احساس‌های کاربر در UI منعکس شود، نه صرفاً اعداد

## 8. کارهای فوری بعدی

1. ساخت دیتابیس محلی و مدل داده‌ها
2. طراحی صفحه‌ی journal و form entry
3. اضافه‌کردن navigation و screen‌های اصلی
4. ایجاد theme system و reusable components
5. اتصال داده‌های زمان و analytics به UI

## 9. جمع‌بندی

این پروژه در مرحله‌ی اولیه‌ی طراحی و prototype قرار دارد. اگر این مسیر با دقت و ساختاردهی درست ادامه پیدا کند، می‌تواند از یک app صرفاً کاربردی به یک تجربه‌ی احساسی و خاص تبدیل شود که در ذهن کاربر ماندگار بماند.
