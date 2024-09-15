"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectsDataTable;
const react_1 = __importDefault(require("react"));
const x_data_grid_1 = require("@mui/x-data-grid");
function ProjectsDataTable(params) {
    const { data } = params;
    const columns = [
        { field: 'key', headerName: 'Key', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: 'avatarUrls',
            headerName: 'Avatar',
            width: 80,
        },
    ];
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "data-grid" }, data && react_1.default.createElement(x_data_grid_1.DataGrid, { rows: data, columns: columns, pageSizeOptions: [5] })));
}
//# sourceMappingURL=ProjectsDataTable.js.map