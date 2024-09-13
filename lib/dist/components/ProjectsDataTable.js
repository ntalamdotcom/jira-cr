"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProjectsDataTable;
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
    return <>
        <div className="data-grid">
            {data && <x_data_grid_1.DataGrid rows={data} columns={columns} pageSizeOptions={[5]}/>}
        </div>
    </>;
}
//# sourceMappingURL=ProjectsDataTable.js.map