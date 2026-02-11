# 🚗 Full Stack Araç Kiralama Uygulaması (Vite + React + Node.js)

## -- Gerekli Kurulumlar --

## 1.React uygulamalarında sayfalar arası geçiş (routing) yapmak için 👉 (npm install react-router-dom) kurulumu yapıyoruz.

## Modern web teknolojileri kullanılarak geliştirilmiş **Full Stack Araç Kiralama Platformu**.  
Frontend tarafı **React + Vite**, backend tarafı **Node.js + Express + MongoDB** mimarisi ile oluşturulmuştur.

Kullanıcıların araçları görüntüleyebildiği, rezervasyon işlemleri yapabildiği ve medya yüklemelerinin yönetilebildiği gerçek dünya senaryosuna uygun bir proje yapısı hedeflenmiştir.

---

# 🧱 Teknoloji Stack

## 🎨 Frontend
- ⚛️ React
- ⚡ Vite
- 🧭 React Router DOM
- 🎨 CSS / Tailwind / Bootstrap
- Axios / Fetch API

## 🖥️ Backend (Server)
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB + Mongoose
- 🔐 JWT Authentication
- 🔑 Bcrypt
- 🖼️ ImageKit (dosya/görsel yükleme)
- 🌐 REST API

---

# ✨ Özellikler

## Frontend
- 🚘 Araç listeleme
- 📄 Araç detay sayfası
- 🔍 Routing sistemi
- 📱 Responsive tasarım
- ⚡ Hızlı Vite geliştirme ortamı

## Backend
- 👤 Kullanıcı kayıt & giriş sistemi
- 🔐 JWT token üretimi
- 🔒 Şifre hashleme (bcrypt)
- 🚗 Araç verisi yönetimi
- 🖼️ Görsel yükleme servisi entegrasyonu
- 🗄️ MongoDB veritabanı bağlantısı
- 📦 RESTful API yapısı

---

# 📂 Proje Klasör Yapısı
```
project-root/
│
├── client/ (veya root frontend)
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── middleware/
│ ├── server.js
│ └── package.json
│
└── README.md
```

⚙️ Server Environment Değişkenleri

Server klasörü içinde .env dosyası oluştur:
```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

```

🗄️ Veritabanı

MongoDB Atlas veya lokal MongoDB ile çalışır

Mongoose ODM kullanılır

Model tabanlı veri yapısı vardır

🔐 Kimlik Doğrulama
<ul>
  <li>JWT tabanlı authentication</li>
</ul>
JWT tabanlı authentication

Login sonrası token üretimi

Protected route yapısı

Password hashleme: bcrypt

🖼️ Medya Yönetimi

ImageKit entegrasyonu

Araç görselleri yükleme

CDN tabanlı servis

