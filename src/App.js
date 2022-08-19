import React from 'react'

import {Admin, Resource} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import {PostListUsers, PostEditUsers, PostCreateUsers, PostIconUser} from './PostListUsers';
import {PostListPosts, PostEditPosts, PostCreatePosts, PostIconPosts} from './PostListPosts';
import {UsersNewCreate, UsersNewEdit, UsersNewList} from "./UsersEdit";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');


function App() {
    return (
        <div className="App">
            <Admin dataProvider={dataProvider}>
                <Resource
                    name="users"
                    list={PostListUsers}
                    edit={PostCreateUsers}
                    create={PostCreateUsers}
                    icon={PostIconUser}
                  />
                <Resource name="posts" list={PostListPosts} edit={PostEditPosts} create={PostCreatePosts} icon={PostIconPosts}/>
            </Admin>
        </div>
    );
}

export default App;
