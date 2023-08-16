"use client";

import { useGetUser } from "@/hooks/useGetUser";

const ProfilePage = () => {
  const { user } = useGetUser();

  return (
    <section className="bg-ct-blue-600 min-h-screen pt-20">
      <div className="bg-ct-dark-100 mx-auto flex h-[20rem] max-w-4xl items-center justify-center rounded-md">
        <div>
          <p className="text-center text-5xl font-semibold">Profile Page</p>
          {!user ? (
            <p>Loading...</p>
          ) : (
            <div className="flex items-center gap-8">
              <div className="mt-8">
                <p className="mb-3">ID: {user.id}</p>
                <p className="mb-3">Name: {user.name}</p>
                <p className="mb-3">Email: {user.email}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
