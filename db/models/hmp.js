module.exports = (sequelize, DataTypes) => {
    const hmp = sequelize.define('hmp', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sistema_cardiovascular: {
        type: DataTypes.JSON
      },      
      sistema_respiratorio: {
        type: DataTypes.JSON
      },
      sistema_digestorio: {
        type: DataTypes.JSON
      },
      sistema_genitourinario: {
        type: DataTypes.JSON
      },
      sistema_endocrino: {
        type: DataTypes.JSON
      },
      sistema_nervoso_central: {
        type: DataTypes.JSON
      },
      sistema_sensitivo: {
        type: DataTypes.JSON
      },
      sistema_hematopoietico_e_linfatico: {
        type: DataTypes.JSON
      },
      alergias: {
        type: DataTypes.JSON
      },
      estado_emocional_e_psiquico: {
        type: DataTypes.JSON
      },
      doenças_infecto_contagiosas: {
        type: DataTypes.JSON
      },
      internado_cirurgia_radioterapia_quimioterapia: {
        type: DataTypes.JSON
      },
      ultima_consulta_medica: {
        type: DataTypes.STRING
      },
      medicamentos_atual_12_meses: {
        type: DataTypes.JSON
      },
      outras_informacoes: {
        type: DataTypes.STRING
      },
      hmp: {
        type: DataTypes.STRING
      },
      traumatismo: {
        type: DataTypes.JSON
      },
    });
    return hmp;
  };