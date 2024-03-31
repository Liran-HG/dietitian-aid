"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
} from "@radix-ui/react-menubar";
import { StartMeetingIcon } from "../Icons/StartMeetingIcon";
import { MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "@/components/ui/button";
type Props = {
  userId: string;
};

export default function ButtonMeeting(props: Props) {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild><Button variant={"outline"} ><><StartMeetingIcon /> פגישה</></Button></MenubarTrigger>
        <MenubarContent className="border-secondary border-2 rounded-md rtl:text-right rtl:-left-[200px] p-3 cursor-pointer shadow-md z-10 bg-white space-y-2">
          <MenubarItem>
          <b>פנימית </b>
            פגישה פרונטלית
          </MenubarItem>
          <MenubarItem>
          <b>פנימית </b>
            בית לקוח
          </MenubarItem>
          <MenubarItem>
          <b>פנימית </b>
            פגישה טלפונית\זום
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <b>חיצונית </b>
            פגישה פרונטלית
          </MenubarItem>
          <MenubarItem>
            <b>חיצונית </b>
            בית לקוח
          </MenubarItem>
          <MenubarItem>
            <b>חיצונית </b>
            פגישה טלפונית\זום
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
