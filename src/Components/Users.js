import React , {useState} from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

export default function Users() {

    const users = JSON.parse(localStorage.getItem('users'))
    const [ searchText, setSearchText] = useState('')

    const reset = () => {
        setSearchText('')
    }

    const header = (
        <div className="table-header">
            <Button type="button" label="Clear" className="p-button-outlined" icon="pi pi-filter-slash" onClick={reset} />
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText type="search" value={searchText} onChange={(e) => setSearchText(e.target.value )} placeholder="Search" />
            </span>
        </div>
    );
    return (
        <div>
              <DataTable value={users} paginator rows={5} header={header}  globalFilter={searchText} emptyMessage="No users found.">
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="username" header="Username"></Column>
            <Column field="phone" header="Phone"></Column>
            <Column field="dob" header="D.O.B"></Column>
        </DataTable>
        </div>
    )
}
