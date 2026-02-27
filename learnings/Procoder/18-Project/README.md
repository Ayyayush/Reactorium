# 🌍 Where in the World?

A modern **React Single Page Application (SPA)** that displays country data using the REST Countries API.

Users can search, filter by region, and view detailed country information with smooth client-side routing.

---

## 🚀 Features

- 🔍 Search countries by name
- 🌎 Filter countries by region
- 📄 View detailed country information
- 🔁 Client-side routing using React Router
- ⚡ Fast SPA navigation (no page reload)
- 🧠 Demonstrates component mounting & unmounting
- 🌙 Dark mode support (if implemented)

---

## 🛠 Tech Stack

- React
- React Router DOM
- Vite
- REST Countries API
- CSS

---

## 📂 Project Structure
src/
├── components/
│ ├── Header.jsx
│ ├── Home.jsx
│ ├── CountriesList.jsx
│ ├── CountriesCard.jsx
│ ├── CountryDetail.jsx
│ ├── SearchBar.jsx
│ ├── SelectMenu.jsx
│ └── Error.jsx
│
├── App.jsx
├── main.jsx
└── App.css



---

## 🧠 Concepts Covered

### React Fundamentals
- Functional Components
- Props
- useState
- useEffect
- Conditional Rendering
- Component Lifecycle

### React Router
- createBrowserRouter
- RouterProvider
- Outlet
- Link
- useParams
- useNavigate
- Dynamic Routing (`/country/:name`)
- Error Boundary Route

### API Handling
- Fetch API
- Data transformation
- Defensive programming
- Loading state handling

---

## 📡 API Endpoints Used

Get all countries:




---

## 🧭 Routing Structure

| Route | Component |
|-------|------------|
| `/` | Home |
| `/contact` | Contact |
| `/country/:name` | CountryDetail |
| `*` | Error Page |

---

## 📌 Future Improvements

- Add border country navigation
- Add loading spinner
- Add skeleton loading
- Add better error UI
- Add pagination
- Add caching
- Deploy to Netlify / Vercel

---

## 👨‍💻 Author

Your Name  
GitHub: https://github.com/your-username

---

## 📄 License

This project is open-source and available under the MIT License.