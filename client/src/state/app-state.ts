import { User } from "../models/user";

export type AppState = {
    user: User | null;
}