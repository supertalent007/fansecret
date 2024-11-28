"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const FanVerificationForm = ({ user }: any) => {
  const [name, setName] = useState("");
  const router = useRouter();

  console.log(user, "user inn form")
  const handleOnSubmit = async (e : any) => {
    e.preventDefault();

    try {
        console.log("USERRRRRRR-", user)
        const res = await axios.put("/api/user/update-user", {
            id: user
          }, {
            headers: {
              "Content-Type": "application/json",
            },
          });

      console.log("UPDATED USER:", res.data);
      router.push("/");
      router.refresh(); 
    } catch (error : any) {
      console.error("Error response:", error.response);
      alert(`Error: ${error.response?.data?.error}`);
    }
  };

  return (
    <>
      <p className="text-3xl tracking-tighter my-5 font-medium text-center">
        Fan Verification Form
      </p>

      <form onSubmit={handleOnSubmit}>
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Age Verification</CardTitle>
            <CardDescription>
             Age
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Enter your Age below</Label>
              <Input
                id="name"
                type="text"
                placeholder="eg. 18"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
};

export default FanVerificationForm;
