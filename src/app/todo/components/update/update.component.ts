import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  tareaId: string = "";
  tareaDescripcion: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.tareaId = this.route.snapshot.paramMap.get('id') || '';
    this.tareaDescripcion = this.route.snapshot.paramMap.get('descripcion') || '';
  }

  regresar() {
    this.router.navigate(['lista']); 
  }

}