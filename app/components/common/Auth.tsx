"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const withAuth = (WrappedComponent: React.ComponentType) => {
  const Auth = (props: any) => {
    const router = useRouter();

    useEffect(() => {
      const token = Cookies.get("token");
      if (!token) {
        router.replace("/login");
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  if (process.env.NODE_ENV !== "production") {
    Auth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  }

  return Auth;
};

export default withAuth;
