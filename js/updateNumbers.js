window.onload = function() {
  // Función para actualizar los valores de los números de manera incremental
  function updateNumbers() {
    const clientSatisfaction = document.getElementById("clientSatisfaction");
    const strategicPlans = document.getElementById("strategicPlans");
    const clients = document.getElementById("clients");
    const dailyConsultations = document.getElementById("dailyConsultations");
    const clientSatisfaction2 = document.getElementById("clientSatisfaction2");
    const strategicPlans2 = document.getElementById("strategicPlans2");
    const clients2 = document.getElementById("clients2");
    const dailyConsultations2 = document.getElementById("dailyConsultations2");

    let clientSatisfactionValue = 0;
    let strategicPlansValue = 0;
    let clientsValue = 0;
    let dailyConsultationsValue = 0;
    let clientSatisfactionValue2 = 0;
    let strategicPlansValue2 = 0;
    let clientsValue2 = 0;
    let dailyConsultationsValue2 = 0;


    const interval = setInterval(() => {
      if (clientSatisfactionValue < 99) {
        clientSatisfactionValue += 1;
        clientSatisfaction.innerHTML = `${clientSatisfactionValue}%`;
      }

      if (strategicPlansValue < 553) {
        strategicPlansValue += 3;
        strategicPlans.innerHTML = `${strategicPlansValue}+`;
      }

      if (clientsValue < 450) {
        clientsValue += 2;
        clients.innerHTML = `${clientsValue}+`;
      }

      if (dailyConsultationsValue < 105) {
        dailyConsultationsValue += 1;
        dailyConsultations.innerHTML = `${dailyConsultationsValue}+`;
      }

      if (clientSatisfactionValue2 < 99) {
        clientSatisfactionValue2 += 1;
        clientSatisfaction2.innerHTML = `${clientSatisfactionValue2}%`;
      }

      if (strategicPlansValue2 < 553) {
        strategicPlansValue2 += 3;
        strategicPlans2.innerHTML = `${strategicPlansValue2}+`;
      }

      if (clientsValue2 < 450) {
        clientsValue2 += 2;
        clients2.innerHTML = `${clientsValue2}+`;
      }

      if (dailyConsultationsValue2 < 105) {
        dailyConsultationsValue2 += 1;
        dailyConsultations2.innerHTML = `${dailyConsultationsValue2}+`;
      }

      if (
        clientSatisfactionValue === 99 &&
        strategicPlansValue === 553 &&
        clientsValue === 450 &&
        dailyConsultationsValue === 25 &&
        clientSatisfactionValue2 === 99 &&
        strategicPlansValue2 === 553 &&
        clientsValue2 === 450 &&
        dailyConsultationsValue2 === 25
      ) {
        clearInterval(interval);
      }
    }, 999); // Ajustar el tiempo en milisegundos según tus necesidades
  }

  // Llamar a la función updateNumbers al cargar la página
  updateNumbers();
};