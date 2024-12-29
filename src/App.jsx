import { Header } from './components/Header/Header'
import S from './styles/index.module.scss'

import capaFilme from '@assets/images/banner-filme.png'
import nomeFilme from '@assets/images/titulo-filme.png'

import Icon_play from '@assets/icons/play.png'
import Icon_estrela from '@assets/icons/star_amarela.png'

export function App() {
  return (
    <>
      <Header />

      <main>
        <section className={S.secao__conteudoPrincipal}>
          <div className={S.container__ConteudoPrincipal}>
            <section className={S.conteudoPrincipal__informacaoFilmes}>
              <div className={S.informacaoFilmes__info}>
                <img src={nomeFilme} alt="nome do filme" />
                <p>1h 37min | Aventura, Animação, Família</p>
              </div>

              <div className={S.informacaoFilmes__description}>
                <p>
                  Jack Frost, um garoto que controla o inverno, se junta ao
                  seleto time dos Guardiões Imortais para impedir Breu, o
                  bicho-papão, de transformar todos os sonhos das crianças em
                  pesadelo e usar seus poderes maquiavélicos para governar o
                  mundo.
                </p>
              </div>

              <div className={S.informacaoFilmes__containerButtons}>
                <button>
                  <img src={Icon_play} alt="Icone" />
                  Assistir
                </button>

                <button>
                  <img src={Icon_estrela} alt="Icone" />
                  Adicionar aos Favoritos
                </button>
              </div>
            </section>

            <section className={S.conteudoPrincipal__imagemFilme}>
              <img src={capaFilme} alt="Capa do filme" />
            </section>
          </div>
        </section>
      </main>
    </>
  )
}
