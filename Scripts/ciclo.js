let entrada = prompt(
  "Selecciona un numero de episodio de Star Wars del 1 al 9"
);
while (entrada != "ESC") {
  switch (entrada) {
    case "1":
      alert("La amenaza fantasma " + "(1999)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "2":
      alert("El ataque de los clones " + "(2002)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "3":
      alert("La venganza de los Sith " + "(2005)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "4":
      alert("Una nueva esperanza " + "(1977)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "5":
      alert("El Imperio contraataca " + "(1980)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "6":
      alert("El retorno del Jedi  " + "(1983)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "7":
      alert("El despertar de la Fuerza " + "(2015)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "8":
      alert("Los últimos Jedi  " + "(2017)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    case "9":
      alert("El ascenso de Skywalker " + "(2019)");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
    default:
      alert("Error");
      entrada = prompt("Ingresa ESC para salir de la pestaña");
      break;
  }
}
