import { useEffect } from 'react'
import { useSetBodyColor } from '../../hooks/useSetBodyColor'
import './Register.css'

const Register = () => {

    const {setBodyColor} = useSetBodyColor()

    useEffect(()=>{
        setBodyColor("#F8F8F8F8")
    })

    return (
        <>
            <div className="container col-11 col-sm-9" id="form-container">
                <div className="row align-items-center gx-5">
                    <div className="col-sm-6 order-md-1">
                    <h2>Realize seu cadastro</h2>
                        <form>
                            <div className="form-floating mb-3">
                                <input type="text" className='form-control' placeholder='Digite seu nome' id='name' name='name' />
                                <label htmlFor="label">Digite seu nome</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" className='form-control' placeholder='Digite seu sobrenome' id='sobrenome' name='sobrenome' />
                                <label htmlFor="label">Digite seu sobrenome</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="email" className='form-control' placeholder='Digite seu email' id='email' name='email' />
                                <label htmlFor="label">Digite seu email</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className='form-control' placeholder='Digite sua senha' id='password' name='password' />
                                <label htmlFor="label">Digite sua senha</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className='form-control' placeholder='Confirme sua senha' id='passwordConfirmation' name='passwordConfirmation' />
                                <label htmlFor="label">Confirme sua senha</label>
                            </div>

                            <div className="form-check mb-3">
                                <input type='checkbox' className="form-check-input" name="terms" id="terms" />
                                <label htmlFor="label" className='form-check-label'>Você aceita os <a href='#'>temos de serviço?</a></label>
                            </div>

                            <div className="form-check mb-3">
                                <input type="checkbox" className='form-check-input' name='news' id='news' checked />
                                <label htmlFor="label" className='form-check-label'>Deseja receber as nossas newsletters?</label>
                            </div>

                            <input type="submit" className='btn btn-primary' value={'Cadastrar'} />
                        </form>
                    </div>

                    <div className="col-sm-6 order-md-2">
                        <div className="col-12">
                            <img src="images/hello.svg" alt="Register image" className='img-fluid' />
                        </div>
                        <div className="col-12" id='link-container'>
                            <a href="register">Eu já tenho conta</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register