import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-slate-50 w-full h-32">
      <div className="flex gap-4 align-middle items-center justify-center h-full">
        <div><Image src={"/logo.png"} alt={"Logo"} width={100} height={100}></Image></div>
        <div>
            <p className="text-primary">{process.env.FOOTER_LINE_1??"Set footer in ENV"}</p>
            <p className="text-primary">{process.env.FOOTER_LINE_2??"Set footer in ENV"}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
