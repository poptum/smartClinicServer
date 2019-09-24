module.exports = (sequelize, DataTypes) => {
    const paciente = sequelize.define('paciente', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING
      },
      cep: {
        type: DataTypes.INTEGER
      },
      bairro: {
        type: DataTypes.STRING
      },
      rua: {
        type: DataTypes.STRING
      },
      cidade: {
        type: DataTypes.STRING
      },
      estado: {
        type: DataTypes.STRING
      },
      ocupacao: {
        type: DataTypes.STRING
      },
      nacionalidade: {
        type: DataTypes.STRING
      },
      naturalidade: {
        type: DataTypes.STRING
      },
      data_nascimento: {
        type: DataTypes.DATE
      },
      cor: {
        type: DataTypes.STRING
      },
      mae: {
        type: DataTypes.STRING
      },
      indicacao: {
        type: DataTypes.STRING
      },
      observacao: {
        type: DataTypes.STRING
      },
      aluno: {
        type: DataTypes.INTEGER,
        references: {
            model: Sequelize.models.user,
                  key: 'id'
       }
      },
      professor: {
        type: DataTypes.INTEGER,
        references: {
            model: Sequelize.models.user,
                  key: 'id'
       }
      },
      anamnese: {
        type: DataTypes.INTEGER,
        references: {
            model: Sequelize.models.anamnese,
                  key: 'id'
       }
    },
       hmp: {
         type: DataTypes.INTEGER,
         references: {
             model: Sequelize.models.hmp,
                   key: 'id'
        }
      },

    });
    // user.associate = (models) => {
      // user.hasMany(models.userItem, {
      //   foreignKey: 'userId',
      //   as: 'userItems',
      // });
    // };
  
    return paciente;
  };