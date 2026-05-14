"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UpdateProfile = () => {
  const router = useRouter();
  const handleFromAction = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      image,
      name,
    });
    router.push("/my-profile");
  };
  return (
    <div className="max-w-md mx-auto border p-8 shadow hover:shadow-xl rounded-xl my-10">
      <h2 className="text-center text-gray-800 font-semibold text-2xl mb-4">
        Update Profile
      </h2>
      <form onSubmit={handleFromAction} className="flex flex-col gap-4 ">
        <TextField className="w-full" name="name" type="text">
          <Label className="text-gray-600">Name</Label>
          <Input placeholder="Enter your name" />
        </TextField>
        <TextField className="w-full" name="image" type="url">
          <Label className="text-gray-600">Image URL</Label>
          <Input placeholder="Enter your image Link" />
        </TextField>
        <div className="flex items-center gap-2">
          <Link href={"/my-profile"}>
            <Button slot="close" variant="secondary">
              Cancel
            </Button>
          </Link>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
