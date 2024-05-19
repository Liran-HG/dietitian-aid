import React from 'react'

import Image from "next/image";
export default function TitleCard() {
  return (
    <Image
                src={"/logo.png"}
                alt={"Logo"}
                width={300}
                height={100}
                className="mx-auto mb-10"
            />
  )
}
