import React from "react";
import { Enterprise } from "../../models/enterprises";
import { enqueueSnackbar } from "notistack";

export interface enterpriseListProps {
    enterprises: Enterprise[];
}

function EnterpriseList(props: enterpriseListProps) {
    const { enterprises } = props;
    return (
        <>
            <button onClick={() => enqueueSnackbar("That was easy!")}>
                Show snackbar
            </button>
            <ul>
                {enterprises.map((enterprise) => (
                    <li key={enterprise.cnpjOrCpf}>{enterprise.name}</li>
                ))}
            </ul>
        </>
    );
}

export default EnterpriseList;
