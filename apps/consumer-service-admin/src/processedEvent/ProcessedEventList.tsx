import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProcessedEventList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ProcessedEvents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="eventData" source="eventData" />
        <TextField label="eventType" source="eventType" />
        <TextField label="ID" source="id" />
        <TextField label="processedAt" source="processedAt" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};