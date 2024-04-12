'use client'
import React, { useState, useEffect } from 'react';

function HistorialClinicoForm() {
    const [nombre, setNombre] = useState('');
    const [sexo, setSexo] = useState('');
    const [domicilio, setDomicilio] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [escolaridad, setEscolaridad] = useState('');
    const [otrosEnfermedades, setOtrosEnfermedades] = useState('');
    const [numeroExpediente, setNumeroExpediente] = useState('');
    const [fechaActual, setFechaActual] = useState('');
    const [motivoConsulta, setMotivoConsulta] = useState('');
    const [enfermedades, setEnfermedades] = useState({
      cardiovasculares: false,
      pulmonares: false,
      renales: false,
      gastrointestinales: false,
      hematologicas: false,
      endocrinas: false,
      mentales: false,
      dermatologicas: false,
      neurologicas: false,
      metabolicas: false,
      marcapasos: false,
      cardiopatias: false,
      neuropatias: false,
      implanteDental: false,
      cancer: false,
      convulsiones: false,
      otros: false // Agregamos la opción "otros" a las enfermedades
    });
  
    const enfermedadesList = [
      { name: 'cardiovasculares', label: 'Enfermedades Cardiovasculares' },
      { name: 'pulmonares', label: 'Enfermedades Pulmonares' },
      { name: 'renales', label: 'Enfermedades Renales' },
      { name: 'gastrointestinales', label: 'Enfermedades Gastrointestinales' },
      { name: 'hematologicas', label: 'Enfermedades Hematológicas' },
      { name: 'endocrinas', label: 'Enfermedades Endocrinas' },
      { name: 'mentales', label: 'Enfermedades Mentales' },
      { name: 'dermatologicas', label: 'Enfermedades Dermatológicas' },
      { name: 'neurologicas', label: 'Enfermedades Neurológicas' },
      { name: 'metabolicas', label: 'Enfermedades Metabólicas' },
      { name: 'marcapasos', label: 'Marcapasos' },
      { name: 'cardiopatias', label: 'Cardiopatías' },
      { name: 'neuropatias', label: 'Neuropatías' },
      { name: 'implanteDental', label: 'Implante Dental' },
      { name: 'cancer', label: 'Cáncer' },
      { name: 'convulsiones', label: 'Convulsiones' }
    ];
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setEnfermedades(prevState => ({
        ...prevState,
        [name]: checked
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log({
        nombre,
        sexo,
        domicilio,
        telefono,
        ocupacion,
        fechaNacimiento,
        ciudad,
        escolaridad,
        enfermedades
      });
    };
    
    useEffect(() => {
      // Simulación de consulta para obtener el número de expediente
      fetchNumeroExpedienteFromDatabase().then((numero) => {
        setNumeroExpediente(numero);
      });
  
      // Obtener la fecha actual
      const fechaActual = new Date().toISOString().split('T')[0];
      setFechaNacimiento(fechaActual);
    }, []);// Función para simular la consulta del número de expediente desde la base de datos
  
  
    const fetchNumeroExpedienteFromDatabase = () => {
      return new Promise((resolve) => {
        // Simulación de consulta, aquí deberías realizar la consulta real
        setTimeout(() => {
          resolve('123456'); // Supongamos que el número de expediente es "123456"
        }, 1000); // Simulación de retardo de 1 segundo
      });
    };
  
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginRight: '20px' }}>Historial Clínico</h1>
          <img src="./assets/img/logo.png" alt="Logo" style={{ maxWidth: '200px' }} />
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Información Personal</legend>
            <label htmlFor="nombre">Nombre:</label><br />
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required /><br /><br />
            <label>Sexo:</label><br />
            <input type="radio" id="sexo_masculino" name="sexo" value="masculino" checked={sexo === 'masculino'} onChange={() => setSexo('masculino')} required />
            <label htmlFor="sexo_masculino">Masculino</label>
            <input type="radio" id="sexo_femenino" name="sexo" value="femenino" checked={sexo === 'femenino'} onChange={() => setSexo('femenino')} />
            <label htmlFor="sexo_femenino">Femenino</label><br /><br />
            <label htmlFor="domicilio">Domicilio:</label><br />
            <input type="text" id="domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} required /><br /><br />
            <label htmlFor="telefono">Teléfono:</label><br />
            <input type="tel" id="telefono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required /><br /><br />
            <label htmlFor="ocupacion">Ocupación:</label><br />
            <input type="text" id="ocupacion" value={ocupacion} onChange={(e) => setOcupacion(e.target.value)} required /><br /><br />
            <label htmlFor="fecha_nacimiento">Fecha de Nacimiento:</label><br />
            <input type="date" id="fecha_nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required /><br /><br />
            <label htmlFor="ciudad">Ciudad:</label><br />
            <input type="text" id="ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} required /><br /><br />
          </fieldset>
          <fieldset>
            <legend>Enfermedades</legend>
            <div className="enfermedades-container">
              {enfermedadesList.map((enfermedad, index) => (
                <div key={index}>
                  <input 
                    type="checkbox" 
                    id={enfermedad.name} 
                    name={enfermedad.name} 
                    checked={enfermedades[enfermedad.name]} 
                    onChange={handleCheckboxChange} 
                  />
                  <label htmlFor={enfermedad.name}>{enfermedad.label}</label>
                </div>
              ))}
            </div>
            <div>
              <input 
                type="checkbox" 
                id="otros" 
                name="otros" 
                checked={enfermedades.otros} 
                onChange={handleCheckboxChange} 
              />
              <label htmlFor="otros">Otros</label><br />
              {enfermedades.otros && (
                <input 
                  type="text" 
                  id="otrosEnfermedades" 
                  value={otrosEnfermedades} 
                  onChange={(e) => setOtrosEnfermedades(e.target.value)} 
                  placeholder="Indicar enfermedad" 
                />
              )}
            </div>
          </fieldset>
                <fieldset>
                    <legend>Información Personal</legend>
                    {/* Código para campos de información personal */}
                </fieldset>
                <fieldset>
                    <legend>Antecedentes Patológicos</legend>
                    <label>Tabaquismo:</label>
                    <input type="checkbox" checked={enfermedades.tabaquismo} onChange={() => setEnfermedades({ ...enfermedades, tabaquismo: !enfermedades.tabaquismo })} />
                    <br />
                   
                    <label>Alcoholismo:</label>
                    <input type="checkbox" checked={enfermedades.alcoholismo} onChange={() => setEnfermedades({ ...enfermedades, alcoholismo: !enfermedades.alcoholismo })} />
                    <br />
                    <label>Toxiconanias:</label>
                    <input type="checkbox" checked={enfermedades.toxicomanias} onChange={() => setEnfermedades({ ...enfermedades, toxicomanias: !enfermedades.alcoholismo })} />
                    <br />
                    <label>Sedentarismo:</label>
                    <input type="checkbox" checked={enfermedades.sedentarismo} onChange={() => setEnfermedades({ ...enfermedades, sedentarismo: !enfermedades.alcoholismo })} />
                    <br />

                    <label>Traumatismo:</label>
                    <input type="checkbox" checked={enfermedades.traumatismo} onChange={() => setEnfermedades({ ...enfermedades, traumatismo: !enfermedades.alcoholismo })} />
                    <br />
                    <label>Cirugias:</label>
                    <input type="checkbox" checked={enfermedades.cirugias} onChange={() => setEnfermedades({ ...enfermedades, cirugias: !enfermedades.alcoholismo })} />
                    <br />
                    {/* Continúa con cada antecedente patológico */}
                    <label>Otros:</label>
                    <input type="checkbox" checked={enfermedades.otros} onChange={() => setEnfermedades({ ...enfermedades, otros: !enfermedades.otros })} />
                    {enfermedades.otros && (
                        <input type="text" value={otrosEnfermedades} onChange={(e) => setOtrosEnfermedades(e.target.value)} />
                    )}
                </fieldset>
                <fieldset>
                    <legend>Padecimiento Actual</legend>
                    <textarea
                        value={motivoConsulta}
                        onChange={(e) => setMotivoConsulta(e.target.value)}
                        placeholder="Escriba el motivo de consulta aquí..."
                        required
                    />
                </fieldset>
        
          <input type="submit" value="Enviar" />
          <input type="reset" value="Limpiar" />
        </form>
      </div>
    );
}

export default HistorialClinicoForm;
