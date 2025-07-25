import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Home from "../pages/Home";
import EditPost from "../pages/EditPost";
import Chats from "../pages/Chats";
import ProfilePage from "../pages/ProfilePage";
import UserProfilePage from "../pages/UserProfilePage";
import ProtectedRoute from "./ProtectedRoute";
import Explore from "../pages/Explore";
import Notifications from "../pages/Notifications";
import Bookmarks from "../pages/Bookmarks";
import RightSidebar from "../components/homePageComponents/RightSidebar";
import Post from "../pages/Post";
import AIChatPage from "../pages/AI_chat";


const AppRoutes = () => {
    const allowedRoutes = ["/login", "/signup", "/"]; // 👈 guest can access

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />}>
                <Route path="ai-chat" element={null} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/post/:postId" element={<Post />} />
            {/* Protected routes access after login */}
            <Route path="/home" element={<ProtectedRoute element={<Home />} allowedRoutes={allowedRoutes} />} />
            <Route path="/editpost/:postId" element={<ProtectedRoute element={<EditPost />} allowedRoutes={allowedRoutes} />} />
            <Route path="/chats" element={<ProtectedRoute element={<Chats />} allowedRoutes={allowedRoutes} />} />
            <Route path="/chats/:chatUserID" element={<ProtectedRoute element={<Chats />} allowedRoutes={allowedRoutes} />} />
            <Route path="/user/:userId" element={<ProtectedRoute element={<UserProfilePage />} allowedRoutes={allowedRoutes} />} />
            <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} allowedRoutes={allowedRoutes} />} />
            <Route path="/explore" element={<ProtectedRoute element={<Explore />} allowedRoutes={allowedRoutes} />} />
            <Route path="/notifications" element={<ProtectedRoute element={<Notifications />} allowedRoutes={allowedRoutes} />} />
            <Route path="/bookmarks" element={<ProtectedRoute element={<Bookmarks />} allowedRoutes={allowedRoutes} />} />
            <Route path="/trending" element={<ProtectedRoute element={<RightSidebar />} allowedRoutes={allowedRoutes} />} />
        </Routes>
    );
};

export default AppRoutes;
