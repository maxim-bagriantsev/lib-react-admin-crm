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
    DateInput, ReferenceField
} from 'react-admin';
import BookIcon from '@mui/icons-material/Book';
import MyUrlField from "./components/myUrlField";

export const PostIconPosts = BookIcon;

export const PostListPosts = () => (
        <List>
            <Datagrid rowClick='edit'>
                <ReferenceField source="userId" reference="users">
                    <TextField source="name"/>
                </ReferenceField>
                {/*<TextField source="id"/>*/}
                <DateField source="title"/>
                <TextField source="body"/>
                <EditButton/>

            </Datagrid>
        </List>
    )
;

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEditPosts = () => (
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

export const PostCreatePosts = () => (
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