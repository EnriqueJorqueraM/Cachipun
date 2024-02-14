//INGRESO DE DATOS
let njugadas = parseInt(prompt("Ingrese numero de juegadas"));
let jugadaactual = 0;
let marcador = 0;
//PROCESO DE DATOS

//Validación de numero de jugadas
if (njugadas > 0) {
  //ciclo para cada una de las jugadas
  for (let i = 1; i <= njugadas; i++) {
    jugadaactual++;
    let mechjugada = Math.floor(Math.random() * 3);
    let jugada = parseInt(
      prompt(`Ingresa tu jugada ${jugadaactual} : 0.Piedra  1.Papel  2.Tijera`)
    );

    //función que permite traducir la entrada de numero a la opcion en texto
    let traductor = function (c) {
      if (c == 0) {
        return "Piedra";
      } else if (c == 1) {
        return "Papel";
      } else {
        return "Tijera";
      }
    };

    // funcion que determina resultado de la jugada
    let juez = function (a, b) {
      if ((a == 0 && b == 2) || (a == 1 && b == 0) || (a == 2 && b == 1)) {
        marcador = marcador + 1;
        alert(`Jugada Ganada! : ${traductor(a)} contra ${traductor(b)}`);
      } else if (
        (a == 0 && b == 0) ||
        (a == 1 && b == 1) ||
        (a == 2 && b == 2)
      ) {
        marcador = marcador;
        alert(`Jugada Empatada! : ${traductor(a)} contra ${traductor(b)}`);
      } else {
        marcador = marcador - 1;
        alert(`Jugada Perdida! : ${traductor(a)} contra ${traductor(b)}`);
      }
    };

    //impresión de resumen de las jugadas
    juez(jugada, mechjugada);
    document.write(`has jugado ${traductor(jugada)} `);
    document.write(`contra ${traductor(mechjugada)}; `);
    //corrobora las jugadas realizadas por consla
    console.log(njugadas);
  }


  //luego de las jugadas, determina resultado global
  if (marcador > 0) {
    const resultadojugada = document.getElementById("resultadojugada");
    resultadojugada.innerHTML = "Victoria";
  } else if (marcador == 0) {
    const resultadojugada = document.getElementById("resultadojugada");
    resultadojugada.innerHTML = "Empate";
  } else {
    const resultadojugada = document.getElementById("resultadojugada");
    resultadojugada.innerHTML = "Derrota";
  }
} else {
  const primermensaje = document.getElementById("primermensaje");
  primermensaje.innerHTML = "Ingresa un número de jugadas válido";
}

