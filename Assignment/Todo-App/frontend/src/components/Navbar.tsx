

"use client";

import { useRouter } from "next/navigation";

// import { logout } from "@/redux/slices/authSlice";

import { useAppDispatch } from "@/hooks/useAppDispatch";

export default function Navbar() {
  const router = useRouter();

  const dispatch = useAppDispatch();


}