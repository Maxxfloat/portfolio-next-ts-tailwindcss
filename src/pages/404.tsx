import { useEffect } from "react";
import { useRouter } from "next/router";

const Empty = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  });

  return null;
};

export default Empty;
