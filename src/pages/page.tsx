'use client';
import { fetchJiraIssues, fetchJiraProjects } from '@/services/JiraServices';
import { DataGrid } from '@mui/x-data-grid';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function Home() {

    const { data: data1, error, isLoading } = useQuery<JiraProject[], Error>({
        queryKey: ['projects'],
        queryFn: fetchJiraProjects,
    }, queryClient);
    const { data: data2, error: error2, isLoading: isloading2 } =
        useQuery<JiraIssues[], Error>({
            queryKey: ['issues'],
            queryFn: fetchJiraIssues,
            enabled: !!data1,
        }, queryClient);
    const columns = [
        { field: 'key', headerName: 'Key', width: 100 },
        { field: 'name', headerName: 'Name', width: 200 },
        {
            field: 'avatarUrls',
            headerName: 'Avatar',
            width: 80,
        },
    ];
    return (
        <QueryClientProvider client={queryClient}>
            
            <div>
                <h1>Data from API</h1>
            </div>
            <div>
                <h2>Error</h2>
                {error && JSON.stringify(error)}
                {!error && "no freaking error call 1"}
            </div>
            <div>
                <h2>isLoading</h2>
                {JSON.stringify(isLoading)}
            </div>
            <div>
                <h2>Data first call:</h2>
                {data1 && JSON.stringify(data1)}
                <ul>
                    {data1 && data1.map((project) => (
                        <li key={project.id}>{project.name}</li>
                    ))}
                </ul>
            </div>
            <h1>Jira Projects</h1>
            <div className="data-grid">
                {data1 && <DataGrid
                    rows={data1}
                    columns={columns}
                    pageSizeOptions={[5]}
                />}
            </div>

            <div >
                {data2 &&
                    <>
                        <h2>Second call</h2>
                        {JSON.stringify(data2)}
                    </>
                }
                {error2 &&
                    <>
                        <h2>A freaking error at the second call</h2>
                        {JSON.stringify(error2.message)}
                    </>
                }
            </div>
        </QueryClientProvider>
    );
}