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

  constructor(){
    this.strTitulo = "Frontend Test";
    this.darrTodoList = [];
    this.boolTodoListVacia = this.isboolTodoListVacia();
    this.strTarea = "";
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
      let strUpdateTarea = prompt("Editar Tarea",strTareaUp);
      this.darrTodoList[Number.parseInt(intIndice)] = strUpdateTarea;
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

