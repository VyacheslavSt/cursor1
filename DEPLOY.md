# Инструкция по размещению сайта на mingroups.brightfit.ru

## Вариант 1: Netlify (Рекомендуется - самый простой)

### Шаги:

1. **Зарегистрируйтесь на Netlify**
   - Перейдите на https://www.netlify.com
   - Войдите через GitHub/GitLab/Bitbucket или email

2. **Загрузите сайт**
   - Перетащите папку с `index.html` в область "Deploy" на главной странице Netlify
   - Или подключите Git репозиторий

3. **Настройте кастомный домен**
   - В настройках сайта → Domain settings → Add custom domain
   - Введите: `mingroups.brightfit.ru`
   - Netlify покажет вам DNS настройки

4. **Настройте DNS у регистратора домена brightfit.ru**
   - Зайдите в панель управления DNS (где зарегистрирован brightfit.ru)
   - Добавьте CNAME запись:
     ```
     Имя: mingroups
     Тип: CNAME
     Значение: [ваш-сайт].netlify.app
     TTL: 3600
     ```
   - Или используйте A-запись, если Netlify предоставит IP адрес

5. **Подождите распространения DNS (5-60 минут)**

## Вариант 2: Vercel (Быстрый и современный)

### Шаги:

1. **Установите Vercel CLI** (опционально, можно через веб-интерфейс)
   ```bash
   npm i -g vercel
   ```

2. **Зарегистрируйтесь на Vercel**
   - https://vercel.com
   - Войдите через GitHub

3. **Загрузите сайт**
   - Через веб-интерфейс: перетащите папку
   - Или через CLI: `vercel` в папке проекта

4. **Настройте домен**
   - Settings → Domains → Add Domain
   - Введите: `mingroups.brightfit.ru`
   - Настройте DNS как указано в инструкции Vercel

5. **DNS настройки**
   - Добавьте CNAME запись:
     ```
     Имя: mingroups
     Тип: CNAME
     Значение: cname.vercel-dns.com
     ```

## Вариант 3: Cloudflare Pages (Бесплатный CDN)

### Шаги:

1. **Зарегистрируйтесь на Cloudflare**
   - https://pages.cloudflare.com
   - Войдите или создайте аккаунт

2. **Создайте проект**
   - Create a project → Upload assets
   - Загрузите файлы сайта

3. **Настройте домен**
   - Custom domains → Set up a custom domain
   - Введите: `mingroups.brightfit.ru`

4. **DNS настройки**
   - Cloudflare автоматически настроит DNS, если домен уже в Cloudflare
   - Или добавьте CNAME вручную:
     ```
     Имя: mingroups
     Тип: CNAME
     Значение: [ваш-проект].pages.dev
     ```

## Вариант 4: GitHub Pages (Если есть GitHub аккаунт)

### Шаги:

1. **Создайте репозиторий на GitHub**
   - Создайте новый репозиторий (например, `mingroups-site`)

2. **Загрузите файлы**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/ваш-username/mingroups-site.git
   git push -u origin main
   ```

3. **Настройте GitHub Pages**
   - Settings → Pages
   - Source: Deploy from a branch → main
   - Custom domain: `mingroups.brightfit.ru`

4. **DNS настройки**
   - Добавьте CNAME файл в репозиторий (GitHub создаст автоматически)
   - Или настройте DNS вручную:
     ```
     Имя: mingroups
     Тип: CNAME
     Значение: ваш-username.github.io
     ```

## Общие шаги для всех вариантов:

### Настройка DNS у регистратора домена:

1. Зайдите в панель управления доменом brightfit.ru
2. Найдите раздел DNS / DNS Records / Управление DNS
3. Добавьте новую запись:
   - **Тип**: CNAME (или A, если указан IP)
   - **Имя/Поддомен**: `mingroups`
   - **Значение**: (указано в инструкции хостинга)
   - **TTL**: 3600 (или автоматически)

### Проверка:

После настройки DNS подождите 5-60 минут и проверьте:
- Откройте https://mingroups.brightfit.ru в браузере
- Проверьте SSL сертификат (должен быть автоматически)

## Рекомендация:

**Используйте Netlify** - самый простой вариант:
- Бесплатный SSL сертификат
- Автоматический деплой
- Простая настройка домена
- Хорошая производительность

