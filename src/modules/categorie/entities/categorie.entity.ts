/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Raccolta } from "src/modules/raccolta/entities/raccolta.entity";
import { BaseEntity } from "src/templates/model/base-entity";
import { Column, Entity, OneToMany } from "typeorm";

@Entity({ name: 'CATEGORIE' })
export class Categorie extends BaseEntity {

    @Column({name: "DESCRIZIONE"})
	descrizione: string;

	@OneToMany(() => Raccolta, (raccolta) => raccolta.categoria)
	raccoltaList: Raccolta[];
}
