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
---

⚙️ Server Environment Değişkenleri

Server klasörü içinde .env dosyası oluştur:
```
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=

```

---

<h2>🗄️ Veritabanı </h2>
<ul>
  <li>MongoDB Atlas veya lokal MongoDB ile çalışır</li>
  <li>Mongoose ODM kullanılır</li>
  <li>Model tabanlı veri yapısı vardır</li>
</ul>

<h2>🔐 Kimlik Doğrulama </h2>
<ul>
  <li>JWT tabanlı authentication</li>
  <li>Login sonrası token üretimi</li>
  <li>Protected route yapısı</li>
  <li>Password hashleme: bcrypt</li>
</ul>


 <h2>🖼️ Medya Yönetimi</h2>
<ul>
  <li>ImageKit entegrasyonu</li>
  <li>Araç görselleri yükleme</li>
  <li>CDN tabanlı servis</li>
</ul>

<h2>🔧 Geliştirme Yol Haritası</h2>
<ul>
  <li>Admin paneli</li>
  <li>Rezervasyon yönetimi</li>
  <li>Ödeme entegrasyonu</li>
  <li>Rol bazlı yetkilendirme</li>
  <li>Dashboard istatistikleri</li>
  <li>Gerçek zamanlı müsaitlik sistemi</li>
</ul>


---

<h2>🔌 API Endpoint Dokümantasyonu</h2>

<ul>
  <li><strong>Auth Endpoints</strong>
    <ul>
      <li>POST /api/users/register — Kullanıcı kayıt</li>
      <li>POST /api/users/login — Kullanıcı giriş</li>
      <li>Response: JWT token döner</li>
    </ul>
  </li>

  <li><strong>Araç Endpoints</strong>
    <ul>
      <li>GET /api/cars — Tüm araçları listele</li>
      <li>GET /api/cars/:id — Araç detay</li>
      <li>POST /api/cars — Araç ekle (Admin, Token gerekli)</li>
    </ul>
  </li>

  <li><strong>Rezervasyon Endpoints</strong>
    <ul>
      <li>POST /api/bookings — Rezervasyon oluştur</li>
      <li>GET /api/bookings/my — Kullanıcı rezervasyonları (Token gerekli)</li>
    </ul>
  </li>
</ul>

---

<h2>⭐ Proje Seviyesi</h2>

<ul>
  <li>Frontend mimari uygulanmıştır</li>
  <li>REST API tasarımı yapılmıştır</li>
  <li>Authentication sistemi vardır</li>
  <li>Dosya yükleme entegrasyonu vardır</li>
  <li>MongoDB modelleme kullanılmıştır</li>
  <li>Gerçek dünya domain kurgusu içerir</li>
</ul>

---

<h2>🚀 Proje Özeti</h2>
<ul>
  <li>Bu proje gerçek dünya araç kiralama senaryosuna göre geliştirilmiştir</li>
  <li>Frontend + Backend full stack mimari içerir</li>
  <li>Modern React + Node.js stack kullanılmıştır</li>
  <li>Portföy ve teknik yetkinlik gösterimi amaçlıdır</li>
</ul>

---

<h2>🎯 Öğrenme Kazanımları</h2>
<ul>
  <li>Component tabanlı frontend mimarisi kurma</li>
  <li>REST API geliştirme</li>
  <li>JWT authentication uygulama</li>
  <li>MongoDB model tasarımı</li>
  <li>Dosya yükleme servisi entegrasyonu</li>
  <li>Full stack proje yapısı kurma</li>
</ul>

---

<h2>⚙️ Konfigürasyon Notları</h2>
<ul>
  <li>.env dosyası gereklidir</li>
  <li>MongoDB bağlantı bilgisi girilmelidir</li>
  <li>JWT secret tanımlanmalıdır</li>
  <li>Image upload servisi anahtarları eklenmelidir</li>
</ul>

---

<h2>🛡️ Güvenlik</h2>
<ul>
  <li>Şifreler bcrypt ile hashlenir</li>
  <li>JWT tabanlı oturum yönetimi vardır</li>
  <li>Protected route middleware kullanılmıştır</li>
  <li>Token doğrulama kontrolü yapılır</li>
</ul>


---
---
---


<h2>👨‍💻 Geliştirici</h2>
<ul>
  <li><strong>Oğuzhan Sancar</strong></li>
  <li>Full Stack Developer</li>
  <li>React / Node.js / Django / C#</li>
  <li>Modern Web Uygulamaları</li>
  <li>GitHub: <a href="https://github.com/sancarhan">github.com/sancarhan</a></li>
</ul>


<h2>📄 Lisans</h2>
<ul>
  <li>Bu proje eğitim ve portföy amaçlı geliştirilmiştir.</li>
  <li>İncelenebilir ve geliştirilebilir.</li>
</ul>







