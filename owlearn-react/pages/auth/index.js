import React from "react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push("/auth/signup");
  }, []);
};

export default Index;
