export default function JobForms() {
    return (
        <>
            <main>
                <div id="add-form-container" className="container">
                    <div className="row">
                        <div id="form-box" className="col-md-12">
                        <h2>Preencha os dados da melhor forma possível para exibição de sua vaga!</h2>

                        <form action="">
                            <div className="form-group">
                                <label htmlFor="title">Título da vaga:</label>
                                <input type="text" className="form-control" id="title" name="title"
                                    placeholder="Digite o título da vaga" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="ability">Habilidades e Qualificações Necessárias:</label>
                                <input type="text" className="form-control" id="ability" name="ability"
                                    placeholder="Digite Habilidades e Qualificações Necessárias para a vaga" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="local">Localização:</label>
                                <input type="text" className="form-control" id="local" name="local"
                                    placeholder="Digite o local de trabalho" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contract-type">Tipo de Contratação:</label>
                                <select className="form-control" name="contract-type" id="contract-type">
                                    <option value="none" selected> Selecione uma Opção </option>
                                    <option value="CLT">CLT</option>
                                    <option value="PJ">PJ</option>
                                    <option value="JA">Jovem Aprendiz</option>
                                    <option value="Estagio">Estágio</option>
                                    <option value="other" id="activateInputContract">Outros</option>
                                </select>
                                <input type="text" className="form-control" id="other-contract-type"
                                    name="other-contract-type" placeholder="Digite outro tipo de Contratação" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="work-mode">Modalidade de Trabalho:</label>
                                <select className="form-control" name="work-mode" id="work-mode">
                                    <option value="presencial">Presencial</option>
                                    <option value="ead">Home Office</option>
                                    <option value="hibrido">Híbrido</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="vacancy-number">Quantidade de Vagas:</label>
                                <input type="number" className="form-control" id="vacancy-number" name="vacancy-number"
                                    min="1" placeholder="Digite a quantidade de vagas" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="area">Área de Atuação:</label>
                                <input type="text" className="form-control" id="area" name="area"
                                    placeholder="Digite a área de atuação" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pcd">Vaga para PCD?</label>
                                <input type="radio" name="pcd" id="yesPcd" value="sim" /> <label htmlFor="yesPcd">Sim</label>
                                <input type="radio" name="pcd" id="noPcd" value="não" checked /> <label
                                    htmlFor="noPcd">Não</label>
                            </div>
                            <div className="form-group">
                                <label htmlFor="driver-license">Necessita de Carteira de Motorista?</label>
                                <input type="radio" name="driver-license" id="yesDriver" value="sim" /> <label
                                    htmlFor="yesDriver">Sim</label>
                                <input type="radio" name="driver-license" id="noDriver" value="não" checked /> <label
                                    htmlFor="noDriver">Não</label>
                                <select className="form-control" name="license-type" id="license-type" disabled>
                                    <option value="none"> Selecione uma Opção </option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="E">E</option>
                                    <option value="AB">AB</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="salary">Exibir Salário?</label>
                                <input type="radio" name="salary" id="yesSalary" value="sim" checked /> <label
                                    htmlFor="yesSalary">Sim</label>
                                <input type="radio" name="salary" id="noSalary" value="não" /> <label
                                    htmlFor="noSalary">Não</label>
                                <input type="text" className="form-control" id="salary" name="salary"
                                    placeholder="Digite o salário" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="benefits">Benefícios:</label>
                                <textarea type="text" className="form-control" id="benefits" name="benefits"
                                    placeholder="Descreva os benefícios da vaga ..." required></textarea>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Descrição da vaga:</label>
                                <textarea type="text" className="form-control" id="description" name="description"
                                    placeholder="Descreva as atividades do desenvolvedor..." required
                                    style="height: 200px;"></textarea>
                            </div>

                            <input type="button" value="Submeter vaga" id="enviar" className="enviar-button" />

                        </form>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}