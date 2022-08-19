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

export const PostIconUser = BookIcon;

export const UsersNewList = (props) => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source="id"/>
            <TextField source="name"/>
            <DateField source="username"/>
            <EmailField source="email"/>
            <TextField source="address.street"/>
            <TextField source="phone"/>
            <UrlField source="website"/>
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

export const UsersNewEdit = () => (
    <Edit title="Create a Post">
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <DateField source="username"/>
            <EmailField source="email"/>
            <TextField source="address.street" label='Address' />
            <TextField source="phone"/>
            <UrlField source="website"/>
            <TextField source="company.name" label='Company'/>
        </SimpleForm>
    </Edit>
);

export const UsersNewCreate = () => (
    <Create title="Create a Post">
        <SimpleForm>
            <TextInput source="id" disabled/>
            <TextInput source="name" />
            <DateField source="username"/>
            <EmailField source="email"/>
            <TextField source="address.street" label='Address' />
            <TextField source="phone"/>
            <UrlField source="website"/>
            <TextField source="company.name" label='Company'/>
        </SimpleForm>
    </Create>
);