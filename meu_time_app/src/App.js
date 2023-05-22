import jpIMG from './assets/jp.png'
import './styles.css';

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
               <img src= {jpIMG} alt="Logo da página" />
            </span>

            <div className='wrap-input'>
              <input type='password'/>
              <span className='focus-input' data-placeholder='Key de Autenticação'></span>
            </div>

            <div className="container-login-form-btn">
                <button className="login-form-btn">Entrar</button>  
            </div>

            <div className="text-center">
                <span className="text1">Não possui conta? </span>
                <a className="text2" href="#">Criar conta</a>  
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
