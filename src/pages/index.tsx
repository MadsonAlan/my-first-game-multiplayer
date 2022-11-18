
import { DominoPiece } from '../components/DominoPiece'
import { GerarPecas } from '../config/gerarPecas'

export default function Home() {

  const pecasDominoEmbaralhadas = GerarPecas()
  console.log(pecasDominoEmbaralhadas.sort());
  
  return (
    <>
    {
      pecasDominoEmbaralhadas.map((peca, index) =><DominoPiece key={index} topPart={Number(peca.split(':')[0])} bottomPart={Number(peca.split(':')[1])}/>)
    }
    </>    
  )
}
