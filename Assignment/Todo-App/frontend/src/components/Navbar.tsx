

"use client";

import { useRouter } from "next/navigation";

// import { logout } from "@/redux/slices/authSlice";

import { useAppDispatch } from "@/hooks/useAppDispatch";

export default function Navbar() {
  const router = useRouter();

  const dispatch = useAppDispatch();

//   const handleLogout = () => {
//     localStorage.removeItem("token");

//     localStorage.removeItem("user");

//     dispatch(logout());

//     router.push("/login");
//   };

//   return (
//     <nav className="flex justify-between items-center border-b p-4">
//       <h1 className="font-bold text-xl">
//         Todo App
//       </h1>

//       <button
//         onClick={handleLogout}
//         className="bg-red-600 text-white px-4 py-2 rounded"
//       >
//         Logout
//       </button>
//     </nav>
//   );
}