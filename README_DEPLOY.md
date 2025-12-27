# Быстрый старт: Размещение на Netlify

## Самый простой способ (5 минут):

1. **Перейдите на https://app.netlify.com/drop**
2. **Перетащите всю папку проекта** (где находится index.html) в окно браузера
3. **Скопируйте URL** вашего сайта (например: `amazing-site-123.netlify.app`)
4. **Настройте домен:**
   - Site settings → Domain management → Add custom domain
   - Введите: `mingroups.brightfit.ru`
   - Выберите: "Add domain"
5. **Настройте DNS:**
   - Netlify покажет вам что нужно добавить в DNS
   - Обычно это CNAME запись:
     - Имя: `mingroups`
     - Значение: `amazing-site-123.netlify.app`
6. **Готово!** Через 5-60 минут сайт будет доступен на mingroups.brightfit.ru

## Альтернатива через Git:

Если хотите автоматический деплой при изменениях:

1. Создайте репозиторий на GitHub
2. Загрузите код:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/ваш-username/репозиторий.git
   git push -u origin main
   ```
3. В Netlify: Add new site → Import an existing project → выберите GitHub репозиторий
4. Настройте домен как выше

## Важно:

- Netlify автоматически выдаст бесплатный SSL сертификат
- Сайт будет доступен по HTTPS
- Все изменения можно загружать просто перетаскиванием файлов

