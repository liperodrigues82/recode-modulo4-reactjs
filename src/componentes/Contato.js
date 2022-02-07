import gps from '../imgs/gps.png';
import whatsapp from '../imgs/whatsapp.png';
import facebook from '../imgs/facebook.png';
import instagram from '../imgs/instagram.png';
import './Contato.css';

const Contato = () => {
  
  return (
        <div class="painel1">
            <div class="painelContato">
                <div class="divContato">
                    <h2>Onde estamos</h2>
                    <img src={gps} width="50px"/>
                    <p>Rua Lorem Ipsum, 13 - Centro</p>
                    <p>São Paulo - SP</p>
                    <br/>
                    <br/>
                    <br/>
                    <a href="https://api.whatsapp.com/send?phone=5511999999999">
                        <img src={whatsapp} width="20px"/>
                        (11) 99999-9999
                    </a>
                    <a href="#" target="_blank">
                        <img src={facebook} width="20px"/>
                        /RecodeTour
                    </a>
                    <a href="https://www.google.com.br/" target="_blank">
                        <img src={instagram} width="20px"/>
                        /RecodeTour
                    </a>
                </div>
                <div class="divContato">
                    <form>
                        <h3>Entre em contato</h3>
                        <hr/>
                        <input type="text" class="inputsForm" name="nome" placeholder="Insira seu nome"/>
                        <br/>
                        <input type="email" class="inputsForm" name="email" placeholder="seuemail@email.com"/>
                        <br/>
                        <input type="tel" class="inputsForm" name="tel" placeholder="(xx) xxxxx-xxxx"/>
                        <br/>
                        <textarea id="w3review" class="inputsForm" name="w3review" rows="4" cols="50"
                            placeholder="Deixe sua mensagem"></textarea>
                        <br/>
                        <button class="btn">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Contato;
