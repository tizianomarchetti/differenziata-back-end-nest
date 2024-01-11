/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, OneToMany } from "typeorm";
import { Raccolta } from "../../raccolta/entities/raccolta.entity";
import { BaseEntity } from "../../../templates/model/base-entity";

@Entity({ name: 'CATEGORIE' })
export class Categorie extends BaseEntity {

    @Column({name: "DESCRIZIONE"})
	descrizione: string;

	@OneToMany(() => Raccolta, (raccolta) => raccolta.categoria)
	raccoltaList: Raccolta[];
}
