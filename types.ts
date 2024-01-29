import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWIthProfiles = Server & {
    members: (Member & { profile: Profile })[];
};