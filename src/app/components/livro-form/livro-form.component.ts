import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Livro } from '../../models/livro.model';
import { LivroService } from '../../services/livro.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-livro-form',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './livro-form.component.html',
  styleUrl: './livro-form.component.css'
})
export class LivroFormComponent implements OnInit{
  livro : Livro = {id: 0, titulo: '', autor: '', ano: 0, genero: '', editora: '', isbn: '', reservado: false};
  editMode: boolean = false;

  constructor(
    private livroService: LivroService,
    public router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
   const id = this.route.snapshot.paramMap.get('id')
   if(id){
     this.editMode = true;
     const livroId = Number(id);
     const livro = this.livroService.getLivros().find(l => l.id === livroId);
     if(livro) {
       this.livro = {...livro};
     }
   }
}

  salvarLivro(): void{
    if(this.editMode){
      this.livroService.editarLivro(this.livro.id, this.livro);
    }else {
      this.livro.id = this.livroService.getLivros().length + 1;
      this.livroService.addLivro(this.livro);
    }
    this.router.navigate(['/']);
  }

  reservarLivro(): void {
    this.livro.reservado = !this.livro.reservado;
    this.livroService.editarLivro(this.livro.id, this.livro);
  }
}
