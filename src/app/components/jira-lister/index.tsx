import { DataGrid } from '@mui/x-data-grid';

export default function JiraProjectTables(params: { projects: JiraProject[] }) {
    const { projects } = params
    
    const columns = [
        { field: 'key', headerName: 'Key', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: 'avatarUrls',
            headerName: 'Avatar',
            width: 80,
            // renderCell: (params: { row: { avatarUrls: { [x: string]: string | undefined; }; name: string | undefined; }; }) => (
            //     <img src={params.row.avatarUrls['48x48']} alt={params.row.name} /> // Use appropriate size based on your needs
            // ),
        },
        // Add more columns based on your desired data display
    ];
    return <>
        <div className="project-list">
            <h1>Jira Projects</h1>
            <div className="data-grid">
                <DataGrid
                    rows={projects}
                    columns={columns}
                    pageSizeOptions={[5]}
                // pageSize={10}
                // rowsPerPageOptions={[5, 10, 20]}
                />
            </div>
        </div>
    </>
}