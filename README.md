# 🌦️ Météo React App

Une application météo simple développée avec **React + Vite**.  
Elle affiche la météo actuelle d'une ville, propose un **dark/light mode**  
et change automatiquement le **fond d'écran selon la météo**.

---

## 🚀 Fonctionnalités

- 🔍 Recherche de météo par ville
- 🌗 Changement de thème **Dark / Light** via un **switch animé**
- 🌈 Fond dynamique selon les conditions météo (ensoleillé, pluie, neige, nuageux…)
- ✅ Responsive design
- ❌ Pas de prévisions sur plusieurs jours (version simplifiée)
- ❌ Pas de carte géographique (Google Maps non intégré)

---

## 🛠️ Technologies utilisées

- ⚛️ [React](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🌤️ [WeatherAPI](https://www.weatherapi.com/) (API météo gratuite)

---

## ⚙️ Installation

### 1️⃣ Cloner le projet

```bash
git clone https://github.com/ton-utilisateur/meteo-app.git
cd meteo-app
```

### 2️⃣ Installer les dépendances

```bash
npm install
```

### 3️⃣ Lancer le serveur de développement

```bash
npm run dev
```

L’application sera disponible sur :

```bash
[npm run dev](http://localhost:5173)
```

### 🔑 Configuration de l’API

Tu dois obtenir une clé WeatherAPI gratuite ici :

```bash
 https://www.weatherapi.com
```

Puis, dans le fichier App.jsx, remplace cette ligne :

```bash
 const apiKey = 'TA_CLE_API_ICI'; // Remplace avec ta clé API
```

---

💡 Idées d’amélioration

	•	📆 Ajouter les prévisions météo sur 3 à 7 jours
	•	🗺️ Intégrer une carte avec Google Maps ou Leaflet
	•	📊 Afficher des graphiques de température (Recharts, Chart.js)
	•	💾 Mémoriser la dernière ville et le thème avec localStorage
	•	🧪 Ajouter des tests avec Vitest ou Jest

 📄 Licence

MIT — Libre d’utilisation et de modification.



