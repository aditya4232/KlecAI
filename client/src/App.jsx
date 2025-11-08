import Dashboard from "./pages/Dashboard.jsx";
import GenerateImages from "./pages/GenerateImages.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import React from "react";
import { Route, Routes } from "react-router-dom";
import RemoveBackground from "./pages/RemoveBackground.jsx";
import ReviewResume from "./pages/ReviewResume.jsx";
import Community from "./pages/Community.jsx";
import WriteArticle from "./pages/Articelwriter.jsx";
import BlogTitles from "./pages/BlogTitles.jsx";
import Removeobject from "./pages/removeobject.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ai" element={<Layout />} />
        <Route index element={<Dashboard />} />
        <Route path="write-article" element={<WriteArticle />} />
        <Route path="blog-titles" element={<BlogTitles />} />
        <Route path="generate-images" element={<GenerateImages />} />
        <Route path="remove-background" element={<RemoveBackground />} />
        <Route path="Remove-object" element={<Removeobject />} />
        <Route path="Review-resume" element={<ReviewResume />} />
        <Route path="Community" element={<Community />} />
        
        
      </Routes>
    </div>
  );
};

export default App;
