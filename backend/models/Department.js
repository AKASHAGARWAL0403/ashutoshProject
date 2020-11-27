const { Model, DataTypes, Deferrable } = require("sequelize");

export class DepartmentDetails extends Model {}

export const initDepartmentDetails = async (sequelize) => {
  DepartmentDetails.init(
    {
      department: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      password: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: ''
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: "department_details",
      timestamps: true,
    }
  );
};
