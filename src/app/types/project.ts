interface JiraProject {
    expand: string;
    self: string;
    id: string;
    key: string;
    name: string;
    avatarUrls: { [size: string]: string }; // Use an indexed type for avatar URLs
    projectTypeKey: string;
    simplified: boolean;
    style: string;
    isPrivate: boolean;
    properties: { [key: string]: any }; // Use an object for unknown properties
    entityId: string;
    uuid: string;
}