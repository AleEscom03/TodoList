import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  public strTitulo:String;
  //                                                        //Lista de tareas
  public darrTodoList:Array<String>;
  //                                                        //Boolean para saber si la lista esta vacia
  public boolTodoListVacia:Boolean;
  //                                                        //Tarea que se añadira a la lista
  public strTarea:String;

  public strTareaModif:String;

  constructor(){
    this.strTitulo = "Frontend Test";
    this.darrTodoList = [];
    this.boolTodoListVacia = this.isboolTodoListVacia();
    this.strTarea = "";
    this.strTareaModif = "";
  }
  
  ngOnInit(){
    
  }

  agregarTarea()
  {
    if(this.strTarea == "")
    {
      alert("Debe escribir una tarea para agregar.");
    }

    else
    {
      //                                                        //    Añadir tarea a la lista darrTodoList,
      //                                                        //    poner en blanco el campor para añadir tarea e
      //                                                        //    indicar que la lista no esta vacía.
      this.darrTodoList.push(this.strTarea);
      this.strTarea = "";
      this.boolTodoListVacia = false;
    }
  }

  editarTarea(strTareaUp:string,intIndice:string)
  {
      //                                                        //    Guardar la tarea a modificar.
      //                                                        //    Esconder botón de editar y
      //                                                        //    mostrar botón de guardar.
      this.strTareaModif = strTareaUp;
      document.querySelector("#item"+intIndice).className = 'hidden';
      document.querySelector("#itemVis"+intIndice).className = 'show';
      document.getElementById("itemVis"+intIndice).focus();
      document.querySelector("#imgEdit"+intIndice).className = 'hidden'
      document.querySelector("#imgGuarda"+intIndice).classList.remove('hidden');
      document.querySelector("#imgGuarda"+intIndice).classList.add('img','show');
  }

  guardarTarea(strTareaUp:string,intIndice:string){
    //                                                        //    Guardar tarea en su respectiva posición de la lista
    this.darrTodoList[Number.parseInt(intIndice)] = this.strTareaModif;
    this.strTareaModif = "";
  }

  eliminarTarea(intIndice:Number)
  {
    //                                                        //    Devolver un arreglo con todos los elementos 
    //                                                        //    diferentes al índice especificado.
    const diferenteIndice = (item,idx) => idx !== intIndice;
    this.darrTodoList = this.darrTodoList.filter(diferenteIndice);
    //                                                        //    Verificar si la lista quedó vacía o no.
    this.boolTodoListVacia = (this.isboolTodoListVacia())?true:false;
  }

  vaciarLista()
  {
    //                                                        //    Reinicializar la lista e indicar que esta vacía.
    this.darrTodoList = [];
    this.boolTodoListVacia = true;
  }

  isboolTodoListVacia()
  {
    //                                                        //    Checa si la lista darrTodoList esta vacía.
    return (this.darrTodoList.length == 0);
  }

}

