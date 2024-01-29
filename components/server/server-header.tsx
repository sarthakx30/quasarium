"use client"

import { ServerWithMembersWIthProfiles } from "@/types";
import { MemberRole} from "@prisma/client";
import { DropdownMenu, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

interface ServerHeaderProps {
    server: ServerWithMembersWIthProfiles;
    role?: MemberRole
};

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
    const isAdmin = role === MemberRole.ADMIN;
    const isModerator = role === MemberRole.MODERATOR;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="focus:outline-none"
                asChild
            >
                <button
                    className="w-full text-md font-semiboid px3- flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg:zinc-700/50 transition"
                >
                    {server.name}
                    <ChevronDown/>
                </button>
            </DropdownMenuTrigger>
        </DropdownMenu>
    )
}