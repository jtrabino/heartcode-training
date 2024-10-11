"use server"

import { users } from "@/db/schema";
import { db } from "@/db/index";

export async function insertOneUser(name: string, isSmart: boolean) {
    await db.insert(users).values({name: name, isSmart: isSmart,}).execute();
}