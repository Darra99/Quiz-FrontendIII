import React from "react";
import Data from "./data.json";
import ItemVarios from "./Item";

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

export default function Listado({stateAdquirido, add}) {
  const data1 = Data;
  const data2 = data1.almacen;

  return (
    <>
      <div className="container">
        <ItemVarios add={add} data={data2} stateComprado={stateAdquirido} />
      </div>
    </>
  );
}