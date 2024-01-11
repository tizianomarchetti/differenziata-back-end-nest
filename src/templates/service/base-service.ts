/* eslint-disable prettier/prettier */

import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from "typeorm";
import { BaseEntity } from "../model/base-entity";

export abstract class BaseService<E extends BaseEntity, C extends DeepPartial<E>, U extends DeepPartial<C>> {

    constructor(protected readonly repository: Repository<E>) {}
  
    async create(createDto: C) {
      const categoria = this.repository.create(createDto);
      return await this.repository.save(categoria);
    }
  
    async findAll(options?: FindManyOptions<E>) {
      return await this.repository.find(options);
    }
  
    async findOne(id: number, options?: FindOneOptions<E>) {
      return await this.repository.findOne(options || { where: { id: id } } as FindOneOptions<E>);
    }
  
    async update(id: number, updateDto: U) {
      const categoria = await this.findOne(id);
      Object.assign(categoria, updateDto);
      return await this.repository.save(categoria);
    }
  
    async remove(id: number) {
      await this.repository.delete(id);
      return;
    }
  }
  