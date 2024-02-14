import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap"

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    let response = await fetch("https://api.punkapi.com/v2/beers?page=1&per_page=10")
    response = await response.json();
    setData(response);
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Container>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="sync">
              {
                data.map((item, index) => {
                  return (
                    <motion.tr
                      initial={{
                        scale: 0,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.1,
                      }}
                    >
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.tagline}</td>
                      <td>{item.ph}</td>
                    </motion.tr>
                  )
                })
              }
            </AnimatePresence>
          </tbody>
        </Table>
      </Container>
    </>
  )
}

export default App
