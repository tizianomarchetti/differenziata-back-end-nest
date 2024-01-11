/* eslint-disable prettier/prettier */
import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn({name: "ID"})
    id: number;
}