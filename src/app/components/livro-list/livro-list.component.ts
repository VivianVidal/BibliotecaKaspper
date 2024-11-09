import { Component, OnInit } from '@angular/core';
import { Livro } from '../../models/livro.model';
import { LivroService } from '../../services/livro.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './livro-list.component.html',
  styleUrl: './livro-list.component.css'
})
export class LivroListComponent implements OnInit {
  livros: Livro[] = [];

  constructor(private livroService: LivroService){}

  ngOnInit(): void {
   this.livros = this.livroService.getLivros(); 
}

  deletarLivro(id: number): void{
    this.livroService.deletarLivro(id);
    this.livros = this.livroService.getLivros();
  }

  reservarLivro(livro: Livro): void {
    livro.reservado = !livro.reservado;
    this.livroService.editarLivro(livro.id, livro);
    this.livros = this.livroService.getLivros();
  }

  
}
