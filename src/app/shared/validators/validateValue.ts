import { ListService } from '../../pages/list/list.service';

export class ValidateValue {
    constructor(private listService: ListService){}
    valid(value: string): void{
        if (value === null) { throw new Error('Insira uma tarefa!'); }
        if (value.length < 10) { throw new Error('Insira uma tarefa com mais de 10 caracteres'); }
    }

    validEdit(value: string): void{
        this.valid(value);
        if (this.listService.existeNaLista(value)){ throw new Error('Tarefa já existente!'); }
    }
}
