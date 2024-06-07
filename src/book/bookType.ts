import { UserType } from "../user/userTypes";

export interface BOOKTYPE{
     _id: string;
     title: string;
     author: UserType;
     genre: string;
     coverImage: string;
     file: string;
     createdAt: Date;
     updatedAt: Date;

}