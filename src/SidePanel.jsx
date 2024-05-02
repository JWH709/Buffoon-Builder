import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

const SidePanel = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Blocks</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Jokers</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Art</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Patch</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SidePanel;
