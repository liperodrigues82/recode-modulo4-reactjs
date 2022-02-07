import portodegalinhas from '../imgs/places/porto-de-galinhas.jpg';
import orlando from '../imgs/places/orlando.jpg';
import foz from '../imgs/places/foz.jpg';
import vancouver from '../imgs/places/vancouver.jpg';
import salvador from '../imgs/places/salvador.jpg';
import recife from '../imgs/places/recife.jpg';
import lisboa from '../imgs/places/lisboa.jpg';
import morrodesp from '../imgs/places/morro-de-sp.png';
import praiadapipa from '../imgs/places/praia-da-pipa.png';
import jericoacoara from '../imgs/places/jericoacoara.png';
import bsas from '../imgs/places/buenos-aires.jpg';
import trancoso from '../imgs/places/trancoso.png';
import cupom from '../imgs/cupom.png';
import './Promos.css';
import React, { useState } from 'react';

const Promos = () => {

    const [ valor1, setValor ] = useState(0);

    function adicionar() {
        setValor(valor1 + 1);
    }

    function remover() {
        setValor(valor1 - 1);
    }

    return (
        <>
            <div class="painel1">

                <div class="cards">
                    <img src={portodegalinhas} />
                    <hr />
                    <h4>Porto de Galinhas</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1165</span></p>
                    <h3>R$ 699</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>{valor1}</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={orlando} />
                    <hr />
                    <h4>Orlando</h4>
                    <p>11 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 12555</span></p>
                    <h3>R$ 9999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={foz} />
                    <hr />
                    <h4>Foz do Iguaçu</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 940</span></p>
                    <h3>R$ 599</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={vancouver} />
                    <hr />
                    <h4>Vancouver</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 12995</span></p>
                    <h3>R$ 10999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={salvador} />
                    <hr />
                    <h4>Salvador</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2555</span></p>
                    <h3>R$ 1999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={recife} />
                    <hr />
                    <h4>Recife</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1555</span></p>
                    <h3>R$ 999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
            </div>

            <div class="painel4">
                <img src={cupom} id="cupom" alt="Cupom de desconto" />
            </div>



            <div class="painel1">
                <div class="cards">
                    <img src={lisboa} />
                    <hr />
                    <h4>Lisboa</h4>
                    <p>15 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 22555</span></p>
                    <h3>R$ 18999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={morrodesp} />
                    <hr />
                    <h4>Morro de São Paulo</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2899</span></p>
                    <h3>R$ 2399</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={praiadapipa} />
                    <hr />
                    <h4>Praia da Pipa</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2499</span></p>
                    <h3>R$ 1999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                        <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={bsas} />
                    <hr />
                    <h4>Buenos Aires</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 3599</span></p>
                    <h3>R$ 2799</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                         <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={jericoacoara} />
                    <hr />
                    <h4>Jericoacoara</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2759</span></p>
                    <h3>R$ 2199</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                         <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={trancoso} />
                    <hr />
                    <h4>Trancoso</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1789</span></p>
                    <h3>R$ 1299</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <div className="divReservas">
                         <button className='btnAdicionar' onClick={adicionar}>+</button> Reservas: <b>0</b> <button className='btnRemover' onClick={remover}>-</button>
                    </div>
                    <button className="btnComprar">Comprar</button>
                </div>
            </div>
        </>
    );
}

export default Promos;