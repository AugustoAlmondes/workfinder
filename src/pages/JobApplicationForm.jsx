import{ useState } from 'react';
import '../styles/JobForms.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function JobApplicationForm({ typeUser, fezLogin, handleLogout }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        education: '',
        experience: '',
        skills: '',
        language: '',
        availability: '',
        desiredSalary: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const enviar = () => {
        console.log('Dados do formulário enviados:', formData);
        alert('Candidatura enviada com sucesso!');
    };

    return (
        <>
        <Header typeUser={typeUser} fezLogin={fezLogin} handleLogout={handleLogout} />

        <main className='jobforms'>
            <div id="user-info-form-container" className="container">
                <div className="row">
                    <div id="form-box" className="col-md-12">
                        <h2 style={{ marginBottom: '40px' }}>Preencha os dados abaixo para a vaga de emprego</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome Completo:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Digite seu nome completo"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Digite seu e-mail"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Telefone:</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    placeholder="Digite seu telefone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="linkedin">LinkedIn:</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="linkedin"
                                    name="linkedin"
                                    placeholder="Link para o seu perfil no LinkedIn"
                                    value={formData.linkedin}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="portfolio">Portfólio (Opcional):</label>
                                <input
                                    type="url"
                                    className="form-control"
                                    id="portfolio"
                                    name="portfolio"
                                    placeholder="Link para o seu portfólio online"
                                    value={formData.portfolio}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="education">Formação Acadêmica:</label>
                                <textarea
                                    className="form-control"
                                    id="education"
                                    name="education"
                                    placeholder="Descreva sua formação acadêmica..."
                                    value={formData.education}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="experience">Experiência Profissional:</label>
                                <textarea
                                    className="form-control"
                                    id="experience"
                                    name="experience"
                                    placeholder="Descreva sua experiência profissional..."
                                    value={formData.experience}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="skills">Habilidades e Competências:</label>
                                <textarea
                                    className="form-control"
                                    id="skills"
                                    name="skills"
                                    placeholder="Liste suas habilidades e competências..."
                                    value={formData.skills}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="language">Idiomas:</label>
                                <textarea
                                    className="form-control"
                                    id="language"
                                    name="language"
                                    placeholder="Informe os idiomas que você fala e o nível de proficiência..."
                                    value={formData.language}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="availability">Disponibilidade:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="availability"
                                    name="availability"
                                    placeholder="Digite sua disponibilidade"
                                    value={formData.availability}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="desiredSalary">Salário Pretendido:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="desired-salary"
                                    name="desiredSalary"
                                    placeholder="Digite o salário pretendido"
                                    value={formData.desiredSalary}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="button"
                                value="Enviar Candidatura"
                                onClick={enviar}
                                id="enviar"
                                className="enviar-button"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <Footer/>
        </>
    );
};