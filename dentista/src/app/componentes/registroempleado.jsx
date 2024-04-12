// EmployeeForm.js
'use client'
import React, { useState } from "react";

const EmployeeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    puesto: "", // Nuevo campo para el puesto en la clínica dental
    especialidad: "", // Nuevo campo para la especialidad (si es aplicable)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="puesto">Puesto en la clínica dental:</label>
        <input
          type="text"
          id="puesto"
          name="puesto"
          value={formData.puesto}
          onChange={handleChange}
          required
        />
      </div>
      {/* Si el empleado tiene una especialidad */}
      <div>
        <label htmlFor="especialidad">Especialidad:</label>
        <input
          type="text"
          id="especialidad"
          name="especialidad"
          value={formData.especialidad}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Registrar Empleado</button>
    </form>
  );
};

export default EmployeeForm;
