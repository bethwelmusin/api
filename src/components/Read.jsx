import * as React from "react";
import { Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  const setData = (data) => {
    let { id, firstName, lastName } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
  };

  useEffect(() => {
    axios
      .get(`https://63b046a8f9a53fa2026540d8.mockapi.io/endpoint`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const onDelete = (id) => {
    axios
      .delete(`https://63b046a8f9a53fa2026540d8.mockapi.io/endpoint/${id}`)
      .then(() => {
        getData();
      });
  };
  const getData = () => {
    axios
      .get(`https://63b046a8f9a53fa2026540d8.mockapi.io/endpoint`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.firstName}</Table.Cell>
                <Table.Cell>{data.lastName}</Table.Cell>

                <Link to="/Update">
                  <Table.Cell>
                    <Box mt="">
                      <Button
                        type="submit"
                        variant="contained"
                        onClick={() => setData(data)}
                      >
                        edit
                      </Button>
                    </Box>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button variant="warning" onClick={() => onDelete(data.id)}>
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default Read;
