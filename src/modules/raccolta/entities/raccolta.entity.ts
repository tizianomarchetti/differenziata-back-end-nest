/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Categorie } from "src/modules/categorie/entities/categorie.entity";
import { BaseEntity } from "src/templates/model/base-entity";
import { Column, Entity, JoinColumn, ManyToOne, RelationId } from "typeorm";

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
