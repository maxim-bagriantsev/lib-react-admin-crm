import * as React from "react";
import {
    List,
    Datagrid,
    Edit,
    Create,
    SimpleForm,
    DateField,
    TextField,
    EditButton,
    TextInput,
    DateInput,
    EmailField,
    UrlField,
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import MyUrlField from "./components/myUrlField";

export const PostIconUser = BookIcon;

export const PostListUsers = (props) => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source="id"/>
            <TextField source="name"/>
            <DateField source="username"/>
            <EmailField source="email"/>
            <TextField source="address.street"/>
            <TextField source="phone"/>
            <UrlField source="website"/>
            <MyUrlField source='website'/>
            <TextField source="company.name"/>
            <EditButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEditUsers = () => (
    <Edit title={<PostTitle/>}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="title"/>
            <TextInput source="teaser" options={{multiline: true}}/>
            <TextInput multiline source="body"/>
            <DateInput label="Publication date" source="published_at"/>
            <TextInput source="average_note"/>
            <TextInput disabled label="Nb views" source="views"/>
        </SimpleForm>
    </Edit>
);

export const PostCreateUsers = () => (
    <Create title="Create a Post">
        <SimpleForm>
            <TextInput source="title"/>
            <TextInput source="teaser" options={{multiline: true}}/>
            <TextInput multiline source="body"/>
            <TextInput label="Publication date" source="published_at"/>
            <TextInput source="average_note"/>
        </SimpleForm>
    </Create>
);