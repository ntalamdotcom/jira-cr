'use client';
import ProjectsDataTable from '@/lib/components/ProjectsDataTable';
import { fetchJiraIssues, fetchJiraProjects } from '@/lib/services/JiraServices';
// import { DataGrid } from '@mui/x-data-grid';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function Home() {

    const { data: data1, error: error1, isLoading } = useQuery<JiraProject[], Error>({
        queryKey: ['projects'],
        queryFn: fetchJiraProjects,
    }, queryClient);
    const { data: data2, error: error2, isLoading: isLoading2 } =
        useQuery<JiraIssues[], Error>({
            queryKey: ['issues'],
            queryFn: fetchJiraIssues,
            enabled: !!data1,
        }, queryClient);
    const columnsListProject = [
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
            {isLoading && <div>
                <div>
                    <h2>isLoading project lists</h2>
                </div>
            </div>
            }
            {!isLoading && <>
                <h1>Jira Projects (loaded 1st query)</h1>
                <ProjectsDataTable data={data1} ></ProjectsDataTable>
            </>
            }
            {error1 && <div>Error: {JSON.stringify(error1)} </div>}
            {isLoading2 && data1 && <>
                <div>
                    <h2>isLoading 2nd call</h2>
                </div>
            </>
            }
            {!isLoading2 && data2 && <div>
                <h1>Issues List (loaded 2st query)</h1>
                <h2>Data 2nd call:</h2>
                <div>{JSON.stringify(data2)}</div>
            </div>
            }
            {error2 &&
                <div>Error 2nd call: {JSON.stringify(error2)} </div>
            }
        </QueryClientProvider>
    );
}