// Função para exibir o resultado
function exibirResultado() {
    const cadeiras = document.getElementsByClassName('cadeira');
    const statusCadeiras = [];
  
    for (let i = 0; i < cadeiras.length; i++) {
      if (cadeiras[i].classList.contains('ocupada')) {
        statusCadeiras.push('ocupado');
      } else {
        statusCadeiras.push('vago');
      }
    }
  
    const resultado = verificarDisponibilidadeCadeiras(statusCadeiras);
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p>Conjuntos de 2 cadeiras consecutivas disponíveis: ${resultado.disponiveis2Cadeiras}</p>
      <p>Conjuntos de 3 cadeiras consecutivas disponíveis: ${resultado.disponiveis3Cadeiras}</p>
      <p>Possibilidades de combinação de 2 cadeiras consecutivas: ${resultado.possibilidades2Cadeiras.join(', ')}</p>
      <p>Possibilidades de combinação de 3 cadeiras consecutivas: ${resultado.possibilidades3Cadeiras.join(', ')}</p>
    `;
  }
  
  // Função para alternar a ocupação da cadeira
  function alternarOcupacao(cadeira) {
    cadeira.classList.toggle('ocupada');
  }
  
  // Função para verificar a disponibilidade de cadeiras consecutivas
  function verificarDisponibilidadeCadeiras(statusCadeiras) {
    let disponiveis2Cadeiras = 0; // contador de conjuntos de 2 cadeiras consecutivas disponíveis
    let disponiveis3Cadeiras = 0; // contador de conjuntos de 3 cadeiras consecutivas disponíveis
    const possibilidades2Cadeiras = []; // array para armazenar as possibilidades de combinação de 2 cadeiras consecutivas
    const possibilidades3Cadeiras = []; // array para armazenar as possibilidades de combinação de 3 cadeiras consecutivas
  
    for (let i = 0; i < statusCadeiras.length; i++) {
      // Verifica se duas cadeiras consecutivas estão disponíveis
      if (statusCadeiras[i] === 'vago' && statusCadeiras[i + 1] === 'vago') {
        disponiveis2Cadeiras++;
        possibilidades2Cadeiras.push(`(${i + 1}, ${i + 2})`);
      }
  
      // Verifica se três cadeiras consecutivas estão disponíveis
      if (
        statusCadeiras[i] === 'vago' &&
        statusCadeiras[i + 1] === 'vago' &&
        statusCadeiras[i + 2] === 'vago'
      ) {
        disponiveis3Cadeiras++;
        possibilidades3Cadeiras.push(`(${i + 1}, ${i + 2}, ${i + 3})`);
      }
    }
  
    return {
      disponiveis2Cadeiras,
      disponiveis3Cadeiras,
      possibilidades2Cadeiras,
      possibilidades3Cadeiras,
    };
  }
// Event listener para alternar a ocupação da cadeira ao clicar
document.addEventListener('DOMContentLoaded', function () {
    const cadeiras = document.getElementsByClassName('cadeira');
  
    for (let i = 0; i < cadeiras.length; i++) {
      cadeiras[i].addEventListener('click', function () {
        alternarOcupacao(cadeiras[i]);
      });
    }
  });