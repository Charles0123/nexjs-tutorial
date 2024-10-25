// 使用在client端, 需加入此行 usePathname才不會抱錯誤
"use client"

import Link from 'next/link';
import { usePathname } from "next/navigation";
import "./style.css"

const navLinks =[
    {name: "Register",href:"/register"},
    {name: "Login",href:"/login"},
    {name: "Forgot Password",href:"/forgot-password"}
]


export default function AuthLayout({ children }) {
    const pathname = usePathname();
  return (
    <div>
        { navLinks.map( (link)=>{
            const isActive = pathname.startsWith(link.href)
            return (
                <Link href={link.href} key={link.name}
                className={isActive ? "font-bold mr-4":'text-blue-500 mr-4'}
                >{link.name}              <br></br></Link>

            )  
        })}
        {children}
    </div>
  );
}