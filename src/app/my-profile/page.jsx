"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip, Spinner } from "@heroui/react";

import { Mail, ShieldCheck, User } from "lucide-react";
import Link from "next/link";

const ProfilePage = () => {
  const { data, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  const user = data?.user;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 shadow-2xl rounded-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24">
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>
                {user?.name.split(" ")?.map((name) => name[0])}
              </Avatar.Fallback>
            </Avatar>

            <div>
              <h2 className="text-3xl font-bold">{user.name}</h2>

              <div className="flex gap-2 mt-2">
                {user.emailVerified && <Chip color="success">Verified</Chip>}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
              <Mail size={20} />
              <div>
                <p className="text-sm text-gray-500">Email</p>

                <p>{user.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
              <User size={20} />

              <div>
                <p className="text-sm text-gray-500">User ID</p>

                <p>{user.id}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl">
              <ShieldCheck size={20} />

              <div>
                <p className="text-sm text-gray-500">Status</p>

                <p>{user.emailVerified ? "Verified" : "Not Verified"}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            <Link href={"/my-profile/update-profile"}>
              <Button>Edit Profile</Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProfilePage;
