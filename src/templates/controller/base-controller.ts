/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DeepPartial } from "typeorm";
import { BaseService } from "../service/base-service";
import { BaseEntity } from "../model/base-entity";
import { Post, Body, Get, Param, Patch, Delete, Controller } from "@nestjs/common";

@Controller()
export abstract class BaseController<E extends BaseEntity, S extends BaseService<E, C, U>, C extends DeepPartial<E>, U extends DeepPartial<C>> {
    constructor(private readonly service: S) {}
    
    @Post()
    create(@Body() createRaccoltaDto: C) {
        return this.service.create(createRaccoltaDto);
    }
    
    @Get()
    findAll() {
        return this.service.findAll();
    }
    
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }
    
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRaccoltaDto: U) {
        return this.service.update(+id, updateRaccoltaDto);
    }
    
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}