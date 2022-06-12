import React, { useState } from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import adminUsers from "../api/admin.api";
import jsonServerProvider from "ra-data-simple-rest";

const dataProvider = jsonServerProvider("http://localhost:7070/api/admin");

const AdminPage = (props) => {
  return (
    <Admin basename="/admin" dataProvider={dataProvider}>
      <Resource name="list" list={ListGuesser} />
      <Resource name="rates" list={ListGuesser} edit={EditGuesser} />
    </Admin>
  );
};

export default AdminPage;
