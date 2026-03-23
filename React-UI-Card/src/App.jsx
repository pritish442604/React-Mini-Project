import React from "react";
import Card from "./Component/Card";

function App() {
  return (
    <div className="container">
      <Card
        title="Nike Shoes"
        description="Best running shoes for daily workouts."
        image="http://getwallpapers.com/wallpaper/full/0/c/8/840811-vertical-nike-shoes-wallpapers-desktop-1920x1200.jpg"
      />

      <Card
        title="Smart Watch"
        description="Track your fitness and health easily."
        image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVcSknNctiTlGl-GVGJL93U2d2DerhFrxloxjlYGgkX9LiHC7dM5GDVfGVkLFaNMi8UhTrv7fywZT4PzVX06nbvstdblsn9oqszIte4055YXPf-5HJDN1zW8eEQt-XB7Fvz9Z4afw62AdT0QP389S8r5NQtKfoaIZI2Q9MAQrUXR3Df0_NDcQ2LniKTA/s1500/61qFzpW232L._SL1500_.jpg"
      />

      {/* 🔥 New Card - Headphones */}
      <Card
        title="Headphones"
        description="High quality sound with noise cancellation."
        image="https://wallpapercave.com/wp/wp4815491.jpg"
      />

      {/* 🔥 New Card - Laptop */}
      <Card
        title="Laptop"
        description="Powerful performance for work and gaming."
        image="https://thegamersmall.com/blog/wp-content/uploads/2024/12/Best-4K-Gaming-Laptops-of-2024-Ultra-HD-Performance-and-Immersive-Visuals.jpg"
      />
    </div>
  );
}

export default App;