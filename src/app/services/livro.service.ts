import { Injectable } from '@angular/core';
import {Livro} from '../models/livro.model';


@Injectable({
  providedIn: 'root'
})

export class LivroService {
  private livros: Livro[] = [
    {id:1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', ano: 1954, genero: 'Fantasia', editora: 'Editora S.A.', isbn: '978-85-7522-070-8', reservado: false}
  ]

  constructor() {}

  getLivros(): Livro[]{
    return this.livros;
  }

  addLivro(livro: Livro): void{
    this.livros.push(livro);
  }

  editarLivro(id: number, livro: Livro): void {
    const index = this.livros.findIndex(l => l.id === id);
    if( index!== -1){
      this.livros[index] = livro;
    }
  }

  deletarLivro(id: number): void{
    const index = this.livros.findIndex(l => l.id === id);
    if (index !== -1){
      this.livros.splice(index,1);
    }
  }
  
  getLivroById(id: number): Livro | undefined {
    return this.livros.find(l => l.id === id);
  }


  checkAvailability(id: number):boolean{
    const livro = this.getLivroById(id);
    return livro ? !livro.reservado : false;
  }
}