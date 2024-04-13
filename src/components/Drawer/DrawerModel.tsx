"use client"
import React, { PropsWithChildren } from "react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
export type DrawerProps = {
  title: string,
  description: string,
  buttonText?: string,
  showCloseBtn: boolean,
  button?: React.ReactElement
}
export function DrawerModel(props: PropsWithChildren<DrawerProps>) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {props.button ? props.button : <Button variant="outline" className="shadow-sm">{props.buttonText}</Button>}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-right">{props.title}</DrawerTitle>
            <DrawerDescription className="text-right">{props.description}</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="">
              {props.children}
            </div>
            
          </div>
          <DrawerFooter>
            {props.showCloseBtn && <DrawerClose asChild>
              <Button variant="outline">ביטול</Button>
            </DrawerClose>}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
