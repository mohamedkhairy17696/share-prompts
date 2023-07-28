"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const [myPrompts, setMyPrompts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPrompts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized page"
      data={myPrompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
