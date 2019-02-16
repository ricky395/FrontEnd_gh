// Funciones callback

programaPrincipal();

function programaPrincipal() 
{
  console.log("programaPrincipal: comenzando");
  funProceso(funCallback_A, "function test(){console.log(\"TEST 1!\")}");
  console.log("programaPrincipal: haciendo otro proceso");
  funProceso(funCallback_B, "function test(){console.log(\"TEST 2!\")}");
  console.log("programaPrincipal: terminando");
}

function funCallback_A()
{
  console.log("funCallBack A: hemos terminado");
}

function funCallback_B()
{
  console.log("funCallBack B: hemos terminado");
}

function funProceso(funDeAviso, test) 
{
  console.log("funProceso: comenzando proceso");
  funDeAviso();
  console.log("funProceso: terminando proceso");
  eval(test);
}