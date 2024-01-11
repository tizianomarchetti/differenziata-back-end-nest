/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";
import { BaseEntity } from "../../../templates/model/base-entity";
import { Categorie } from "../../categorie/entities/categorie.entity";

@Entity({ name: "RACCOLTA"})
export class Raccolta extends BaseEntity {

    @Column("date", {name: "DATA"})
	data: Date;

    @ManyToOne(() => Categorie, (categoria) => categoria.raccoltaList)
    @JoinColumn({ name: 'FK_CATEGORIA' })
	categoria: Categorie;

    @RelationId((raccolta: Raccolta) => raccolta.categoria)
    categoriaId: number;
}
