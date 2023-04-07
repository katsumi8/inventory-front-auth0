"use client";
import { getUser } from "@/utils/getUser";

const ProfilePage = () => {
  const { user } = getUser();

  return (
    <section className="min-h-screen pt-20 bg-ct-blue-600">
      <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
        <div>
          <p className="text-5xl font-semibold text-center">Profile Page</p>
          {!user ? (
            <p>Loading...</p>
          ) : (
            <div className="flex items-center gap-8">
              <div className="mt-8">
                <p className="mb-3">ID: {user.id}</p>
                <p className="mb-3">Name: {user.name}</p>
                <p className="mb-3">Email: {user.email}</p>
                <p className="mb-3">Role: {user.role}</p>
                <p className="mb-3">Provider: {user.provider}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
