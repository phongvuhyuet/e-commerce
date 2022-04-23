import { Button, Row, Col } from 'react-bootstrap'
function App() {
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <Row className="mx-0">
        <Button as={Col} variant="primary">
          Test bootstrap
        </Button>
      </Row>
    </div>
  )
}

export default App
