function climbingLeaderboard(scores, alice) {
  // Eliminar puntajes duplicados de la tabla de puntajes
  const uniqueScores = [...new Set(scores)];

  // Inicializar un array para almacenar los rankings
  const rankings = [];

  // Inicializar el índice de alice al final de la tabla de puntajes
  let aliceIndex = uniqueScores.length - 1;

  // Recorrer los puntajes de alice de mayor a menor
  for (let i = 0; i < alice.length; i++) {
      // Mientras alice tenga un puntaje mayor o igual al puntaje en la posición actual
      while (alice[i] >= uniqueScores[aliceIndex] && aliceIndex >= 0) {
          aliceIndex--;
      }
      // Calcular el ranking de alice sumando 1 al índice actual (debido a índices 0-based)
      rankings.push(aliceIndex + 2);
  }

  return rankings;
}


const scores = [100, 100, 50, 40, 40, 20, 10];
const alice = [5, 25, 50, 120];

const aliceRankings = climbingLeaderboard(scores, alice);
console.log(aliceRankings); 


